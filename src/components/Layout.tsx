import { GithubUser } from "@/types/github.user";
import AboutMe from "./AboutMe";
import Nav from "./Nav";
import Skills from "./Skills";

interface LayoutProps extends Partial<GithubUser> {
    children: React.ReactNode;
};

export default function Layout({ children, ...props }: LayoutProps) {
    return (
        <div className="w-4/5 mx-auto mt-16 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/5 flex flex-col gap-4">
                <AboutMe {...props} />
                <Skills />
            </div>
                <div className="w-full">
                    {children}
            </div>
        </div>
    );
}