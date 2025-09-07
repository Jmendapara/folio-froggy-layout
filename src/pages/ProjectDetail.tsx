import { useParams, Navigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Cell } from "recharts";
import { useEffect } from "react";

const projectContent = {
  "object-oriented-design": {
    title: "Object oriented design: How we're using data to define the future of business experiences",
    sections: [
      {
        type: "image",
        path: "/ood/1.png",
      },
      {
        type: "project-details",
        details: [{title: "Company", description: "Capital One (small business card team)"},{title: "Timeline", description: "January 2023 - August 2023 (side of desk project)"},{title: "Tools & methodologies", description: "Information architecture diagramming, object oriented design"},{title: "Role", description: "UX designer (project lead)"}]
      },
      {
        type: "problem-statement"
      },
      {
        type: "heading",
        content: "Research"
      },
      {
        type: "image",
        path: "/ood/2.png"
      },
      {
        type: "text",
        content: "In Q4 of 2022, I conducted a user research study to further validate the customer need for a separated business and personal banking experience. Here were the major takeaways from the study:"
      },
      {
        type: "image-text",
        path: "/ood/3.png"
      },
      {
        type: "heading",
        content: "Object oriented design framework"
      },
      {
        type: "image",
        path: "/ood/4.png"
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
        type: "questions",
      },
      {
        type: "heading",
        content: "Our application of object oriented design"
      },
      {
        type: "image",
        path: "/ood/5.png",
        caption: "My design partner and I white boarding how our available customer data can be used to group all of their business accounts under a single login."
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
        type: "image-text-2",
        path: "/ood/6.png"
      },
      {
        type: "heading",
        content: "Customer journey mapping"
      },
      {
        type: "image",
        path: "/ood/7.png"
      },
      {
        type: "text",
        content: "We were able to map out a new business-centric user experience that clearly defined the relationship between our backend engineering and how that relates to the user experience on the front end. I narrated this relationship through the lens of a customer journey:"
      },
      {
        type: "carousel-caption",
        imgs: ["/ood/8.png","/ood/9.png","/ood/10.png","/ood/11.png","/ood/12.png",],
        content: "My slide deck presentation that I shared out to design, product, and tech partners."
      },
      {
        type: "heading",
        content: "The impact"
      },
      {
        type: "three-column-detailed",
        columns: [
          {
            title: "1",
            points: [
              "Alignment with my tech and product partners on future roadmaps and goals",
            ]
          },
          {
            title: "2",
            points: [
              "Awareness of a technical heavy approach to product development across my design org"
            ]
          },
          {
            title: "3",
            points: [
              "Higher involvement in non-design practices and rituals alongside partners"
            ]
          }
        ]
      },
    ]
  },
  "business-profile-space": {
    title: "Building a digital financial hub for small business owners within their banking platform",
    sections: [
      {
        type: "image",
        path: "/business-dashboard/13.png"
      },
      {
        type: "project-details",
        details: [{title: "Company", description: "Capital One (small business card team)"},{title: "Timeline", description: "February 2024-August 2024"},{title: "Tools & methodologies", description: "Prototyping, UI design, QA review"},{title: "Role", description: "UX designer (co-design lead)"}]
      },
      {
        type: "problem-statement",
        content: "Small business customers leverage a number of different financial solutions to support day to day tasks without a means for integrating information across these various solutions in order to get a full financial picture of their business' health."
      },
      {
        type: "heading",
        content: "Our solution"
      },
      {
        type: "text-bold",
        content: "My partners and I decided we wanted to create a 'Business Home' page where users can access data, products, and insights about their small business in a single, cohesive digital forum."
      },
      {
        type: "text-bold",
        content: "For our MVP, we decided to keep our demographic to single product, single business customers to keep the scope small and use an iterative approach to scale the page."
      },
      {
        type: "heading",
        content: "The research"
      },
      {
        type: "text",
        content: "In order to validate both the customer and business need, my research partner conducted a handful of studies. Here are some quotes from participants:"
      },
      {
        type: "image",
        path: "/business-dashboard/14.png"
      },
      {
        type: "heading",
        content: "The design process"
      },
      {
        type: "text-bold",
        content: "After several rounds of design iteration, our team recognized that given the novelty and significance of this feature, complete confidence in a 'perfect' solution would only come with real-world usage and feedback."
      },
      {
        type: "text",
        content: "Embracing an iterative mindset, we partnered closely with our product and engineering counterparts to balance delivery speed, business objectives, and user needs—aligning on a clear hypothesis for what an ideal MVP dashboard could look like."
      },
      {
        type: "image",
        path: "/business-dashboard/15.png",
        caption: "My design partner and I went through many iterations of the dashboard where we explored placements, various features, and visual treatments"
      },
      {
        type: "text",
        content: "Over the course of 3 weeks, my design partner and I went to multiple design forums to get feedback on content, visuals, and customer experience. We finally got official design approval for the following screens."
      },
      {
        type: "2-gifs",
        path: "/business-dashboard/16.gif",
      },
      {
        type: "text-bold",
        content: "We crafted the content and visuals on the page using data we already had access to. To encourage exploration, we funneled users to our existing products and features with high engagement through thoughtful links and visualizations. We also added a feedback touchpoint as an easy way for users to share their thoughts in their own words, complementing the behavioral insights we were already gathering behind the scenes. Here's a visual breakdown of the page:"
      },
      {
        type: "image",
        path: "/business-dashboard/18.png",
        caption: "We designed the page to be modular, with each business feature housed in its own dedicated widget."
      },
      {
        type: "heading",
        content: "Design QA & performance tracking"
      },
      {
        type: "text",
        content: "With this page being a custom build, we worked really closely with our tech partners to ensure we were designing for technical feasibility on all edge cases, while also monitoring the build in QA to avoid any disparities from the original design."
      },
      {
        type: "text",
        content: "Once the page was live, we stayed close to our live analytics by having weekly checkins where we oversaw page engagement and troubleshooted any unexpected bugs."
      },
      {
        type: "image",
        path: "/business-dashboard/19.png",
        caption: "A look into our weekly refinement sessions where we monitored clickstream data and success metrics"
      },
      {
        type: "heading",
        content: "Next steps"
      },
      {
        type: "three-column-custom",
        columns: [
          {
            title: "Multi-card users",
            description: ["We look to adapt this dashboard to aggregate multiple account data into one, cohesive business view.", "This will allow users to get a glimpse at the full ecosystem of their business's financial health."]
          },
          {
            title: "Secondary user views",
            description: ["Account users and account managers don't have full access to the level of detail that primary users do.", "They require a dashboard views that are personalized to their needs and access levels."]
          },
          {
            title: "Monitor success metrics",
            description: ["I worked with my tech team to put benchmarks into place to track clickstream and retention data.", "We look to use this data, along with ongoing research and auditing to craft the next iterations of the business dashboard."]
          }
        ]
      }
    ]
  },
  "payments-adoption": {
    title: "An exploration servicing design: How can we better connect our customer service agents to our end users and their pain points?",
    sections: [
      {
        type: "image",
        path: "/empath/20.png",
      },
      {
        type: "project-details",
        details: [{title: "Company", description: " Capital One (Small business card Accounts Payable team)"},{title: "Timeline", description: "November 2023 - January 2024"},{title: "Tools & methodologies", description: "User research, prototyping, UI design, service design"},{title: "Role", description: " UX designer (design lead)"}]
      },
      {
        type: "heading",
        content: "Background"
      },
      {
        type: "text",
        content: "Capital One offers small business users an accounts payable solution (powered by our third party partner, Melio) that allows any card payment to be delivered to their vendor as an alternate payment type."
      },
      {
        type: "image",
        path: "/empath/21.png",
        caption: "If the cardholder decides to deliver their payment as a virtual card, they incur no fees while also earning rewards on their card. Other payment delivery options include ACH transfers or checks."
      },
      {
        type: "problem-statement",
        content: "Limited access to customer payment data prevents agents from resolving issues within our Accounts Payable product, resulting in long service times, frequent transfers to our third-party partner Melio, and dropped calls. As a result, 63% of cases are handed off to Melio, with no visibility into resolution outcomes."
      },
      {
        type: "heading",
        content: "Our solution"
      },
      {
        type: "text",
        content: "My team and I aimed to build a more detailed and cohesive Accounts Payable agent experience that gave agents the information and tools they needed in order to self service our customers better."
      },
      {
        type: "text",
        content: "We decided that the best way to do this was to pull payment data from Melio's API to build a timeline view for each payment's status within the servicing platform (Empath). In the case that there was a failed payment, we also display failure reasons, along with troubleshooting directions."
      },
      {
        type: "image",
        path: "/empath/22.png",
        caption: "Shown are the payment drawer designs with the newly designed timeline view. On the right are two use cases for what a servicing agent could possibly see."
      },
      {
        type: "heading",
        content: "Usability testing"
      },
      {
        type: "text",
        content: "To validate our hypotheses that agents will be able to quickly and easily find the needed information to help Accounts Payable users, I conducted a usability test:"
      },
      {
        type: "image",
        path: "/empath/23.png",
      },
      {
        type: "three-column-detailed-2",
        columns: [
          {
            title: "Methodology",
            points: [
              "Moderated usability test",
              "5 servicing agents were asked a series of questions and servicing scenarios regarding Accounts Payable that they had to walk through given a Pay Vendors Empath prototype",
              "All participants were Capital One business credit card agents"
            ]
          },
          {
            title: "Goals",
            points: [
              "Gauge feelings and impressions surrounding new Empath experience",
              "Determine usability for completing a servicing call",
              "Get thoughts on additional features that could be added"
            ]
          },
          {
            title: "Results",
            points: [
              "We got very positive feedback on the timeline view of the container, and most agents said the information we are providing would be very helpful during their servicing calls",
              "Agents were open to even more information if possible, including definitions of the different timeline dates"
            ]
          }
        ]
      },
      {
        type: "heading",
        content: "The impact"
      },
      {
        type: "text",
        content: "After launching the new servicing features, we tracked a few success metrics that had some positive numbers:"
      },
      {
        type: "three-column-stats",
        stats: [
          {
            title: "64%",
            description: "Decrease in transfer rate to Melio"
          },
          {
            title: "21%",
            description: "Calls resulting in agents recommending AP"
          },
          {
            title: "$1.7m",
            description: "In purchase volume increase via servicing calls"
          }
        ]
      },
      {
        type: "heading",
        content: "Next steps"
      },
      {
        type: "text",
        content: "We understood that we were attempting to communicate a lot of information and visuals in one collapsable drawer. Our next steps are to create a full page payment details page, which will give us the real estate to include even more payment details as our product grows."
      },
      {
        type: "text",
        content: "I started ideating independently in anticipation of this shift, and socialized this work with my local product and design team."
      },
      {
        type: "image",
        path: "/empath/24.png",
        caption: "My initial ideations of a full screen view using our servicing specific design system. This page would be accessible by click"
      },
    ]
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const isMobile = useIsMobile();
  
  if (!projectId || !projectContent[projectId as keyof typeof projectContent]) {
    return <Navigate to="/" replace />;
  }
  
  const project = projectContent[projectId as keyof typeof projectContent];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [])
  
  return (
    <div className="p-8 max-w-full">
      <h1 className="text-[32px] font-bold text-black font-rufina">{project.title}</h1>
      
      <div className="space-y-6">
        {project.sections.map((section, index) => {
          switch (section.type) {
            case '2-gifs':
            return (
              <div key={index} className={`my-8 flex gap-8 ${isMobile ? 'flex-col' : 'flex-row'}`} style={{alignItems: "center", justifyContent: "center", display: "flex"

              }}>
                  <div className={`${isMobile ? 'w-100' : ''}`} style={{alignItems: "center", justifyContent: "flex-end", display: "flex", flexDirection:"column", width: !isMobile? "75%": "100%"}}>
                  <img 
                      src={"/business-dashboard/16.gif"}
                      alt="Research insights"
                      className="w-full"
                      style={{  borderRadius: '0px' }}
                    />
                  </div>
                  <div className={`${isMobile ? 'w-100' : 'm-8'}`} style={{alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection:"row", width: !isMobile? "23%": "100%"}}>
                    <img 
                      src={"/business-dashboard/17.gif"}
                      alt="Research insights"
                      className="w-full"
                      style={{  borderRadius: '0px' }}
                    />
                  </div>
                </div>
            )
            case 'heading':
              return (
                <h2 key={index} className="text-[24px] font-bold font-rufina mb-4" style={{ color: '#0C5949', marginTop: isMobile ? '24px' : '48px' }}>
                  {section.content}
                </h2>
              );
            case 'text':
              return (
                <p key={index} className="text-xs text-black leading-relaxed font-bricolage" style={{marginTop: "1em"}}>
                  {section.content}
                </p>
              );
            case 'text-bold':
              return (
                <p key={index} className="text-xs text-black leading-relaxed font-bricolage" style={{marginTop: "1em"}}>
                  {section.content?.includes('object oriented design framework') ? (
                    <>
                      I used the <strong>object oriented design framework</strong> to approach this problem. It is the process of "<strong>putting object design before procedural action design</strong> and thinking about a system through the lens of the real-world objects in a user's mental model (products, tutorials, locations), not digital-world actions (search, filter, compare, check out)" -Sophia V. Prater from <u>'Object Oriented Design'</u>.
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
                  ) : section.content?.includes('Business Home') ? (
                    <>
                      My partners and I decided <strong>we wanted to create a 'Business Home' page</strong> where users can access data, products, and insights about their small business in a single, cohesive digital forum.
                    </>
                  ) : section.content?.includes('single product') ? (
                    <>
                      For our MVP, we decided to keep our demographic to <strong>single product, single business customers</strong> to keep the scope small and use an iterative approach to scale the page.
                    </>
                  ) : section.content?.includes('complete confidence') ? (
                    <>
                      After several rounds of design iteration, our team recognized that given the novelty and significance of this feature, <strong>complete confidence in a 'perfect' solution would only come with real-world usage and feedback.</strong>
                    </>
                  ) : section.content?.includes('existing products') ? (
                    <>
                      We crafted the content and visuals on the page using data we already had access to. To encourage exploration, we funneled users to our <strong>existing products and features with high engagement</strong> through thoughtful links and visualizations. We also added a feedback touchpoint as an easy way for users to share their thoughts in their own words, complementing the behavioral insights we were already gathering behind the scenes. Here's a visual breakdown of the page:
                    </>
                  ) : (
                    section.content
                  )}
                </p>
              );
            case 'gif':
              return (
                <div key={index} style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                  <img 
                    src={section.path}
                    alt="Project image"
                    className="mt-6"
                    style={{ borderRadius: '0px' }}
                  />
                  {section.caption ? <p className="text-center text-xs font-bricolage mb-6" style={{ color: '#6B6B6B', marginTop: '16px' }}>{section.caption}</p> : null}
                </div>
              );
            case 'image':
              return (
                <div key={index} style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                  <img 
                    src={section.path}
                    alt="Project image"
                    className="mt-6"
                    style={{ borderRadius: '0px' }}
                  />
                  {section.caption ? <p className="text-center text-xs font-bricolage mb-6" style={{ color: '#6B6B6B', marginTop: '16px' }}>{section.caption}</p> : null}
                </div>
              );
              
            case 'project-details':
              return (
                <div key={index} className="mt-8 text-xs text-black space-y-1 font-bricolage" style={{marginBottom: "4em"}}>
                  {section.details.map((detail) => {
                      return <>
                      <div>{detail.title}:<strong style={{fontWeight:"600"}}> {detail.description}</strong></div>
                    </>
                     }
                    )}
                </div>
              );
            case 'problem-statement':
              return (
                <div key={index} className="my-8 p-6" style={{ backgroundColor: '#EEE8D5', borderRadius: '0px' }}>
                  <div className="text-xs font-bricolage mb-4" style={{ color: '#0C5949' }}>Problem statement</div>
                  <h3 className="text-[20px] font-bold font-rufina leading-relaxed" style={{ color: '#0B5451' }}>
                    {section.content || "82% of small business customers reported that being able to view business and personal accounts separately after logging into online banking is important—yet they were using consumer-centric interfaces, contributing to financial risk and usability issues."}
                  </h3>
                </div>
              );
            case 'image-text':
              return (
                <div key={index} className={`my-8 flex gap-8 ${isMobile ? 'flex-col' : 'md:flex-row'}`}>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-black font-bricolage mb-2">Overall sentiment</h3>
                    <p className="text-xs text-black font-bricolage leading-relaxed mt-4 mb-8">
                    Participants seemed to appreciate the split, with no major experience downsides for consumers. Majority of users noted that an account separation would mitigate risk with accounts and contacts when handling financial transactions.
                    </p>
                    <h3 className="text-xs font-bold text-black font-bricolage mb-2">Overall sentiment</h3>
                    <p className="text-xs text-black font-bricolage leading-relaxed mt-4  mb-8">
                    After completing one task, users pivoted to understand the value of having separated business accounts. This validates that small business users find the split view structure intuitive and routine.
                    </p>
                    <h3 className="text-xs font-bold text-black font-bricolage mb-2">Overall sentiment</h3>
                    <p className="text-xs text-black font-bricolage leading-relaxed mt-4  mb-8">
                    The cognitive load is easier with split accounts as it is cleaner and simple, reducing perceived financial risks.
                    </p>
                  </div>
                  <div className={`w-full md:w-80 ${isMobile ? '' : 'mx-8'}`} style={{alignItems: "center", justifyContent: "center", display: "flex", flexDirection:"column"}}>
                    <img 
                      src={section.path}
                      alt="Research insights"
                      className="w-full"
                      style={{ maxWidth: "175px", borderRadius: '0px' }}
                    />
                    <p className="text-center text-xs font-bricolage mt-4" style={{ color: '#6B6B6B' }}>Conceptual design of the profile switching experience we presented to participants</p>
                  </div>
                </div>
              );
              case 'image-text-2':
                return (
                  <div key={index} className={`my-8 flex gap-8 ${isMobile ? 'flex-col' : 'pt-8 md:flex-row'}`}>
                    <div className="flex-1 p-8" style={{display:"flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                      <div style={{display:"flex", flexDirection: "row"}}>
                      <p style={{fontSize: "10px", marginRight:"1em"}}>💡</p>
                      <p className="text-xs text-black font-bricolage leading-relaxed mb-8">
                      Each <strong>green bubble represented a user object,</strong> each with different roles for their business
                      </p>
                      </div>
                      <div style={{display:"flex", flexDirection: "row"}}>
                      <p style={{fontSize: "10px", marginRight:"1em"}}>💡</p>
                      <p className="text-xs text-black font-bricolage leading-relaxed mb-8">
                      <strong>Primary users</strong> (ex: Business owner) are the <strong>only user type allowed</strong> to open a business account
                      </p>
                      </div>
                     
                      <div style={{display:"flex", flexDirection: "row"}}>
                      <p style={{fontSize: "10px", marginRight:"1em"}}>💡</p>
                      <p className="text-xs text-black font-bricolage leading-relaxed mb-8">
                      This model serves as a <strong>valuable entry point for small business customers</strong> who are not already consumers to potentially use Capital One for their personal banking since they’ve already been onboarded with a consumer login.
                      </p>
                      </div>
                      
                    </div>
                    <div className={`w-full md:w-80 ${isMobile ? '' : 'mx-8'}`} style={{alignItems: "center", justifyContent: "center", display: "flex", flexDirection:"column"}}>
                      <img 
                        src={section.path}
                        alt="Research insights"
                        className="w-full"
                        style={{ maxWidth: "350px", borderRadius: '0px' }}
                      />
                      <p className="text-center text-xs font-bricolage mt-4" style={{ color: '#6B6B6B' }}>Research findings visualization</p>
                    </div>
                  </div>
                );
            case "questions":
              return (
                <>
                <p className="text-xs text-black font-bricolage leading-relaxed">
                ❓ What would the <strong>data architecture of a separated business and personal</strong> experience look like?
                </p>
                 <p className="text-xs text-black font-bricolage leading-relaxed" style={{marginTop: "8px"}}>
                 ❓ How does the <strong>data architecture inform the user experience</strong> of a separated business profile?
                 </p>
                 <p className="text-xs text-black font-bricolage leading-relaxed mt-0" style={{marginTop: "8px"}}>
                 ❓ What is the <strong>relationship between a personal and business profile</strong> in terms of what data they share and what data is independent?
                 </p>
                 </>
              );
            case 'four-column':
              return (
                <div key={index} className="my-8">
                  <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-4'}`}>
                    <div>
                      <h3 className="text-xs font-bold text-black font-bricolage mb-3">1</h3>
                      <p className="text-xs text-black font-bricolage leading-relaxed">
                      Breaks down complex ideas and experiences into manageable objects
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-black font-bricolage mb-3">2</h3>
                      <p className="text-xs text-black font-bricolage leading-relaxed">
                      Helps us understand the customer mental model
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-black font-bricolage mb-3">3</h3>
                      <p className="text-xs text-black font-bricolage leading-relaxed">
                      Structures information architecture in a way that avoids inconsistencies and repetition
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-black font-bricolage mb-3">4</h3>
                      <p className="text-xs text-black font-bricolage leading-relaxed">
                      An approach that helps bridge the gap between product, design, and tech teams
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
                   <Carousel className={`w-full mx-auto ${isMobile ? 'max-w-[90%]' : 'max-w'}`}>
                     <CarouselContent className={isMobile ? 'px-2' : 'md:px-0 px-8'}>
                     {section.imgs.map((img) => {
                      return <CarouselItem>
                      <img 
                        src={img}
                        alt="Carousel image 1"
                        className="w-full"
                        style={{ borderRadius: '0px' }}
                      />
                    </CarouselItem>
                     }
                    )}
                      
                     </CarouselContent>
                     <CarouselPrevious 
                       className="bg-white border-gray-300" 
                       style={{ 
                         left: isMobile ? '8px' : '16px' 
                       }}
                     >
                       <ChevronLeft className="h-4 w-4" />
                     </CarouselPrevious>
                     <CarouselNext 
                       className="bg-white border-gray-300" 
                       style={{ 
                         right: isMobile ? '8px' : '16px' 
                       }}
                     >
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
                <div key={index} className={`my-8 py-8 gap-6 md:gap-0 ${isMobile ? 'flex flex-col' : 'flex flex-col md:flex-row justify-between items-center'}`}>
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
            case 'three-column-detailed':
              return (
                <div key={index} className="my-8">
                  <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
                    {section.columns?.map((column, columnIndex) => (
                      <div key={columnIndex}>
                        <h3 className="text-base font-bold font-rufina mb-3" style={{ color: '#0C5949' }}>{column.title}</h3>
                        <ul className="space-y-2">
                          {column.points?.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-xs text-black font-bricolage leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
              case 'three-column-detailed-2':
                return (
                  <div key={index} className="my-8 pt-8">
                    <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
                        <div>
                          <h3 className="text-base font-bold font-rufina mb-3" style={{ color: '#0C5949' }}>Methodology</h3>
                          <ul className="space-y-2">
                              <li className="text-xs text-black font-bricolage leading-relaxed">
                              • <strong>Moderated</strong> usability test
                              </li>
                              <li className="text-xs text-black font-bricolage leading-relaxed">
                              • <strong>5 servicing agents</strong> were asked a series of questions and servicing scenarios regarding Accounts Payable that they had to walk through given a Pay Vendors Empath prototype
                              </li>
                              <li className="text-xs text-black font-bricolage leading-relaxed">
                              • All participants were Capital One business credit card agents
                              </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base font-bold font-rufina mb-3" style={{ color: '#0C5949' }}>Goals</h3>
                          <ul className="space-y-2">
                              <li className="text-xs text-black font-bricolage leading-relaxed">
                              • <strong>Gauge feelings and impressions</strong> surrounding new Empath experience
                              </li>
                              <li className="text-xs text-black font-bricolage leading-relaxed">
                              • <strong>Determine usability</strong> for completing a servicing call
                              </li>
                              <li className="text-xs text-black font-bricolage leading-relaxed">
                              • Get thoughts on <strong>additional features</strong> that could be added
                              </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base font-bold font-rufina mb-3" style={{ color: '#0C5949' }}>Results</h3>
                          <ul className="space-y-2">
                              <li className="text-xs text-black font-bricolage leading-relaxed">
                              • <strong>We got very positive feedback</strong>  on the timeline view of the container, and most agents said <strong>the information we are providing would be very helpful </strong>during their servicing calls.
                              </li>
                              <li className="text-xs text-black font-bricolage leading-relaxed">
                              • Agents were <strong>open to even more information if possible,</strong> including definitions of the different timeline dates.
                              </li>
                      
                          </ul>
                        </div>
                    </div>
                  </div>
                );
            case 'three-column-stats':
              return (
                <div key={index} className="my-8 py-8">
                  <div className={`gap-6 md:gap-0 ${isMobile ? 'flex flex-col' : 'flex flex-col md:flex-row justify-between items-center'}`}>
                    {section.stats?.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <h3 className="text-[40px] font-bold font-rufina" style={{ color: '#0C5949' }}>{stat.title}</h3>
                        <div className="text-xs text-black font-bricolage mt-2">{stat.description}</div>
                      </div>
                    ))}
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
            case 'three-column-custom':
              return (
                <div key={index} className="my-8">
                  <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
                    {section.columns?.map((column, columnIndex) => (
                      <div key={columnIndex}>
                        <h3 className="text-base font-bold font-rufina mb-3" style={{ color: '#0C5949' }}>{column.title}</h3>
                        {column.description?.map((desc, columnIndex) => (
                        <p className="text-xs text-black font-bricolage leading-relaxed" style={{marginBottom: "1em"}}>
                          {desc}
                        </p>
                        ))}
                      </div>
                    ))}
                  </div>
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