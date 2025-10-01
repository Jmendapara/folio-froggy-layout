// About page component

import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

      const isMobile = useIsMobile();
    

  return (
    <div className="p-8 max-w-full">
      {/* Header Section */}
      <div className="space-y-8">
        <h1 className="text-[32px] font-bold font-rufina mb-14">
          Hi there, I'm Raina. It's nice to meet you! 👋
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Profile Image */}
          <div className={`w-full align-items-center justify-content-center ${isMobile ? "" : "pr-8 mb-14"}`}>
            <div 
              
              style={{ aspectRatio: '4/5'}}

            ><img src="/profile/profilepic.png"></img></div>
          </div>
          
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                A TLDR on who I am...
              </p>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🧠</span>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">A strategic thinker with a technical edge</h3>
                      <p className="text-sm text-foreground leading-relaxed">
                        My UX approach <strong>blends analytical problem-solving with creative insight</strong>, enabling me to craft user experiences that are both intuitive and technically sound. With a foundation in computer science, I bring a <strong>systems-level perspective to every project</strong>, ensuring design decisions align with business goals, user needs, and technical realities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">👥</span>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">An advocate for collaborative communities</h3>
                      <p className="text-sm text-foreground leading-relaxed">
                        My favorite part about being a UX designer is getting the opportunity to foster close <strong>collaboration across design disciplines</strong> like content and research, while also learning from the diverse perspectives of my <strong>cross-functional product and tech partners</strong>. A holistic approach to problem solving ultimately leads to <strong>inclusive and sustainable solutions</strong>.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🐕</span>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">A dog enthusiast</h3>
                      <p className="text-sm text-foreground leading-relaxed">
                        I admire my dog's simple living and the way he scratches his back on the grass. When I'm not designing, you can find me hanging out with him or picking out his eye boogies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="my-8 px-6 pb-6 mb-16" style={{ backgroundColor: '#EEE8D5', borderRadius: '0px' }}>
                 
                  <div className={`gap-6 md:gap-0 ${isMobile ? 'flex flex-col' : 'flex flex-col md:flex-row justify-between items-center'}`} style={{ alignItems: "start"}}>
                      <div className="text-center" style={{width: "100%"}}>
                        <h3 className="text-[60px] font-bold font-rufina" style={{ color: '#0C5949', lineHeight: ".5", paddingTop: "32px"}}>{"“"}</h3>
                        <div className="text-sm text-foreground leading-relaxed px-4">{"Raina clearly sets a high visual bar, digs deep into exploration, and is a clear communicator with their point of view."}</div>
                      </div>
                      <div className="text-center" style={{width: "100%"}}>
                        <h3 className="text-[60px] font-bold font-rufina" style={{ color: '#0C5949', lineHeight: ".5", paddingTop: "32px"}}>{"“"}</h3>
                        <div className="text-sm text-foreground leading-relaxed px-4">{"Raina has been a powerhouse of a teammate this year, not only leading her own lane of work, but by jumping into wherever design support has been needed."}</div>
                      </div>
                      <div className="text-center" style={{width: "100%"}}>
                        <h3 className="text-[60px] font-bold font-rufina" style={{ color: '#0C5949', lineHeight: ".5", paddingTop: "32px"}}>{"“"}</h3>
                        <div className="text-sm text-foreground leading-relaxed px-4">{"Raina has a great learning attitude. She wants to improve how she delivers designs and to be an excellent partner."}</div>
                      </div>
                  </div>

                </div>

      {/* Creative Outlets Section */}
      <div className="space-y-8">
        <h2  className="text-[24px] font-bold font-rufina mb-4" style={{ marginTop: isMobile ? '32px' : '32px' }}>
          I'm also a creative who loves exploring different outlets and mediums
        </h2>
        
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ceramics & Pottery */}
          <div className="space-y-4">
            <div 
              className="w-full bg-placeholder"
              style={{ aspectRatio: '1/1' }}
            ><img src="/profile/pottery.png"></img></div>
            <h3 className="text-center font-medium text-foreground">Ceramics & pottery</h3>
          </div>
          
          {/* Film Photography */}
          <div className="space-y-4">
            <div 
              className="w-full bg-placeholder"
              style={{ aspectRatio: '1/1' }}
            ><img src="/profile/africa.png"></img></div>
            <h3 className="text-center font-medium text-foreground">Film photography</h3>
          </div>
          
          {/* Illustrating Prints & Merch */}
          <div className="space-y-4">
            <div 
              className="w-full bg-placeholder"
              style={{ aspectRatio: '1/1' }}
            ><img src="/profile/market.png"></img></div>
            <h3 className="text-center font-medium text-foreground">Illustrating prints & merch</h3>
          </div>
        </div>
      </div>
     
    </div>
  );
}