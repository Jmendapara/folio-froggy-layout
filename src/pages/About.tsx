// About page component

import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";

const traits = [
  {
    emoji: "🧠",
    title: "A strategic thinker with a technical edge",
    body: (
      <>
        My UX approach <strong>blends analytical problem-solving with creative insight,</strong> enabling me to craft user experiences that are both intuitive and technically sound. With a foundation in computer science, I bring a <strong>systems-level perspective to every project</strong>, ensuring design decisions align with business goals, user needs, and technical realities.
      </>
    ),
  },
  {
    emoji: "👥",
    title: "An advocate for collaborative communities",
    body: (
      <>
        My favorite part about being a UX designer is getting the opportunity to foster close <strong>collaboration across design disciplines</strong> like content and research, while also learning from the diverse perspectives of my <strong>cross-functional product and tech partners</strong>. A holistic approach to problem solving ultimately leads to <strong>inclusive and sustainable solutions.</strong>
      </>
    ),
  },
  {
    emoji: "🐶",
    title: "A dog enthusiast",
    body: (
      <>
        I admire my dog’s simple living and the way he scratches his back on the grass. When I’m not designing, you can find me hanging out with him or picking out his eye boogies.
      </>
    ),
  },
];

const quotes = [
  "Raina clearly sets a high visual bar, digs deep into exploration, and is a clear communicator with their point of view.",
  "Raina has been a powerhouse of a teammate this year, not only leading her own lane of work, but by jumping into wherever design support has been needed.",
  "Raina has a great learning attitude. She wants to improve how she delivers designs and to be an excellent partner.",
];

const outlets = [
  { image: "/profile/pottery.png", label: "Ceramics & pottery" },
  { image: "/profile/africa.png", label: "Film photography" },
  { image: "/profile/market.png", label: "Illustrating prints & merch" },
];

export default function About() {

  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

      const isMobile = useIsMobile();


  return (
    <div className="p-8 md:p-0 max-w-full font-bricolage text-black">
      {/* Header Section */}
      <h1 className="text-[32px] font-bold font-rufina leading-[1.25] mb-12">
        Hi there, I’m Raina. It’s nice to meet you! 👋🏽
      </h1>

      <div className={`flex gap-12 ${isMobile ? 'flex-col' : 'flex-row items-start'}`}>
        {/* Profile Image */}
        <img
          src="/profile/profilepic.png"
          alt="Raina"
          className="object-cover shrink-0"
          style={{ width: isMobile ? '100%' : '257px', aspectRatio: '257/343' }}
        />

        {/* About Content */}
        <div className="flex-1">
          <p>A TLDR on who I am...</p>

          <div className="mt-[29px] space-y-[29px]">
            {traits.map((trait) => (
              <div key={trait.title} className="flex items-start">
                <span className="w-[28px] shrink-0 text-[12px] leading-[14px]">{trait.emoji}</span>
                <div>
                  <h3 className="text-xs font-semibold leading-[14px]">{trait.title}</h3>
                  <p className="mt-2">{trait.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div
        className={`mt-12 px-8 py-4 flex gap-6 ${isMobile ? 'flex-col' : 'flex-row justify-between items-center'}`}
        style={{ backgroundColor: '#EEE8D5', minHeight: '145px' }}
      >
        {quotes.map((quote) => (
          <div key={quote} className="text-center" style={{ width: isMobile ? '100%' : '243px' }}>
            <div className="text-[40px] font-bold font-rufina leading-[49px]" style={{ color: '#0C5949' }}>“</div>
            <p>{quote}</p>
          </div>
        ))}
      </div>

      {/* Creative Outlets Section */}
      <h2 className="text-[20px] font-bold font-rufina leading-[25px] mt-12">
        I’m also a creative who loves exploring different outlets and mediums
      </h2>

      <div className={`mt-12 grid gap-8 md:gap-[42px] ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
        {outlets.map((outlet) => (
          <div key={outlet.label}>
            <img
              src={outlet.image}
              alt={outlet.label}
              className="w-full object-cover"
              style={{ aspectRatio: '271/362' }}
            />
            <p className="text-center mt-4">{outlet.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
