
const YourStack = () => {
    return (
     <div className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white">
    <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Stack </h2>
        <span className="text-sm text-gray-500">0 Technology Selected </span>
     </div>
        <div className="text-center py-12 border border-dashed border-gray-200 my-5 rounded-2xl">
        <div className="text-4xl mb-4"> <i className="fa-solid fa-bag-shopping"></i></div>
       <h3 className="font-semibold text-lg">  Your stack is empty</h3>
        <p className="text-gray-500 text-sm mt-2">  Add technologies to build your stack.</p>
      </div>
    </div>
    );
};

export default YourStack;