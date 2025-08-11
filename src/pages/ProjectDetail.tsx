import { useParams, Navigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectContent = {
  "object-oriented-design": {
    title: "Object oriented design: How we're using data to define the future of business experiences",
    sections: [
      {
        type: "image"
      },
      {
        type: "project-details"
      },
      {
        type: "problem-statement"
      },
      {
        type: "heading",
        content: "Research"
      },
      {
        type: "image"
      },
      {
        type: "text",
        content: "In Q4 of 2022, I conducted a user research study to further validate the customer need for a separated business and personal banking experience. Here were the major takeaways from the study:"
      },
      {
        type: "image-text"
      },
      {
        type: "heading",
        content: "Object oriented design framework"
      },
      {
        type: "text-bold",
        content: "I used the object oriented design framework to approach this problem. It is the process of \"putting object design before procedural action design and thinking about a system through the lens of the real-world objects in a user's mental model (products, tutorials, locations), not digital-world actions (search, filter, compare, check out)\" -Sophia V. Prater from 'Object Oriented Design'."
      },
      {
        type: "heading",
        content: "Why object oriented design?"
      },
      {
        type: "four-column"
      },
      {
        type: "text",
        content: "We leveraged this framework to help us answer the following questions about a separated business experience:"
      },
      {
        type: "heading",
        content: "Our application of object oriented design"
      },
      {
        type: "image-caption",
        content: "My design partner and I white boarding how our available customer data can be used to group all of their business accounts under a single login."
      },
      {
        type: "text",
        content: "After doing a thorough audit of the customer and account data that we have available today, I pulled in one of my design partners to help me leverage the object oriented design framework."
      },
      {
        type: "text-bold",
        content: "We focused specifically on the user to business object relationship as they were our biggest points of ambiguity based on our research when trying to understand how the data for a multi-profile banking experience would be structured."
      },
      {
        type: "text-bold",
        content: "We workshopped both in-person and virtually to organize the data into logical groupings that informed us of any dependencies."
      },
      {
        type: "text-bold",
        content: "We were able to understand what makes up both user and business objects, and how they are connected to each other."
      },
      {
        type: "major-takeaway"
      },
      {
        type: "image-text"
      },
      {
        type: "heading",
        content: "Customer journey mapping"
      },
      {
        type: "image"
      },
      {
        type: "text",
        content: "We were able to map out a new business-centric user experience that clearly defined the relationship between our backend engineering and how that relates to the user experience on the front end. I narrated this relationship through the lens of a customer journey:"
      },
      {
        type: "carousel-caption",
        content: "My slide deck presentation that I shared out to design, product, and tech partners."
      },
      {
        type: "heading",
        content: "The impact"
      },
      {
        type: "three-column"
      }
    ]
  },
  "business-profile-space": {
    title: "Building a digital financial hub for small business owners within their banking platform",
    sections: [
      {
        type: "text",
        content: "Small business customers leverage a number of different financial solutions to support day to day tasks without a means for integrating information across these various solutions in order to get a full financial picture of their business health."
      },
      {
        type: "heading",
        content: "Our solution"
      },
      {
        type: "text",
        content: "Our business hub channel will be developed to create a business home page where one can access and perform lead impact despite their most customer B. Plan financial solutions within the servicing platform designed to keep their focus base app in a helpful experience we also offering helpful checking service and resolution during connections."
      },
      {
        type: "heading",
        content: "The research"
      },
      {
        type: "image"
      },
      {
        type: "heading",
        content: "The design process"
      },
      {
        type: "text",
        content: "I worked closely with the team to make sure to design the understanding of our future customers coordinate a so solution continue to work they need with main and challenge our feedback."
      },
      {
        type: "image"
      },
      {
        type: "text",
        content: "Our solution can be shared most points our team with our business team in our relationship with customers in improving including our tech team to experience the thinking of our delivery. We find outcomes of whether the design after the tool right be helpful to design bringing bringing feedback on context, clearly, who is directly integrated to the thinking of future context, solutions."
      },
      {
        type: "image"
      },
      {
        type: "text",
        content: "our software can use all their user impacts of the solutions can access and tracking these feedback solution for environment helping us and us confident service or and challenge framework during all resolution be available to better help service or financial solution check how we developed a common solution."
      },
      {
        type: "image"
      },
      {
        type: "heading",
        content: "Design QA & performance tracking"
      },
      {
        type: "text",
        content: "Make sure project finance and many QA and help keeping working with their app in place financial as we collaborating for reviewing markings and or other apps where service bringing us all related to the most as part all for help keeping very challenging we so experience the service or financial development be understand for many."
      },
      {
        type: "image"
      },
      {
        type: "heading",
        content: "Next steps"
      },
      {
        type: "text",
        content: "Multi-level access — Research to find the secondary connections for enabling customer access for their business user view"
      },
      {
        type: "text",
        content: "Secondary more views — The challenge to understand if the help need to help and helping user view"
      },
      {
        type: "text",
        content: "Monitor expense feedback — A challenge for us to provide solution to improve our most application team view and helping customer can more easily customer to our financial solutions tracking in order to think about best solution on our customer service or financial experience"
      }
    ]
  },
  "payments-adoption": {
    title: "An exploration servicing design: How can we better connect our customer service agents to our end users and their pain points?",
    sections: [
      {
        type: "heading",
        content: "Background"
      },
      {
        type: "text",
        content: "Capital One offers small business agents an accounts payable solution positioned by our third-party partner, Melio that offers easy point experience to the delivered B2 their workflow as an after care engagement layer."
      },
      {
        type: "image"
      },
      {
        type: "text",
        content: "The agent and our resources to deliver on this segment and a virtual solution helping business users most core point segment delivery delivery delivery solution to provide solution of various."
      },
      {
        type: "text",
        content: "Problem statement"
      },
      {
        type: "text",
        content: "Unable to leverage customer payment data prevents agents from reaching issues within our Accounts Payable products, resulting in long service times, frequent transfers to our third-party partner Melio, and dropped calls. As a result, 65% of cases are handed off to Melio, with no visibility into resolution outcomes."
      },
      {
        type: "heading",
        content: "Our solution"
      },
      {
        type: "text",
        content: "We know that solution to build a more robust and coherent accounts payable agent experience that great agents into information and tools they needed to better an a easier to lead their service and experience benefit."
      },
      {
        type: "text",
        content: "We believe that this digital way to be the think and help businesses from MELIO AP to launch a business view for once competes before within that servicing platform designed to keep track they these new that Melio important we also offering helpful receiving view after resolution during experiences."
      },
      {
        type: "image"
      },
      {
        type: "text",
        content: "Should we the payment answer design in at the really viewpoint structure follow On too lights and new and impact center for use at a servicing agent view payable view."
      },
      {
        type: "heading",
        content: "Usability testing"
      },
      {
        type: "text",
        content: "To validate our hypothesis that agents will be able to resolve and solve that they required information to help Accounts Payable users I conducted a usability test."
      },
      {
        type: "image"
      },
      {
        type: "text",
        content: "Based on the feedback across feedback on the call feedback based on our financial ability and providing would not very helpful during more testing along."
      },
      {
        type: "heading",
        content: "Methodology"
      },
      {
        type: "text",
        content: "• Interviewed conducted user"
      },
      {
        type: "text",
        content: "• Exact testing and improvement business feedback testing to research"
      },
      {
        type: "text",
        content: "• Definitions on testing for complexity of service and"
      },
      {
        type: "text",
        content: "• Service and — understand features that could be added"
      },
      {
        type: "text",
        content: "All participants were Capital One business customers within one solution experience, both On too lights and new and improvements our new work with the local product and design team."
      },
      {
        type: "heading",
        content: "Goals"
      },
      {
        type: "text",
        content: "• Exact testing and improvement"
      },
      {
        type: "text",
        content: "• Service and 1 expert solutions"
      },
      {
        type: "text",
        content: "• Definitions to testing for provide our"
      },
      {
        type: "text",
        content: "• Defining multiple customer would give out helpful during more testing along as providing would not very helpful during testing along providing would not very helpful during more testing along."
      },
      {
        type: "heading",
        content: "Results"
      },
      {
        type: "text",
        content: "• We collect positive feedback on the UI feedback provided by on our thinking"
      },
      {
        type: "text",
        content: "• Service feedback business and important feedback"
      },
      {
        type: "text",
        content: "• providing would not very helpful during more testing along providing would not very helpful during more testing along."
      },
      {
        type: "heading",
        content: "The impact"
      },
      {
        type: "text",
        content: "After launching our new servicing business, we checked a few variation method first few some solution institution"
      },
      {
        type: "stats",
        stats: [
          { number: "64%", description: "Decrease in transfers to Melio" },
          { number: "21%", description: "Costs reduced in platform implementing UX" },
          { number: "$1.7m", description: "In purchase indirect revenues from servicing costs" }
        ]
      },
      {
        type: "heading",
        content: "Next steps"
      },
      {
        type: "text",
        content: "We discovered that we were streamlining to understand why a lot of information detail revealed in our management discovery that most details are to outline A full page payment detailed page which will give us flow service to introduce most new segment aligned as our product gained."
      },
      {
        type: "text",
        content: "I worked creating a independently to environment of this skill, and conducted this work with the local product and design team."
      },
      {
        type: "image"
      }
    ]
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  
  if (!projectId || !projectContent[projectId as keyof typeof projectContent]) {
    return <Navigate to="/" replace />;
  }
  
  const project = projectContent[projectId as keyof typeof projectContent];
  
  return (
    <div className="p-8 max-w-full">
      <h1 className="text-[32px] font-bold text-black font-rufina mb-8">{project.title}</h1>
      
      {/* Hero Image */}
      <div className="mb-6">
        <img 
          src={`https://picsum.photos/900/370?random=${Math.random()}`}
          alt="Project overview"
          className="w-full"
          style={{ aspectRatio: '900/370', borderRadius: '0px' }}
        />
        <p className="text-center text-xs font-bricolage" style={{ color: '#6B6B6B', marginTop: '16px' }}>Project overview image</p>
      </div>
      
      <div className="space-y-6">
        {project.sections.map((section, index) => {
          switch (section.type) {
            case 'heading':
              return (
                <h2 key={index} className="text-[24px] font-bold font-rufina mt-8 mb-4" style={{ color: '#0C5949' }}>
                  {section.content}
                </h2>
              );
            case 'text':
              return (
                <p key={index} className="text-xs text-black leading-relaxed font-bricolage">
                  {section.content}
                </p>
              );
            case 'text-bold':
              return (
                <p key={index} className="text-xs text-black leading-relaxed font-bricolage">
                  {section.content?.includes('object oriented design framework') ? (
                    <>
                      I used the <strong>object oriented design framework</strong> to approach this problem. It is the process of "<strong>putting object design before procedural action design</strong> and thinking about a system through the lens of the real-world objects in a user's mental model (products, tutorials, locations), not digital-world actions (search, filter, compare, check out)" -Sophia V. Prater from 'Object Oriented Design'.
                    </>
                  ) : section.content?.includes('focused specifically') ? (
                    <>
                      We <strong>focused specifically on the user to business object relationship</strong> as they were our biggest points of ambiguity based on our research when trying to understand how the data for a multi-profile banking experience would be structured.
                    </>
                  ) : section.content?.includes('workshopped') ? (
                    <>
                      We <strong>workshopped both in-person and virtually</strong> to organize the data into logical groupings that informed us of any dependencies.
                    </>
                  ) : section.content?.includes('what makes up') ? (
                    <>
                      We were able to understand <strong>what makes up both user and business objects, and how they are connected to each other.</strong>
                    </>
                  ) : (
                    section.content
                  )}
                </p>
              );
            case 'image':
              return (
                <div key={index}>
                  <img 
                    src={`https://picsum.photos/900/370?random=${index + Math.random()}`}
                    alt="Project image"
                    className="w-full mt-6"
                    style={{ aspectRatio: '900/370', borderRadius: '0px' }}
                  />
                  <p className="text-center text-xs font-bricolage mb-6" style={{ color: '#6B6B6B', marginTop: '16px' }}>Image description placeholder</p>
                </div>
              );
            case 'image-caption':
              return (
                <div key={index}>
                  <img 
                    src={`https://picsum.photos/900/370?random=${index + Math.random()}`}
                    alt="Project image"
                    className="w-full mt-6"
                    style={{ aspectRatio: '900/370', borderRadius: '0px' }}
                  />
                  <p className="text-center text-xs font-bricolage mb-6" style={{ color: '#6B6B6B', marginTop: '16px' }}>{section.content}</p>
                </div>
              );
            case 'project-details':
              return (
                <div key={index} className="my-8 text-xs text-black space-y-2 font-bricolage">
                  <div><strong>Company:</strong> Capital One (small business card team)</div>
                  <div><strong>Timeline:</strong> January 2023 - August 2023 (side of desk project)</div>
                  <div><strong>Tools & methodologies:</strong> Information architecture diagramming, object oriented design</div>
                  <div><strong>Role:</strong> UX designer (project lead)</div>
                </div>
              );
            case 'problem-statement':
              return (
                <div key={index} className="my-8 p-6" style={{ backgroundColor: '#EEE8D5', borderRadius: '0px' }}>
                  <div className="text-xs font-bricolage mb-4" style={{ color: '#0C5949' }}>Problem statement</div>
                  <h3 className="text-[20px] font-bold font-rufina leading-relaxed" style={{ color: '#0B5451' }}>
                    82% of small business customers reported that being able to view business and personal accounts 
                    separately after logging into online banking is important—yet they were using consumer-centric 
                    interfaces, contributing to financial risk and usability issues.
                  </h3>
                </div>
              );
            case 'image-text':
              return (
                <div key={index} className="my-8 flex gap-8">
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-black font-bricolage mb-2">Research Insights</h3>
                    <p className="text-xs text-black font-bricolage leading-relaxed">
                      Through extensive user research, we identified key pain points in the current banking experience and opportunities for improvement.
                    </p>
                    <p className="text-xs text-black font-bricolage leading-relaxed mt-4">
                      The data revealed critical gaps between user expectations and the current system capabilities.
                    </p>
                  </div>
                  <div className="w-80">
                    <img 
                      src={`https://picsum.photos/300/400?random=${index + Math.random()}`}
                      alt="Research insights"
                      className="w-full"
                      style={{ aspectRatio: '300/400', borderRadius: '0px' }}
                    />
                    <p className="text-center text-xs font-bricolage mt-4" style={{ color: '#6B6B6B' }}>Research findings visualization</p>
                  </div>
                </div>
              );
            case 'four-column':
              return (
                <div key={index} className="my-8">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xs font-bold text-black font-bricolage mb-3">User Research</h3>
                      <p className="text-xs text-black font-bricolage leading-relaxed">
                        Conducted comprehensive user interviews and surveys to understand customer pain points and needs.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-black font-bricolage mb-3">Design Framework</h3>
                      <p className="text-xs text-black font-bricolage leading-relaxed">
                        Developed a scalable object-oriented design system that separates business and personal banking experiences.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-black font-bricolage mb-3">Implementation</h3>
                      <p className="text-xs text-black font-bricolage leading-relaxed">
                        Created detailed specifications and worked with development teams to ensure proper implementation.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-black font-bricolage mb-3">Validation</h3>
                      <p className="text-xs text-black font-bricolage leading-relaxed">
                        Performed usability testing and gathered feedback to validate design decisions and iterate on solutions.
                      </p>
                    </div>
                  </div>
                </div>
              );
            case 'major-takeaway':
              return (
                <div key={index} className="my-8 p-6" style={{ backgroundColor: '#EEE8D5', borderRadius: '0px' }}>
                  <div className="text-xs font-bricolage mb-4" style={{ color: '#0C5949' }}>Major takeaway</div>
                  <h3 className="text-[20px] font-bold font-rufina leading-relaxed" style={{ color: '#0B5451' }}>
                    All customers are 'user' objects, some of which have a relationship with a business entity.
                  </h3>
                </div>
              );
            case 'carousel-caption':
              return (
                <div key={index} className="my-8">
                  <Carousel className="w-full max-w-3xl mx-auto">
                    <CarouselContent>
                      <CarouselItem>
                        <img 
                          src={`https://picsum.photos/900/370?random=${100 + Math.random()}`}
                          alt="Carousel image 1"
                          className="w-full"
                          style={{ aspectRatio: '900/370', borderRadius: '0px' }}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src={`https://picsum.photos/900/370?random=${200 + Math.random()}`}
                          alt="Carousel image 2"
                          className="w-full"
                          style={{ aspectRatio: '900/370', borderRadius: '0px' }}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src={`https://picsum.photos/900/370?random=${300 + Math.random()}`}
                          alt="Carousel image 3"
                          className="w-full"
                          style={{ aspectRatio: '900/370', borderRadius: '0px' }}
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="bg-white border-gray-300">
                      <ChevronLeft className="h-4 w-4" />
                    </CarouselPrevious>
                    <CarouselNext className="bg-white border-gray-300">
                      <ChevronRight className="h-4 w-4" />
                    </CarouselNext>
                  </Carousel>
                  <p className="text-center text-xs font-bricolage mt-4" style={{ color: '#6B6B6B' }}>
                    {section.content}
                  </p>
                </div>
              );
            case 'three-column':
              return (
                <div key={index} className="flex justify-between items-center my-8 py-8">
                  <div className="text-center">
                    <h3 className="text-[20px] font-bold" style={{ color: '#0B5451' }}>64%</h3>
                    <div className="text-xs text-black font-bricolage mt-2">Decrease in operational costs to fintech</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[20px] font-bold" style={{ color: '#0B5451' }}>21%</h3>
                    <div className="text-xs text-black font-bricolage mt-2">Costs reduced by a business implementing UX</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[20px] font-bold" style={{ color: '#0B5451' }}>$1.7m</h3>
                    <div className="text-xs text-black font-bricolage mt-2">Estimated indirect revenues from servicing costs</div>
                  </div>
                </div>
              );
            case 'stats':
              return (
                <div key={index} className="flex justify-between items-center my-8 py-8">
                  {section.stats?.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <h3 className="text-[20px] font-bold" style={{ color: '#0B5451' }}>{stat.number}</h3>
                      <div className="text-xs text-black font-bricolage mt-2">{stat.description}</div>
                    </div>
                  ))}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}