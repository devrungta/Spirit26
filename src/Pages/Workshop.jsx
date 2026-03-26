import { HiBookOpen } from "react-icons/hi2";

const Workshop = () => {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl mx-auto border border-gray-200 mt-10">
                    <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">
                        Want to join the workshop?
                    </h2>
                    <div className="flex flex-col items-center space-y-6">
                        <div className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full">
                            <HiBookOpen className="w-10 h-10 text-sky-500" />
                        </div>
                        <p className="text-gray-700 text-center text-sm leading-relaxed">
                            <span className="inline-block mt-2">
                        The Pre-Conference Workshop at SPIRIT 2026 on <span className="font-bold text-sky-500">3rd April 2026</span> will offer a concise, hands-on introduction to
                        multi-omics–based machine learning for precision medicine, led by <span className="font-bold text-sky-500">Dr. Aparajita Khan</span>. Participants will work
                        with curated datasets from the <b>UCSC Xena Browser</b>, learning to load and explore multi-omics data, perform
                        clustering on gene expression and integrated datasets, apply PCA for dimensionality reduction, and conduct
                        differential gene expression analysis while relating findings to phenotypic factors such as age, sex and smoking
                        status. The workshop is designed to give a clear, practical workflow and demonstrate how integrating diverse biological
                        data can generate meaningful insights, making it an ideal starting point for those interested in computational biology
                        and precision medicine.
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