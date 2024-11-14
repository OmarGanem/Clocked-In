// src/components/home/SourceSellSection.jsx
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const SourceSellSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // play animation only once when scrolled into view
    });
  }, []);

  const sourceWatchImage = "/assets/test.png";
  const sellWatchImage = "/assets/test.png";

  return (
    <section className="flex justify-center py-12 px-5">
      <div className="flex gap-10 max-w-5xl w-full flex-col md:flex-row">
        {/* Source a Watch */}
        <div className="flex-1 text-center" data-aos="fade-up">
          <a href="/contact">
            <img
              src={sourceWatchImage}
              alt="Source a Watch"
              className="w-full h-auto max-w-md rounded-lg object-cover mx-auto transition-transform duration-200 hover:scale-105"
            />
          </a>
          <h2 className="text-2xl font-bold mt-5">
            <a href="/contact" className="text-gray-800 hover:underline">Source a Watch</a>
          </h2>
          <p className="text-base text-gray-600 mt-2 leading-relaxed">
            With over 20 years of combined experience, we have sourced some of the rarest and most
            exclusive watches. Our commitment to quality and authenticity ensures you get only the best.
          </p>
        </div>

        {/* Sell Your Watch */}
        <div className="flex-1 text-center" data-aos="fade-up" data-aos-delay="200">
          <a href='/sellform'>
            <img
              src={sellWatchImage}
              alt="Sell Your Watch"
              className="w-full h-auto max-w-md rounded-lg object-cover mx-auto transition-transform duration-200 hover:scale-105"
            />
          </a>
          <h2 className="text-2xl font-bold mt-5">
            <a href='/sellform' className="text-gray-800 hover:underline">Sell Your Watch</a>
          </h2>
          <p className="text-base text-gray-600 mt-2 leading-relaxed">
            Integrity above all else, we know the watch market inside out, and our experts will keep you
            informed every step of the way. Get the best value for your luxury timepiece.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SourceSellSection;
