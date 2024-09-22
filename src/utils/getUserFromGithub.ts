import { GithubUser } from "@/types/github.user";

export async function getUserFromGithub(): Promise<GithubUser> {
    const res = await fetch('https://api.github.com/users/imheldermartins');
    const data = await res.json();
    return data;
}