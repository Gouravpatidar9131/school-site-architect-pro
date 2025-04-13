import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for your message. We'll respond as soon as possible.",
          variant: "default",
        });
      }, 1500);
    }
  };
  
  const handleNewMessage = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };
  
  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
        backgroundImage="https://images.unsplash.com/photo-1544928147-79a2dbc1f669?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="section-title">Get In Touch</h2>
              <p className="mb-8">
                We welcome your questions, comments, and inquiries. Please don't hesitate to contact us using the information below or by filling out the contact form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-school-primary rounded-full p-3 text-white mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Education Street<br />
                      Academic City, AC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-school-primary rounded-full p-3 text-white mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@oakridgeacademy.edu<br />
                      Admissions: admissions@oakridgeacademy.edu<br />
                      Alumni Relations: alumni@oakridgeacademy.edu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-school-primary rounded-full p-3 text-white mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      Main Office: (555) 123-4567<br />
                      Admissions: (555) 123-4568<br />
                      Attendance: (555) 123-4569
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-school-primary rounded-full p-3 text-white mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:30 AM - 4:30 PM<br />
                      Saturday: 9:00 AM - 12:00 PM (by appointment)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 rounded-lg overflow-hidden shadow-md h-64 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p>Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-school-dark">Send Us a Message</h2>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="john.doe@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary ${
                          errors.subject ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="General Inquiry"
                      />
                      {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Please write your message here..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-school-primary hover:bg-school-secondary text-white font-bold py-3 px-4 rounded transition-colors ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="bg-green-50 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-school-dark mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-8">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={handleNewMessage}
                      className="bg-school-primary hover:bg-school-secondary text-white font-bold py-2 px-6 rounded transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-school-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Contact Our Departments</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Get in touch with specific school departments for specialized inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-school-dark">Admissions</h3>
              <p className="text-gray-600 mb-4">
                For enrollment information, campus tours, and application status inquiries.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-school-primary mr-2" />
                  <span>admissions@oakridgeacademy.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-school-primary mr-2" />
                  <span>(555) 123-4568</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-school-dark">Academic Affairs</h3>
              <p className="text-gray-600 mb-4">
                For curriculum inquiries, academic programs, and educational resources.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-school-primary mr-2" />
                  <span>academics@oakridgeacademy.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-school-primary mr-2" />
                  <span>(555) 123-4570</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-school-dark">Athletics</h3>
              <p className="text-gray-600 mb-4">
                For sports programs, team schedules, and athletic facilities information.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-school-primary mr-2" />
                  <span>athletics@oakridgeacademy.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-school-primary mr-2" />
                  <span>(555) 123-4571</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-school-dark">Business Office</h3>
              <p className="text-gray-600 mb-4">
                For tuition and fees information, payment plans, and financial questions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-school-primary mr-2" />
                  <span>business@oakridgeacademy.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-school-primary mr-2" />
                  <span>(555) 123-4572</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-school-dark">Student Services</h3>
              <p className="text-gray-600 mb-4">
                For counseling, health services, and student activities information.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-school-primary mr-2" />
                  <span>studentservices@oakridgeacademy.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-school-primary mr-2" />
                  <span>(555) 123-4573</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-school-dark">Technology Support</h3>
              <p className="text-gray-600 mb-4">
                For technical assistance, account access, and educational technology resources.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-school-primary mr-2" />
                  <span>techsupport@oakridgeacademy.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-school-primary mr-2" />
                  <span>(555) 123-4574</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Find quick answers to common inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-school-dark">What are the school hours?</h3>
              <p className="text-gray-700">
                School hours are from 8:00 AM to 3:30 PM, Monday through Friday. Students are encouraged to arrive by 7:45 AM to prepare for the day.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-school-dark">How do I report an absence?</h3>
              <p className="text-gray-700">
                Please call the attendance line at (555) 123-4569 before 8:30 AM on the day of the absence. You may also email attendance@oakridgeacademy.edu.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-school-dark">When is the application deadline?</h3>
              <p className="text-gray-700">
                For the upcoming school year, applications are due by February 1st. Late applications may be considered based on space availability.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-school-dark">Are there after-school programs available?</h3>
              <p className="text-gray-700">
                Yes, we offer various after-school programs including homework help, clubs, and sports until 6:00 PM on weekdays. Additional fees may apply.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-school-dark">How can I access student records?</h3>
              <p className="text-gray-700">
                Parents can access student records through our secure online portal. Login credentials are provided at the beginning of the school year.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-school-dark">What is the school's approach to technology?</h3>
              <p className="text-gray-700">
                We integrate technology throughout our curriculum while maintaining a balanced approach. Students in grades 6-12 participate in our 1:1 device program.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-700 mb-4">
              Don't see the answer to your question? Feel free to reach out to us directly.
            </p>
            <a href="#contact-form" className="btn-primary inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
