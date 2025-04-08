import { useEffect, useState } from "react";

const skillsDbSource = "../assets/softdb/skills.txt";

export default function Skills() {

    const [stacks, setStacks] = useState<string[]>([]);

    useEffect(() => {
        async function fetchSkills() {
            try {
                const response = await fetch(skillsDbSource);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const text = await response.text();
                const skillsArray = text.split("\n").map(skill => skill.trim()).filter(skill => skill !== "");
                setStacks(skillsArray);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        }

        fetchSkills();
    }, []);

    return (
        <section className="bg-slate-200 dark:bg-zinc-800 p-6 rounded-lg">
            <h2
                id="skills"
                className="text-slate-800 dark:text-zinc-300 mb-4 text-2xl md:text-xl font-bold tracking-wide">
                Habilidades
            </h2>
            <ul className="flex flex-wrap gap-1.5">
                {stacks.map((stack, index) => (
                    <li key={index} className="text-sm text-slate-600 dark:text-zinc-400 border border-slate-400 dark:border-zinc-600 px-1 py-0.5 rounded-md">
                        {stack}
                    </li>
                ))}
            </ul>
        </section>
    );
}