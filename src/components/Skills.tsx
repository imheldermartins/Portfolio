export default function Skills() {
    const stacks = [
        "HTML", "CSS", "Sass", "TailwindCSS", "Bootstrap", "Styled Components", "MaterialUI", "Responsive Design", "UI/UX",
        "Javascript", "Typescript", "ReactJS", "NextJS", "Express", "NodeJS", "PHP", "Python",
        "MySQL", "SQLite"
    ];
    return (
        <section className="bg-slate-200 p-6 rounded-lg">
            <h1
                id="skills"
                className="text-slate-800 mb-4 text-2xl md:text-xl font-bold tracking-wide">
                Habilidades
            </h1>
            <div className="flex flex-wrap gap-1.5">
                {stacks.map((stack, index) => (
                    <span key={index} className="text-sm text-slate-600 border border-slate-400 px-1 py-0.5 rounded-md">
                        {stack}
                    </span>
                ))}
            </div>
        </section>
    );
}