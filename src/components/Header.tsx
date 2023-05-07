import {
  CodepenLogo,
  GithubLogo,
  LinkedinLogo
} from "@phosphor-icons/react";

export const profile = "/assets/profile.jpg";

export default function Header() {
  return (
    <div 
      className='
                w-full 
                h-[40vh]
                bg-[url("https://picsum.photos/1920/1080")] 
                bg-fixed 
                bg-cover 
                bg-no-repeat 
                text-black
                md:text-white 
                flex 
                items-center
                md:items-end
                relative
                mb-64
                sm:mb-72
                md:m-0'
    >
      {/* Gradient */}
      <div className="absolute bg-gradient-to-t from-black top-0 left-0 w-full h-full" />
      <div className="w-4/5 mx-auto flex flex-col items-center relative top-[30vh] md:flex-row md:items-end md:top-0">
        {/* Image - Profile */}
        <div className="
                w-[200px] 
                h-[200px] 
                rounded-lg
                md:w-[200px] 
                md:h-[200px]
                mb-0 
                md:-mb-10 
                bg-cover 
                bg-no-repeat 
                border-4 
                border-white"
                style={{
                  backgroundImage: `url('${profile}')`
                }} 
        />
        {/* Info - Desc */}
        <div className="w-full md:w-[calc(100%-200px)] p-3 flex flex-col md:flex-row justify-between items-center">
          <span>
            <h4 className="text-base font-base tracking-wide text-center md:text-left">@heldermartins4</h4>
            <h1 className="text-2xl md:text-4xl font-black leading-tight tracking-wide mb-3">Helder Martins</h1>
          </span>
          <span className="flex flex-row mt-3 md:mt-0">
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
          </span>
        </div>
      </div>
    </div>
  )
}