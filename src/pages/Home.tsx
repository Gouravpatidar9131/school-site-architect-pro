
import React from 'react';
import Hero from '../components/Hero';
import EducationScene from '../components/EducationScene';
import { ArrowRight, BookOpen, Calendar, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // News items
  const newsItems = [
    {
      id: 1,
      title: "Annual Science Fair Winners Announced",
      date: "April 10, 2025",
      excerpt: "Congratulations to all participants in this year's Science Fair. The projects demonstrated exceptional creativity and scientific understanding.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Oakridge Debate Team Reaches Nationals",
      date: "April 8, 2025",
      excerpt: "Our debate team has qualified for the National Championships after an outstanding performance at regionals. Join us in celebrating their achievement!",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "New STEM Learning Center Opening Next Month",
      date: "April 5, 2025",
      excerpt: "We're excited to announce the opening of our state-of-the-art STEM Learning Center, providing students with cutting-edge resources and technology.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Welcome to Oakridge Academy" 
        subtitle="Empowering minds, inspiring futures" 
        backgroundImage="https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        buttonText="Explore Our Programs"
        buttonLink="/classes"
      />

      {/* 3D Education Scene */}
      <section className="py-16 bg-gradient-to-b from-white to-school-light">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title mx-auto">Our Educational Universe</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Dive into the interactive world of Oakridge Academy's educational approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-[fade-in_1s_ease-out,slide-up_1s_ease-out]" 
                 style={{ animationFillMode: 'both' }}>
              <EducationScene />
            </div>
            
            <div className="order-1 lg:order-2 animate-[fade-in_1s_ease-out,slide-up_1s_ease-out]"
                 style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4">Explore Our Educational Approach</h3>
              <p className="mb-4">
                At Oakridge Academy, we believe in creating an immersive educational experience that engages 
                all senses and learning styles. Our three-dimensional approach combines traditional academic 
                excellence with modern teaching techniques and real-world applications.
              </p>
              <p className="mb-6">
                Interact with our educational universe to discover the core pillars of our teaching philosophy: 
                knowledge acquisition, global perspective, and academic achievement represented by books, 
                a globe, and a graduation cap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/classes" className="btn-primary flex items-center justify-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Classes
                </Link>
                <Link to="/about" className="bg-transparent hover:bg-school-primary/10 text-school-primary border border-school-primary font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-[fade-in_1s_ease-out,slide-up_1s_ease-out]"
                 style={{ animationFillMode: 'both' }}>
              <h2 className="section-title">Discover Oakridge Academy</h2>
              <p className="subtitle">Where Excellence Meets Opportunity</p>
              <p>
                Welcome to Oakridge Academy, where we believe in nurturing not just academic excellence, but the whole individual. 
                Founded on principles of curiosity, integrity, and innovation, our school provides a dynamic learning environment 
                that prepares students for success in an ever-changing world.
              </p>
              <p>
                Our comprehensive curriculum combines rigorous academics with arts, athletics, and character development, 
                creating well-rounded individuals ready to make a difference in their communities and beyond.
              </p>
              <div className="mt-6">
                <Link to="/about" className="btn-primary inline-flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative animate-[fade-in_1s_ease-out,slide-up_1s_ease-out]"
                 style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Students studying" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px] transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-6 -left-6 bg-school-accent text-white p-4 rounded-lg shadow-lg animate-pulse">
                <h3 className="text-xl font-bold">25+ Years</h3>
                <p className="text-sm">of academic excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-school-light">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title mx-auto">Why Choose Oakridge Academy</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our educational approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="card p-6 text-center hover:translate-y-[-10px] transition-transform duration-300 animate-[fade-in_0.8s_ease-out]" style={{ animationDelay: '0.1s' }}>
              <div className="bg-school-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transform transition-transform hover:rotate-12">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exceptional Curriculum</h3>
              <p className="text-gray-600">
                Our comprehensive curriculum is designed to challenge students and foster critical thinking skills.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card p-6 text-center hover:translate-y-[-10px] transition-transform duration-300 animate-[fade-in_0.8s_ease-out]" style={{ animationDelay: '0.2s' }}>
              <div className="bg-school-secondary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transform transition-transform hover:rotate-12">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Faculty</h3>
              <p className="text-gray-600">
                Our teachers are experienced professionals committed to bringing out the best in every student.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card p-6 text-center hover:translate-y-[-10px] transition-transform duration-300 animate-[fade-in_0.8s_ease-out]" style={{ animationDelay: '0.3s' }}>
              <div className="bg-school-accent inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transform transition-transform hover:rotate-12">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">
                Our students consistently achieve top results in regional and national assessments.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="card p-6 text-center hover:translate-y-[-10px] transition-transform duration-300 animate-[fade-in_0.8s_ease-out]" style={{ animationDelay: '0.4s' }}>
              <div className="bg-school-dark inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transform transition-transform hover:rotate-12">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enrichment Programs</h3>
              <p className="text-gray-600">
                Beyond academics, we offer diverse extracurricular activities to develop well-rounded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div className="animate-[fade-in_1s_ease-out]">
              <h2 className="section-title">Latest News & Events</h2>
              <p className="subtitle">Stay updated with what's happening at Oakridge Academy</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-school-primary hover:text-school-secondary transition-colors animate-[fade-in_1s_ease-out]">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={item.id} className="card group overflow-hidden animate-[fade-in_1s_ease-out,slide-up_1s_ease-out]" 
                   style={{ animationFillMode: 'both', animationDelay: `${0.1 * index}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-school-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link to={`/blog/${item.id}`} className="inline-flex items-center text-school-primary hover:text-school-secondary transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="btn-primary">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-[fade-in_1s_ease-out]">Ready to Join Our Community?</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8 animate-[fade-in_1s_ease-out]" style={{ animationDelay: '0.2s' }}>
            Discover the Oakridge difference and see how our approach to education can help your child thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-[fade-in_1s_ease-out]" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="btn-secondary hover:scale-105 transition-transform">
              Contact Us
            </Link>
            <Link to="/about" className="bg-transparent hover:bg-white/10 text-white border border-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
