
import React from 'react';
import PageBanner from '../components/PageBanner';
import { Clock, Award, Target, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="About Oakridge Academy" 
        subtitle="Discover our history, mission, and values"
        backgroundImage="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Mission & Vision Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h2 className="section-title">Our Mission</h2>
              <div className="flex items-center mb-4">
                <Target className="mr-3 text-school-primary h-6 w-6" />
                <h3 className="text-xl font-semibold text-school-dark">Educate, Inspire, Transform</h3>
              </div>
              <p>
                At Oakridge Academy, our mission is to provide a comprehensive, 
                challenging educational experience that fosters academic excellence, 
                personal growth, and social responsibility.
              </p>
              <p>
                We are committed to creating a supportive environment where students 
                develop critical thinking skills, creativity, and the confidence to 
                become lifelong learners and contributing members of a global society.
              </p>
              <p>
                Through a balance of rigorous academics, arts, athletics, and character 
                development, we aim to nurture the whole child and prepare them for 
                success in college, career, and life.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <h2 className="section-title">Our Vision</h2>
              <div className="flex items-center mb-4">
                <BookOpen className="mr-3 text-school-primary h-6 w-6" />
                <h3 className="text-xl font-semibold text-school-dark">Building Tomorrow's Leaders</h3>
              </div>
              <p>
                We envision Oakridge Academy as a leading educational institution that 
                sets the standard for academic excellence and innovative teaching methods.
              </p>
              <p>
                Our graduates will be intellectually curious, socially conscious, and 
                equipped with the knowledge, skills, and character traits needed to 
                thrive in an increasingly complex and interconnected world.
              </p>
              <p>
                We aspire to be a diverse and inclusive community where every student 
                is valued, challenged, and supported to reach their full potential, 
                becoming ethical leaders and compassionate global citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section bg-school-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Our History</h2>
            <p className="subtitle max-w-3xl mx-auto">
              From humble beginnings to educational excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-school-primary"></div>
            
            {/* Timeline Items */}
            <div className="grid grid-cols-1 gap-12">
              {/* 1995 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-school-primary text-white font-bold py-2 px-6 rounded-full z-10">
                    1995
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-school-dark">Foundation</h3>
                  <p>
                    Oakridge Academy was founded by Dr. Eleanor Matthews, a visionary educator who 
                    believed in creating a learning environment that combined academic rigor with 
                    character development. The school began with just 75 students and 8 teachers in 
                    a converted historic building in the heart of the city.
                  </p>
                </div>
              </div>

              {/* 2002 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-school-primary text-white font-bold py-2 px-6 rounded-full z-10">
                    2002
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-school-dark">Expansion & Growth</h3>
                  <p>
                    Following years of growth and recognition for academic excellence, Oakridge 
                    expanded to its current campus, a 15-acre property with state-of-the-art 
                    facilities. This move allowed the school to increase enrollment and add new 
                    programs in science, technology, and the arts.
                  </p>
                </div>
              </div>

              {/* 2010 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-school-primary text-white font-bold py-2 px-6 rounded-full z-10">
                    2010
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-school-dark">Innovation & Recognition</h3>
                  <p>
                    The school launched its signature Innovation Program, integrating technology 
                    across the curriculum and establishing partnerships with leading universities 
                    and industry leaders. This period also saw Oakridge receive its first National 
                    Blue Ribbon School of Excellence award, recognizing its commitment to high 
                    standards and student achievement.
                  </p>
                </div>
              </div>

              {/* Today */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-school-primary text-white font-bold py-2 px-6 rounded-full z-10">
                    Today
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-school-dark">Continuing Legacy</h3>
                  <p>
                    Today, Oakridge Academy serves over 1,200 students from diverse backgrounds. 
                    While we've grown in size and scope, our core values remain unchanged: 
                    academic excellence, character development, and a commitment to serving others. 
                    Our graduates continue to excel at top universities worldwide and make meaningful 
                    contributions in their chosen fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Our Core Values</h2>
            <p className="subtitle max-w-3xl mx-auto">
              The principles that guide our educational philosophy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="card p-6 text-center hover:border-l-4 hover:border-l-school-primary transition-all duration-300">
              <div className="bg-school-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in all endeavors, challenging ourselves and our students to exceed expectations and reach their highest potential.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="card p-6 text-center hover:border-l-4 hover:border-l-school-primary transition-all duration-300">
              <div className="bg-school-secondary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We act with honesty, transparency, and ethical behavior, fostering a community built on trust and mutual respect.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="card p-6 text-center hover:border-l-4 hover:border-l-school-primary transition-all duration-300">
              <div className="bg-school-accent inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Diversity</h3>
              <p className="text-gray-600">
                We celebrate diversity and inclusion, valuing different perspectives and creating a welcoming environment for all.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="card p-6 text-center hover:border-l-4 hover:border-l-school-primary transition-all duration-300">
              <div className="bg-school-dark inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and forward thinking, adapting to change and preparing students for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-school-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 border-r border-school-secondary last:border-0">
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-xl">Students</div>
            </div>
            <div className="p-6 border-r border-school-secondary last:border-0">
              <div className="text-4xl font-bold mb-2">95</div>
              <div className="text-xl">Faculty Members</div>
            </div>
            <div className="p-6 border-r border-school-secondary last:border-0">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-xl">Years of Excellence</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-xl">College Acceptance</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
