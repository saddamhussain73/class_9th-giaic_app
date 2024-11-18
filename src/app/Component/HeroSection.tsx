export default function HeroSection() {
    return (
  
      <div>
        <div className=" flex lg:flex-row flex-col justify-around">
            <div className="md:w-8/12 w-full mb-20 mt-10 p-6">

            <h1 className=" text-orange-600 md:text-green-700 lg:text-sky-900 font-extrabold text-3xl md:text-4xl lg:text-5xl">Governor Sindh</h1>
            <h2 className=" text-orange-600 md:text-green-700 lg:text-sky-800 font-normal text-1xl md:text-2xl lg:text-3xl">Kamran Khan Tessori</h2>
            <br />
            <h3 className=" text-purple-600 md:text-orange-600 lg:text-sky-400 font-extrabold text-0.5xl md:text-1xl lg:text-2xl" >Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng) </h3>
          <br />
           <h4 className="  text-orange-600 md:text-green-700 lg:text-sky-800 font-extrabold text-0.5xl md:text-1xl lg:text-2xl">Earn up to $5,000 / month </h4>
           <br />
           <h4 className="  text-orange-600 md:text-green-700 lg:text-sky-800 font-extrabold text-0.5xl md:text-1xl lg:text-2xl">Now admissions are open in <br /> Hyderabad</h4>
            <br />
            <button className="bg-blue-900 text-white font-semibold p-[6px] px-[28px] rounded-md mt-5 hover:opacity-50 trasition duration-300 ">APPLY NOW</button>

            </div>
        
            <div className=" md:w-full w-full mt-5 mb-20"> 

<img src="/cover.png" alt="cover" width={900} height={900} />

            </div>
            
        </div>
    
      </div>
    );
  }