import { Parallax } from "react-scroll-parallax";
import TypeAnimation from "react-type-animation";
import useBreakpoints from "../../hooks/useBreakpoint";
import PcRoom from "../3dComponents/PcRoom";
import Waving from "../3dComponents/Waving";

export default function Home() {
    const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

    return (
        <div className={` bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-black  flex flex-col-reverse  md:flex-row overflow-hidden justify-center `}>
            <div className="border-t-2 border-slate-200 dark:border-slate-800 md:border-none  z-10   pt-20 h-lg sm:h-auto  text-center sm:text-start sm:pt-40 sm:pl-10 md:pl-20 md:pt-40 flex flex-col gap-10 md:gap-5   ">
                <h1 className="text-4xl font-bold">My Skills</h1>
                <div className="p-5 md:p-10">

                </div>
            </div>
            <div className="z-5 w-full md:w-[50vw] ">
                <PcRoom />
            </div>
        </div >
    );
}