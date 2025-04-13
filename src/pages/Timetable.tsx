
import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar, Filter, Download } from 'lucide-react';

const Timetable = () => {
  const [gradeFilter, setGradeFilter] = useState("all");
  
  // Timetable data for demo purposes
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = [
    { time: "8:00 - 8:50", name: "Period 1" },
    { time: "8:55 - 9:45", name: "Period 2" },
    { time: "9:50 - 10:40", name: "Period 3" },
    { time: "10:45 - 11:05", name: "Break" },
    { time: "11:10 - 12:00", name: "Period 4" },
    { time: "12:05 - 12:55", name: "Period 5" },
    { time: "1:00 - 1:45", name: "Lunch" },
    { time: "1:50 - 2:40", name: "Period 6" },
    { time: "2:45 - 3:35", name: "Period 7" },
    { time: "3:40 - 4:30", name: "Period 8" }
  ];

  // Sample schedule data - in a real application, this would be dynamically fetched based on the grade
  const scheduleData = {
    elementary: {
      title: "Elementary School (Grades 1-5)",
      schedule: {
        "Monday": [
          { period: "Period 1", class: "Morning Assembly" },
          { period: "Period 2", class: "English Language Arts" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Recess" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "Lunch" },
          { period: "Lunch", class: "Recess" },
          { period: "Period 6", class: "Social Studies" },
          { period: "Period 7", class: "Art" },
          { period: "Period 8", class: "Dismissal/After-School Programs" }
        ],
        "Tuesday": [
          { period: "Period 1", class: "Morning Assembly" },
          { period: "Period 2", class: "English Language Arts" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Recess" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "Lunch" },
          { period: "Lunch", class: "Recess" },
          { period: "Period 6", class: "Social Studies" },
          { period: "Period 7", class: "Music" },
          { period: "Period 8", class: "Dismissal/After-School Programs" }
        ],
        "Wednesday": [
          { period: "Period 1", class: "Morning Assembly" },
          { period: "Period 2", class: "English Language Arts" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Recess" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "Lunch" },
          { period: "Lunch", class: "Recess" },
          { period: "Period 6", class: "Social Studies" },
          { period: "Period 7", class: "Physical Education" },
          { period: "Period 8", class: "Dismissal/After-School Programs" }
        ],
        "Thursday": [
          { period: "Period 1", class: "Morning Assembly" },
          { period: "Period 2", class: "English Language Arts" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Recess" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "Lunch" },
          { period: "Lunch", class: "Recess" },
          { period: "Period 6", class: "Social Studies" },
          { period: "Period 7", class: "Computer Lab" },
          { period: "Period 8", class: "Dismissal/After-School Programs" }
        ],
        "Friday": [
          { period: "Period 1", class: "Morning Assembly" },
          { period: "Period 2", class: "English Language Arts" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Recess" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "Lunch" },
          { period: "Lunch", class: "Recess" },
          { period: "Period 6", class: "Social Studies" },
          { period: "Period 7", class: "Library/Reading" },
          { period: "Period 8", class: "School Assembly" }
        ]
      }
    },
    middle: {
      title: "Middle School (Grades 6-8)",
      schedule: {
        "Monday": [
          { period: "Period 1", class: "Advisory" },
          { period: "Period 2", class: "English" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "History" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Foreign Language" },
          { period: "Period 7", class: "Elective: Art" },
          { period: "Period 8", class: "Physical Education" }
        ],
        "Tuesday": [
          { period: "Period 1", class: "Advisory" },
          { period: "Period 2", class: "English" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "History" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Foreign Language" },
          { period: "Period 7", class: "Elective: Music" },
          { period: "Period 8", class: "Health & Wellness" }
        ],
        "Wednesday": [
          { period: "Period 1", class: "Advisory" },
          { period: "Period 2", class: "English" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "History" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Foreign Language" },
          { period: "Period 7", class: "Elective: Technology" },
          { period: "Period 8", class: "Physical Education" }
        ],
        "Thursday": [
          { period: "Period 1", class: "Advisory" },
          { period: "Period 2", class: "English" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "History" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Foreign Language" },
          { period: "Period 7", class: "Elective: Drama" },
          { period: "Period 8", class: "Study Hall" }
        ],
        "Friday": [
          { period: "Period 1", class: "Advisory" },
          { period: "Period 2", class: "English" },
          { period: "Period 3", class: "Mathematics" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Science" },
          { period: "Period 5", class: "History" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Foreign Language" },
          { period: "Period 7", class: "Clubs/Activities" },
          { period: "Period 8", class: "Assembly" }
        ]
      }
    },
    high: {
      title: "High School (Grades 9-12)",
      schedule: {
        "Monday": [
          { period: "Period 1", class: "Homeroom" },
          { period: "Period 2", class: "English Literature" },
          { period: "Period 3", class: "Algebra II / Calculus" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Chemistry / Physics" },
          { period: "Period 5", class: "World History" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Spanish / French" },
          { period: "Period 7", class: "Elective 1" },
          { period: "Period 8", class: "Physical Education" }
        ],
        "Tuesday": [
          { period: "Period 1", class: "Homeroom" },
          { period: "Period 2", class: "English Composition" },
          { period: "Period 3", class: "Algebra II / Calculus" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Chemistry / Physics" },
          { period: "Period 5", class: "World History" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Spanish / French" },
          { period: "Period 7", class: "Elective 2" },
          { period: "Period 8", class: "Health & Wellness" }
        ],
        "Wednesday": [
          { period: "Period 1", class: "Homeroom" },
          { period: "Period 2", class: "AP Literature" },
          { period: "Period 3", class: "Algebra II / Calculus" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Chemistry / Physics" },
          { period: "Period 5", class: "US Government" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Spanish / French" },
          { period: "Period 7", class: "Elective 1" },
          { period: "Period 8", class: "Physical Education" }
        ],
        "Thursday": [
          { period: "Period 1", class: "Homeroom" },
          { period: "Period 2", class: "AP Language" },
          { period: "Period 3", class: "Algebra II / Calculus" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Chemistry / Physics" },
          { period: "Period 5", class: "US Government" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Spanish / French" },
          { period: "Period 7", class: "Elective 2" },
          { period: "Period 8", class: "Study Hall / College Prep" }
        ],
        "Friday": [
          { period: "Period 1", class: "Homeroom" },
          { period: "Period 2", class: "English Seminar" },
          { period: "Period 3", class: "Algebra II / Calculus" },
          { period: "Break", class: "Break" },
          { period: "Period 4", class: "Chemistry / Physics" },
          { period: "Period 5", class: "Economics" },
          { period: "Lunch", class: "Lunch" },
          { period: "Period 6", class: "Spanish / French" },
          { period: "Period 7", class: "Clubs/Activities" },
          { period: "Period 8", class: "Assembly" }
        ]
      }
    }
  };

  // Handle grade filter change
  const handleGradeChange = (grade) => {
    setGradeFilter(grade);
  };

  // Dummy function to handle download
  const handleDownloadTimetable = () => {
    alert("This is a demo feature. In a real application, this would download the timetable as a PDF or other format.");
  };

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="School Timetable" 
        subtitle="Organized schedules for all grade levels"
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title mx-auto">Academic Schedule</h2>
            <p className="subtitle">
              Structured learning time for optimal educational experience
            </p>
            <p>
              At Oakridge Academy, our school day is carefully structured to provide a balanced 
              educational experience. Our schedule is designed to optimize learning while allowing 
              sufficient time for breaks, lunch, and extracurricular activities.
            </p>
            <p>
              Regular class periods are 50 minutes long, providing ample time for in-depth 
              instruction and student engagement. Our day begins at 8:00 AM and concludes at 
              4:30 PM, with after-school programs available until 6:00 PM for families needing 
              extended care.
            </p>
          </div>
        </div>
      </section>

      {/* General Schedule Information */}
      <section className="section bg-school-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-title">Daily Schedule Overview</h2>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-school-primary mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">School Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-school-primary mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Office Hours</h3>
                    <p>Monday - Friday: 7:30 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-school-primary mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Academic Year</h3>
                    <p>Fall Semester: August 25 - December 17<br />Spring Semester: January 10 - June 10</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Filter className="h-5 w-5 text-school-primary mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">Period Length</h3>
                    <p>Regular periods: 50 minutes<br />Lunch period: 45 minutes<br />Break: 20 minutes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-school-dark text-center">Bell Schedule</h3>
              <div className="space-y-2">
                {periods.map((period, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border-b last:border-0">
                    <span className="font-medium">{period.name}</span>
                    <span className="text-school-primary">{period.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="section-title">Weekly Timetable</h2>
              <p className="subtitle">Select a grade level to view the appropriate schedule</p>
            </div>
            
            <button 
              onClick={handleDownloadTimetable}
              className="flex items-center bg-school-primary hover:bg-school-secondary text-white font-medium py-2 px-4 rounded mt-4 md:mt-0 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Timetable
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Tabs defaultValue="elementary" onValueChange={handleGradeChange}>
              <div className="bg-gray-50 p-4 border-b">
                <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto bg-gray-200">
                  <TabsTrigger value="elementary">Elementary</TabsTrigger>
                  <TabsTrigger value="middle">Middle School</TabsTrigger>
                  <TabsTrigger value="high">High School</TabsTrigger>
                </TabsList>
              </div>
              
              {Object.keys(scheduleData).map((level) => (
                <TabsContent key={level} value={level} className="p-0">
                  <div className="p-4 bg-school-light">
                    <h3 className="text-xl font-bold text-school-dark text-center mb-4">{scheduleData[level].title}</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Time/Period</th>
                          {weekdays.map((day) => (
                            <th key={day} className="py-3 px-4 text-left font-semibold text-gray-700">{day}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {periods.map((period, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="py-3 px-4 border-t">
                              <div className="font-medium">{period.name}</div>
                              <div className="text-sm text-gray-500">{period.time}</div>
                            </td>
                            {weekdays.map((day) => {
                              const classInfo = scheduleData[level].schedule[day].find(
                                (item) => item.period === period.name
                              );
                              
                              return (
                                <td key={day} className="py-3 px-4 border-t">
                                  {classInfo ? (
                                    <div 
                                      className={`py-1 px-2 rounded ${
                                        classInfo.class.includes("Lunch") || classInfo.class.includes("Break") || classInfo.class.includes("Recess")
                                          ? 'bg-blue-100 text-blue-800'
                                          : classInfo.class.includes("Assembly") || classInfo.class.includes("Advisory") || classInfo.class.includes("Homeroom")
                                          ? 'bg-amber-100 text-amber-800'
                                          : 'bg-green-100 text-green-800'
                                      }`}
                                    >
                                      {classInfo.class}
                                    </div>
                                  ) : (
                                    <span className="text-gray-400">—</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section bg-school-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-school-dark">Special Schedules</h3>
              <p className="text-gray-700 mb-4">
                Throughout the year, we occasionally operate on modified schedules to accommodate special events,
                assemblies, testing, or early dismissals. These schedule changes are always communicated in advance.
              </p>
              <div className="space-y-2 mt-4">
                <div className="p-2 bg-amber-50 rounded-md">
                  <span className="font-medium">Early Dismissal:</span> Classes end at 1:00 PM
                </div>
                <div className="p-2 bg-amber-50 rounded-md">
                  <span className="font-medium">Testing Schedule:</span> Extended morning periods
                </div>
                <div className="p-2 bg-amber-50 rounded-md">
                  <span className="font-medium">Assembly Days:</span> Shortened periods
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-school-dark">Attendance Policies</h3>
              <p className="text-gray-700 mb-4">
                Regular attendance is essential for academic success. Students are expected to arrive on time for all classes.
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>Absences must be reported to the school office by 8:30 AM</li>
                <li>Students arriving after 8:10 AM are considered tardy</li>
                <li>Early dismissals require advance notice and parent/guardian sign-out</li>
                <li>Extended absences for non-medical reasons require approval from administration</li>
                <li>Make-up work is the student's responsibility</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-school-dark">After-School Programs</h3>
              <p className="text-gray-700 mb-4">
                We offer a variety of after-school programs from 4:30 PM to 6:00 PM on weekdays to 
                accommodate families and provide enrichment opportunities.
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <div className="bg-school-primary rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1 mr-2">1</div>
                  <div>
                    <h4 className="font-medium">Homework Help</h4>
                    <p className="text-sm text-gray-600">Monday-Thursday, 4:30-5:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-primary rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1 mr-2">2</div>
                  <div>
                    <h4 className="font-medium">Club Activities</h4>
                    <p className="text-sm text-gray-600">Various days, 4:30-6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-primary rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1 mr-2">3</div>
                  <div>
                    <h4 className="font-medium">Sports Practices</h4>
                    <p className="text-sm text-gray-600">By team schedule, typically 4:30-6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timetable;
