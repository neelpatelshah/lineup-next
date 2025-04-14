import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/mock-data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, MapPinIcon, Clock, Search } from "lucide-react";

export default function DiscoveryPage() {
  const categories = [...new Set(events.map((event) => event.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-2xl font-bold">
            Lineup
          </Link>
          <Button variant="outline" size="sm">
            <Link href="/">Home</Link>
          </Button>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">
          Discover Events
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Date</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="weekend">This Weekend</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3">
                  {event.category}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="font-medium">{event.price}</span>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
