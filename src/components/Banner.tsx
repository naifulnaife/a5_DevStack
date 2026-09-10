import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row container mx-auto my-10 lg:my-10 px-4 items-center  gap-10 lg:gap-40 justify-center lg:justify-start'>
          <div className="w-full lg:w-1/2 ">
              <div className="py-4 lg:pb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <h1>Build Your Ideal</h1>
                <h1 className="bg-gradient-to-r from-[#D91B7E] to-[#7B2FF7] bg-clip-text text-transparent">Development Stack</h1>
            </div>
            <p className="text-gray-600">Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.</p>
        <div className='flex sm:flex-row gap-3 mt-10'>
            <button className="btn p-6 bg-gradient-to-r from-[#D91B7E] to-[#7B2FF7] text-white rounded-xl">Explore Technologies</button>
            <button className="btn p-6 bg-white rounded-xl text-gray-600">Learn More</button>
        </div>
          </div>
          <div  className="w-full lg:w-1/2 flex justify-center">
              <img src={BannerImg} alt="Banner" className="w-full max-w-md lg:max-w-xl"></img>
          </div>
            
        </div>
    );
};

export default Banner;