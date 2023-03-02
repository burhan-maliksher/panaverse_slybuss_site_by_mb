import Link from "next/link";
export default function Syllabus() {
  return (
    <div className=" flex p-8 md:pl-40 md:pr-10 lg:pr-20 lg:pl-60 xl:pl-80 flex-col w-screen  justify-center text-center ">
        <header className="mt-10 ">
            <h1 className="font-bold text-lg mb-8 lg:text-4xl">
            Detailed Course Syllabus
            </h1>
            <h2 id="q1-c" className="font-inder font-bold">
            Quarter I (Core)
            </h2>
            <h2>CS-101: Object-Oriented Programming using TypeScript</h2>
            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
        </header>

                <div className="text-left ">
                    <p className="font-bold underline mt-4">Course Description:</p>
                    <p className=" ">
                        We will start the program by learning the fundamentals of
                        Object-Oriented programming using JavaScript and TypeScript. We will
                        also understand the latest Web trends i.e. Web 3.0 and Metaverse
                        concepts and try to understand their working from the perspective of
                        the users.
                    </p>
                    <p className="font-bold underline mt-2">Course Outline:</p>
                    <ol className="pl-4">
                        <li className="mt-4 font-medium">1. HTML and CSS (Homework) </li>
                        <ol className="pl-4  text-blue-900">
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                Learn HTML by Hira Khan (Watch Recorded Videos)
                                </Link>
                            </li>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                                </Link>
                            </li>
                            <li></li>
                        </ol>
                        <li className="mt-4 font-medium">2. Web 3.0 and Metaverse Theory </li>
                        <ol className="pl-4 text-blue-900">
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                Introduction to Panaverse DAO
                                </Link>
                            </li>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                Web 3.0 User Guide
                                </Link>
                            </li>
                            <li className="pt-2 text-black">
                                Complete Web 3 Assignments included in the Web 3 User Guide
                            </li>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                Virtual and Augmented Metaverse User Guide
                                </Link>
                            </li>
                        </ol>
                        <li className="mt-4 font-medium">3. Fundamentals of Typescript</li>
                        <ol className="pl-4 text-blue-900">
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing"
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                TypeScript Presentation
                                </Link>
                            </li>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                Getting Started Exercises with TypeScript and Node.js
                                </Link>
                            </li>
                            <li className="pt-2 text-black">
                                Fundamentals of JavaScript and Node.js Quiz
                            </li>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                Virtual and Augmented Metaverse User Guide
                                </Link>
                            </li>
                            <li className="mt-4 font-medium text-black">
                                Fundamentals of JavaScript and Node.js Quiz
                            </li>
                            <li className="mt-4 font-medium text-black">
                                Topics Covered in the Quiz:
                            </li>
                            <li className="mt-4  text-black">
                                <b>A.</b>Background of JavaScript and How to use JavaScript in
                                Browser<br></br>
                                <b>B.</b>Variables, Primitive data types Analyzing and modifying
                                data types, and Operators (Chapter 2 of JavaScript from Beginner
                                to Professional)<br></br>
                                <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                    href={
                                    "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    <b>C.</b>Intro to Node.js, .mjs files, Modules, NPM, import,
                                    export, and using external modules with npm<br></br>
                                </Link>
                                </li>
                                <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                    href={
                                    "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    <b>D.</b>How to accept user input in your Node.js JavaScript
                                    programs, this will allow us to create interactive Node.js
                                    console programs using prompt-sync library. The last example
                                    in this presentation shows you how to use prompt-sync library
                                    in your Node.js programs
                                    <br></br>
                                </Link>
                                </li>
                                <b>Note:</b> After this point, we will do all our class work and
                                exercises using Node.js in .mjs files. We will also be able to
                                develop interactive Node.js console programs which will greatly
                                help the students to learn.
                                <br></br>
                                <b>E.</b>
                                Using Arrays and Objects in Node.js Programs (chapter 3 of
                                JavaScript from Beginner to Professional)<br></br>
                                <br></br>
                                <b>F.</b>
                                Using if and if else statements, else if statements, Conditional
                                ternary operators, and switch statements in Node.js programs
                                (chapter 4 of JavaScript from Beginner to Professional)
                                <br></br>
                                <b>G.</b>
                                Using while loop, do while loop, for loop, for in, and for of loop
                                in Node.js (chapter 5 of JavaScript from Beginner to Professional)
                                <br></br>
                                <b>H.</b>
                                Using Basic functions, Function arguments, Return, Variable scope
                                in functions, Recursive functions, Nested functions, Anonymous
                                functions, and Function callbacks in Node.js (chapter 6 of
                                JavaScript from Beginner to Professional)
                                <br></br>
                                <b>I.</b>
                                Using Concurrency, Callbacks, Promises, async / await, and Event
                                loop (chapter 13 of JavaScript from Beginner to Professional)
                                <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                    href={
                                    "https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    <br></br>
                                    <b>J.</b>
                                    JavaScript promises, mastering the asynchronous
                                    <br></br>
                                </Link>
                                </li>
                                <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                    href={
                                    "https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    <br></br>
                                    <b>K.</b>
                                    New JavaScript Features in ECMAScript 2022 and 2021
                                    <br></br>
                                </Link>
                                </li>
                            </li>
                        </ol>


                        <li className=" mt-4 font-medium">
                        4. Object-Oriented Programming with TypeScript
                        </li>
                        <ol className="pl-4 text-blue-900">
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                            <Link
                                href={
                                "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1 "
                                }
                                target={"_blank"}
                                prefetch={false}
                            >
                                <br></br>
                                Chapters 1-11 of Learning TypeScript: Enhance Your Web
                                Development Skills Using Type-Safe JavaScript
                                <br></br>
                            </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                            <Link
                                href={"https://github.com/panaverse/learn-typescript "}
                                target={"_blank"}
                                prefetch={false}
                            >
                                <br></br>
                                Learning Repository
                                <br></br>
                            </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                            <Link
                                href={"https://www.learningtypescript.com/ "}
                                target={"_blank"}
                                prefetch={false}
                            >
                                <br></br>
                                In Class Companion projects and articles for Learning TypeScript
                                <br></br>
                            </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                            <Link
                                href={"	https://github.com/panaverse/typescript-node-projects "}
                                target={"_blank"}
                                prefetch={false}
                            >
                                <br></br>
                                Homework Project
                                <br></br>
                            </Link>
                            </li>
                            <li className="mt-4 font-medium text-black">
                            Fundamentals of TypeScript Quiz
                            </li>
                            <li className="mt-4 font-medium text-black">
                            TypeScript Professional Proficiency Quiz
                            </li>
                        </ol>
                        <li className="mt-4 font-medium">5. TypeScript for React</li>
                        <ol>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                            <Link
                                href={"https://profy.dev/article/react-typescript "}
                                target={"_blank"}
                                prefetch={false}
                            >
                                <br></br>
                                Minimal TypeScript Crash Course For React With Interactive Code
                                Exercises
                                <br></br>
                            </Link>
                            </li>
                        </ol>
                        <li className="mt-4 font-medium">
                            Quarter Break Assignments and Quizzes
                        </li>
                        <li className="mt-4 font-medium">
                            During the Quarter Break, we do the following Assignments:
                        </li>
                        <ol>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    " https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                1.Assignment00 cloud to edge
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "  https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                2.assignment01 todo app
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    " https://github.com/panaverse/stylingnextjs-projects/tree/main/project00_pricing_ui "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                3.project00 pricing ui
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    " https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                4. Build a Panaverse DAO Syllabus Website using Next.js 13 given
                                the content from the following document
                                </Link>
                            </li>
                            <p>
                                <b>
                                The best-developed Website will be hosted on www.panaverse.co
                                domain.
                                </b>
                            </p>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "  https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                5. Build a new PIAIC Website using Next.js 13 given the content
                                from the current PIAIC Website and from the following document
                                </Link>
                            </li>
                            <p>
                                <b>
                                The best-developed Website will be hosted on www.panaverse.co
                                domain.
                                </b>
                            </p>
                            <p>
                                <b>
                                After completing the above Five Assignments everyone will appear
                                in the following two Quizzes covering Github and TypeScript:
                                </b>
                            </p>
                            <p>
                                <b>Fundamentals of Version Control with Git Quiz</b>
                            </p>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch
                                Recorded Videos)
                                </Link>
                            </li>
                            <p>
                                Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
                                step-by-step course for the complete beginner by Tobias Günther
                            </p>
                            <p className="">We will also cover these readings:</p>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={"https://help.github.com/articles/markdown-basics/ "}
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                markdown basics
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    " http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                difference between fork and branch on github
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                git branch fork fetch merge rebase and clone what are the differences
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={" https://git-scm.com/book/en/v2/Git-Branching-Rebasing "}
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                https://git-scm.com/book/en/v2/Git-Branching-Rebasing
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    " http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={" https://try.github.io/levels/1/challenges/1 "}
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                For practice:
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://www.datacamp.com/courses/introduction-to-git-for-data-science  "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                Homework:
                                </Link>
                            </li>
                            <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                href={
                                    "https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html "
                                }
                                target={"_blank"}
                                prefetch={false}
                                >
                                <br></br>
                                Git Cheatsheet
                                </Link>
                            </li>
                            <p>
                                <b>
                                Git Quiz
                                <br></br>
                                Total Questions: 60, Total Time: 75 minutes
                                <br></br>
                                TypeScript Proficiency Quiz
                                <br></br>
                                Total Questions: 63
                                <br></br>
                                Duration: 120 minutes
                                <br></br>
                                <br></br>
                                <li className="pt-2 text-blue-900 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={"https://github.com/panaverse/learn-typescript "}
                                    target={"_blank"}
                                    prefetch={false}
                                    >
                                    <br></br>
                                    Study Material
                                    </Link>
                                </li>
                                </b>
                            </p>
                        </ol>
            <br></br>
                        
                
                </ol>
            </div>
            <div className="text-left ">
                        <p>
                            <h1 id="q2-c" className="font-bold text-lg mb-8 lg:text-4xl">
                            Quarter II (Core)
                            </h1>
                            <h2 className="font-semibold">
                            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs
                            using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description:</p>
                            <p>
                            The objective of this course is to teach participants to develop
                            customer-facing planet-scale Websites, Full-Stack Apps and templates,
                            Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
                            the participants will be able to develop and deploy web platforms like
                            Facebook, Shopify, etc. The technologies covered in this course will
                            include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL,
                            Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
                            Technologies, and Cloud Development Kit for Terraform (CDKTF).
                            </p>
                            <p className="font-bold underline mt-2">Course Outline:</p>
                            <ol className="pl-4">
                            <li className="mt-4 font-medium">1. Next.js 13 Web Development </li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                    href={"https://beta.nextjs.org/docs"}
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Next 13 Official Documentation
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                    href={"https://beta.reactjs.org/learn "}
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Latest Learn React Official Website
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                <Link
                                    href={"https://github.com/panaverse/learn-nextjs"}
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Learn Next.js 13 Learning Repo
                                </Link>
                                </li>
                                
                            </ol>
                            <li className="mt-4 font-medium">2.Next.js 13 using Chakra UI (Remote Zoom Class) </li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://chakra-ui.com/getting-started"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Chakra UI Docs
                                </Link>
                                </li>
                                <li></li>
                            </ol>
                            <li className="mt-4 font-medium">3.UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class) </li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.figma.com/community/file/768809027799962739"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Figma Design Kit for TailwindCSS
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.figma.com/community/file/971408767069651759 "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Chakra UI Figma Kit
                                </Link>
                                
                                </li>
                                <li></li>
                            </ol>
                            <li className="mt-4 font-medium">4.API Routes with Next.js (Remote Zoom Class) </li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://nextjs.org/docs/api-routes/introduction"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    API Routes
                                </Link>
                                </li>        
                            </ol>
                            <li className="mt-4 font-medium">5.APIs with Next.js and tRPC (Remote Zoom Class) </li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Build a tRPC CRUD API Example with Next.js	
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Stop building REST APIs for your Next.js apps, use tRPC instead
                                </Link>
                                </li>
                                <li></li>
                            </ol>
                            <li className="mt-4 font-medium">6.SQL and Prisma </li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Start from scratch with relational databases
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.youtube.com/watch?v=5hzZtqCNQKk"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    SQL For Beginners Video Tutorial
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.freecodecamp.org/news/dbms-and-sql-basics/"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Database Management Systems and SQL – Tutorial for Beginners
                                </Link>
                                
                                </li>
                                <li></li>
                            </ol>
                            <li className="mt-4 font-medium">7.Next.js 13 using TailwindCSS (Remote Zoom Class)</li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/ "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Modern CSS with Tailwind, Second Edition by Noel Rappin
                                </Link>
                                </li>        
                            </ol>
                            <li className="mt-4 font-medium">8.AWS Application Composer (Remote Zoom Class) </li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.youtube.com/watch?v=BujE_tik5r8 "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    What is AWS Application Composer?
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.youtube.com/watch?v=p411uh363jQ "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Event-driven apps with AWS Application Composer
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://aws.amazon.com/application-composer/ "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Visually design and build serverless applications quickly
                                </Link>
                                
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    " https://aws.amazon.com/free/ "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    <b>Must Have: Create Free AWS Account</b><br></br>
                                     AWS Free Tier                                    
                                </Link>
                                </li>
                                <li className="mt-4 font-medium">
                                    Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://www.nayapay.com/"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Now you can create a virtual VISA Debit card through the NayaPay app
                                </Link>
                                <li className="mt-4 font-medium">
                                    which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.
                                </li>
                          
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    You can also get a $300 credit
                                </Link>
                                
                                </li>
                            </ol>
                            <li className="mt-4 font-medium">9.Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class) </li>
                            <ol className="pl-4  text-blue-900">
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://github.com/panaverse/learn-multicloud-api-development  "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps
                                </Link>
                                </li>
                                <li className="mt-4 font-medium">
                                    Web 2.0 Projects
                                </li>

                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://github.com/panaverse/nextjs-projects"
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Next.js Projects
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "https://github.com/panaverse/styling-nextjs-projects "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Styling Next.js Projects using TailwindCSS and Chakra UI
                                </Link>
                                
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    " 	https://github.com/ogzhanolguncu/min-todo  "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Todo Full-Stack App
                                </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                    href={
                                    "	https://www.youtube.com/watch?v=nzJsYJPCc80 "
                                    }
                                    target={"_blank"}
                                    prefetch={false}
                                >
                                    Build a Twitter Clone
                                </Link>
                                </li>
                            </ol>

                    <div className="text-left ">
                        <p>
                            <h1 id="q3-c" className="font-bold text-lg mb-8 lg:text-4xl">
                            Quarter III (Core)
                            </h1>
                            <h2 className="font-semibold">
                                $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Earn While You Learn Projects</p>
                            <p className="font-bold underline mt-4"><b>A.</b>Build Full-Stack Next.js 13 Jamstack Templates</p>
                            
                            <p>
                                You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                            </p>
                            <ol className="pl-4">
                                <ol className="pl-4  text-blue-900">
                                    <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://github.com/panaverse/panaverse-template-standard"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        The Template Standard
                                    </Link>
                                    </li>
                                </ol>
                            </ol>
                            <p className="font-bold underline mt-4"><b>B.</b>Build QraphQL APIs </p>
                            <h2 className="mt-4 font-inder font-medium">
                                You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 
                            </h2>

                    </div>
                    
                    <div className="text-left ">
                        <p>
                            <h1 id="c-web-4" className="font-bold text-lg mb-8 lg:text-4xl">
                            Web 3 and Metaverse Specialization
                            </h1>
                            <h2 className="font-semibold">
                            Quarter IV
                            <br></br>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                                In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Why you should learn web 2.0 before web 3.0
                                    </Link>
                                    </li>
                            </p>
                            <p className="font-bold underline mt-4">Course Outline:  </p>

                            <p className="font-bold  mt-4"><b>1.</b>Blockchain and Metaverse Theory</p>
                             <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                       The Metaverse: And How It Will Revolutionize Everything by Matthew Ball
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067 "}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                            Mastering Blockchain - Fourth Edition by Imran Bashir
                                        </Link>
                                </li>
                            </ol>
                            <p className="font-bold  mt-4"><b>2.</b>Smart Contract Development in Solidity </p>
                            <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Solidity Programming Essentials - Second Edition By Ritesh Modi
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://github.com/panaverse/defi-dapps-solidity-smart-contracts"}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                            Solidity Learning Repo
                                        </Link>
                                </li>
                            </ol>
                            <p className="font-bold  mt-4"><b>3.</b>Dapp Development using Ethers.js and Next.js 13 </p>
                            <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://github.com/panaverse/dapps-nextjs"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Dapp Learning Repo
                                    </Link>
                                </li>
                            </ol>
                            <p className="font-bold  mt-4"><b>4.</b>Tokennomics </p>
                            <p className="font-bold  mt-4"><b>5.</b>Blockchain Project: Create a Token and Launch ICO/IEO/IDO</p>
                            <ol className="pl-4">
                                As you probably know, the ICO (Initial Coin Offering) industry has been booming, and its completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedias list of highest crowdfunding projects  
                            </ol>
                            <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                     Wikipedias list   
                                    </Link>
                                </li>
                                <p>and you will notice that blockchain projects absolutely dominate the list.</p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://phemex.com/blogs/what-is-a-dex-ido "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Understand the difference between IDO vs. IEO vs. ICO
                                    </Link>
                                </li>
                                <p>Also check these links for latest listings:</p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://icodrops.com "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        ICO list at ICO Drops 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://topicolist.com/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        ICO List of Best New Initial Coin Offerings
                                    </Link>
                                </li>
                                <p>
                                Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs https://cryptototem.com/ico-list/ 
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.icolistingonline.com "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        ICO List Online
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://coincodex.com/ieo-list/binance/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Binance IEO List 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.coinspeaker.com/ieo/platform/binance-launchpad/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Binance Launchpad 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://icomarks.com/ieo "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        IEO List 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://polkastarter.com "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Polkastarter 
                                    </Link>
                                </li>
                                <p>
                                    Project Part 1: How to Launch a IEO on Binance Launchpad
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://appinventiv.com/blog/how-to-launch-an-ieo/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Read How to Launch an IEO 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad
                                    </Link>
                                </li>
                                <p>
                                    <b>
                                        Note: Also document the alternatives to Binance Launchpad.
                                         <br></br>
                                        Project Part 2: How to Launch a IDO on Polkastarter
                                    </b>
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"     https://cryptorank.io/fundraising-platforms  "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Review the list of top fundraising platforms 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"   https://polkastarter.com/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter
                                    </Link>
                                </li>
                                <p>
                                    
                                    Project Part 3: Create a Pako Token<br></br>

                                    By creating a token and related contracts, you will also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.<br></br>

                                    Therefore, for the sake of this chapter, let s imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).<br></br>

                                    Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.<br></br>

                                    Project Part 4: Develop Crowd Sale Contract<br></br>

                                    This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)<br></br>

                                    Implement a payable buyToken() function. <br></br>

                                    Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought<br></br>

                                    Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal owner account.<br></br>

                                    Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.<br></br>

                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://docs.openzeppelin.com/contracts/4.x/crowdsales "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        You can use the openzeppelin crowd sale contracts
                                    </Link>
                                </li>
                                <p>
                                    <b>
                                    however you will have to update the code to the latest solidity version.
                                    </b>
                                </p>
                                <p>
                                    Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract is balance should have been reduced.
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://docs.openzeppelin.com/contracts/4.x/access-control "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Note: Before you get started writing the token contract we suggest you review the access control
                                    </Link>
                                </li>
                                <p>
                                    <b>
                                        Project Part 5: Trying it with MetaMask
                                    </b>
                                </p>
                                <p>
                                    
                                    While it is always good to test your code, it is often more satisfying to see the results of your work wrapped in a nice UI. Let is see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!<br></br>

                                    We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.<br></br>

                                    When it is done, take note of what addresses the contracts were uploaded to and copy it!<br></br>

                                    Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet does not have any ethers, remember that you can use any faucet.<br></br>

                                    After the transaction has been confirmed, you might be confused about why you cant see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to register it – after all, there are so many tokens out there, there is no way MetaMask could list them all by default!<br></br>

                                    To do this, open the side menu and click on the Add token button to get started:<br></br>

                                    Once you are on the token page, click on Add custom token and paste in the token contract is address in the address field.<br></br>

                                    After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!<br></br>

                                </p>
                                <p>
                                    <b>
                                        Project Part 6: Trying it with Multisignature Wallets
                                    </b>
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Read
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://gnosis-safe.io/ with multi-sigs to do what you did in the last part."}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Now use Gnosis Safe
                                    </Link>
                                </li>
                                <p>
                                    <b>
                                    Project Part 7: Sending Tokens using Ethers.js 
                                    </b>
                                    Write a Typescript program to send Pako Token to some friend is address using Ethers.js.
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://ethereum.org/en/developers/tutorials/send-token-etherjs/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        You may follow this tutorial
                                    </Link>
                                </li>
                                <p>
                                    <b>
                                    Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
                                    </b>
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Read this NFT tutorial series 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://docs.openzeppelin.com/contracts/4.x/erc721 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Create a NFT contract using the OpenZepplen ERC721 NFT Standard
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"  https://docs.openzeppelin.com/contracts/4.x/erc721#Presets "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        You may use the Preset ERC721 contract
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://opensea.io/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace
                                    </Link>
                                </li>
                                <b>for sale.</b>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Implement a ERC721 Market 
                                    </Link>
                                </li>
                            </ol>
                        </div>
                        <div className="text-left ">
                        <p>
                            <h1 id="c-web-5" className="font-bold text-lg mb-8 lg:text-4xl">
                            Quarter V
                            </h1>
                            <h2 className="font-semibold">
                                MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                                The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It is unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.
                            </p>
                            <p className="font-bold underline mt-4">Course Outline:  </p>

                            <p className="font-bold  mt-4"><b>1.</b>Open Metaverse Web Development </p>
                             <ol className="pl-4">   
                                <p className="font-bold underline mt-4">Course Description: </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://github.com/panaverse/metaverse-web"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >Open Metaverse Learning Repo 
                                    </Link>
                                </li>
                             </ol>
                            <p className="font-bold  mt-4"><b>2.</b>Blender 3D asset Creation for the Metaverse (Remote Zoom Class) </p>
                            <ol className="pl-4">   
                                <p className="mt-4">
                                    Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse. 
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.blender.org/download/"}
                                        target={"_blank"}
                                        prefetch={false}
                                    > Blender 3.3+ Download  
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Blender 3.0 Beginner Tutorial 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Blender 3.0 Hotkey
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    > 
                                    Blender Projects Textbook: Blender by Example 2nd Edition
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.youtube.com/watch?v=H7T0SzdFHwg "}
                                        target={"_blank"}
                                        prefetch={false}
                                    > 
                                    Best Hardware Performance for Blender Rendering
                                    </Link>
                                </li>
                                <p className="font-semibold mt-4">
                                Assignment 1:
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD "}
                                        target={"_blank"}
                                        prefetch={false}
                                    > 
                                    Build a 3D Donut using Blender 3 as shown in these video tutorials
                                    </Link>
                                </li>
                                <p className="font-semibold mt-4">
                                Assignment 2:
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"  https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    > 
                                    Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book Blender by Example 2nd Edition
                                    </Link>
                                </li>
                                <p className="font-semibold mt-4">
                                Assignment 3:
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    > 
                                    Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition
                                    </Link>
                                </li>
                                <p className="font-semibold mt-4">
                                Assignment 4:
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    > 
                                    Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition 
                                    </Link>
                                </li>
                                <p className="font-semibold mt-4">
                                Assignment 5:
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"  https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    > 
                                        Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition
                                    </Link>
                                </li>
                                <p className="font-semibold mt-4">
                                Assignment 6:
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={" https://www.youtube.com/watch?v=bpvh-9H8S1g "}
                                        target={"_blank"}
                                        prefetch={false}
                                    > 
                                        Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials
                                    </Link>
                                </li>
                             </ol>
                        </div>                    

                        <div className="text-left ">
                        <p>
                                
                            <h1 id="c-ai-4" className="font-bold text-lg mb-8 lg:text-4xl">
                            Artificial Intelligence (AI) and Deep Learning Specialization
                            </h1>
                            <h2 className="font-semibold">
                             Quarter IV
                                <br></br>
                            AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                                Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning is potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.

                                We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.

                                We will conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We will also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.

                            </p>
                            <p className="font-bold underline mt-4">Course Outline:  </p>

                            <p className="font-bold  mt-4"><b>1.</b>Introduction to Machine Learning, Data Science, and AI </p>
                             <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.coursera.org/learn/ai-for-everyone  "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        AI for Everyone
                                    </Link>
                                    <br></br>
                                </li>
                                <b>
                                    AI for Everyone Quiz in Week 3 
                                    Total Questions: 60, Total Time: 75 minutes
                                </b>
                             </ol>
                             <p className="font-bold  mt-4"><b>2.</b>Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models </p>
                             <ol className="pl-4">   
                                <li> We will cover GPT-4, ChatGPT, etc. and Next.js 13</li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://openai.com/api/ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Link.1
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Link.2
                                    </Link>
                                </li>
                             </ol>
                             <p className="font-bold  mt-4"><b>3.</b>Python Crash Course  for TypeScript Developers</p>
                             <ol className="pl-4">   
                                <li> We will cover GPT-4, ChatGPT, etc. and Next.js 13</li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_ "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition
                                    </Link>
                                </li>
                            </ol>
                         </div>    
                         
                        <div className="text-left ">
                        <p>
                                
                            <h1 id="c-ai-5" className="font-bold text-lg mb-8 lg:text-4xl">
                            Quarter V
                            </h1>
                            <h2 className="font-semibold">
                                <br></br>
                                AI-361: Deep Learning and MLOps
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                            This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.
                            </p>
                            <p className="font-bold underline mt-4">Course Outline:  </p>

                            <p className="font-bold  mt-4"><b>1.</b>Deep Learning with Tensorflow </p>
                             <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2  "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        Deep Learning with Python, Second Edition 2nd Edition
                                    </Link>
                                    <br></br>
                                </li>
                             </ol>
                             <p className="font-bold  mt-4"><b>2.</b>Machine Learning Engineering for Production (MLOps) using Terraform for CDK</p>
                             <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        MLOps leveraging AWS SageMaker and Terraform
                                    </Link>
                                </li>
                             </ol>
                         </div>    
                         <div className="text-left ">
                        <p>
                                
                            <h1 id="c-cnc-4" className="font-bold text-lg mb-8 lg:text-4xl">
                            Cloud-Native Computing Specialization
                            </h1>
                            <h2 className="font-semibold">
                            Quarter IV
                                <br></br>
                                CN-351: Certified Kubernetes Application Developer (CKAD)
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                                Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.
                                <br></br>These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.
                                <br></br>Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.
                            </p>
                            <p className="font-bold underline mt-4">Course Outline:  </p>

                             <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        <b>1.</b>Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://cdk8s.io/"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        <b>2.</b>Cloud Development Kit for Kubernetes
                                    </Link>
                                </li>
                             </ol>
                         </div>   
                         <div className="text-left ">
                        <p>
                            <h1 id="c-cnc-5" className="font-bold text-lg mb-8 lg:text-4xl">
                            Quarter V
                            </h1>
                            <h2 className="font-semibold">
                            CN-361: Developing Multi-Cloud Apps using CDK for Terraform
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                                Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.
                                <br></br>Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.
                            </p>
                            <p className="font-bold underline mt-4">Course Outline:  </p>

                             <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://developer.hashicorp.com/terraform/cdktf s"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        CDK for Terraform
                                    </Link>
                                </li>
                             </ol>
                         </div>    
                         <div className="text-left ">
                        <p>
                            <h1 id="c-iot-4" className="font-bold text-lg mb-8 lg:text-4xl">
                            Ambient Computing and IoT Specialization
                            </h1>
                            <h2 className="font-semibold">
                            Quarter IV
                            <br></br>
                            AC-351: Ambient Computing with Voice Assistants and Matter Devices
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                                Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people dont want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesnt matter what device you are using, what context you are in, whether you are talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.
                                <br></br>If you were thinking that the IoT and ambient computing sound a lot alike, you are not wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.
                                <br></br>Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.
                                <br></br>In this course we will learn to build smart homes with Amazon Alexa and Matter protocol. 
                            </p>
                            <p className="font-bold underline mt-4">Course Outline:  </p>

                             <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://developer.amazon.com/en-US/alexa "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                       <b>1.</b> Alexa Skill Developement 
                                    </Link>
                                </li>
                                <p className=""><b>2.</b>Alexa with Matter Protocol</p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://developer.amazon.com/en-US/alexa/matter "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        link.1
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        link.2
                                    </Link>
                                </li>
                             </ol>
                         </div>    
                         <div className="text-left ">
                        <p>
                            <h1 id="c-iot-5" className="font-bold text-lg mb-8 lg:text-4xl">
                            Quarter V
                            </h1>
                            <h2 className="font-semibold">
                            AC-361: Embedded Programming using C and Rust
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                            This is an introductory course about using the C and Rust Programming Languages on Bare Metal embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We will learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.
                            </p>
                            <p className="font-bold underline mt-4">Course Outline:  </p>
                            <p>
                            <b>1.</b>Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2) 
                            </p>
                             <ol className="pl-4">   
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                        docs
                                    </Link>
                                </li>
                                <p>
                                    What is the Fourth Industrial Revolution? 
                                    <br></br>What is IoT? 
                                    <br></br>Embedded Systems 
                                    <br></br>Hardware and Software for IoT 
                                    <br></br>Edge and Cloud Computing 
                                    <br></br>The future of IoT is AI 
                                    <br></br>Blockchain in the Internet of Things? 
                                    <br></br>IoT + AI + Blockchain: The Fourth Industrial Revolution has begun
                                    <br></br>How will Matter change the IoT Infrastructure and address issues
                                    <br></br>Metaverse and IoT
                                    <br></br><b>Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3 </b>
                                    <br></br>Total Questions: 46, Total Time: 60 minutes 

                                </p>
                                <p className=""><b>2.</b>The C Reference Book: The C programming language
                                    Embedded Programming book: Internet of things with ESP8266
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                    Download Link: 
                                    </Link>
                                </li>
                                <p className="pt-2"><b>3.</b>
                                Introduction to C Part 1 (Weeks 3B, 4, and 5) 
                                </p>
                                <p className="pl-2">
                                    <br></br>C environment Setup for (Windows, Linux, and Mac OS systems)
                                    <br></br>Chapters 1-2 of  “The C programming language”
                                    <br></br>&emsp;Variable names types
                                    <br></br>&emsp;Data types and sizes
                                    <br></br>&emsp;Constants
                                    <br></br>&emsp;Arithmetic operations
                                    <br></br>&emsp;Logical and relational operators
                                    <br></br>&emsp;Type conversions.
                                    <br></br>&emsp;Bitwise operators
                                    <br></br>&emsp;Conditional expressions.
                                    <br></br><br></br>Programming Assignments will also be given.
                                </p>
                                <p className="pt-2"><b>4.</b>
                                    C Programming Part 2 (Weeks 6 and 7) 
                                </p>
                                <p className="pl-2">
                                    <br></br><b>Topics 3 and 4  of  “The C programming language”</b>
                                    <br></br>Chapters 1-2 of  “The C programming language”
                                    <br></br>&emsp;Control flow statements (else if, loops, switch, break continue)
                                    <br></br>&emsp;Function and Program structure(Returning and non-returning, scope rules, Recursion)
                                    <br></br><p className="pt-2">
                                        Programming Assignments will also be given. 
                                        </p>
                                </p>
                                <p className="pt-2"><b>5.</b>
                                Introduction to Embedded systems Part 1 (Weeks 8) 
                                </p>
                                <p className="pl-2">
                                    <br></br>Basic Electronics and Introduction to microcontrollers
                                    <br></br>Chapter 1 of  “Internet of things with ESP8266” 

                                    <br></br>&emsp;Arduino IDE installation and env setup for ESP8266
                                    <br></br>&emsp;Burning your first code on ESP8266
                                    <br></br><br></br>Project-based Assignments will also be given. 
                                    <br></br><br></br><b>Mid-Term II: C Programming Quiz 1 in Week 9 </b>
                                    <br></br>Total Questions: 62, Total Time: 75 minutes 
                                </p>
                                <p className="pt-2"><b>6.</b>
                                Introduction to Embedded systems Part 2 (Weeks 9-12) 
                                </p>
                                <p className="pl-2">
                                    <br></br>Chapters 2-5 of  “Internet of things with ESP8266”
                                    <br></br>&emsp;Connecting your hardware to wifi.
                                    <br></br>&emsp;<li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/ "}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                        Link 1
                                        </Link>
                                    </li>
                                    <br></br>&emsp;Reading data from GPIOs.
                                    <br></br>&emsp;<li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number)%20you%20are%20referring%20to."}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                        Link 2
                                        </Link>
                                    </li>
                                    <br></br>&emsp;Controlling LEDs.
                                    <br></br>&emsp;Reading data from digital sensors. 
                                    <br></br>&emsp;<li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/ "}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                        Link 3
                                        </Link>
                                    </li>
                                    <br></br>&emsp;Cloud data logging. 
                                    <br></br>&emsp;<li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html "}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                        Link 4
                                        </Link>
                                    </li>
                                    <br></br>&emsp;<li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform "}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                        Link 5
                                        </Link>
                                    </li>
                                    <br></br>&emsp;<li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                        Link 6
                                        </Link>
                                    </li>
                                    <br></br>&emsp;Displaying data on the cloud. 
                                    <br></br>&emsp;
                                    <br></br>&emsp;<li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                        Link 7
                                        </Link>
                                    </li>
                                    <br></br>&emsp;Controlling controller remotely. 
                                    <br></br>&emsp;
                                    <br></br>&emsp;<li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                        <Link
                                            href={"https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"}
                                            target={"_blank"}
                                            prefetch={false}
                                        >
                                        Link 8
                                        </Link>
                                    </li>
                                    <br></br>&emsp;Controlling a lamp anywhere in the world. 
                                    <br></br>&emsp;Interacting with different web services. 
                                </p>
                             </ol>
                             <p className="pt-2"><b>4.</b>
                             Embedded Programming using Rust (Extra Weeks in the Course)
                                </p>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.rust-lang.org/what/embedded "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                     Link 1 
                                    </Link>
                                </li>
                                <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://crates.io/crates/esp8266 "}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                     Link 2
                                    </Link>
                                </li>
                            <p className="pt-2"><b>5.</b>
                            Hardware Requirements: 
                                </p>   
                                <ol className="pl-2">
                                    <li>a.Esp8266 (Node MCU)</li>
                                    <li>b.Jumper Wires</li>
                                    <li>c.Bread Board</li>
                                    <li>d.LEDs</li>
                                    <li>e.Sensors: (Dht11, ultrasonic sensor, IR sensor)</li>
                                </ol>
                         </div>    
                         <div className="text-left pt-4 ">
                        <p>
                            <h1 id="c-bio-4" className="font-bold text-lg mb-8 lg:text-4xl">
                            Genomics and Bioinformatics Specialization
                            </h1>
                            <h2 className="font-semibold">
                            Quarter IV<br></br>
                            Bio-351: Python for Biologists
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                                This course will focus on learning the basics of the Python programming language through genomics examples.
                            </p>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.pythonforbiologists.org/"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                      Textbook
                                    </Link>
                                </li>
                         </div>
                         <div className="text-left pt-4 ">
                        <p>
                            <h1 id="c-bio-5" className="font-bold text-lg mb-8 lg:text-4xl">
                            Quarter V
                            </h1>
                            <h2 className="font-semibold">
                            Bio-361: Bioinformatics with Python
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                                In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.
                            </p>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                      Textbook
                                    </Link>
                                </li>
                         </div>
                         <div className="text-left pt-4 ">
                        <p>
                            <h1 id="c-net-4" className="font-bold text-lg mb-8 lg:text-4xl">
                            Network Programmability and Automation Specialization
                            </h1>
                            <h2 className="font-semibold">
                            Quarter IV
                            <br></br>
                            NPA-351: CCNA 200-301 Certification
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                            This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.
                            </p>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                      Textbook
                                    </Link>
                                </li>
                         </div>    
                         <div className="text-left pt-4 ">
                        <p>
                            <h1 id="c-net-5" className="font-bold text-lg mb-8 lg:text-4xl">
                            Quarter V
                            </h1>
                            <h2 className="font-semibold">
                            NPA-361: Network Programmability and Automation
                            </h2>
                            <h2 className="mt-4 font-inder font-bold">Duration: 13 Weeks</h2>
                        </p>

                            <p className="font-bold underline mt-4">Course Description: </p>
                            <p className=" mt-4">
                            Traditional network management techniques cant be effectively automated and dont scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.
                            </p>
                            <li className="pt-2 hover:text-cyan-600 underline hover:underline-offset-2">
                                    <Link
                                        href={"https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3"}
                                        target={"_blank"}
                                        prefetch={false}
                                    >
                                      Textbook
                                    </Link>
                                </li>
                         </div>    
                    </ol>
                </div>          

    </div>
  );
}

