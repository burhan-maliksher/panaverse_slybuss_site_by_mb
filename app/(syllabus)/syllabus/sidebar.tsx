import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='lg:h-screen lg:overflow-y-scroll  lg:flex lg:fixed  lg:left-0 lg:pt-4  lg:bg-slate-600  lg:font-serif lg:text-xl lg:text-white lg:font-bold lg:text-center lg:flex-col lg:pb-32 lg:w-1/6 hidden lg:border-black lg:border-r-2 '>
          
            <h4 className="text-slate-400 ">Course Details</h4>
            <h4 className="text-slate-400 text-sm">Core Courses</h4>
            <p className='hover:text-black hover:bg-white hover:scale-150 hover:my-1 duration-300 delay-75 cursor-pointer  text-lg font-medium'>
                <Link href={"#q1-c"}></Link>Quater 1</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link href={"#q2-c"}></Link>Quater 2</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link href={"#q3-c"}></Link>Quater 3</p>
            <h4 className="text-slate-400 ">Specialization</h4>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link href={"#c-web"}></Link>Quater 4</p>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link href={"#c-ai"}></Link>Quater 5
            </p>
            
            <h4 className="text-slate-400 ">Quiz Details</h4>
            <h4 className="text-slate-400 text-sm">Core Courses</h4>
            <p className='hover:text-black hover:bg-white hover:scale-150 hover:my-1 duration-300 delay-75 cursor-pointer  text-lg font-medium'>
                <Link href={"#q1-c"}></Link>Quater 1</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link href={"#q2-c"}></Link>Quater 2</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link href={"#q3-c"}></Link>Quater 3</p>
            <h4 className="text-slate-400 ">Specialization</h4>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link href={"#c-web"}></Link>Quater 4</p>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link href={"#c-ai"}></Link>Quater 5
            </p>

            <h4 className="text-slate-400 ">Assignment Details</h4>
            <h4 className="text-slate-400 text-sm">Core Courses</h4>
            <p className='hover:text-black hover:bg-white hover:scale-150 hover:my-1 duration-300 delay-75 cursor-pointer  text-lg font-medium'>
                <Link href={"#q1-c"}></Link>Quater 1</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link href={"#q2-c"}></Link>Quater 2</p>
            <p className='hover:text-black hover:bg-white cursor-pointer hover:scale-150 hover:my-1 duration-300 delay-75 text-lg font-medium'>
                <Link href={"#q3-c"}></Link>Quater 3</p>
            <h4 className="text-slate-400 ">Specialization</h4>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link href={"#c-web"}></Link>Quater 4</p>
            <p  className='hover:text-black hover:scale-150 hover:my-1 duration-300 delay-75 hover:bg-white cursor-pointer  text-lg font-medium'>
                <Link href={"#c-ai"}></Link>Quater 5
            </p>    

            
        </div>
  )
}

 
