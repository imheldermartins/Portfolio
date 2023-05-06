import { profile } from "./Header";

export default function Nav() {
    return (
        <nav className="w-full fixed z-10 top-2 block md:hidden">
            <div className="w-[90%] m-auto py-3 rounded-lg shadow-md bg-white flex flex-col justify-center items-center">
                    <div className="w-full border-b border-slate-300">
                        <div className="w-3/5 m-auto flex justify-evenly items-center p-3">
                            <img 
                                className="w-8 h-8 rounded-full"
                                src={profile} 
                                alt="me" 
                            />
                            <h1 className="ml-3 text-base font-semibold">Helder Martins</h1>
                        </div>
                    </div>
                    <ul className="w-full flex flex-row justify-evenly items-center text-base mt-2">
                        <li><a href="#" className="active:border-b-2 border-black">Início</a></li>
                        <li><a href="#aboutme" className="active:border-b-2 border-black">Sobre mim</a></li>
                        <li><a href="#skills" className="active:border-b-2 border-black">Habilidades</a></li>
                        <li><a href="#portfolio" className="active:border-b-2 border-black">Portfólio</a></li>
                    </ul>
            </div>
        </nav>
    )
}