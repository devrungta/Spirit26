/** @format */
import PropTypes from "prop-types";
const NewSpeakerCard = ({ item }) => {
    return (
        <div
            className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
            <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden shadow-md">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
                {item.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{item.des}</p>
            <div className="mt-4 flex items-center justify-center space-x-3">
                {item.logo && (
                    <img src={item.logo} alt={`${item.company} logo`} className="h-6 w-6 object-contain" loading="lazy" />
                )}
                <h1 className="text-sm font-medium text-gray-700">{item.company}</h1>
            </div>
            <div
                className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg">
            </div>
        </div>
    );
};
NewSpeakerCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        des: PropTypes.string.isRequired,
        logo: PropTypes.string,
        company: PropTypes.string.isRequired,
    }).isRequired,
};

const NewSpeakers = () => {
    const newSpeakers = [
        {
            name: "Parthasarathy Sampath Kumar",
            image: "/new_speakers/ParthsarathySampathKumar.jpeg",
            des: "Head Group Center of Excellence",
            logo: "/new_speakers/biocon_group_logo.jpg",
            company: "Biocon Group",
        }, {
            name: "Pulok Mukherjee",
            image: "/new_speakers/PulokMukherjee.jpeg",
            des: "Founder",
            logo: "/new_speakers/SocietyForEthnopharmacology.jpg",
            company: "Society for Ethnopharmacology, Kolkata",
        }, {
            name: "Ranjana Pathak",
            image: "/new_speakers/RanjanaPathak.jpg",
            des: "President, Global Chief Quality Officer",
            logo: "/new_speakers/LupinPharma.jpeg",
            company: "Lupin",
        }, {
            name: "Sanjeeb Kumar Mishra",
            image: "/new_speakers/SanjeebMishra.jpeg",
            des: "president- Quality",
            logo: "/new_speakers/BharatSerumsAndVaccinesLimited.jpg",
            company: "Bharat Serums and Vaccines Limited",
        }, {
            name: "Sashi Bala Singh",
            image: "/new_speakers/SashiBalaSingh.jpeg",
            des: "Former Director General for Life Sciences",
            logo: "/new_speakers/DRDO.jpeg",
            company: "DRDO",
        }, {
            name: "Shivam Puri",
            image: "/new_speakers/ShivamPuri.jpeg",
            des: "Managing Director & Chief Executive Officer",
            logo: "/new_speakers/CiplaHealth.jpeg",
            company: "Cipla Health Ltd",
        },
    ];
    return (
        <div id="speakers" className="py-16 ">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-sky-600 text-center mb-12">
                    New Speakers
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newSpeakers.map((item, index) => (
                        <NewSpeakerCard item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewSpeakers;