import React from "react";
import mangrove from '../assets/mangrove-3.png';

const Mission = () => {
  return (
    <div className="max-w-4xl mx-auto pt-24">
      <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
        Our Mission
      </h2>
      <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>
          At Seacred, we are committed to restoring and protecting India's blue
          carbon ecosystems—mangroves, seagrass, and saltmarshes—through
          innovation and community-driven action.
        </p>
        <p>
          We combine field science, blockchain technology, and local
          participation to ensure transparent, verifiable carbon credit
          generation that benefits both the planet and people.
        </p>
        <p>
            To build the world's most trusted Blue Carbon Registry, where every restoration effort is measurable, transparent, and impactful.
        </p>
        <p>
            We envision coastal communities, NGOs, and governments working together on a decentralized platform that not only safeguards ecosystems but also creates sustainable livelihoods and climate resilience.
        </p>
      </div>
      <div className="py-11">
       <button class="px-8 py-4 border border-black rounded-full bg-white text-black font-medium shadow-md transition-all duration-300 hover:bg-black hover:text-white hover:border-white hover:shadow-lg active:scale-95">
  What we do
</button>
        <img src={mangrove} alt="" />
      </div>
      
    </div>
  );
};

export default Mission;
