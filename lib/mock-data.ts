export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  price: string;
  organizer: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival",
    description:
      "A three-day music festival featuring top artists from around the world.",
    date: "2023-07-15",
    time: "12:00 PM - 11:00 PM",
    location: "Central Park, New York",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Music",
    price: "$75",
    organizer: "City Events",
  },
  {
    id: "2",
    title: "Tech Conference 2023",
    description:
      "Join industry leaders for the latest innovations in technology.",
    date: "2023-08-10",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, San Francisco",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Technology",
    price: "$120",
    organizer: "TechCorp",
  },
  {
    id: "3",
    title: "Food & Wine Festival",
    description: "Sample cuisines and wines from top chefs and vineyards.",
    date: "2023-09-05",
    time: "3:00 PM - 9:00 PM",
    location: "Waterfront Park, Seattle",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Food & Drink",
    price: "$45",
    organizer: "Culinary Arts Association",
  },
  {
    id: "4",
    title: "Art Exhibition: Modern Perspectives",
    description: "A showcase of contemporary art from emerging artists.",
    date: "2023-07-25",
    time: "10:00 AM - 6:00 PM",
    location: "Metropolitan Museum, Chicago",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Art",
    price: "$18",
    organizer: "Arts Council",
  },
  {
    id: "5",
    title: "Marathon for Charity",
    description: "Run for a cause in this annual charity marathon.",
    date: "2023-08-20",
    time: "7:00 AM - 12:00 PM",
    location: "Downtown, Boston",
    image:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    category: "Sports",
    price: "$35",
    organizer: "Health Foundation",
  },
  {
    id: "6",
    title: "Comedy Night",
    description: "An evening of stand-up comedy featuring top comedians.",
    date: "2023-07-30",
    time: "8:00 PM - 10:30 PM",
    location: "Laugh Factory, Los Angeles",
    image:
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    category: "Entertainment",
    price: "$25",
    organizer: "Comedy Club",
  },
];
