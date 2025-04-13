
import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Mail, Phone, ExternalLink } from 'lucide-react';

// Teacher data
const teachersData = [
  {
    id: 1,
    name: "Dr. Emily Rodriguez",
    position: "Science Department Chair",
    subject: "Advanced Biology",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Dr. Rodriguez holds a Ph.D. in Molecular Biology from Stanford University and has been teaching at Oakridge for 12 years. She specializes in genetics and cellular biology, and has published numerous research papers in renowned scientific journals.",
    email: "e.rodriguez@oakridge.edu",
    phone: "(555) 123-4567",
    experience: "15+ years",
    education: "Ph.D. Molecular Biology, Stanford University",
    achievements: "National Science Teacher of the Year, 2021"
  },
  {
    id: 2,
    name: "Mr. James Wilson",
    position: "Mathematics Teacher",
    subject: "Calculus & Statistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Mr. Wilson has a passion for making mathematics accessible and engaging for all students. With a background in both pure mathematics and education, he creates a classroom environment where complex concepts are broken down into understandable components.",
    email: "j.wilson@oakridge.edu",
    phone: "(555) 123-4568",
    experience: "10+ years",
    education: "M.S. Mathematics, MIT",
    achievements: "Published author of 'Making Mathematics Matter'"
  },
  {
    id: 3,
    name: "Ms. Sarah Chen",
    position: "English Department Chair",
    subject: "Literature & Composition",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Ms. Chen brings literature to life in her classroom. A published novelist and former editor, she helps students develop their critical thinking skills through analysis of classic and contemporary texts while fostering their own creative writing abilities.",
    email: "s.chen@oakridge.edu",
    phone: "(555) 123-4569",
    experience: "12+ years",
    education: "M.F.A. Creative Writing, Columbia University",
    achievements: "Author of award-winning novel 'Echoes of Tomorrow'"
  },
  {
    id: 4,
    name: "Dr. Marcus Johnson",
    position: "History Teacher",
    subject: "World History & Government",
    image: "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Dr. Johnson believes that understanding history is crucial for shaping our future. His interactive teaching style incorporates primary sources, debate, and multimedia presentations to help students connect historical events to contemporary issues.",
    email: "m.johnson@oakridge.edu",
    phone: "(555) 123-4570",
    experience: "18+ years",
    education: "Ph.D. History, Yale University",
    achievements: "Recipient of the Presidential Scholar Teacher Award"
  },
  {
    id: 5,
    name: "Mrs. Aisha Patel",
    position: "Computer Science Teacher",
    subject: "Programming & Digital Design",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Mrs. Patel transitioned from a successful career as a software engineer to teaching, bringing real-world experience to the classroom. She founded the school's robotics team and coding club, which have won several regional competitions.",
    email: "a.patel@oakridge.edu",
    phone: "(555) 123-4571",
    experience: "8+ years",
    education: "M.S. Computer Science, Carnegie Mellon University",
    achievements: "Former Lead Developer at TechGiant Inc."
  },
  {
    id: 6,
    name: "Mr. Robert Martinez",
    position: "Arts Department Chair",
    subject: "Visual Arts & Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Mr. Martinez is an accomplished artist whose work has been featured in galleries across the country. He encourages students to explore various mediums and techniques while developing their unique artistic voice and perspective.",
    email: "r.martinez@oakridge.edu",
    phone: "(555) 123-4572",
    experience: "14+ years",
    education: "M.F.A. Fine Arts, Rhode Island School of Design",
    achievements: "Featured artist at the National Gallery of Modern Art"
  },
  {
    id: 7,
    name: "Ms. Nicole Thompson",
    position: "Physical Education Teacher",
    subject: "Health & Fitness",
    image: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Ms. Thompson is a former professional athlete who brings energy and expertise to Oakridge's physical education program. She emphasizes the importance of lifelong fitness habits and the connection between physical health and academic performance.",
    email: "n.thompson@oakridge.edu",
    phone: "(555) 123-4573",
    experience: "9+ years",
    education: "M.S. Exercise Science, University of Michigan",
    achievements: "Former Olympic athlete in Track & Field"
  },
  {
    id: 8,
    name: "Dr. David Kim",
    position: "Music Teacher",
    subject: "Orchestra & Music Theory",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Dr. Kim is a classically trained musician who has performed with symphonies worldwide. Under his direction, the school orchestra has received numerous accolades and his students regularly earn scholarships to prestigious music conservatories.",
    email: "d.kim@oakridge.edu",
    phone: "(555) 123-4574",
    experience: "20+ years",
    education: "D.M.A. Musical Arts, Juilliard School",
    achievements: "Conductor of the Youth Symphony Orchestra"
  }
];

// Department filter options
const departments = [
  "All Departments",
  "Science",
  "Mathematics",
  "English",
  "History",
  "Computer Science",
  "Arts",
  "Physical Education",
  "Music"
];

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [filter, setFilter] = useState("All Departments");
  
  const filteredTeachers = teachersData.filter(teacher => {
    if (filter === "All Departments") return true;
    return teacher.subject.includes(filter) || teacher.position.includes(filter);
  });

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Our Teachers" 
        subtitle="Meet the dedicated educators shaping the minds of tomorrow"
        backgroundImage="https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title mx-auto">Exceptional Educators</h2>
            <p className="subtitle">
              Our faculty is the heart of Oakridge Academy
            </p>
            <p>
              At Oakridge Academy, we take pride in our exceptional faculty of dedicated educators who 
              bring diverse expertise, passion, and innovative teaching methods to our classrooms. Our 
              teachers are not just instructors but mentors who inspire, challenge, and support students 
              on their educational journey.
            </p>
            <p>
              Many of our faculty members hold advanced degrees in their fields and bring real-world 
              experience that enriches their teaching. They regularly participate in professional 
              development to stay current with the latest educational research and practices, ensuring 
              our students receive the highest quality education.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="section bg-school-light">
        <div className="container-custom">
          {/* Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === dept
                    ? 'bg-school-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="card group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedTeacher(teacher)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{teacher.subject}</p>
                      <div className="flex items-center text-sm mt-1">
                        <Mail className="h-4 w-4 mr-1" />
                        <span className="truncate">{teacher.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-school-dark">{teacher.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{teacher.position}</p>
                  <p className="text-gray-700 line-clamp-2">
                    {teacher.bio.substring(0, 100)}...
                  </p>
                  <button
                    className="mt-3 text-school-primary hover:text-school-secondary transition-colors text-sm font-medium flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTeacher(teacher);
                    }}
                  >
                    View Profile
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={() => setSelectedTeacher(null)}>
          <div 
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-full h-full object-cover object-center"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
                  onClick={() => setSelectedTeacher(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-school-dark mb-1">{selectedTeacher.name}</h3>
                <p className="text-gray-600 mb-1">{selectedTeacher.position}</p>
                <p className="text-school-primary font-medium mb-4">{selectedTeacher.subject}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">About</h4>
                  <p className="text-gray-700">{selectedTeacher.bio}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Contact</h4>
                    <div className="flex items-center text-gray-700 mb-2">
                      <Mail className="h-4 w-4 mr-2 text-school-primary" />
                      <span>{selectedTeacher.email}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-4 w-4 mr-2 text-school-primary" />
                      <span>{selectedTeacher.phone}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Details</h4>
                    <p className="text-gray-700 mb-1"><span className="font-medium">Experience:</span> {selectedTeacher.experience}</p>
                    <p className="text-gray-700 mb-1"><span className="font-medium">Education:</span> {selectedTeacher.education}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                  <p className="text-gray-700">{selectedTeacher.achievements}</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button 
                    className="btn-primary w-full"
                    onClick={() => setSelectedTeacher(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;
