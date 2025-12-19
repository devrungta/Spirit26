/** @format */

const Card = ({ item }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
      <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden shadow-md">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
        {item.name}
      </h3>
      <p className="mt-2 text-sm text-gray-600">{item.des}</p>
      <div className="mt-4 flex items-center justify-center space-x-3">
        {item.logo && (
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className="h-6 w-6 object-contain"
            loading="lazy"
          />
        )}
        <h1 className="text-sm font-medium text-gray-700">{item.company}</h1>
      </div>
      <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
    </div>
  );
};

const Speakers = () => {
  const speakers = [
    {
      name: "Karun Gaur",
      image: "./new_speakers/karun_gaur.jpg",
      des: "Vice President",
      company: "Dr. Reddy's Laboratories",
      logo: "./new_speakers/dr_reddy_lab.png",
    },
    {
      name: "Dr. Sadanand Kulkarni",
      image: "./new_speakers/sadanand_kulkarni.jpg",
      des: "Head-Medical, Regulatory, Quality, Vigilance",
      company: "Fresenius Kabi South Asia",
      logo: "./new_speakers/fresenius_kabi.png",

    },
    {
      name: "Avinash Narwaria",
      image: "./new_speakers/avinash_narwaria.jpg",
      des: "Ex-VP",
      company: "Emami",
      logo: "./new_speakers/emami.png",
    },
    {
      name: "Dr. Rajiv Desai",
      image: "./new_speakers/rajiv_desai.jpg",
      des: "Senior Technical Advisor",
      company: "IPA",
      logo: "./new_speakers/ipa.png",
    },
    {
      name: "Dr. Saurabh Kumar",
      image: "./new_speakers/saurabh_kumar.jpeg",
      des: "Principal & Head RWE",
      company: "IQVIA",
      logo: "./new_speakers/iqvia_logo.jpeg",
    },
    {
      name: "Dr. Anand Agarwal",
      image: "./new_speakers/anand_agarwal.jpg",
      des: "Senior Vice President",
      company: "Cipla",
      logo: "./new_speakers/cipla_logo.jpeg",
    },
    {
      name: "Dr. P. A. Sivakumar",
      image: "./new_speakers/dr_pa_sivakumar.jpg",
      des: "Vice President",
      company: "Biological E. Limited",
      logo: "./new_speakers/biological_e_logo.jpeg",
    },
    {
      name: " Nitesh Kumar",
      image: "./new_speakers/nitesh_kumar.jpg",
      des: "Co-Founder",
      company: "Leumas",
      logo: "./new_speakers/leumasware_logo.jpeg",
    },
    {
      name: "Dr. Rajeev Raghuvanshi",
      image: "/speakers/rajeev.png",
      des: "Drugs Controller General OF INDIA",
      logo: "/speakers/dcgi.png",
      company: "CDSCO",
    },
    {
      name: "Dr. Dulal Panda",
      image: "/speakers/panda.png",
      des: "Director",
      logo: "/speakers/niper.jpg",
      company: "NIPER Mohali",
    },
    {
      name: "Dr. Birendra Singh",
      image: "/speakers/birendra.png",
      des: "President, Global Quality Head",
      logo: "/speakers/mankind.png",
      company: "Mankind Pharma",
    },
    {
      name: "Dr. Anil Kukreja",
      image: "/speakers/anil.png",
      des: "Vice President, Medical Affairs and Regulatory",
      logo: "/speakers/astra.png",
      company: "AstraZeneca",
    },
    {
      name: "Dr. Amit Vaish",
      image: "/speakers/amit.png",
      des: "Principal Scientist",
      logo: "/speakers/amgen.png",
      company: "Amgen",
    },
    {
      name: "Dr. Romi Singh",
      image: "/speakers/romi.png",
      des: "Senior Vice President",
      logo: "/speakers/sun-pharma.png",
      company: "Sun Pharma",
    },
    {
      name: "Dr. Navratna Vajpai",
      image: "/speakers/Navratna-Vajpai.png",
      des: "Chief Scientific Manager",
      logo: "/speakers/janssen.png",
      company: "Biocon Biologics",
    },
    {
      name: "Dr. Anish Chakkumkal",
      image: "/speakers/anish.png",
      des: "Associate Scientific Director",
      logo: "/speakers/janssen.png",
      company: "Johnson & Johnson",
    },
    {
      name: "Dr. Rajeev Pandey",
      image: "/speakers/rajeevPandey.png",
      des: "Laboratory Director",
      logo: "/speakers/janssen.png",
      company: "Strand",
    },
    {
      name: "Dr. Ankit Saneja",
      image: "/speakers/ankit.png",
      des: "Scientist",
      logo: "/speakers/janssen.png",
      company: "CSIR-IHBT India",
    },
    {
      name: "Dr. Prakash Muthudoss",
      image: "/speakers/prakash.png",
      des: "Chief Executive Officer",
      logo: "/speakers/janssen.png",
      company: "A2Z4.0 ",
    },
    {
      name: "Sarvesh Singh",
      image: "/speakers/sarvesh.jpg",
      des: "Managing Director",
      logo: "/speakers/janssen.png",
      company: "Marichi Ventures",
    },
  ];

  return (
    <div id="speakers" className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-sky-600 text-center mb-12">
          Past Speakers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
