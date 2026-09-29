import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export default function UXDesign() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const projects = [
    {
      id: "card-onboarding",
      title: "Building a scalable card onboarding experience",
      description: "Competitor analysis, cross-functional collaboration, UI design",
      duration: "February 2025 - March 2026",
      image: "/onboarding/1.png",
    },
    {
      id: "object-oriented-design",
      title: "Object oriented design: How we're using data to define the future of business experiences",
      description: "Information architecture diagramming, object oriented design",
      duration: "January 2023 - August 2023",
      image: "/ood/1.png",
    },
    {
      id: "business-profile-space",
      title: "Building a digital financial hub for small business owners within their banking platform",
      description: "User research, prototyping, UI design",
      duration: "May 2023 - August 2023; September 2024 - present",
      image: "/business-dashboard/13.png",
    },
    {
      id: "payments-adoption",
      title: "A journey to increase adoption of our business payments solutions products",
      description: "User research, prototyping, UI design, data auditing",
      duration: "September 2023 - February 2024",
      image: "/empath/20.png",
    },
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-8 md:p-0">
      {/* Projects */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            {/* Project Image */}
            <div 
              className="w-full cursor-pointer overflow-hidden"
              style={{ aspectRatio: '898/370', borderRadius: '0px' }}
              onClick={() => handleProjectClick(project.id)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Project Details */}
            <div 
              className="cursor-pointer text-xs"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="flex justify-between items-start md:flex-row flex-col md:space-y-0 space-y-1">
                <h3 className="font-bold text-black leading-tight md:flex-1 md:pr-4">
                  {project.title}
                </h3>
                <span className="font-semibold text-[#696969] leading-tight md:text-right" style={{ marginTop: isMobile ? '0px' : undefined }}>
                  {project.duration}
                </span>
              </div>
              <p className="font-semibold text-[#696969]" style={{ marginTop: '4px' }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}