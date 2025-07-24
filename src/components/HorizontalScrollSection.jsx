import React, { useRef, useEffect, useState } from "react";

const articles = [
  {
    title: "Kafka + Golang",
    desc: "Micro-service architecture using Kafka, Golang, Docker.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Redis Caching",
    desc: "Implement caching layer using Redis.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Node + Mongo",
    desc: "Scalable APIs with Node and MongoDB.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "CI/CD Setup",
    desc: "Automate deployments with GitHub Actions.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "JWT Auth",
    desc: "Secure login systems using JWT.",
    image: "https://via.placeholder.com/400x250",
  },
];

const HorizontalScrollSection = () => {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(1); // Start at 2nd card
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToIndex = (index) => {
    if (!scrollRef.current || !cardRefs.current[index]) return;

    cardRefs.current[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    scrollToIndex(1); // Scroll to second card on mount
  }, []);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    let closestIndex = 0;
    let closestOffset = Infinity;

    cardRefs.current.forEach((card, i) => {
      const offset = Math.abs(
        card.offsetLeft - scrollLeft + card.offsetWidth / 2 - scrollRef.current.offsetWidth / 2
      );
      if (offset < closestOffset) {
        closestOffset = offset;
        closestIndex = i;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollAmount = 400;
  const scroll = (offset) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-black text-white py-16 overflow-hidden">
      {/* Scroll Buttons for Desktop */}
      {!isMobile && (
        <>
          <button
            onClick={() => scroll(-scrollAmount)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#1f1f1f] hover:bg-white hover:text-black transition text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          >
            ←
          </button>
          <button
            onClick={() => scroll(scrollAmount)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#1f1f1f] hover:bg-white hover:text-black transition text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          >
            →
          </button>
        </>
      )}

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto scroll-smooth px-[60px] snap-x snap-mandatory scrollbar-hide"
      >
        <div className="flex gap-8 w-max h-[300px]">
          {articles.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="snap-center flex-shrink-0 w-[60vw] max-w-[600px] bg-[#1f1f1f] rounded-3xl p-6"
            >
              <img src={item.image} alt="Thumbnail" className="rounded-xl mb-4" />
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm opacity-80 mb-4">{item.desc}</p>
              <button className="bg-white text-black rounded-full px-4 py-2 font-medium hover:bg-gray-200 transition">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dots Navigation */}
      {isMobile && (
        <div className="mt-8 flex justify-center gap-3">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HorizontalScrollSection;
