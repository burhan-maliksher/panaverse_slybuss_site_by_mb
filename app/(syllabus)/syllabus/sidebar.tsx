"use client"
import Link from 'next/link';
import {GrClose } from 'react-icons/gr'
import { useState } from 'react';

export default function Sidebar() {
    const [displayMenu,setDisplayMenu]=useState<"hidden"|"flex">("hidden");
    
    function ShowMenu(){
            setDisplayMenu("flex")
        }
    
    function CloseMenu(){
        setDisplayMenu("hidden")
    }    

  return (
    
    <>
    <button onClick={ShowMenu} className='z-20 py-2 mt-5 text-right px-2  fixed top-20 w-auto rounded-r-lg bg-blue-900 text-white md:hidden  hover:bg-blue-700  hover:text-white '>
                Menu
            </button>

    <div className={`${displayMenu} h-screen text-center w-screen  flex-col pb-20 -mt-2 bg-slate-600 fixed overflow-y-auto top-30 left-0 md:mt-10 md:h-screen md:overflow-y-scroll  md:fixed  md:left-0 md:pt-4  md:bg-slate-600  md:font-serif md:text-xs lg:text-xl md:text-white md:font-bold md:text-center md:flex md:flex-col md:pb-32 md:w-1/6 md:border-black md:border-r-2 `}>
            
            <div className='text-center mr-2 fixed top-34 right-0 flex flex-row justify-end'>
                <GrClose onClick={CloseMenu} className='text-xl  md:hidden'/>
            </div>
            <h4 className="text-slate-400 ">Course Details</h4>
            <h4 className="text-slate-400 text-sm">Core Courses</h4>
            <button className='hover:text-black hover:bg-white hover:scale-150 hover:my-1 duration-300 delay-75 cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q1-c"} target={'_parent'}>Quater 1</Link></button>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q2-c"} target={'_parent'}></Link>Quater 2</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q3-c"} target={'_parent'}></Link>Quater 3</p>
            <h4 className="text-slate-400 ">Specialization</h4>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#c-web"} target={'_parent'}></Link>Quater 4</p>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#c-ai"} target={'_parent'}></Link>Quater 5
            </p>
            
            <h4 className="text-slate-400 ">Quiz Details</h4>
            <h4 className="text-slate-400 text-sm">Core Courses</h4>
            <p className='hover:text-black hover:bg-white hover:scale-150 hover:my-1 duration-300 delay-75 cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q1-c"} target={'_parent'}></Link>Quater 1</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q2-c"} target={'_parent'}></Link>Quater 2</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q3-c"} target={'_parent'}></Link>Quater 3</p>
            <h4 className="text-slate-400 ">Specialization</h4>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#c-web"} target={'_parent'}></Link>Quater 4</p>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#c-ai"} target={'_parent'}></Link>Quater 5
            </p>

            <h4 className="text-slate-400 ">Assignment Details</h4>
            <h4 className="text-slate-400 text-sm">Core Courses</h4>
            <p className='hover:text-black hover:bg-white hover:scale-150 hover:my-1 duration-300 delay-75 cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q1-c"} target={'_parent'}></Link>Quater 1</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q2-c"} target={'_parent'}></Link>Quater 2</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#q3-c"} target={'_parent'}></Link>Quater 3</p>
            <h4 className="text-slate-400 ">Specialization</h4>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#c-web"} target={'_parent'}></Link>Quater 4</p>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link onClick={CloseMenu} href={"#c-ai"} target={'_parent'}></Link>Quater 5
            </p>    
                <br></br>
                <br></br>
                <br></br>
            
        </div>
        </>
  )
}

 
function HandleClick() {
    throw new Error('Function not implemented.');
}

