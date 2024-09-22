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
        <section className="bg-slate-200 p-6 rounded-lg">
            <h1 className="text-slate-800 mb-4 text-2xl md:text-xl font-bold tracking-wide">Sobre mim</h1>
            <span className="text-slate-600">
                &#60;Olá! Eu sou <span className="font-semibold underline">{firstName}</span>,
                um desenvolvedor fullstack com enfâse em front-end. Tenho {age} anos e sou
                um apaixonado por tecnologia, além de adorar enfrentar novos desafios.
                <b>/&#62;</b><br />

                <span className="px-1 py-0.5 rounded-md border border-slate-400 bg-slate-300">📍 {location}</span>

                <hr className="h-1 w-full border bg-slate-400 my-3" />

                <b>[Github/bio]: </b>{bio}
            </span>
        </section>
    );
}