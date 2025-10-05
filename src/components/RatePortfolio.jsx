import React from 'react'
import { useState } from 'react';
const testimonials = [
  {
    name: "Aarav Sharma",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "Amazing portfolio! The design feels modern and clean.",
  },
  {
    name: "Priya Mehta",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "Loved the animations, really smooth and engaging.",
  },
  {
    name: "Karan Patel",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
    message: "Great UI/UX, everything looks professional.",
  },
  {
    name: "Sneha Kapoor",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    message: "Impressive work, shows a lot of creativity!",
  },
];
const RatePortfolio = () => {

    const [rating, setRating] = useState(0);
      const [message, setMessage] = useState("");
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { rating, message };
        console.log("Stored Data (send to backend later):", data);
        setRating(0);
        setMessage("");
    };
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-between gap-20 mt-[150px] px-4 sm:px-6 md:px-10">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 latest">
              Rate this portfolio...
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex gap-3 sm:gap-6 mt-8 flex-wrap">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="relative group">
                    <button
                      type="button"
                      className={`px-3 sm:px-4 py-2 rounded-lg border transition ${
                        rating === num
                          ? "bg-white text-black"
                          : "border-[#55d63b] text-white"
                      }`}
                      onClick={() => setRating(num)}
                    >
                      {num}
                    </button>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-xl sm:text-2xl">
                      {["😐", "😀", "😊", "😎", "🤩"][num - 1]}
                    </span>
                  </div>
                ))}
              </div>

              
              <textarea
                placeholder="Your feedback..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="p-3 rounded-lg bg-transparent border border-gray-400 text-white focus:outline-none focus:border-blue-500 text-sm sm:text-base"
              />

              
              <div className="text-center md:text-right">
                <button
                  type="submit"
                  className="px-6 w-full sm:w-[200px] py-3 rounded-lg bg-gray-300 text-black cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          
          <div className="w-full md:w-1/2 relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] mt-10 md:mt-0">
            <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

            <div className="animate-[moveUp_15s_linear_infinite] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {testimonials.concat(testimonials).map((t, idx) => (
                <div
                  key={idx}
                  className={`bg-white/10 backdrop-blur-lg text-white p-3 sm:p-4 rounded-xl shadow-md 
          transform ${idx % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                    <p className="font-semibold text-sm sm:text-base">
                      {t.name}
                    </p>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm">{t.message}</p>
                </div>
              ))}
            </div>
          </div>

          
          <style>
            {`
              @keyframes moveUp {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
            `}
          </style>
        </div> 
    </div>
  )
}

export default RatePortfolio