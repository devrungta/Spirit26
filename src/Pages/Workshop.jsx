import { HiBookOpen } from "react-icons/hi2";

const Workshop = () => {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl mx-auto border border-gray-200 mt-10">
                    <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">
                        Want to join the workshop?? 
                    </h2>
                    <div className="flex flex-col items-center space-y-6">
                        <div className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full">
                            <HiBookOpen className="w-10 h-10 text-sky-500" />
                        </div>
                        <p className="text-gray-700 text-center text-sm leading-relaxed">
                            <span className="inline-block mt-2">
                        Join us for an insightful workshop on <span className="font-semibold text-sky-600">Artificial Intelligence in
                        Pharmaceuticals</span>, where we explore how AI is revolutionizing drug discovery, development, and patient care. This workshop brings together industry experts and researchers to discuss real-world implementations,
                        challenges, and future opportunities in AI-driven pharmaceutical innovation. Whether you&apos;re a student, researcher, or
                        healthcare professional, discover how machine learning and AI technologies are accelerating the path from lab to clinic.
                            </span>
                        </p>
        
                        <button
                    onClick={() => window.open("https://forms.gle/hDGWjFsQbhVWTzZs7", "_blank")}
                            className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-sky-500 border-2 border-sky-500 rounded-full group hover:text-white transition-all duration-300"
                        >
                            <span className="absolute inset-0 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                            <span className="relative z-10">Register for Workshop</span>
                        </button>
                    </div>
                </div>
    );
}
export default Workshop;