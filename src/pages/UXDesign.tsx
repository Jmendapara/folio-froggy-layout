export default function UXDesign() {
  const projects = [
    {
      title: "Object oriented design: How we're using data to define the future of business experiences",
      description: "Information architecture diagramming, object oriented design",
      duration: "January 2025 - August 2025",
    },
    {
      title: "Building a business-centric profile space for small business owners within their banking platform",
      description: "User research, prototyping, UI design",
      duration: "May 2025 - August 2025, September 2024 - present",
    },
    {
      title: "A journey to increase adoption of our business payments solutions products",
      description: "User research, prototyping, UI design, data auditing",
      duration: "September 2025 - February 2024",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-2">UX design</h1>
        <h2 className="text-2xl text-foreground">Resume</h2>
      </div>

      {/* Projects */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Project Image Placeholder */}
            <div className="aspect-video bg-placeholder rounded-md"></div>
            
            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground leading-tight">
                {project.title}
              </h3>
              <p className="text-muted-foreground">
                {project.description}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {project.duration}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="flex items-center justify-end space-x-4 text-sm text-muted-foreground">
          <span>📧</span>
          <span>💼</span>
          <span>Designed & illustrated by me in NYC.</span>
        </div>
      </div>
    </div>
  );
}