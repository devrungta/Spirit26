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
    const newSpeakers = [];
    { /* Add new speakers here in the same format as in Speakers.jsx */ }
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