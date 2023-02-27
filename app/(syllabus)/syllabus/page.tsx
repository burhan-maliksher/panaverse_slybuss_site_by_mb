import Link from "next/link";
import Sidebar from "./sidebar";

export default function Syllabus() {
  return (
    <div className='flex flex-row md:mt-12 '>
         <Sidebar/>       

        <div className='flex flex-col  m-4 w-5/6 ml-96 justify-center text-center '>
        <header> 
                <h1 className='font-bold text-lg mb-8 lg:text-4xl'>Detailed Course Syllabus</h1>
                <h2 className='font-inder font-bold'>Quarter I (Core)</h2>
                <h2>CS-101: Object-Oriented Programming using TypeScript</h2>
                <h2 className='mt-4 font-inder font-bold'>Duration: 13 Weeks</h2>
            </header>
            <article className='text-left'>
                <p className='font-bold underline mt-4'>Course Description:</p>
                <p>
                    We will start the program by learning the fundamentals of Object-Oriented programming using 
                    JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts 
                    and try to understand their working from the perspective of the users. 
                </p>
                <p className='font-bold underline mt-2'>Course Outline:</p>
                <ol className='pl-4'>
                    <li className="mt-4 font-medium">1. HTML and CSS (Homework) </li>
                    <ol className='pl-4  text-blue-900'>
                        <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2"><Link href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"} target={"_blank"} prefetch={false}>Learn HTML by Hira Khan (Watch Recorded Videos)</Link></li>
                        <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2"><Link href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"} target={"_blank"} prefetch={false}>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</Link></li>
                        <li></li>
                    </ol>
                    <li className="mt-4 font-medium">2. Web 3.0 and Metaverse Theory </li>
                    <ol className='pl-4 text-blue-900'>
                        <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2"><Link href={"https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"} target={"_blank"} prefetch={false}>
                            Introduction to Panaverse DAO</Link></li>
                        <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2"><Link href={"https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"} target={"_blank"} prefetch={false}>
                            Web 3.0 User Guide</Link></li>
                        <li className="pt-2 text-black">Complete Web 3 Assignments included in the Web 3 User Guide</li>
                        <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2"><Link href={"https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"} target={"_blank"} prefetch={false}>
                            Virtual and Augmented  Metaverse User Guide</Link></li>
                    </ol>
                    <li className="mt-4 font-medium">3. Fundamentals of Typescript</li>
                    <ol className='pl-4 text-blue-900'>
                        <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2"><Link href={"https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing"} target={"_blank"} prefetch={false}>
                            TypeScript Presentation</Link></li>
                        <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2"><Link href={"https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"} target={"_blank"} prefetch={false}>
                            Getting Started Exercises with TypeScript and Node.js</Link></li>
                        <li className="pt-2 text-black">Fundamentals of JavaScript and Node.js Quiz</li>
                        <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2"><Link href={"https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"} target={"_blank"} prefetch={false}>
                            Virtual and Augmented  Metaverse User Guide</Link></li>
                    </ol>
                </ol>
            </article>
        </div>
    </div>
  );
}
