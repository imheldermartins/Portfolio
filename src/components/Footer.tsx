import {
    CodepenLogo,
    GithubLogo,
    LinkedinLogo
} from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="w-full h-[20vh] flex justify-center items-center mt-16 border-t border-slate-300 text-slate-600 py-4">
            <div className="w-4/5 flex md:flex-row sm:justify-evenly items-center flex-col-reverse justify-normal">
                <div className="md:text-center tracking-wide leading-tight font-semibold">
                    Helder Martins | Meu Portfólio©2023
                </div>
                <div className="flex flex-row mb-3 md:mb-0">
                    <a 
                        className="ml-3 hover:opacity-75 transition-all"
                        href="https://linkedin.com/in/heldermartins4"
                        target="_blank"
                    >
                            <LinkedinLogo size={32}/>
                    </a>
                    <a 
                        className="ml-3 hover:opacity-75 transition-all"
                        href="https://github.com/heldermartins4"
                        target="_blank"
                    >
                            <GithubLogo size={32}/>
                    </a>
                    <a 
                        className="ml-3 hover:opacity-75 transition-all"
                        href="https://codepen.io/heldermartins4"
                        target="_blank"
                    >
                            <CodepenLogo size={32}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}