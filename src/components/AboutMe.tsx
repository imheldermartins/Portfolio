import { GithubUser } from "@/types/github.user";

interface AboutMeProps extends Partial<GithubUser> { };

export default function AboutMe({
    name,
    bio,
    location
}: AboutMeProps) {
    const firstName = name?.split(" ")[0] || "Helder";
    const age = new Date().getFullYear() - 2005;
    return (
        <section className="bg-slate-200 dark:bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-slate-800 dark:text-zinc-300 mb-4 text-2xl md:text-xl font-bold tracking-wide">Sobre mim</h2>
            <p className="text-slate-600 dark:text-zinc-400">
                &#60;Olá! Eu sou <span className="font-semibold underline">{firstName}</span>,
                um desenvolvedor fullstack com enfâse em front-end. Tenho {age} anos e sou
                um apaixonado por tecnologia, além de adorar enfrentar novos desafios.
                <b>/&#62;</b><br />

                <u className="underline underline-offset-4">📍 {location}</u>
            </p>
            <hr className="w-full border-t border-slate-400 dark:border-zinc-500 my-4" />
            <p className="text-slate-600 dark:text-zinc-400">
                <b>[Github/bio]: </b>{bio}
            </p>
        </section>
    );
}