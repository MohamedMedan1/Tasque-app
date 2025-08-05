import Step from "./Step";

const steps = [
    {
        title: "Add your task",
        description: "Quickly capture what you need to do and add it to your task list with a click.",
    },
    {
        title: "Organize it",
        description: "Group, prioritize, or schedule your tasks to keep everything in order.",
    },
    {
        title: "Mark it done",
        description: "Check off completed tasks and enjoy the satisfaction of progress.",
    },
    {
        title: "Repeat",
        description: "Keep going. Stay productive every day with your task flow.",
    },
];

export default function WorkSteps() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {steps.map((step,i) => <Step step={{...step,stepNum:i}} key={step.title}/>)}
        </ul>
    );
}