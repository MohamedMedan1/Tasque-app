import AnimatedFeature from "./AnimatedFeature";
import AnimatedFeatures from "./AnimatedFeatures";
import FeatureCard from "./FeatureCard";
import MainTitle from "./MainTitle";

const whyUsFeatures = [
    {
        title: "Real-time Collaboration",
        description:
        "Collaborate instantly with your team. Share, assign, and update tasks in real time.",
    },
    {
        title: "Simple & Intuitive Interface",
        description:
        "Organize tasks effortlessly with a clean, modern, and user-friendly interface.",
    },
    {
        title: "Smart, Timely Reminders",
        description:
        "Stay focused with reminders that appear exactly when you need them.",
    },
];


export default function Features() {
    return (
        <div>
            <MainTitle>Features</MainTitle>
                <AnimatedFeatures>
                {whyUsFeatures.map((feature, i) => (
                    <AnimatedFeature i={i} key={feature.title}>
                        <FeatureCard feature={feature} num={i + 1} />
                    </AnimatedFeature>
                ))}
            </AnimatedFeatures>
        </div>  
    );
}