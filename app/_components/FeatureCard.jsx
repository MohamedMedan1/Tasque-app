export default function FeatureCard({feature,num}) {
    const { title,description } = feature;
    return (
        <div className="flex flex-col items-center gap-3 px-4 py-12 text-center h-[320px] backdrop-blur-md
            bg-white/40 backdrop-saturate-150 rounded-md shadow-lg border border-white/20
            hover:sm:translate-y-[-40px] hover:sm:scale-100 hover:scale-105 transition-transform cursor-pointer">
            <p className="text-7xl font-bold mb-3 t-shadow opacity-50 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">0{num}</p>
            <p className="text-3xl font-bold text-radial-color">{title}</p>
            <p className="leading-6 text-gray-300">{description}</p>
        </div>
    );
}