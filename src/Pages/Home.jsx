import { Syringe } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { useState } from "react";
import { FaMicroscope, FaDna, FaPills, FaPrescriptionBottle } from 'react-icons/fa'; // Icons from react-icons
import { GiChemicalDrop, GiMedicines, GiPillDrop } from 'react-icons/gi';
import { GiSyringe, GiBrain } from 'react-icons/gi';


const Home = () => {
  const navigate = useNavigate();
  // const [comingSoon, setComingSoon] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);


  return (
    <div className="min-h-screen w-full pt-20 relative ">

      {/* Main Content */}
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="w-full lg:w-3/5 space-y-8 py-16 lg:py-24 relative z-10">
          {/* Title Section */}
          <div className="space-y-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text ">
              The Annual Techno-Pharma Conference
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative z-10">
              <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
                SPIRIT 2026
              </span>
            </h1>
            <h2 className="text-xl md:text-xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
              Biofusion: Reshaping Healthcare Through Innovation
            </h2>
          </div>

          {/* Date Section */}
          <div className="text-xl md:text-2xl text-gray-600 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            <span className="inline-block animate-[bounceIn_2s_ease-out]">
              2026 | IIT BHU Varanasi
            </span>
          </div>
          {/* Buttons Section */}
          <div className="flex flex-col md:flex-col gap-4 w-full items-start">
            <div className="flex flex-col md:flex-row gap-4 w-full items-center">
              <motion.a
                href="https://drive.google.com/file/d/1T1u-cpzcc2JzE9MNH1iaeXgxBm64P3Gi/view?usp=drivesdk"
                target="_blank"
                className="group relative w-full md:w-auto text-center px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-blue-400 text-blue-400 transition-all duration-300 hover:text-white hover:bg-blue-400"
              >
                View Brochure
              </motion.a>

              {/*This is the button to be added when the registrations begin*/}
              <button
                onClick={()=> navigate("/payment")}
                className="group relative w-full md:w-auto text-center px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-blue-400 text-blue-400 transition-all duration-300 hover:text-white hover:bg-blue-400"
              >
                Register Now
              </button>
              {/*This is the button to be removed when the registrations begin*/}
              {/* <button
                onClick={() => setComingSoon(true)}
                className={`group relative w-full md:w-auto text-center px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 transition-all duration-300
        ${comingSoon
                    ? "border-red-400 text-red-400 cursor-not-allowed"
                    : "border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400"
                  }`}
                disabled={comingSoon}
              >
                {comingSoon ? "Coming Soon" : "Register Now"}
              </button> */}

            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full items-center">
            <motion.a
              onClick={() => {
                document.getElementById("virtual_conferrence").scrollIntoView({ behavior: "smooth" });
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full md:w-auto text-center px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-blue-400 text-blue-400 transition-all duration-300 hover:text-white hover:bg-blue-400"
            >
              Virtual Conference
              </motion.a>
              <motion.a
                onClick={() => {
                  document.getElementById("workshop").scrollIntoView({ behavior: "smooth" });
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full md:w-auto text-center px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-blue-400 text-blue-400 transition-all duration-300 hover:text-white hover:bg-blue-400"
              >
                Workshop
              </motion.a>
            </div>
          </div>
        </div>
        {/* Right Section - Spread-Out Pharma Icons */}
        <div className="hidden lg:flex w-full lg:w-2/5 h-[80vh] relative">
          <div className="absolute inset-0">
            {/* Icon 1 */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6s_ease-in-out_infinite]">
              <FaMicroscope className="text-sky-600 text-2xl" />
            </div>

            {/* Icon 2 */}
            <div className="absolute top-1/4 right-8 w-16 h-16 bg-sky-200 rounded-full flex justify-center items-center shadow-lg animate-[float_5s_ease-in-out_infinite]">
              <GiBrain className="text-sky-500 text-3xl" />
            </div>

            {/* Icon 3 */}
            <div className="absolute top-1/2 left-10 w-14 h-14 bg-sky-300 rounded-full flex justify-center items-center shadow-lg animate-[float_4s_ease-in-out_infinite]">
              <GiMedicines className="text-sky-700 text-2xl" />
            </div>

            {/* Icon 4 */}
            <div className="absolute bottom-10 right-14 w-10 h-10 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_7s_ease-in-out_infinite]">
              <FaPills className="text-sky-400 text-xl" />
            </div>

            <div className="absolute bottom-10 right-14 w-10 h-10 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_7s_ease-in-out_infinite]">
              <FaPills className="text-sky-400 text-xl" />
            </div>

            {/* Icon 5 */}
            <div className="absolute top-3/4 left-20 w-14 h-14 bg-sky-200 rounded-full flex justify-center items-center shadow-lg animate-[float_6.5s_ease-in-out_infinite]">
              <GiChemicalDrop className="text-sky-600 text-2xl" />
            </div>

            {/* Icon 6 */}
            <div className="absolute bottom-1/4 right-24 w-12 h-12 bg-sky-300 rounded-full flex justify-center items-center shadow-lg animate-[float_4.5s_ease-in-out_infinite]">
              <FaMicroscope className="text-sky-500 text-2xl" />
            </div>

            {/* Icon 7 */}
            <div className="absolute top-16 right-1/4 w-10 h-10 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_5.5s_ease-in-out_infinite]">
              <FaDna className="text-sky-400 text-xl" />
            </div>

            {/* Additional Icons */}
            <div className="absolute top-20 right-1/3 w-12 h-12 bg-sky-200 rounded-full flex justify-center items-center shadow-lg animate-[float_6.2s_ease-in-out_infinite]">
              <FaPrescriptionBottle className="text-sky-500 text-2xl" />
            </div>

            <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-sky-300 rounded-full flex justify-center items-center shadow-lg animate-[float_5.8s_ease-in-out_infinite]">
              <GiPillDrop className="text-sky-700 text-2xl" />
            </div>

            <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6.3s_ease-in-out_infinite]">
              <Syringe className="text-sky-600 text-3xl" />
            </div>

            <div className="absolute top-1/2 left-2/3 w-16 h-16 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6.3s_ease-in-out_infinite]">
              <GiSyringe className="text-sky-600 text-3xl" />
            </div>


            <div className="absolute bottom-16 right-1/5 w-12 h-12 bg-sky-200 rounded-full flex justify-center items-center shadow-lg animate-[float_5.4s_ease-in-out_infinite]">
              <FaPrescriptionBottle className="text-sky-400 text-xl" />
            </div>
          </div>
        </div>
        {/* Icons for mobile view */}
        <div className="absolute inset-0 lg:hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-12 h-12 bg-sky-100 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
            <FaMicroscope className="text-sky-600 text-2xl" />
          </div>
          <div className="absolute top-1/4 right-8 w-16 h-16 bg-sky-200 rounded-full flex justify-center items-center animate-[float_5s_ease-in-out_infinite]">
            <GiBrain className="text-sky-500 text-3xl" />
          </div>
          <div className="absolute bottom-20 right-2 w-14 h-14 bg-sky-300 rounded-full flex justify-center items-center animate-[float_4s_ease-in-out_infinite]">
            <FaPills className="text-sky-700 text-2xl" />
          </div>
          <div className="absolute top-1/2 right-16 w-12 h-12 bg-sky-100 rounded-full flex justify-center items-center animate-[float_6.5s_ease-in-out_infinite]">
            <FaPrescriptionBottle className="text-sky-400 text-xl" />
          </div>
          <div className="absolute top-1/2 right-16 w-12 h-12 bg-sky-100 rounded-full flex justify-center items-center animate-[float_6.5s_ease-in-out_infinite]">
            <FaMicroscope className="text-sky-400 text-xl" />
          </div>
          <div className="absolute bottom-2/4 left-20 w-14 h-14 bg-sky-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
            <GiChemicalDrop className="text-sky-600 text-2xl" />
          </div>
          <div className="absolute top-3/4 left-10 w-14 h-14 bg-sky-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
            <Syringe className="text-sky-600 text-2xl" />
          </div>
          <div className="absolute top-1/4 left-10 w-14 h-14 bg-sky-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
            <FaDna className="text-sky-600 text-2xl" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
