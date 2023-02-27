import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <>
        <div className="mb-0 md:flex md:flex-row md:justify-between bg-slate-600 pr-10 pl-8">
            <div className="flex flex-col space-x-4 bg-slate-600 text-left pl-5 py-10 text-white text-base">
                <h3 className="font-bold text-lg pl-2">Relevant Information Links:</h3>
                <h3>Admission Website : <Link href={'https://www.piaic.org/'} prefetch={false} target={"_blank"} >
                    <span className='font-bold text-cyan-500 underline hover:underline-offset-4 hover:text-blue-800'>
                        PIAIC
                    </span></Link>
                </h3>
                <h3>Syllabus and Community Website : <Link href={'https://www.panaverse.co/ '} prefetch={false} target={"_blank"} >
                    <span className='font-bold text-cyan-500 underline hover:underline-offset-4 hover:text-blue-800'>
                        Panaverse DAO
                    </span></Link>
                </h3>
                <div className="flex space-x-4">
                    <h3><Link href={'https://www.facebook.com/groups/panaverse '} prefetch={false} target={"_blank"} >  
                        <span className=' hover:opacity-50 inline-block mt-4'>
                            <Image src="/images/fb.svg" alt='facebook icon' width={20} height={20}/>
                        </span></Link>
                    </h3>
                    <h3><Link href={'https://www.youtube.com/@panaverse/streams '} prefetch={false} target={"_blank"} >
                        <span className=' hover:opacity-50 inline-block mt-4'>
                            <Image src="/images/youtube.svg" alt='youtube icon' width={20} height={20}/>
                        </span></Link>
                    </h3>
                    <h3><Link href={'https://github.com/panaverse'} prefetch={false} target={"_blank"} >
                        <span className=' hover:opacity-50 inline-block mt-4'>
                            <Image src="/images/git.svg" alt='youtube icon' width={20} height={20}/>
                        </span></Link>
                    </h3>
                    <h3><Link href={'https://twitter.com/Panaverse_edu'} prefetch={false} target={"_blank"} >
                        <span className=' hover:opacity-50 inline-block mt-4'>
                            <Image src="/images/twiter.svg" alt='youtube icon' width={20} height={20}/>
                        </span></Link>
                    </h3>
                    <h3><Link href={'https://discord.gg/Pc96uGMC'} prefetch={false} target={"_blank"} >
                        <span className=' hover:opacity-50 inline-block mt-4'>
                            <Image src="/images/discord.svg" alt='youtube icon' width={20} height={20}/>
                        </span></Link>
                    </h3>
                </div>    
            </div>
            <div className="bg-nav_color font-bold text-lg text-cyan-500 align-bottom p-10 md:py-10">
                <h4 >This Site is  </h4>
                <h4>Design  </h4>
                <h4>&</h4>
                <h4>Developed</h4>
                <h4>By M.B</h4>
            </div>
        </div>
        </>
    );
}