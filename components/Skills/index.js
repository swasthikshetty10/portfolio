import { Slide } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import TypeAnimation from "react-type-animation";
import useBreakpoints from "../../hooks/useBreakpoint";
import PcRoom from "../3dComponents/PcRoom";
import Waving from "../3dComponents/Waving";

export default function Skills({ setLoading }) {
    const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

    return (
        <div id="skills" className={`mx-auto p-5 md:px-10 bg-gradient-to-br flex-1 dark:from-slate-900 items-center   dark:via-gray-900 dark:to-black  flex flex-col  lg:flex-row overflow-hidden justify-center `}>
            <div className=" xl:ml-14 md:px-10 space-y-8 md:space-y-12 lg:max-w-[50vw] text-center">
                <a className=" max-w-min whitespace-nowrap animated-underline  md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1 text-center text-5xl font-bold link-glow">
                    My Skills
                </a>
                <div className="group">
                    <div className="mb-1 text-base font-medium text-cyan-800 dark:text-cyan-500">Front end</div>
                    <div className="w-full overflow-hidden bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <Slide direction="left" duration={2000}>
                            <div className="bg-cyan-700 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                        </Slide>
                    </div>
                    <div className="mb-1  text-base font-medium text-green-700 dark:text-green-500">Back end</div>
                    <div className="w-full overflow-hidden bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <Slide direction="left" duration={2000}>
                            <div className="bg-green-700 h-2.5 rounded-full dark:bg-green-500" style={{ width: "92%" }}></div>
                        </Slide>
                    </div>

                    <div className="mb-1 text-base font-medium text-rose-700 dark:text-rose-500">UI/UX design</div>
                    <div className="w-full overflow-hidden  bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <Slide direction="left" duration={2000}>
                            <div className="bg-rose-700 h-2.5 rounded-full dark:bg-rose-500" style={{ width: "70%" }}></div>
                        </Slide>
                    </div>
                </div>
                <div className="">
                    <h3>
                        Here are a few technologies I’ve been working with recently:
                    </h3>
                    <div className=" text-start mt-3">
                        <h3 className="text-lg  ">
                            Frameworks & Libraries
                        </h3>
                        <div className="flex gap-2 flex-wrap mt-3">
                            <a className="bg-opacity-90 bg-white border-2 border-black/90 text-black/90 px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Next JS</a>
                            <a className="bg-opacity-90 bg-[#282c34] text-[#61dafb]  border-2 border-[#61dafb]  px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">React JS</a>
                            <a className="bg-opacity-90 bg-[#0c111f] text-[#62baf2]  border-2 border-[#62baf2]  px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Tailwind CSS</a>
                            <a className="bg-opacity-90 bg-[#026e00] text-[#ffffff]/90  border-2 border-[#ffffff]/70 px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Node JS</a>
                            <a className="bg-opacity-90 bg-white text-green-700 border-2 border-green-700  px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Django</a>
                            <a className="bg-opacity-90 bg-yellow-500 text-[#000]/90  border-2 border-[#000]/70 px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Firebase</a>
                            {/* <a className="bg-opacity-90 bg-purple-500 text-[#fff]/90  border-2 border-[#fff]/70 px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Heroku</a> */}
                            <a className="bg-opacity-90 bg-[#4C51BF] text-[#fff]/90  border-2 border-[#fff]/70 px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Prisma</a>

                        </div>
                    </div>
                    <div className="text-start mt-3 ">
                        <h3 className="text-lg  ">
                            Languages
                        </h3>
                        <div className="flex gap-2 flex-wrap mt-3">
                            <a className=" border-2 border-sky-700 text-sky-700 dark:text-sky-300 dark:border-sky-300  px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Python</a>
                            <a className=" border-2 border-yellow-600 text-yellow-600 dark:text-yellow-300 dark:border-yellow-300  px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">Javascript</a>
                            <a className=" border-2 border-indigo-600 text-indigo-600 dark:text-indigo-300 dark:border-indigo-300  px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">C/C++</a>
                            <a className=" border-2 border-orange-600 text-orange-600 dark:text-orange-300 dark:border-orange-300  px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">HTML 5</a>
                            <a className=" border-2 border-cyan-600 text-cyan-600 dark:text-cyan-300 dark:border-cyan-300  px-4 py-2  font-semibold  whitespace-nowrap max-w-min rounded-xl cursor-pointer">CSS</a>

                        </div>
                    </div>
                </div>
            </div>
            <Slide direction="right" delay={500}>

                <div className="z-5 w-full lg:w-[50vw] ">
                    <PcRoom setLoading={setLoading} />
                </div>
            </Slide>
        </div >
    );
}