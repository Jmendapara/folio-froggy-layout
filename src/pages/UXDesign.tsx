import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export default function UXDesign() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const projects = [
    {
      id: "object-oriented-design",
      title: "Object oriented design: How we're using data to define the future of business experiences",
      description: "Information architecture diagramming, object oriented design",
      duration: "January 2025 - August 2025",
      image: "/lovable-uploads/105d1265-358e-48c5-b357-970420c776b5.png",
    },
    {
      id: "business-profile-space",
      title: "Building a business-centric profile space for small business owners within their banking platform",
      description: "User research, prototyping, UI design",
      duration: "May 2025 - August 2025, September 2024 - present",
      image: "/lovable-uploads/7ff08a28-def2-4948-b182-141a786d4543.png",
    },
    {
      id: "payments-adoption",
      title: "A journey to increase adoption of our business payments solutions products",
      description: "User research, prototyping, UI design, data auditing",
      duration: "September 2025 - February 2024",
      image: "/lovable-uploads/105d1265-358e-48c5-b357-970420c776b5.png",
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
              className="w-full cursor-pointer overflow-hidden"
              style={{ aspectRatio: '900/370', borderRadius: '0px' }}
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
              className="cursor-pointer space-y-4"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="flex justify-between items-start md:flex-row flex-col md:space-y-0 space-y-2">
                <h3 className="text-xs font-bold text-black leading-tight md:flex-1 md:pr-4 md:overflow-hidden md:text-ellipsis md:whitespace-nowrap">
                  {project.title}
                </h3>
                <span className="text-xs font-bold text-[#696969] md:w-1/2 md:text-right md:mt-0" style={{ marginTop: isMobile ? '0px' : undefined }}>
                  {project.duration}
                </span>
              </div>
              <p className="text-xs md:font-bold font-normal text-[#696969]" style={{ marginTop: '0px' }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}