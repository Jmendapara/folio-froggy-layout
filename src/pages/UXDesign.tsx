import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";

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
  };

  return (
    <div className="p-8 space-y-8">
      {/* Projects */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            {/* Project Image */}
            <div 
              className="w-full bg-placeholder rounded-md cursor-pointer"
              style={{ aspectRatio: '900/370' }}
              onClick={() => handleProjectClick(project.id)}
            ></div>
            
            {/* Project Details */}
            <div 
              className="space-y-2 cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xs font-bold text-foreground leading-tight flex-1 pr-4">
                  {project.title}
                </h3>
                <span className="text-xs font-bold text-project-description">
                  {project.duration}
                </span>
              </div>
              <p className="text-xs font-bold text-project-description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8">
        <div className="flex items-center justify-end space-x-4 text-sm text-muted-foreground">
          <HiOutlineMail className="w-4 h-4" />
          <FiLinkedin className="w-4 h-4" />
          <span>Designed & illustrated by me in NYC.</span>
        </div>
      </div>
    </div>
  );
}