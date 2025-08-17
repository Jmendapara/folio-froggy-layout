// About page component

export default function About() {
  return (
    <div className="p-8 space-y-12 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Hi there, I'm Raina. It's nice to meet you! 👋
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Profile Image */}
          <div className="w-full">
            <div 
              className="w-full bg-placeholder"
              style={{ aspectRatio: '4/5' }}
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
      
      {/* Creative Outlets Section */}
      <div className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
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
      
      {/* Footer Note */}
      <div className="pt-8">
        <p className="text-right text-xs text-muted-foreground">
          📍 Designed & illustrated by me in NYC.
        </p>
      </div>
    </div>
  );
}