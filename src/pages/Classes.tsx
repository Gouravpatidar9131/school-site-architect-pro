
import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Users, BookOpen } from 'lucide-react';

// Classes data
const classesData = {
  "Science": [
    {
      id: 1,
      title: "Advanced Biology",
      description: "This course explores complex biological systems at the molecular and cellular levels. Students engage in advanced laboratory work and research projects.",
      level: "Advanced",
      grades: "11-12",
      teacher: "Dr. Emily Rodriguez",
      schedule: "Mon, Wed, Fri 10:00 AM - 11:30 AM",
      location: "Science Lab 3",
      prerequisites: "Biology, Chemistry",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "DNA analysis and genetic engineering",
        "Advanced cellular processes",
        "Bioethics and current research topics",
        "Independent research project"
      ]
    },
    {
      id: 2,
      title: "Chemistry",
      description: "Students explore the fundamental principles of chemistry, including atomic structure, chemical bonding, and reactions through theoretical and laboratory work.",
      level: "Intermediate",
      grades: "10-11",
      teacher: "Dr. Michael Chang",
      schedule: "Tue, Thu 9:00 AM - 10:30 AM",
      location: "Science Lab 2",
      prerequisites: "Algebra I",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Chemical reactions and stoichiometry",
        "Atomic structure and periodic trends",
        "Acids, bases, and pH",
        "Laboratory safety and techniques"
      ]
    },
    {
      id: 3,
      title: "Physics",
      description: "This course covers classical mechanics, thermodynamics, waves, and electricity. Students develop strong problem-solving skills through mathematical analysis and hands-on experiments.",
      level: "Intermediate",
      grades: "11-12",
      teacher: "Mr. Samuel Green",
      schedule: "Mon, Wed, Fri 1:00 PM - 2:30 PM",
      location: "Science Lab 1",
      prerequisites: "Algebra II, Geometry",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Newton's laws of motion",
        "Energy and momentum conservation",
        "Wave phenomena and optics",
        "Circuits and magnetism"
      ]
    }
  ],
  "Mathematics": [
    {
      id: 4,
      title: "Calculus",
      description: "This course introduces the fundamental concepts of calculus including limits, derivatives, and integrals. Students apply these concepts to solve complex mathematical problems.",
      level: "Advanced",
      grades: "11-12",
      teacher: "Mr. James Wilson",
      schedule: "Mon, Wed, Fri 8:30 AM - 10:00 AM",
      location: "Math Building, Room 101",
      prerequisites: "Pre-Calculus, Trigonometry",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Limits and continuity",
        "Differentiation and its applications",
        "Integration techniques",
        "Series and sequences"
      ]
    },
    {
      id: 5,
      title: "Statistics",
      description: "Students learn to collect, analyze, and interpret data while developing critical statistical reasoning skills applicable to real-world situations.",
      level: "Intermediate",
      grades: "10-12",
      teacher: "Ms. Lisa Park",
      schedule: "Tue, Thu 11:00 AM - 12:30 PM",
      location: "Math Building, Room 203",
      prerequisites: "Algebra II",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Descriptive statistics and data visualization",
        "Probability distributions",
        "Hypothesis testing",
        "Regression analysis"
      ]
    },
    {
      id: 6,
      title: "Algebra II",
      description: "Building on the foundation of Algebra I, this course explores more complex algebraic concepts, functions, and introduces logarithmic and exponential relationships.",
      level: "Intermediate",
      grades: "9-10",
      teacher: "Mr. Thomas Reed",
      schedule: "Mon, Wed, Fri 11:00 AM - 12:30 PM",
      location: "Math Building, Room 105",
      prerequisites: "Algebra I, Geometry",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Linear and quadratic functions",
        "Polynomial and rational expressions",
        "Exponential and logarithmic functions",
        "Sequences and series"
      ]
    }
  ],
  "English": [
    {
      id: 7,
      title: "Literature & Composition",
      description: "This course develops critical reading, analytical writing, and discussion skills through the study of diverse literary works from various periods and cultures.",
      level: "Intermediate",
      grades: "10-11",
      teacher: "Ms. Sarah Chen",
      schedule: "Tue, Thu 1:00 PM - 2:30 PM",
      location: "Humanities Building, Room 302",
      prerequisites: "English 9",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Analysis of classic and contemporary literature",
        "Literary criticism and theory",
        "Argumentative and analytical essay writing",
        "Research paper methodology"
      ]
    },
    {
      id: 8,
      title: "Creative Writing",
      description: "Students explore various forms of creative expression including poetry, short fiction, memoir, and drama while developing their unique voice and style.",
      level: "Intermediate",
      grades: "9-12",
      teacher: "Mrs. Julia Davis",
      schedule: "Mon, Wed 2:00 PM - 3:30 PM",
      location: "Humanities Building, Room 304",
      prerequisites: "None",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Poetry and prose techniques",
        "Character development and dialogue",
        "Workshop-based peer review",
        "Publication opportunities"
      ]
    },
    {
      id: 9,
      title: "Public Speaking",
      description: "This course develops effective communication skills through various speaking formats, helping students become confident and persuasive communicators.",
      level: "Beginner",
      grades: "9-12",
      teacher: "Mr. Daniel Morris",
      schedule: "Fri 1:00 PM - 3:00 PM",
      location: "Humanities Building, Room 201",
      prerequisites: "None",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Speech preparation and delivery",
        "Persuasive techniques",
        "Debate and impromptu speaking",
        "Media presentation skills"
      ]
    }
  ],
  "Arts": [
    {
      id: 10,
      title: "Visual Arts & Design",
      description: "Students explore various artistic mediums and techniques while developing critical thinking skills and their own creative vision.",
      level: "Beginner to Advanced",
      grades: "9-12",
      teacher: "Mr. Robert Martinez",
      schedule: "Mon, Wed 3:00 PM - 4:30 PM",
      location: "Arts Center, Studio 1",
      prerequisites: "None",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Drawing and painting fundamentals",
        "Sculpture and 3D design",
        "Digital art techniques",
        "Portfolio development"
      ]
    },
    {
      id: 11,
      title: "Orchestra & Music Theory",
      description: "This course combines instrumental performance with the study of music theory, history, and composition for a comprehensive musical education.",
      level: "Intermediate to Advanced",
      grades: "9-12",
      teacher: "Dr. David Kim",
      schedule: "Tue, Thu 3:00 PM - 4:30 PM",
      location: "Arts Center, Music Hall",
      prerequisites: "Basic instrumental proficiency",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Ensemble performance techniques",
        "Music theory and composition",
        "Concert preparation",
        "Solo performance opportunities"
      ]
    },
    {
      id: 12,
      title: "Digital Media & Film",
      description: "Students learn the fundamentals of digital storytelling, film production, and multimedia design using industry-standard tools and techniques.",
      level: "Beginner to Intermediate",
      grades: "10-12",
      teacher: "Ms. Olivia West",
      schedule: "Mon, Wed 1:00 PM - 2:30 PM",
      location: "Arts Center, Digital Lab",
      prerequisites: "None",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Script writing and storyboarding",
        "Camera techniques and lighting",
        "Editing and post-production",
        "Film festival submissions"
      ]
    }
  ],
  "Other": [
    {
      id: 13,
      title: "Programming & Digital Design",
      description: "This course introduces students to programming concepts, web development, and digital design principles using various programming languages and tools.",
      level: "Beginner to Intermediate",
      grades: "9-12",
      teacher: "Mrs. Aisha Patel",
      schedule: "Tue, Thu 1:00 PM - 2:30 PM",
      location: "Tech Center, Lab 2",
      prerequisites: "None",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Programming fundamentals (JavaScript, Python)",
        "Web development (HTML, CSS)",
        "App design and development",
        "Coding projects and hackathons"
      ]
    },
    {
      id: 14,
      title: "Health & Fitness",
      description: "Students develop physical fitness, health awareness, and team skills through various sports and wellness activities.",
      level: "All levels",
      grades: "9-12",
      teacher: "Ms. Nicole Thompson",
      schedule: "Mon, Wed, Fri 2:00 PM - 3:00 PM",
      location: "Gymnasium & Outdoor Fields",
      prerequisites: "None",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Physical fitness and conditioning",
        "Team and individual sports",
        "Nutrition and wellness",
        "Goal setting and personal development"
      ]
    },
    {
      id: 15,
      title: "World History & Government",
      description: "This course examines major historical periods, cultural developments, and political systems that have shaped our world from ancient civilizations to modern times.",
      level: "Intermediate",
      grades: "10-11",
      teacher: "Dr. Marcus Johnson",
      schedule: "Mon, Wed, Fri 9:00 AM - 10:30 AM",
      location: "Humanities Building, Room 105",
      prerequisites: "None",
      image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Ancient and medieval civilizations",
        "Modern world history",
        "Political systems and governance",
        "Historical research methods"
      ]
    }
  ]
};

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const categories = Object.keys(classesData);
  
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Our Classes" 
        subtitle="Discover our diverse academic offerings"
        backgroundImage="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title mx-auto">Academic Excellence</h2>
            <p className="subtitle">
              Comprehensive education for the whole student
            </p>
            <p>
              At Oakridge Academy, we offer a rich and diverse curriculum designed to challenge, 
              inspire, and prepare students for success in college and beyond. Our comprehensive 
              program emphasizes critical thinking, creativity, collaboration, and communication 
              skills across all subject areas.
            </p>
            <p>
              Our classes are taught by expert faculty members who bring passion, experience, and 
              innovative teaching methods to the classroom. Small class sizes ensure personalized 
              attention and create an environment where students feel comfortable exploring new 
              ideas and taking intellectual risks.
            </p>
            <p>
              Beyond core academic subjects, we offer numerous electives and advanced courses 
              that allow students to pursue their individual interests and talents, fostering a 
              lifelong love of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section bg-school-light">
        <div className="container-custom">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-school-primary data-[state=active]:text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classesData[category].map((classItem) => (
                    <div
                      key={classItem.id}
                      className="card group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedClass(classItem)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={classItem.image}
                          alt={classItem.title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-0 right-0 bg-school-primary text-white py-1 px-3 text-sm font-medium">
                          {classItem.level}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-school-dark mb-1">{classItem.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">Grades {classItem.grades} | Teacher: {classItem.teacher}</p>
                        <div className="flex items-center mb-3 text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-school-primary" />
                          <span>{classItem.schedule}</span>
                        </div>
                        <p className="text-gray-700 line-clamp-3 mb-3">
                          {classItem.description}
                        </p>
                        <button
                          className="text-school-primary hover:text-school-secondary transition-colors text-sm font-medium flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedClass(classItem);
                          }}
                        >
                          View Class Details
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Class Detail Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={() => setSelectedClass(null)}>
          <div 
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedClass.image}
                alt={selectedClass.title}
                className="w-full h-full object-cover object-center"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
                onClick={() => setSelectedClass(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute top-4 left-4 bg-school-primary text-white py-1 px-3 text-sm font-medium rounded">
                {selectedClass.level}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-school-dark mb-2">{selectedClass.title}</h3>
              <p className="text-gray-700 mb-6">{selectedClass.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-school-primary" />
                    Class Details
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium w-24">Grades:</span>
                      <span>{selectedClass.grades}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-24">Teacher:</span>
                      <span>{selectedClass.teacher}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-24">Location:</span>
                      <span>{selectedClass.location}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-24">Prerequisites:</span>
                      <span>{selectedClass.prerequisites}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-school-primary" />
                    Schedule
                  </h4>
                  <p className="text-gray-700 mb-4">{selectedClass.schedule}</p>
                  
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-school-primary" />
                    Course Highlights
                  </h4>
                  <ul className="space-y-1">
                    {selectedClass.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                <button 
                  className="btn-primary"
                  onClick={() => setSelectedClass(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Program Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Program Overview</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Our academic programs are designed to prepare students for success in college and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-school-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-school-dark">Middle School (Grades 6-8)</h3>
              <p className="text-gray-700 mb-4">
                Our middle school program focuses on building core academic skills while allowing 
                students to explore their interests through electives. The curriculum is designed 
                to facilitate the transition from elementary to high school education.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>Core subjects: English, Mathematics, Science, Social Studies</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>Foreign language introduction (Spanish or French)</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>Arts, music, and physical education</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>Technology and digital literacy</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>Advisory program for social-emotional development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-school-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-school-dark">High School (Grades 9-12)</h3>
              <p className="text-gray-700 mb-4">
                Our college-preparatory high school curriculum is rigorous and comprehensive, 
                featuring honors and Advanced Placement (AP) courses across all subject areas. 
                Students benefit from personalized college counseling throughout their high school journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>Comprehensive core curriculum with honors options</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>15+ AP courses across all disciplines</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>Diverse electives in arts, technology, and specialized subjects</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>Advanced foreign language study</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-school-accent flex-shrink-0 mt-1" />
                  <span>College preparatory seminars and personalized counseling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
