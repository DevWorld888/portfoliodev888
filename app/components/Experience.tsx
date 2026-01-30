import React from 'react';

interface ExperienceItem {
  id: number;
  period: string;
  title: string;
  description: string;
  type: 'education' | 'work';
  icon: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    period: "Aug 2021 – Nov 2022",
    title: "Software Engineer – Whitesoft Pty Ltd | Brisbane-Remote, Australia",
    description: "Built and maintained responsive and performant web applications using React.js and Materialize.",
    type: "work",
    icon: "💼"
  },
  {
    id: 2,
    period: "Mar 2020 – Jun 2021", 
    title: "Frontend Developer – Intevo S.A.S | Bogotá, Colombia",
    description: "Developed and maintained internal tools for process automation using JavaScript, HTML, and CSS.`",
    type: "work",
    icon: "💼"
  },
  {
    id: 3,
    period: "2012",
    title: "Bachelor's Degree",
    description: "Systems Engineer",
    type: "education",
    icon: "🎓"
  },
  {
    id: 4,
    period: "Jan 2023 – Present",
    title: "Independent Software Projects | Sydney, Australia & Remote",
    description: "Building personal and commercial projects focused on AI-powered automation and Next.js full-stack apps.",
    type: "work",
    icon: "💼"
  },
  {
    id: 5,
    period: "2012",
    title: "IT Security Specialist ",
    description: "",
    type: "education",
    icon: "🎓"
  },
  {
    id: 6,
    period: "2007",
    title: "Technologist in Systems Design & Management",
    description: "",
    type: "education",
    icon: "🎓"
  }
];

const Experience: React.FC = () => {
  const educationItems = experienceData.filter(item => item.type === 'education');
  const workItems = experienceData.filter(item => item.type === 'work');

  const TimelineItem: React.FC<{ item: ExperienceItem; isLast?: boolean }> = ({ item, isLast }) => (
    <div className="relative pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-8 h-full w-0.5 bg-red-300"></div>
      )}
      
      {/* Timeline dot */}
      <div className="flex items-start">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-500 bg-white">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
        </div>
        
        {/* Content */}
        <div className="ml-4 flex-1">
          <span className="text-sm text-gray-500 font-medium">{item.period}</span>
          <h3 className="text-lg font-semibold text-gray-800 mt-1">{item.title}</h3>
          <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          Experience
        </h2> */}
        
        {/* Desktop and tablet layout - side by side */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center md:text-left">
              Education
            </h3>
            <div className="space-y-0">
              {educationItems.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === educationItems.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Work Experience Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center md:text-left">
              Work Experience
            </h3>
            <div className="space-y-0">
              {workItems.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === workItems.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile layout - single column */}
        <div className="md:hidden">
          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Education
            </h3>
            <div className="space-y-0">
              {educationItems.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === educationItems.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Work Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Work Experience
            </h3>
            <div className="space-y-0">
              {workItems.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === workItems.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
