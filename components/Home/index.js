import TypeAnimation from "react-type-animation";
import PcRoom from "../3dComponents/PcRoom";
import Waving from "../3dComponents/Waving";

export default function Home() {
    return (
        <div className={`h-[100vh] flex flex-col-reverse  md:flex-row `}>
            <div className="border-t-4 bg-gradient-to-tr from-sky-200 to-pink-100 border-slate-400/3 dark:border-slate-900/80  pt-10 h-[50vh] sm:h-auto  text-center sm:text-start sm:pt-10 sm:pl-10 md:pl-20 md:pt-20 flex flex-col gap-2  ">
                <h1 className="text-5xl sm:text-7xl  lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold ">Hello, </h1>
                <h1 className="text-5xl sm:text-7xl  lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold whitespace-nowrap ">I'm Swasthik </h1>
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
            </div>
            <div className="w-[50vw] fixed right-0">
                <Waving />
            </div>

        </div >
    );
}