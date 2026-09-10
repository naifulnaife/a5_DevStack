import type { ITechnology } from "../types/Technologies";


interface TechnologyCardProps {
  technology: ITechnology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
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
        <span className="text-yellow-500">★</span>
        <span className="font-semibold"> {technology.rating} </span>
      </div>     
      </div>

      
      <button className="w-full mt-5 border border-gray-300 rounded-lg py-2 font-medium bg-gray-900 text-white hover:bg-linear-to-r from-[#D91B7E] to-[#7B2FF7] transition"> Add to Stack</button>
    </div>
  );
};

export default TechnologyCard;