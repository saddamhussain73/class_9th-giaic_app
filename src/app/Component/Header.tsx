
import Link from "next/link"

export default function Header(){
    return(
     

<div className=" sticky top-0 w-full bg-blue-900">
    <div className=" m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[300px]">

<img src="/logo.png" alt="logo" 
width={90}
className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"/>

<h1 className=" hidden font-bold text-gray-400 lg:block lg:text-xl ">
Tuition Free Education Program on Latest Technologies</h1>
<h1 className="text_shadow text-[1.125rem] font-extrabold text-gray-400 lg:hidden">Tuition Free Program {""}</h1>
  
 <ul className=" hidden md:hidden items-center text-white lg:flex lg:gap-3 font-bold lg:text-sm" >
  <li><Link href="/">Home</Link></li>
  <li><Link  href="/apply" >Apply</Link> </li>
  <li><Link href="/jobs">Jobs</Link> </li>
  <li><Link href="/result">Result</Link> </li>
  <li><Link href="/courses">Courses</Link> </li>
  </ul>
  
    </div>

</div>
    )
}