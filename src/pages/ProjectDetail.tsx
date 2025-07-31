import { useParams, Navigate } from "react-router-dom";

const projectContent = {
  "object-oriented-design": {
    title: "Object oriented design: How we're using data to define the future of business experiences",
    sections: [
      {
        type: "text",
        content: "Object oriented business development that better align to your business and personal outcomes separately after requiring from online banking is important—just they were using customer-centric framework, streamlining to financial risk and usability terms."
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
        content: "I set a point research many people made by INTRO to them via machine learning to understand customer service and balance interactions. We pick a point around how many people manage to streamline interaction service and balance financial access."
      },
      {
        type: "text",
        content: "Research summary"
      },
      {
        type: "text",
        content: "Current digital business marketing efforts on our customer experience throughout the business framework to our customer experience..."
      },
      {
        type: "heading",
        content: "Object oriented design framework"
      },
      {
        type: "image"
      },
      {
        type: "heading",
        content: "Why object oriented design?"
      },
      {
        type: "text",
        content: "Based upon customer data and our key business understanding of how we can improve object relationships connected with current business strategy and framework to our information. The following outlines product goals."
      },
      {
        type: "heading",
        content: "Our application of object oriented design"
      },
      {
        type: "image"
      },
      {
        type: "text",
        content: "A strategy framework is built to interact with customer service that can create a powerful set for our most customer leaders to help to effectively enable us how objects and customer relationships and balance customer data flows..."
      },
      {
        type: "heading",
        content: "Customer journey mapping"
      },
      {
        type: "image"
      },
      {
        type: "heading",
        content: "The impact"
      },
      {
        type: "stats",
        stats: [
          { number: "64%", description: "Decrease in operational costs to fintech" },
          { number: "21%", description: "Costs reduced by a business implementing UX" },
          { number: "$1.7m", description: "Estimated indirect revenues from servicing costs" }
        ]
      },
      {
        type: "heading",
        content: "Next steps"
      },
      {
        type: "text",
        content: "We discovered that up some understanding to understand why a lot of information detail revealed to our management discovery that most details are to outline A full page payment detailed page which will give us flow service to introduce most new segment aligned as our product gained."
      },
      {
        type: "image"
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
    <div className="p-8 max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground mb-8">{project.title}</h1>
      
      <div className="space-y-6">
        {project.sections.map((section, index) => {
          switch (section.type) {
            case 'heading':
              return (
                <h2 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
                  {section.content}
                </h2>
              );
            case 'text':
              return (
                <p key={index} className="text-foreground leading-relaxed">
                  {section.content}
                </p>
              );
            case 'image':
              return (
                <div key={index} className="w-full bg-placeholder rounded-md my-6" style={{ aspectRatio: '900/370' }}>
                </div>
              );
            case 'stats':
              return (
                <div key={index} className="flex justify-between items-center my-8 py-8 border-t border-b border-border">
                  {section.stats?.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-sm text-muted-foreground mt-2">{stat.description}</div>
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