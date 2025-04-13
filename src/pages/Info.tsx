import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Calendar, Clock, MapPin, Users, Download, ExternalLink, Mail } from 'lucide-react';

// Event data
const events = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "April 25, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "School Gymnasium",
    description: "Students will showcase their scientific research and experiments across various disciplines. The event includes judging, awards, and public viewing sessions.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Academic",
    featured: true,
    details: {
      organizer: "Science Department",
      attendees: "Students, Parents, Community",
      contactEmail: "sciencefair@oakridge.edu",
      schedule: [
        { time: "9:00 AM - 10:00 AM", activity: "Setup" },
        { time: "10:00 AM - 12:30 PM", activity: "Judging" },
        { time: "12:30 PM - 1:30 PM", activity: "Lunch Break" },
        { time: "1:30 PM - 2:30 PM", activity: "Public Viewing" },
        { time: "2:30 PM - 3:00 PM", activity: "Awards Ceremony" }
      ]
    }
  },
  {
    id: 2,
    title: "Spring Music Concert",
    date: "May 10, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Auditorium",
    description: "Join us for an evening of musical performances by our talented students, featuring selections from the orchestra, choir, and jazz ensemble.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Arts",
    featured: true,
    details: {
      organizer: "Music Department",
      attendees: "Students, Parents, Community",
      contactEmail: "music@oakridge.edu",
      schedule: [
        { time: "7:00 PM - 7:45 PM", activity: "Orchestra Performance" },
        { time: "7:45 PM - 8:00 PM", activity: "Intermission" },
        { time: "8:00 PM - 8:30 PM", activity: "Choir Performance" },
        { time: "8:30 PM - 9:00 PM", activity: "Jazz Ensemble" }
      ]
    }
  },
  {
    id: 3,
    title: "Parent-Teacher Conferences",
    date: "May 15-16, 2025",
    time: "3:30 PM - 8:00 PM",
    location: "Classrooms",
    description: "Schedule individual meetings with your child's teachers to discuss academic progress, strengths, and areas for growth.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Academic",
    featured: false,
    details: {
      organizer: "School Administration",
      attendees: "Parents, Teachers",
      contactEmail: "ptconferences@oakridge.edu",
      schedule: [
        { time: "3:30 PM - 8:00 PM", activity: "Individual Conferences (15-minute slots)" }
      ],
      notes: "Appointment scheduling will open two weeks before the event. Please book early to secure your preferred time slots."
    }
  },
  {
    id: 4,
    title: "College Information Night",
    date: "May 20, 2025",
    time: "6:00 PM - 8:30 PM",
    location: "Auditorium",
    description: "Representatives from various colleges and universities will present information about their institutions and answer questions about the application process.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "College Prep",
    featured: true,
    details: {
      organizer: "College Counseling Department",
      attendees: "High School Students, Parents",
      contactEmail: "collegecounseling@oakridge.edu",
      schedule: [
        { time: "6:00 PM - 6:30 PM", activity: "Introduction and Overview" },
        { time: "6:30 PM - 7:30 PM", activity: "College Representative Presentations" },
        { time: "7:30 PM - 8:30 PM", activity: "College Fair and Individual Q&A" }
      ]
    }
  },
  {
    id: 5,
    title: "Athletic Awards Banquet",
    date: "May 25, 2025",
    time: "6:30 PM - 9:00 PM",
    location: "School Cafeteria",
    description: "Annual celebration honoring the achievements of our student-athletes across all sports programs.",
    image: "https://images.unsplash.com/photo-1569183091671-696402586b9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Athletics",
    featured: false,
    details: {
      organizer: "Athletic Department",
      attendees: "Student-Athletes, Coaches, Parents",
      contactEmail: "athletics@oakridge.edu",
      schedule: [
        { time: "6:30 PM - 7:00 PM", activity: "Arrival and Seating" },
        { time: "7:00 PM - 7:30 PM", activity: "Dinner" },
        { time: "7:30 PM - 8:45 PM", activity: "Awards Presentations" },
        { time: "8:45 PM - 9:00 PM", activity: "Closing Remarks" }
      ],
      notes: "Tickets must be purchased in advance. Business casual attire requested."
    }
  },
  {
    id: 6,
    title: "Field Day",
    date: "June 2, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Athletic Fields",
    description: "A day of outdoor activities, games, and friendly competition for students of all grade levels.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Social",
    featured: false,
    details: {
      organizer: "Physical Education Department",
      attendees: "All Students, Faculty",
      contactEmail: "pe@oakridge.edu",
      schedule: [
        { time: "9:00 AM - 9:30 AM", activity: "Opening Assembly" },
        { time: "9:30 AM - 11:30 AM", activity: "Morning Activities" },
        { time: "11:30 AM - 12:30 PM", activity: "Lunch" },
        { time: "12:30 PM - 1:45 PM", activity: "Afternoon Activities" },
        { time: "1:45 PM - 2:00 PM", activity: "Awards and Closing" }
      ],
      notes: "Students should wear comfortable clothes, athletic shoes, and bring sunscreen and water bottles."
    }
  },
  {
    id: 7,
    title: "Graduation Ceremony",
    date: "June 10, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Main Courtyard",
    description: "Commencement ceremony celebrating the achievements of the Class of 2025 as they prepare for their next chapters.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Ceremony",
    featured: true,
    details: {
      organizer: "School Administration",
      attendees: "Seniors, Families, Faculty",
      contactEmail: "graduation@oakridge.edu",
      schedule: [
        { time: "4:00 PM - 4:45 PM", activity: "Graduate Check-in" },
        { time: "5:00 PM - 5:15 PM", activity: "Processional" },
        { time: "5:15 PM - 6:30 PM", activity: "Ceremony and Speeches" },
        { time: "6:30 PM - 6:45 PM", activity: "Diploma Presentation" },
        { time: "6:45 PM - 7:00 PM", activity: "Recessional" },
        { time: "7:00 PM - 8:00 PM", activity: "Reception" }
      ],
      notes: "Each graduate receives 5 tickets for guests. Additional tickets may be requested if available."
    }
  },
  {
    id: 8,
    title: "Summer Theater Workshop",
    date: "June 15-30, 2025",
    time: "9:00 AM - 3:00 PM (Weekdays)",
    location: "Drama Studio",
    description: "Two-week intensive program for students interested in acting, directing, and technical theater, culminating in a showcase performance.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Arts",
    featured: false,
    details: {
      organizer: "Drama Department",
      attendees: "Interested Students (Grades 8-12)",
      contactEmail: "drama@oakridge.edu",
      schedule: [
        { time: "9:00 AM - 10:30 AM", activity: "Acting Fundamentals" },
        { time: "10:45 AM - 12:15 PM", activity: "Technical Theater" },
        { time: "12:15 PM - 1:00 PM", activity: "Lunch" },
        { time: "1:00 PM - 3:00 PM", activity: "Rehearsals" }
      ],
      notes: "Registration required. Limited to 25 participants. Final showcase on June 30th at 7:00 PM."
    }
  }
];

// School functions data
const functions = [
  {
    id: 1,
    title: "School Board Meetings",
    description: "Monthly meetings to discuss school policies, budget, and other administrative matters. Open to the public with an opportunity for community input.",
    schedule: "Third Tuesday of each month, 7:00 PM - 9:00 PM",
    location: "Administration Building, Conference Room A",
    contactPerson: "Dr. Jennifer Morris, Board Secretary",
    email: "boardsecretary@oakridge.edu",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Administrative"
  },
  {
    id: 2,
    title: "Parent-Teacher Association",
    description: "Regular meetings and events to foster communication between parents and teachers and support school programs through volunteer efforts and fundraising.",
    schedule: "First Thursday of each month, 6:30 PM - 8:00 PM",
    location: "School Library",
    contactPerson: "Mrs. Sarah Johnson, PTA President",
    email: "pta@oakridge.edu",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Community"
  },
  {
    id: 3,
    title: "Student Council",
    description: "Student government organization that plans school events, addresses student concerns, and develops leadership skills.",
    schedule: "Every Wednesday, 3:30 PM - 4:30 PM",
    location: "Room 203",
    contactPerson: "Ms. Amanda Peters, Faculty Advisor",
    email: "studentcouncil@oakridge.edu",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Student"
  },
  {
    id: 4,
    title: "Tutoring Program",
    description: "Academic support services provided by faculty and peer tutors for students needing additional help in various subjects.",
    schedule: "Monday-Thursday, 3:30 PM - 5:00 PM",
    location: "Learning Resource Center",
    contactPerson: "Mr. David Wilson, Academic Support Coordinator",
    email: "tutoring@oakridge.edu",
    image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Academic"
  },
  {
    id: 5,
    title: "Athletic Booster Club",
    description: "Parent organization supporting school athletic programs through fundraising, event coordination, and volunteer activities.",
    schedule: "Second Monday of each month, 7:00 PM - 8:30 PM",
    location: "Athletics Office Conference Room",
    contactPerson: "Mr. Robert Thompson, Booster Club President",
    email: "boosters@oakridge.edu",
    image: "https://images.unsplash.com/photo-1569183091671-696402586b9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Athletics"
  },
  {
    id: 6,
    title: "Arts Foundation",
    description: "Organization dedicated to enhancing arts education through program support, guest artists, and special performances.",
    schedule: "Quarterly meetings, typically on the last Thursday of the quarter, 6:00 PM - 7:30 PM",
    location: "Arts Center, Room 101",
    contactPerson: "Ms. Elizabeth Chen, Foundation Director",
    email: "artsfoundation@oakridge.edu",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Arts"
  }
];

// Calendar data for demo purposes
const calendarData = {
  "April 2025": [
    { date: "April 10", event: "Annual Science Fair" },
    { date: "April 15-17", event: "Standardized Testing (Grades 3-8)" },
    { date: "April 20", event: "Faculty Development Day (No School)" },
    { date: "April 25", event: "Spring Dance (Grades 9-12)" }
  ],
  "May 2025": [
    { date: "May 1-2", event: "Spring Drama Production" },
    { date: "May 10", event: "Spring Music Concert" },
    { date: "May 15-16", event: "Parent-Teacher Conferences" },
    { date: "May 20", event: "College Information Night" },
    { date: "May 25", event: "Athletic Awards Banquet" },
    { date: "May 30", event: "Memorial Day (No School)" }
  ],
  "June 2025": [
    { date: "June 2", event: "Field Day" },
    { date: "June 5", event: "Senior Awards Night" },
    { date: "June 8", event: "Baccalaureate Service" },
    { date: "June 10", event: "Graduation Ceremony" },
    { date: "June 12", event: "Last Day of School" },
    { date: "June 15-30", event: "Summer Theater Workshop" }
  ]
};

const Info = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedFunction, setSelectedFunction] = useState(null);
  
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Information & Updates" 
        subtitle="Stay informed about events, functions, and important dates"
        backgroundImage="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Navigation Tabs */}
      <section className="bg-white border-b">
        <div className="container-custom py-4">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              <TabsTrigger value="functions">School Functions</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>
            
            {/* Events Tab Content */}
            <TabsContent value="events" className="mt-8">
              <div className="mb-8">
                <h2 className="section-title">Upcoming Events</h2>
                <p className="subtitle">Join us for these exciting school events</p>
              </div>
              
              {/* Featured Events */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-school-accent" />
                  Featured Events
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.filter(event => event.featured).map((event) => (
                    <div 
                      key={event.id} 
                      className="card group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-0 right-0 bg-school-accent text-white py-1 px-3 text-sm font-medium">
                          {event.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-school-primary transition-colors">{event.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="h-4 w-4 mr-2 text-school-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Clock className="h-4 w-4 mr-2 text-school-primary" />
                          <span>{event.time}</span>
                        </div>
                        <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
                        <button
                          className="text-school-primary hover:text-school-secondary transition-colors text-sm font-medium flex items-center mt-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEvent(event);
                          }}
                        >
                          View Details
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* All Events */}
              <div>
                <h3 className="text-xl font-bold mb-6">All Upcoming Events</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {events.filter(event => !event.featured).map((event) => (
                    <div 
                      key={event.id} 
                      className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-20 h-20 object-cover rounded-md mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-bold mb-1 hover:text-school-primary transition-colors">{event.title}</h3>
                          <div className="text-sm text-gray-600 flex items-center mb-1">
                            <Calendar className="h-3 w-3 mr-1 text-school-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="text-sm text-gray-600 flex items-center">
                            <Clock className="h-3 w-3 mr-1 text-school-primary" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Functions Tab Content */}
            <TabsContent value="functions" className="mt-8">
              <div className="mb-8">
                <h2 className="section-title">School Functions</h2>
                <p className="subtitle">Ongoing programs and activities at Oakridge Academy</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {functions.map((func) => (
                  <div 
                    key={func.id} 
                    className="card hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedFunction(func)}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={func.image}
                        alt={func.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-school-primary text-white py-1 px-3 text-sm font-medium">
                        {func.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{func.title}</h3>
                      <p className="text-gray-700 mb-4 line-clamp-2">{func.description}</p>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock className="h-4 w-4 mr-2 text-school-primary flex-shrink-0" />
                        <span className="text-sm">{func.schedule}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-school-primary flex-shrink-0" />
                        <span className="text-sm">{func.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Calendar Tab Content */}
            <TabsContent value="calendar" className="mt-8">
              <div className="mb-8">
                <h2 className="section-title">School Calendar</h2>
                <p className="subtitle">Important dates for the current academic year</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {Object.entries(calendarData).map(([month, events]) => (
                  <div key={month} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-school-primary text-white p-4 text-center">
                      <h3 className="text-xl font-bold">{month}</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        {events.map((event, index) => (
                          <li key={index} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                            <div className="font-medium text-school-dark">{event.date}</div>
                            <div className="text-gray-600">{event.event}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-school-light p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Need the Full Calendar?</h3>
                <p className="text-gray-700 mb-6">
                  Download the complete academic calendar with all events, holidays, and important dates.
                </p>
                <button className="btn-primary flex items-center mx-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Calendar
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={() => setSelectedEvent(null)}>
          <div 
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
                onClick={() => setSelectedEvent(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute top-4 left-4 bg-school-accent text-white py-1 px-3 text-sm font-medium rounded">
                {selectedEvent.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-school-dark mb-4">{selectedEvent.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 mr-3 text-school-primary" />
                    <div>
                      <h4 className="font-medium">Date</h4>
                      <p>{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 mr-3 text-school-primary" />
                    <div>
                      <h4 className="font-medium">Time</h4>
                      <p>{selectedEvent.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-school-primary" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p>{selectedEvent.location}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start mb-3">
                    <Users className="h-5 w-5 mr-3 text-school-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Organizer</h4>
                      <p>{selectedEvent.details.organizer}</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-3 text-school-primary mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Attendees</h4>
                      <p>{selectedEvent.details.attendees}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-school-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Contact Email</h4>
                      <p>{selectedEvent.details.contactEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">Description</h4>
                <p className="text-gray-700">{selectedEvent.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">Schedule</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {selectedEvent.details.schedule.map((item, index) => (
                      <li key={index} className="flex">
                        <span className="font-medium w-36 flex-shrink-0">{item.time}</span>
                        <span>{item.activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {selectedEvent.details.notes && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Notes</h4>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 text-amber-700">
                    {selectedEvent.details.notes}
                  </div>
                </div>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                <button 
                  className="btn-primary"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Function Detail Modal */}
      {selectedFunction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={() => setSelectedFunction(null)}>
          <div 
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <img
                src={selectedFunction.image}
                alt={selectedFunction.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
                onClick={() => setSelectedFunction(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute top-4 left-4 bg-school-primary text-white py-1 px-3 text-sm font-medium rounded">
                {selectedFunction.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-school-dark mb-4">{selectedFunction.title}</h3>
              
              <div className="mb-6">
                <p className="text-gray-700">{selectedFunction.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-school-primary" />
                    Schedule
                  </h4>
                  <p>{selectedFunction.schedule}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-school-primary" />
                    Location
                  </h4>
                  <p>{selectedFunction.location}</p>
                </div>
              </div>
              
              <div className="bg-school-light p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">Contact Information</h4>
                <p className="mb-1"><span className="font-medium">Contact Person:</span> {selectedFunction.contactPerson}</p>
                <p><span className="font-medium">Email:</span> {selectedFunction.email}</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                <button 
                  className="btn-primary"
                  onClick={() => setSelectedFunction(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
