import Link from "next/link"

export default function Footer(){
    return(
     <div className=" w-full  bg-blue-900">
      
        
        <div className="flex justify-center">
                <h1 className="mt-5 uppercase text-gray-500 font-bold text-sm md:text-xl lg:text-2xl">wher to?</h1>
            </div>

<div className="text-gray-500 flex justify-between items-center mt-0 p-8">
<div className="font-semibold md:text-sm lg:text-xl">Branding and Marketing by <span className=" uppercase font-semibold text-sm md:text-sm lg:text-xl"><br />Saddam hussain</span></div>
<Link href="/" className="font-semibold  md:text-sm lg:text-xl hover:text-red-700">Back to top</Link>
<div className="font-medium  md:text-sm lg:text-xl">Check Out<span className=" uppercase font-semibold md:text-sm lg:text-xl hover:text-red-700"><br />@saddam hussain</span></div>
</div>
</div>
    )
}