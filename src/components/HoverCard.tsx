import * as HoverCard from '@radix-ui/react-hover-card';

import {
    parseISO,
    format
} from "date-fns"
import { ptBR } from 'date-fns/locale';

import Modal from './Modal';

interface Posts {
    title: string;
    content: string;
    tags: { name: string }[];
    page: string;
    github: string;
    preview: string;
    img_modal: string;
    video: string;
    created_time: string;
    last_edited_time: string;
}

interface CardsProps {
    posts: Posts;
    children: React.ReactNode;
}

export default function Card({ children, posts }: CardsProps) {
    return (
        <HoverCard.Root>
            <HoverCard.Trigger asChild>
                {children}
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content
                    className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white dark:bg-zinc-800 p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                    sideOffset={5}
                >
                    <div className="flex flex-col gap-[7px]">
                        <div className="flex flex-col gap-[15px]">
                            <div>
                                <h1 className="text-black dark:text-zinc-300 m-0 text-2xl font-bold">{posts.title}</h1>
                                <div className='text-xs text-slate-700 dark:text-zinc-500 font-normal tracking-wide mb-3'>
                                    {format(parseISO(posts.created_time), "'Criado em' dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}</div>
                                <ul className='flex flex-row flex-wrap gap-1'>
                                    {posts.tags && Object.values(posts.tags).map((tag) => (
                                        <li key={tag.name} className="border border-slate-700 text-slate-600 dark:border-zinc-700 dark:text-zinc-400 rounded-md px-3 py-1 text-xs">
                                            {tag.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-black dark:text-zinc-400 m-0 text-base leading-[1.5]">
                                {posts.content}
                            </div>

                            <Modal posts={posts}>
                                <button className="bg-slate-800 text-slate-200 dark:bg-zinc-50 dark:text-zinc-800 hover:shadow-md hover:bg-slate-900 dark:hover:bg-zinc-100 inline-flex h-[35px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:outline-none">
                                    Ver mais
                                </button>
                            </Modal>
                        </div>
                    </div>

                    <HoverCard.Arrow className="fill-white dark:fill-zinc-800" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}