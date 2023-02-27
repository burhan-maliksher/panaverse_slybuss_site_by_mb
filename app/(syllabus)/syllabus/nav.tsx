import Link from "next/link";
import Image from "next/image";

export default function Nav(){
    return(
      // <nav className='md:fixed md:z-10 md:top-0 md:left-0 md:w-screen  md:h-12 flex flex-col md:flex-row md:justify-around  lg:justify-start lg:pl-8 lg:space-x-20 justify-center   bg-blue-900 rounded-b-xl lg:rounded-br-full text-cyan-500 font-medium text-xs '>
      <nav className='md:fixed md:z-10 md:top-0 md:left-0 md:w-screen  md:h-12  font-inder flex flex-col md:flex-row md:justify-around lg:text-xl lg:justify-start lg:pl-8 lg:space-x-20 justify-center   bg-blue-900 rounded-b-xl lg:rounded-br-full text-cyan-500 font-medium text-xs '>
        <button className='py-2 md:hover:bg-blue-900 hover:bg-sky-600  hover:text-sky-300   '><Link href={"/"} >
          <span className="inline-block ">
            <Image src="/images/house.svg" alt='home icon' width={20} height={20}/>              
          </span><span className="ml-1 inline-block">Home</span></Link>
        </button><p className='md:text-4xl  hidden md:inline-block'>|</p>
        <button className='py-2  hover:bg-sky-600 md:hover:bg-blue-900 hover:text-sky-300  '><Link href={"/syllabus"}>Syllabus</Link></button><p className='md:text-4xl hidden md:inline-block'>|</p>
        <button className='py-2  hover:bg-sky-600 hover:text-sky-300 md:hover:bg-blue-900 '><Link href={"/about"}>About</Link></button>
      </nav>
    );
}