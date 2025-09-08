import React from "react";

// Assuming you have a video file in your public folder or assets
// No need to import if it's in the public folder, as the path is absolute
// import video from "/Earth_s_Digital_Ecosystem_Awakening.mp4"; 

const Mission = () => {
  return (
    // The main container remains with a white background for your overall page section
<div className="bg-white rounded-t-[3rem] md:rounded-t-[4rem] p-8 md:p-16">
        <div className="max-w-4xl mx-auto pt-16">
        {/*
          Using gap-x-12 for horizontal spacing. You can adjust this value.
        */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Text and button section (left side) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-black">
              Our Mission
            </h2>
            <div className="space-y-6 text-gray-500 text-lg md:text-xl leading-relaxed">
              <p>
                At SeaCred, we are committed to restoring India's blue carbon
                ecosystems— mangroves, seagrass, and saltmarshes—through
                innovation, blockchain transparency, and community-driven action.
              </p>
              <p>
                Our vision is to build the world's most trusted Blue Carbon
                Registry, empowering coastal communities, NGOs, and governments to
                create measurable climate impact and sustainable livelihoods.
              </p>
            </div>
            <div className="mt-8">
              <button className="px-10 py-5 border border-black rounded-full bg-white text-black font-semibold shadow-md transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                What we do
              </button>
            </div>
          </div>

          {/* Video container (right side) - Modified for the new style */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            {/* Inner div to create the card-like appearance for the video */}
            <div className="relative bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <video
                src="/Earth_s_Digital_Ecosystem_Awakening.mp4"
                alt="Mangrove Ecosystem Video"
                className="w-full h-[30rem] object-cover rounded-[2rem]"
                autoPlay
                loop
                muted
                playsInline
              />

               {/* <img
                src={mangrove}
                alt="Mangrove Ecosystem"
                className="w-full h-4/5 object-cover rounded-[2rem] transform -translate-y-2 translate-x-2" // Adjust these values for depth
              />
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;