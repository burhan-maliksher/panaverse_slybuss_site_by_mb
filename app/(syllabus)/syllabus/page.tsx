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
                    </ol>
                </div>          

    </div>
  );
}


























