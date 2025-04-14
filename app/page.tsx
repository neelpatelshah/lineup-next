import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight">Lineup</h1>
        <p className="text-lg text-muted-foreground max-w-md text-center sm:text-left">
          Discover and explore events happening in your area
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button asChild size="lg">
            <Link href="/discovery">Browse Events</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a
              href="https://github.com/yourusername/lineup-next"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Lineup. All rights reserved.</p>
      </footer>
    </div>
  );
}
