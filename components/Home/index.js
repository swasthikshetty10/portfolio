import PcRoom from "../3dComponents/PcRoom";
import Waving from "../3dComponents/Waving";

export default function Home() {
    return (
        <div className={`flex justify-end `}>
            <PcRoom />
            <Waving />
        </div >
    );
}