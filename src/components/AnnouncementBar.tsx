const urlPortfolio = "https://github.com/imheldermartins/Portfolio";

const Link = ({ href, children }) => (
    <a href={href} target="_blank" className="underline text-white cursor-pointer">
        {children}
    </a>
)

export const AnnouncementBar = () => (
    <section className="bg-blue-600 border border-blue-500 text-blue-100 py-2 px-4 text-center">
        <p>
            <strong>Notas ao visitante:{" "}</strong>

            Este site foi desenvolvido com{" "}
            <Link href={"https://nextjs.org/blog/next-13-3"}>Next.js 13.3</Link>{" "}
            e a <Link href={"https://developers.notion.com/"}>API do Notion</Link>.{"  "}

            <Link href={urlPortfolio}>Acesse aqui🚀</Link>
        </p>
    </section>
)