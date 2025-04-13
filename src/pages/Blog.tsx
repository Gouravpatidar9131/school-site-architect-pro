
import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Annual Science Fair Showcases Student Innovation",
    excerpt: "This year's Science Fair featured over 50 projects from students across all grade levels, demonstrating remarkable creativity and scientific understanding.",
    content: `
      <p>The Oakridge Academy Annual Science Fair was held last week in the school gymnasium, showcasing the innovative research and experiments conducted by our talented students. With over 50 projects presented, the event was a resounding success and highlighted the depth of scientific inquiry happening in our classrooms.</p>
      
      <p>Projects ranged from environmental studies and renewable energy to biochemistry and physics. Particularly impressive was junior Sarah Johnson's research on local water quality, which earned her the top prize. "I wanted to investigate something that impacts our community directly," Sarah explained. "The data I collected showed some concerning patterns that I hope can lead to positive changes."</p>
      
      <p>The Science Department faculty expressed pride in the students' achievements. "What impresses me most is not just the quality of the projects, but the students' ability to communicate complex scientific concepts," said Dr. Emily Rodriguez, Science Department Chair. "They're developing skills that will serve them well beyond the classroom."</p>
      
      <p>Community members, including representatives from local science-focused companies, served as judges and mentors. Many commented on the professional quality of the presentations and the depth of understanding demonstrated by the students.</p>
      
      <p>The Science Fair culminated in an awards ceremony where students received recognition for their hard work. Beyond the competitive aspect, the event served as a celebration of scientific inquiry and the joy of discovery that Oakridge works to instill in all students.</p>
    `,
    author: "Admin Staff",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    category: "Events",
    tags: ["Science", "Student Achievement", "Academic"]
  },
  {
    id: 2,
    title: "Oakridge Debate Team Reaches National Championships",
    excerpt: "After an outstanding performance at the regional competition, our debate team has qualified for the National Championships for the first time in school history.",
    content: `
      <p>The Oakridge Academy Debate Team has made school history by qualifying for the National High School Debate Championships after their exceptional performance at last month's regional competition. The team, consisting of six students from grades 10-12, demonstrated remarkable rhetorical skills, critical thinking, and teamwork throughout the competition.</p>
      
      <p>"This achievement represents hundreds of hours of preparation and practice," said Ms. Amelia Carter, the team's coach and English faculty member. "These students have shown extraordinary dedication, often staying late after school and meeting on weekends to research topics and refine their arguments."</p>
      
      <p>Team captain Michael Patel attributes their success to the supportive environment. "We push each other to be better, but we're also there to help when someone struggles. That balance of challenge and support has been essential to our growth."</p>
      
      <p>The team excelled in both prepared topics and impromptu debates, with judges consistently praising their well-researched arguments, logical reasoning, and persuasive delivery. Their performance earned them not only a spot in the national championship but also individual speaker awards for three team members.</p>
      
      <p>The National Championships will be held in Washington, D.C. in June, giving the team two months to prepare. "We're already diving into research and practice rounds," said sophomore team member Emma Rodriguez. "It's a lot of work, but knowing we're representing Oakridge on the national stage makes it exciting."</p>
      
      <p>The school is organizing fundraising efforts to support the team's travel expenses and is planning a community showcase where the debaters will demonstrate their skills before heading to the championships.</p>
    `,
    author: "Sarah Chen",
    date: "April 8, 2025",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    category: "Student Achievement",
    tags: ["Debate", "Competition", "Academic"]
  },
  {
    id: 3,
    title: "New STEM Learning Center Opening Next Month",
    excerpt: "Oakridge Academy is excited to announce the opening of our state-of-the-art STEM Learning Center, providing students with cutting-edge resources and technology.",
    content: `
      <p>After months of construction and preparation, Oakridge Academy is proud to announce that our new STEM Learning Center will officially open next month. The 5,000-square-foot facility represents a significant investment in our science, technology, engineering, and mathematics programs and will provide students with access to cutting-edge resources and equipment.</p>
      
      <p>The center features specialized labs for robotics, computer science, and engineering design, along with flexible learning spaces that can be reconfigured for different projects and collaborative work. Advanced technology, including 3D printers, laser cutters, and professional-grade scientific equipment, will give students hands-on experience with tools used in industry and research settings.</p>
      
      <p>"This facility will transform how we teach STEM subjects," said Principal David Anderson. "It's designed not just to support our existing curriculum, but to inspire new interdisciplinary projects and student-led innovation."</p>
      
      <p>The center's development was supported by a major capital campaign, with significant contributions from alumni, parents, and local technology companies. Several corporate partners have also committed to ongoing support through mentorship programs and guest lectures from industry professionals.</p>
      
      <p>Students have already expressed enthusiasm about the new opportunities. "I'm especially excited about the robotics lab," said junior Alex Washington. "Having dedicated space and equipment will help our robotics team take our designs to the next level."</p>
      
      <p>Faculty members have been training on the new equipment and developing curriculum that makes full use of the center's capabilities. "The possibilities are endless," said Mrs. Aisha Patel, Computer Science teacher. "This facility will help us prepare students for careers that may not even exist yet by fostering their creativity, problem-solving skills, and technical knowledge."</p>
      
      <p>The grand opening will feature demonstrations, student showcases, and tours for the community. Alumni working in STEM fields will return to share how their Oakridge education prepared them for successful careers and to see how the school continues to evolve.</p>
    `,
    author: "Admin Staff",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    category: "Facilities",
    tags: ["STEM", "Facilities", "Technology"]
  },
  {
    id: 4,
    title: "Arts Department Presents 'A Midsummer Night's Dream'",
    excerpt: "Students from the Drama Club delivered a captivating performance of Shakespeare's classic comedy, showcasing both acting talent and technical production skills.",
    content: `
      <p>The Oakridge Academy Arts Department dazzled audiences last weekend with their production of Shakespeare's "A Midsummer Night's Dream." The three sold-out performances in the school auditorium featured stunning performances from students in grades 9-12, with elaborate sets, costumes, and lighting that transported viewers to the magical world of the play.</p>
      
      <p>Under the direction of Drama teacher Ms. Olivia West, the cast navigated Shakespeare's complex language with remarkable clarity and confidence. "We spent a lot of time making sure the students truly understood the text so they could bring these characters to life authentically," Ms. West explained. "Their dedication to mastering not just the lines but the emotional nuances of each scene was extraordinary."</p>
      
      <p>Senior Lucas Martinez, who played Oberon, reflected on the experience: "This was by far the most challenging role I've taken on, but also the most rewarding. Working with Shakespeare's language taught me so much about acting and about finding the humanity in characters from another time and place."</p>
      
      <p>The production was truly a collaborative effort across the Arts Department. Students from the Visual Arts program designed and created the elaborate sets and props, while the Technical Theater class handled lighting, sound, and special effects. Original music composed by students in the Advanced Music Theory class added another layer of creativity to the production.</p>
      
      <p>"What makes me most proud is seeing how students from different artistic disciplines came together to create something greater than any one of them could have achieved alone," said Mr. Robert Martinez, Arts Department Chair. "That kind of collaboration reflects the real-world creative process and teaches valuable skills that extend far beyond the arts."</p>
      
      <p>The performances received enthusiastic responses from the school community and beyond. Several local arts reviewers attended and praised both the performances and the production values. "It's rare to see high school students tackle Shakespeare with such confidence and clarity," wrote one reviewer. "Oakridge Academy has set a high bar for educational theater."</p>
      
      <p>Following this success, the Drama Club is already beginning to plan their spring musical, which will provide opportunities for even more students to participate both onstage and behind the scenes.</p>
    `,
    author: "Robert Martinez",
    date: "March 30, 2025",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    category: "Arts",
    tags: ["Drama", "Performance", "Arts"]
  },
  {
    id: 5,
    title: "Alumni Spotlight: Dr. Jason Lee, Medical Researcher",
    excerpt: "Oakridge graduate Dr. Jason Lee returned to campus to share his journey from curious science student to leading medical researcher fighting infectious diseases.",
    content: `
      <p>This week, Oakridge Academy welcomed back distinguished alumnus Dr. Jason Lee ('05) as part of our Alumni Spotlight series. Dr. Lee, now a leading researcher at the National Institute for Infectious Diseases, shared his educational and career journey with current students, offering insights and inspiration about pursuing a career in medical science.</p>
      
      <p>During his visit, Dr. Lee spoke to science classes about his current work developing new treatments for antibiotic-resistant infections, a growing global health concern. He connected his cutting-edge research back to fundamentals he learned in his high school biology and chemistry classes. "The scientific curiosity that my teachers fostered here at Oakridge has been the driving force throughout my career," he told students.</p>
      
      <p>Dr. Lee's path from Oakridge included undergraduate studies at Johns Hopkins University, medical school at Stanford, and specialized research training at the CDC. Despite his impressive credentials, he emphasized that his success stemmed more from persistence than natural brilliance. "What set me apart wasn't being the smartest person in the room, but being willing to keep asking questions, especially when experiments failed," he explained.</p>
      
      <p>During a lunch session with the Science Club, Dr. Lee fielded questions about everything from college applications to ethical considerations in medical research. Students were particularly interested in his experience working on the frontlines during recent disease outbreaks around the world.</p>
      
      <p>Senior Mia Johnson, who plans to study microbiology in college, found the session valuable: "Seeing someone who sat in the same classrooms I do now go on to make such an impact gives me confidence that I can follow a similar path. His advice about balancing scientific rigor with creative thinking was exactly what I needed to hear."</p>
      
      <p>Dr. Lee also met with faculty to discuss recent advances in science education and potential collaboration opportunities. He has offered to help establish a mentorship program connecting current students with Oakridge alumni in scientific fields.</p>
      
      <p>"We're incredibly proud of Jason and all he's accomplished," said Dr. Emily Rodriguez, Science Department Chair and Dr. Lee's former teacher. "Having him return to share his knowledge with a new generation of students embodies the ongoing legacy of excellence we strive to build at Oakridge."</p>
    `,
    author: "Admin Staff",
    date: "March 25, 2025",
    image: "https://images.unsplash.com/photo-1543333995-a78aea2eee50?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    category: "Alumni",
    tags: ["Alumni", "Science", "Careers"]
  },
  {
    id: 6,
    title: "Oakridge Students Win Regional Mathematics Competition",
    excerpt: "Our mathematics team demonstrated exceptional problem-solving skills, bringing home the first-place trophy from the Regional Mathematics Olympiad.",
    content: `
      <p>The Oakridge Academy Mathematics Team emerged victorious at the Regional Mathematics Olympiad held last Saturday at Central University. Competing against 15 schools from across the region, our students demonstrated exceptional problem-solving abilities and mathematical reasoning, securing first place in both team and individual categories.</p>
      
      <p>The competition included challenging problems in algebra, geometry, number theory, and combinatorics, requiring not only technical knowledge but creative approaches to complex mathematical scenarios. Team captain Sophia Wang earned the highest individual score in the competition's history, solving all but one of the advanced problems.</p>
      
      <p>"What impressed me most was how our students approached problems collaboratively during the team round," said Mr. James Wilson, Mathematics teacher and team coach. "They each brought different strengths and perspectives, and they communicated effectively under pressure."</p>
      
      <p>The team prepared for months, meeting twice weekly after school to practice advanced problem-solving techniques and study past competition questions. "There's no shortcut to success in these competitions," explained junior team member Ethan Park. "It's about developing mathematical intuition through consistent practice and learning to approach problems from multiple angles."</p>
      
      <p>Sophomore Maya Henderson, competing in her first Olympiad, found the experience transformative. "I've always enjoyed math class, but this competition showed me how mathematical thinking extends beyond textbook problems. I'm seeing connections to real-world applications I never noticed before."</p>
      
      <p>Mathematics Department faculty note that the competitive team is just one aspect of Oakridge's approach to making mathematics engaging and relevant. "Success in competitions is wonderful," said Department Chair Dr. Rebecca Taylor, "but we're equally focused on helping all students develop mathematical confidence and see the beauty and utility of mathematics in everyday life."</p>
      
      <p>The team will now prepare for the State Mathematics Olympiad in May, where they'll face even more challenging problems and stiffer competition. Based on their regional performance, several team members are also likely to qualify for individual national competitions later this year.</p>
    `,
    author: "James Wilson",
    date: "March 20, 2025",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    category: "Student Achievement",
    tags: ["Mathematics", "Competition", "Academic"]
  }
];

// Categories for filter
const categories = ["All", "Events", "Student Achievement", "Facilities", "Arts", "Alumni"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  
  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="School Blog" 
        subtitle="Stay updated with the latest news and events at Oakridge Academy"
        backgroundImage="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Blog Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="section-title mb-8">Latest News & Updates</h2>
              
              {/* Posts Grid */}
              {currentPosts.length > 0 ? (
                <div className="space-y-8">
                  {currentPosts.map((post) => (
                    <div key={post.id} className="card overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover min-h-[200px]"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{post.date}</span>
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 hover:text-school-primary transition-colors">
                            <Link to={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 2).map((tag, index) => (
                                <span 
                                  key={index} 
                                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-2 rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <Link 
                              to={`/blog/${post.id}`}
                              className="text-school-primary hover:text-school-secondary transition-colors flex items-center text-sm font-medium"
                            >
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-lg text-gray-600">No posts found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-4 text-school-primary hover:text-school-secondary transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > postsPerPage && (
                <div className="flex justify-center mt-10">
                  <nav className="flex items-center">
                    <button 
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-l border ${
                        currentPage === 1 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-school-primary hover:bg-gray-50'
                      }`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    
                    <div className="flex">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`px-4 py-2 border-t border-b ${
                            currentPage === number
                              ? 'bg-school-primary text-white'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {number}
                        </button>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-r border ${
                        currentPage === totalPages 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-school-primary hover:bg-gray-50'
                      }`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </nav>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="card p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search posts..." 
                    className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              {/* Categories */}
              <div className="card p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedCategory === category
                            ? 'bg-school-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="card p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-start">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-16 h-16 object-cover rounded-md mr-3"
                      />
                      <div>
                        <h4 className="font-medium text-sm hover:text-school-primary transition-colors">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tags Cloud */}
              <div className="card p-6">
                <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-3 rounded-full"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
