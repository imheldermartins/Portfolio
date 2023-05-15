import { profile } from "./Header";

export default function Nav() {
    return (
        <div className="w-4/5 m-auto">
            <nav className="ml-0 md:ml-[calc(200px)] px-4 py-3 border-b-2 border-slate-200">
                <ul className="flex justify-around md:justify-normal items-center md:gap-6">
                    <li><a href="#" className="text-lg font-medium tracking-tight leading-tight hover:border-b-2 active:opacity-75 border-slate-400">Blog</a></li>
                    <li><a href="#" className="text-lg font-medium tracking-tight leading- hover:border-b-2 active:opacity-75 border-slate-400">Portfolio</a></li>
                    <li><a href="#" className="text-lg font-medium tracking-tight leading- hover:border-b-2 active:opacity-75 border-slate-400">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}