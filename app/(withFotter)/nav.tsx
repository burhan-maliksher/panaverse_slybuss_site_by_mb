import Link from "next/link";
import {AiFillHome} from 'react-icons/ai'

export default function Nav(){
    return(
      <nav className='sticky top-0 md:fixed md:z-10 md:left-0 md:w-screen  md:h-12  font-inder flex flex-col md:flex-row md:justify-around lg:text-xl lg:justify-start lg:pl-8 lg:space-x-20 justify-center   bg-blue-900 rounded-b-xl lg:rounded-br-full text-white font-medium text-xs '>
        <button className='py-2 md:hover:bg-blue-900 hover:bg-sky-600  hover:text-sky-300   '><Link href={"/"} >
              <AiFillHome className="text-white  hover:text-sky-400 rounded-xl hidden md:pb-2 md:w-8 md:h-10 md:inline-block"/>            
              <span className="ml-1  inline-block">
                Home
              </span>
            </Link>
        </button><p className='md:text-4xl  hidden md:inline-block'>|</p>
        <button className='py-2  hover:bg-sky-600 md:hover:bg-blue-900 hover:text-sky-300  '><Link href={"/syllabus"}>Syllabus</Link></button><p className='md:text-4xl hidden md:inline-block'>|</p>
        <button className='py-2  hover:bg-sky-600 hover:text-sky-300 md:hover:bg-blue-900 '><Link href={"/about"}>About</Link></button>
      </nav>
    );
}