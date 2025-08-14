import { useNavigate } from "react-router-dom";

export default function UXDesign() {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: "object-oriented-design",
      title: "Object oriented design: How we're using data to define the future of business experiences",
      description: "Information architecture diagramming, object oriented design",
      duration: "January 2025 - August 2025",
    },
    {
      id: "business-profile-space",
      title: "Building a business-centric profile space for small business owners within their banking platform",
      description: "User research, prototyping, UI design",
      duration: "May 2025 - August 2025, September 2024 - present",
    },
    {
      id: "payments-adoption",
      title: "A journey to increase adoption of our business payments solutions products",
      description: "User research, prototyping, UI design, data auditing",
      duration: "September 2025 - February 2024",
    },
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Projects */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            {/* Project Image */}
            <div 
              className="w-full bg-placeholder cursor-pointer"
              style={{ aspectRatio: '900/370', borderRadius: '0px' }}
              onClick={() => handleProjectClick(project.id)}
            ></div>
            
            {/* Project Details */}
            <div 
              className="cursor-pointer space-y-4"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="flex justify-between items-start md:flex-row flex-col md:space-y-0 space-y-2">
                <h3 className="text-xs font-bold text-black leading-tight md:w-1/2 md:pr-4">
                  {project.title}
                </h3>
                <span className="text-xs font-bold text-[#696969] md:w-1/2 md:text-right">
                  {project.duration}
                </span>
              </div>
              <p className="text-xs font-bold text-[#696969]" style={{ marginTop: '0px' }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}