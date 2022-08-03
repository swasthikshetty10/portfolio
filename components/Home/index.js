import { Parallax } from "react-scroll-parallax";
import TypeAnimation from "react-type-animation";
import useBreakpoints from "../../hooks/useBreakpoint";
import Waving from "../3dComponents/Waving";

export default function Home() {
    const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

    return (
        <div className={`h-[100vh]  flex flex-col-reverse  md:flex-row overflow-hidden justify-center `}>
            <div className="border-t-2 border-slate-200 dark:border-slate-800 md:border-none  z-10   pt-20 h-lg sm:h-auto  text-center sm:text-start sm:pt-40 sm:pl-10 md:pl-20 md:pt-40 flex flex-col gap-10 md:gap-5   ">
                <Parallax speed={isXs || isSm || isMd ? -5 : 0}>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold ">Hello, </h1>
                </Parallax>
                <Parallax speed={isXs || isSm || isMd ? -10 : -10}>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold whitespace-nowrap ">I&apos;m Swasthik </h1>
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            'Web Developer',
                            3000,
                            'CSE student',
                            3000,
                            'Freelancer',
                            3000
                        ]}
                        wrapper="h2"
                        className="text-3xl sm:text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl  font-semibold "
                        repeat={Infinity}
                    />
                    <div className="py-6 md:py-10">
                        <a className="rounded-2xl md:rounded-3xl p-3 sm:p-5 border-2 md:border-4 cursor-pointer select-none text-xl sm:text-2xl font-semibold border-sky-600 hover:bg-gradient-to-l from-cyan-200/50 to-pink-100/50 dark:from-slate-900/50 dark:to-blue-900/50  transform ease-in-out duration-500 dark:border-slate-500 hover:text-2xl  sm:hover:text-3xl">Contact Me</a>
                    </div>
                </Parallax>
            </div>
            <div className="z-5 w-full md:w-[50vw] ">
                <Waving />
            </div>
        </div >
    );
}