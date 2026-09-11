import type { ITechnology } from "../types/Technologies";

interface YourStackProps {stack: ITechnology[];

  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;}

const YourStack = ({stack, handleRemoveFromStack,handleRemoveAll}: YourStackProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Stack</h2>
        <span className="text-sm text-gray-500">{stack.length} Technology Selected</span>
      </div>

  {stack.length === 0 && (<div className="text-center py-12 border border-dashed border-gray-200 my-5 rounded-2xl">
   <div className="text-4xl mb-4"><i className="fa-solid fa-bag-shopping"></i> </div>
    <h3 className="font-semibold text-lg">Your stack is empty</h3>
    <p className="text-gray-500 text-sm mt-2"> Add technologies to build your stack.</p>
  </div>)}

{stack.length > 0 && (
   <div className="mt-5 space-y-3">
          {stack.map((technology) => (
     <div key={technology.id} className="flex items-center gap-3 border border-gray-200 rounded-lg p-3" >
        <img src={technology.icon} alt={technology.name}  className="w-10 h-10 object-contain"/>

        <div className="flex-1">
        <h3 className="font-semibold">{technology.name}</h3>
      <p className="text-xs text-gray-500"> {technology.category}</p>
  </div>
          <button onClick={() => handleRemoveFromStack(technology.id)} className="text-red-500 hover:text-red-700" >
               <i className="fa-solid fa-xmark"></i>
           </button>
            </div>
          ))}

       <button onClick={handleRemoveAll} className="w-full mt-4 border border-red-300 text-red-500 rounded-lg py-2 hover:bg-red-50 transition">
            Remove All
          </button>

        </div>
      )}

    </div>
  );
};

export default YourStack;