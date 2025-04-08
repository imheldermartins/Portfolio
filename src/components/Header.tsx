import { GithubUser } from "@/types/github.user";
import {
  CodepenLogo,
  GithubLogo,
  LinkedinLogo
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const profile = "/assets/profile.jpg";

interface HeaderProps extends Partial<GithubUser> { };

export default function Header({
  avatar_url,
  name = "Helder Martins",
  login = "@heldermartins4"
}: HeaderProps) {

  const [avatarLoading, setAvatarLoading] = useState<boolean>(true);

  useEffect(() => {
    const img = new Image();
    img.src = String(avatar_url);
    img.onload = () => setAvatarLoading(false);
    img.onerror = () => setAvatarLoading(false);
  }, [avatar_url]);

  return (
    <div
      className='
                relative
                w-full 
                h-[40vh]
                md:h-[60vh]
                bg-[url("https://picsum.photos/1000/1000")] 
                md:bg-[url("https://picsum.photos/1600/600")] 
                bg-fixed 
                bg-cover 
                bg-no-repeat 
                text-black
                md:text-white 
                flex 
                items-center
                md:items-end
                mb-64
                md:m-0
                '
    >
      {/* Gradient */}
      <div className="absolute bg-gradient-to-t from-black top-0 left-0 w-full h-full" />
      <div className="w-4/5 mx-auto flex flex-col items-center relative top-[30vh] md:flex-row md:items-end md:top-0">
        {/* Image - Profile */}
        <div className="
                w-[200px] 
                h-[200px] 
                rounded-xl
                md:w-[160px] 
                md:h-[160px]
                bg-cover
                mb-0
                md:-mb-6
                bg-no-repeat 
                border-4 
                border-white
                dark:border-zinc-900
                "
          style={{
            backgroundImage: `url('${avatar_url}')`,
            backdropFilter: avatarLoading ? "blur(10px)" : "none",
          }}
        />
        {/* Info - Desc */}
        <header className="w-full md:w-[calc(100%-200px)] p-3 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-base font-base tracking-wide text-center md:text-left">@{login}</h2>
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-wide mb-3">{name}</h1>
          </div>
          <nav className="flex flex-row mt-3 md:mt-0">
            <a
              className="ml-3 hover:opacity-75 transition-all"
              href="https://linkedin.com/in/imheldermartins"
              target="_blank"
            >
              <LinkedinLogo size={32} />
            </a>
            <a
              className="ml-3 hover:opacity-75 transition-all"
              href="https://github.com/imheldermartins"
              target="_blank"
            >
              <GithubLogo size={32} />
            </a>
            <a
              className="ml-3 hover:opacity-75 transition-all"
              href="https://codepen.io/heldermartins4"
              target="_blank"
            >
              <CodepenLogo size={32} />
            </a>
          </nav>
        </header>
      </div>
    </div>
  )
}