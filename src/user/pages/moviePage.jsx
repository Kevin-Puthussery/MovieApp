import React from 'react'
import { FaEye, FaHeart, FaStar, FaCommentAlt, FaPlus } from "react-icons/fa";

function moviePage() {
   
            
const bars = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    height: Math.floor(Math.random() * 10) + 1, // 1 - 10
  }));

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:space-x-6">
          {/* Poster */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src="https://a.ltrbxd.com/resized/film-poster/1/1/2/5/0/3/1/1125031-highest-2-lowest-0-2000-0-3000-crop.jpg?v=4bac6efe11"
              alt=""
              className="w-48 md:w-64 lg:w-72 rounded-xl shadow-lg max-w-full"
            />

            {/* Stats */}
            <div className="flex items-center justify-center md:justify-start gap-6 mt-4 text-sm">
              <span className="flex items-center gap-1 text-green-400">
                <FaEye /> 24K
              </span>
              <span className="flex items-center gap-1 text-pink-400">
                <FaHeart /> 16K
              </span>
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar /> 7.6K
              </span>
            </div>
          </div>

          {/* Film Info + Histogram */}
          <div className="flex-1 mt-8 md:mt-0 md:pl-6">
            <h1 className="text-2xl md:text-4xl font-bold">Highest 2 Lowest</h1>
            <p className="text-slate-400 mt-1 text-sm md:text-base">
              2025 · Directed by{" "}
              <span className="text-blue-400 cursor-pointer hover:underline">
                Spike Lee
              </span>
            </p>

            <p className="uppercase text-slate-400 text-xs md:text-sm mt-4">
              All $$ ain't good $$.
            </p>

            <p className="mt-3 text-slate-300 text-sm md:text-base leading-relaxed">
              When a titan music mogul is targeted with a ransom plot, he is jammed
              up in a life-or-death moral dilemma. A reinterpretation of Akira
              Kurosawa’s crime thriller "High and Low," now played out on the mean
              streets of modern-day New York City.
            </p>

            {/* Histogram Section */}
            <div className="bg-slate-900 p-4 md:p-6 rounded-xl shadow-md w-full max-w-lg mt-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="border-l-4 border-yellow-400 pl-2 text-base md:text-lg font-semibold text-slate-300">
                    User reviews
                  </span>
                  <span className="text-xs md:text-sm text-slate-300">1.5K</span>
                  <span className="text-slate-300">{">"}</span>
                </div>

                <button className="flex items-center gap-1 px-3 py-1.5 
                bg-blue-600 text-white text-xl md:text-2xl font-medium 
                rounded-full shadow-md hover:bg-blue-700 
                hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <FaPlus className="text-3xl" /> Review
                </button>
              </div>

              {/* Rating Section */}
              <div className="flex items-center mt-4">
                <FaStar className="text-yellow-400 text-3xl md:text-4xl" />
                <div className="ml-2">
                  <p className="text-2xl md:text-3xl font-bold text-slate-300">
                    8.0
                  </p>
                  <p className="text-xs text-slate-300">443.8K</p>
                </div>
              </div>

              {/* Histogram */}
              <div className="flex items-end justify-between mt-6 space-x-1 md:space-x-2">
                {bars.map((bar, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className="w-4 md:w-6 bg-blue-600 rounded"
                      style={{ height: `${bar.height * 8}px` }}
                    ></div>
                    <span className="text-[10px] md:text-xs text-gray-500 mt-1">
                      {bar.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-10 md:mt-12">
          <h2 className="text-base md:text-lg font-semibold text-slate-300 mb-4">
            Popular Reviews
          </h2>

          {/* Review Card */}
          <div className="bg-slate-900/50 rounded-xl p-3 md:p-4 mb-4 border border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/860/141/195/tom-cruise-in-new-hairstyle-with-smile-wallpaper-thumb.jpg"
                alt="Reviewer"
                className="rounded-full w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <p className="text-sm font-semibold">demi adeyuyi</p>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  Review · <FaCommentAlt /> 15
                </p>
              </div>
            </div>
            <p className="mt-3 text-slate-300 text-xs md:text-sm leading-relaxed">
              Dug this, but I wonder if I would’ve really loved it if I hadn’t
              watched <em>High and Low</em> in the same week. Largely sublimates
              its politics/themes and stumbles in trying to recreate some of its
              highlights...
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-xs mt-3">
              <span>👍 1,125 likes</span>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-3 md:p-4 mb-4 border border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/katy-perry-attends-the-56th-annual-cma-awards-at-news-photo-1671552564.jpg"
                alt="Reviewer"
                className="rounded-full w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <p className="text-sm font-semibold">demi adeyuyi</p>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  Review · <FaCommentAlt /> 15
                </p>
              </div>
            </div>
            <p className="mt-3 text-slate-300 text-xs md:text-sm leading-relaxed">
              Dug this, but I wonder if I would’ve really loved it if I hadn’t
              watched <em>High and Low</em> in the same week. Largely sublimates
              its politics/themes and stumbles in trying to recreate some of its
              highlights...
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-xs mt-3">
              <span>👍 1,125 likes</span>
            </div>
          </div>

        </div>
      </div>




  


        </>
    )
}

export default moviePage
