import { useState } from "react";
import { motion } from "framer-motion";
import {  FaLock, FaArrowRight, FaDna } from 'react-icons/fa';
import { GiSyringe,  GiChemicalDrop } from 'react-icons/gi';
import { useReferralVerification } from "../hooks/useReferralVerification";


const PaymentPage = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [referralCode, setReferralCode] = useState("");
    const { isCodeValid, checking, verifyReferralCode } = useReferralVerification();

    const handleVerify = () => {
        verifyReferralCode(referralCode);
    };
    {
        showDialog && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm"
                onClick={() => setShowDialog(false)}
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-2xl w-96 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={() => setShowDialog(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        ✕
                    </button>

                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <FaDna className="text-4xl text-blue-500 mx-auto mb-4 animate-bounce" />
                            <h2 className="text-2xl font-bold text-gray-800">Register Here</h2>
                            <p className="text-gray-600">Enter your referral code to continue</p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={referralCode}
                                    onChange={(e) => setReferralCode(e.target.value)}
                                    className={`w-full p-3 border-2 ${isCodeValid === false ? "border-red-500" : "border-blue-200"
                                        } rounded-lg focus:outline-none focus:border-blue-500 transition-all`}
                                    placeholder="Enter referral code"
                                />
                                {isCodeValid === true && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute right-3 top-3 text-green-500"
                                    >
                                        ✓
                                    </motion.div>
                                )}
                            </div>

                            {isCodeValid === false && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-sm flex items-center gap-2"
                                >
                                    <GiChemicalDrop className="flex-shrink-0" />
                                    <span>Invalid referral code. Please try again.</span>
                                </motion.div>
                            )}

                            <button
                                onClick={handleVerify}
                                disabled={checking || !referralCode}
                                className={`w-full py-3 rounded-lg font-semibold transition-all ${checking
                                    ? "bg-blue-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600"
                                    } text-white`}
                            >
                                {checking ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        Verifying...
                                    </div>
                                ) : (
                                    "Verify Code"
                                )}
                            </button>

                            <div className="space-y-3">
                                <button
                                    onClick={() => window.open("https://forms.gle/pmWs1di7qBBukmqH8", "_blank")}
                                    disabled={!isCodeValid}
                                    className={`w-full py-2.5 rounded-lg font-medium transition-all ${isCodeValid
                                        ? "bg-blue-500 hover:bg-green-600"
                                        : "bg-blue-300 cursor-not-allowed"
                                        } text-white`}
                                >
                                    Continue with Referral
                                </button>

                                <button
                                    onClick={() => window.open("https://forms.gle/3ZXijgWxZEo8zwzS6", "_blank")}
                                    className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-sky-400 to-blue-500 hover:from-yellow-300 hover:to-amber-400 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                                >
                                    <motion.div
                                        className="text-white-500 font-bold flex flex-col items-center justify-center"
                                        whileHover={{ scale: 0.98 }}
                                    >
                                        <div className="text-sm font-bold text-amber-100 mt-1 opacity-90 group-hover:opacity-100">
                                            Continue without Referral
                                        </div>
                                    </motion.div>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )
    }
    const categories = [
        //this was commented out to temporarily remove the categories from the payment page and can be added back in case ever needed in future
        // {
        //     id: "undergrad",
        //     title: "Undergraduate/PG",
        //     priceWithWorkshop: "₹2300*",
        //     priceWithoutWorkshop: "₹2000*",
        //     icon: GiBrain,
        //     color: "from-blue-500 to-cyan-500"
        // },
        // {
        //     id: "postgrad",
        //     title: "Postdoc/PhD/RA",
        //     priceWithWorkshop: "₹2800*",
        //     priceWithoutWorkshop: "₹2300*",
        //     icon: GiSyringe,
        //     color: "from-purple-500 to-pink-500"
        // },
        // {
        //     id: "faculty",
        //     title: "Faculty Member",
        //     priceWithWorkshop: "₹3800*",
        //     priceWithoutWorkshop: "₹3300*",
        //     icon: FaCreditCard,
        //     color: "from-red-500 to-orange-500"
        // },
        // {
        //     id: "delegate",
        //     title: "Industry Delegate",
        //     priceWithWorkshop: "₹5300*",
        //     priceWithoutWorkshop: "₹4300*",
        //     icon: FaLock,
        //     color: "from-green-500 to-emerald-500"
        // },
        // {
        //     id: "delegate",
        //     title: "Foreign Delegate",
        //     priceWithWorkshop: "USD 170",
        //     priceWithoutWorkshop: "USD 150",
        //     icon: FaLock,
        //     color: "from-green-500 to-emerald-500"
        // }
        {
            id: "all",
            title: "Participants",
            withEarlyBird: "INR 2250",
            withoutEarlyBird: "INR 2750",
            icon: FaLock,
            color: "from-green-500 to-emerald-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const handleCategorySelect = () => {
        setShowDialog(true);
    };



    return (
        <div className="min-h-screen w-full pt-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-transparent rounded-full blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 mt-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text">
                            Registration Payment
                        </span>
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
                        Secure your spot at SPIRIT 2026 - The Premier Techno-Pharma Conference
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-blue-600">
                        <FaLock className="text-sm" />
                        <span className="text-sm font-medium">All transactions are secure and encrypted</span>
                    </div>
                </motion.div>

                {/* Registration Info */}
                <motion.div
                    className="bg-gradient-to-r from-blue-100 to-sky-100 border border-blue-300 rounded-xl p-6 mb-12 max-w-2xl mx-auto backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-gray-800 text-center">
                        <span className="text-blue-600 font-semibold">*Including 18% GST</span>
                        {" "} | Full access to all scientific and technical sessions throughout the conference
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={category.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="relative group cursor-pointer"
                                onClick={() => handleCategorySelect(category)}
                            >
                                {/* Gradient Border */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />

                                {/* Card */}
                                <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-6 h-full hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <IconComponent className="text-white text-xl" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>

                                    <div className="space-y-3 mb-6">
                                        <div>
                                            <p className="text-gray-600 text-sm mb-1">With Early Bird</p>
                                            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text">
                                                {category.withEarlyBird}
                                            </p>
                                        </div>
                                        {/* <div>
                                            <p className="text-gray-600 text-sm mb-1">Without Early Bird</p>
                                            <p className="text-xl font-semibold text-gray-700">
                                                {category.withoutEarlyBird}
                                            </p>
                                        </div> */}
                                    </div>

                                    {/* Button */}
                                    <button className="w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-blue-400/50 hover:from-blue-600 hover:to-sky-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                                        Register Now
                                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Dialog - Registration */}
                {showDialog && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm"
                        onClick={() => setShowDialog(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-2xl w-96 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowDialog(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                ✕
                            </button>

                            <div className="space-y-6">
                                <div className="text-center space-y-2">
                                    <FaDna className="text-4xl text-blue-500 mx-auto mb-4 animate-bounce" />
                                    <h2 className="text-2xl font-bold text-gray-800">Register Here</h2>
                                    <p className="text-gray-600">Enter your referral code to continue</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={referralCode}
                                            onChange={(e) => setReferralCode(e.target.value)}
                                            className={`w-full p-3 border-2 ${isCodeValid === false ? "border-red-500" : "border-blue-200"
                                                } rounded-lg focus:outline-none focus:border-blue-500 transition-all`}
                                            placeholder="Enter referral code"
                                        />
                                        {isCodeValid === true && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute right-3 top-3 text-green-500"
                                            >
                                                ✓
                                            </motion.div>
                                        )}
                                    </div>

                                    {isCodeValid === false && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm flex items-center gap-2"
                                        >
                                            <GiChemicalDrop className="flex-shrink-0" />
                                            <span>Invalid referral code. Please try again.</span>
                                        </motion.div>
                                    )}

                                    <button
                                        onClick={handleVerify}
                                        disabled={checking || !referralCode}
                                        className={`w-full py-3 rounded-lg font-semibold transition-all ${checking
                                            ? "bg-blue-400 cursor-not-allowed"
                                            : "bg-blue-500 hover:bg-blue-600"
                                            } text-white`}
                                    >
                                        {checking ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1 }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                Verifying...
                                            </div>
                                        ) : (
                                            "Verify Code"
                                        )}
                                    </button>

                                    <div className="space-y-3">
                                        <button
                                            onClick={() => window.open("https://forms.gle/pmWs1di7qBBukmqH8", "_blank")}
                                            disabled={!isCodeValid}
                                            className={`w-full py-2.5 rounded-lg font-medium transition-all ${isCodeValid
                                                ? "bg-blue-500 hover:bg-green-600"
                                                : "bg-blue-300 cursor-not-allowed"
                                                } text-white`}
                                        >
                                            Continue with Referral
                                        </button>

                                        <button
                                            onClick={() => window.open("https://forms.gle/3ZXijgWxZEo8zwzS6", "_blank")}
                                            className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-sky-400 to-blue-500 hover:from-yellow-300 hover:to-amber-400 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                                        >
                                            <motion.div
                                                className="text-white-500 font-bold flex flex-col items-center justify-center"
                                                whileHover={{ scale: 0.98 }}
                                            >
                                                <div className="text-sm font-bold text-amber-100 mt-1 opacity-90 group-hover:opacity-100">
                                                    Continue without Referral
                                                </div>
                                            </motion.div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Online Registration Fee Payment */}
                <motion.div
                    className="max-w-4xl mx-auto mt-16 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-400 rounded-xl p-8 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Online Registration Fee Payment</h3>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Bank Details */}
                            <div className="lg:col-span-2">
                                <div className="space-y-4">
                                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                                        <p className="text-sm text-gray-600 font-medium mb-1">Institution Account Name</p>
                                        <p className="text-lg font-semibold text-gray-800">Registrar IIT(BHU), Varanasi 221005</p>
                                    </div>

                                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                                        <p className="text-sm text-gray-600 font-medium mb-1">Account Number</p>
                                        <p className="text-lg font-semibold text-gray-800 font-mono">32778803937</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                                            <p className="text-sm text-gray-600 font-medium mb-1">IFSC Code</p>
                                            <p className="text-lg font-semibold text-gray-800 font-mono">SBIN0011445</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                                            <p className="text-sm text-gray-600 font-medium mb-1">MICR No.</p>
                                            <p className="text-lg font-semibold text-gray-800 font-mono">221002036</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                                        <p className="text-sm text-gray-600 font-medium mb-1">Bank Name (in full)</p>
                                        <p className="text-lg font-semibold text-gray-800">State Bank of India</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                                            <p className="text-sm text-gray-600 font-medium mb-1">Branch Name</p>
                                            <p className="text-lg font-semibold text-gray-800">IIT BHU Branch, Varanasi</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                                            <p className="text-sm text-gray-600 font-medium mb-1">Account Type</p>
                                            <p className="text-lg font-semibold text-gray-800">Current</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-blue-100/50 rounded-lg border-l-4 border-blue-600">
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold text-blue-700">Note:</span> Please mention your Email-ID in the transaction remarks/description for easy tracking of your payment.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Important Notes */}
                <motion.div
                    className="max-w-4xl mx-auto mt-12 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-blue-50/50 border border-blue-300 rounded-xl p-8 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                            <GiSyringe className="text-2xl" />
                            Important Information
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>Full access to all scientific and technical sessions throughout the conference</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>Complimentary attendance at pre-conference workshops for workshop category</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>Refreshments during scheduled tea breaks, lunch, and dinner during the conference</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>Participation in networking events and exclusive conference materials</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PaymentPage;
