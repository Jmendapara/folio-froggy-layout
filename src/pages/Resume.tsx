export default function Resume() {
  const experience = [
    {
      title: "Senior UX Designer",
      company: "TechCorp Inc.",
      duration: "2023 - Present",
      description: "Led design initiatives for enterprise banking solutions, focusing on user research and data-driven design decisions.",
    },
    {
      title: "UX Designer",
      company: "FinanceFlow",
      duration: "2021 - 2023",
      description: "Designed payment interfaces and business tools, conducted user testing and prototyping for small business solutions.",
    },
    {
      title: "Junior UX Designer",
      company: "StartupLab",
      duration: "2019 - 2021",
      description: "Worked on mobile applications and web platforms, collaborated with cross-functional teams on product development.",
    },
  ];

  const skills = [
    "User Research",
    "Prototyping",
    "Information Architecture",
    "Interaction Design",
    "Usability Testing",
    "Design Systems",
    "Figma",
    "Sketch",
    "Adobe Creative Suite",
    "HTML/CSS",
  ];

  const education = [
    {
      degree: "Master of Human-Computer Interaction",
      school: "Carnegie Mellon University",
      year: "2019",
    },
    {
      degree: "Bachelor of Graphic Design",
      school: "Rhode Island School of Design",
      year: "2017",
    },
  ];

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Resume</h1>
        <div className="text-lg text-muted-foreground space-y-1">
          <p>UX Designer & Researcher</p>
          <p>New York City, NY</p>
          <p>email@example.com | (555) 123-4567</p>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6 border-b border-border pb-2">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-foreground">{job.title}</h3>
                  <p className="text-lg text-muted-foreground">{job.company}</p>
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {job.duration}
                </span>
              </div>
              <p className="text-foreground leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6 border-b border-border pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-accent px-4 py-2 rounded-md text-accent-foreground text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6 border-b border-border pb-2">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}