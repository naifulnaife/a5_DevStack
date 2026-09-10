import type { ITechnology } from "../types/Technologies";


interface TechnologyCardProps {
  technology: ITechnology;
  handleAddToStack: (technology: ITechnology) => void;
  isAdded: boolean;
}
 

const TechnologyCard = ({ technology,handleAddToStack,isAdded}: TechnologyCardProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white">

      <div className="flex justify-between items-start">
        <img src={technology.icon} alt={technology.name} className="w-12 h-12 object-contain"/>
       <span className="bg-purple-50 border-purple-400 border  text-xs font-semibold px-3 py-1 rounded-full">{technology.badge}
      </span>
      </div>
      <h3 className="text-xl font-extrabold mt-4">{technology.name}</h3>
      <p className="text-gray-500 text-sm mt-2 leading-6">{technology.description}</p>

      <div className="flex gap-2 mt-4 justify-between">

        
        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-5 py-3 rounded-xl">
          {technology.category}
        </span>

        <span className=" text-gray-700 text-xs font-medium px-5 py-3 rounded-xl">
          {technology.difficulty}
        </span>
        
       <div className="flex gap-1 mt-4 ">
        <span className="text-yellow-500"><i className="fa-solid fa-star"></i></span>
        <span className="font-semibold"> {technology.rating} </span>
      </div>     
      </div>

      
      <button
        // NEW: call function when button is clicked
        onClick={() => handleAddToStack(technology)}

        // NEW: disable button if already added
        disabled={isAdded}

        className={`w-full mt-5 rounded-lg py-2 font-medium transition ${
          isAdded
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "border border-gray-300 hover:bg-gray-100"
        }`}
      >
        {/* NEW: change button text */}
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
      </div>
  );
};

export default TechnologyCard;