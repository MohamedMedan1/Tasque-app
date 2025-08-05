import AnimatedWorkStep from "./AnimatedWorkStep";
import ProcessTracker from "./ProcessTracker";
import { HiChevronDoubleRight  } from "react-icons/hi2";

export default function Step({ step }) {
    const {title,description,stepNum} = step;
    return (
        <AnimatedWorkStep i={stepNum}>
            <div className="flex items-center gap-10">
                <div className="flex gap-5">
                    <ProcessTracker isDone= {stepNum + 1 < 2}>{stepNum + 1}</ProcessTracker>
                    <div>
                        <p className="text-2xl font-semibold mb-2 uppercase">{title}</p>
                        <span className="inline-block text-sm max-w-lg leading-7 text-gray-300">{description}</span>
                    </div>
                </div>
                {(stepNum === 0 || stepNum === 2 )  &&<HiChevronDoubleRight  width={200} size={20}/>}
            </div>
        </AnimatedWorkStep>
    );
}