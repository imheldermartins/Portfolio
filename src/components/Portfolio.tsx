import { useEffect, useState } from "react";
import { Posts } from "./Posts";

interface Posts {
    title: string;
    content: string;
    tags: {name:string}[];
    url: string;
    img: string;
    created_time: string;
    last_edited_time: string;
}

interface HeaderProps {
  data: Posts[];
  load: boolean;
}

const Loading = () => (
    <>
        <div className="w-full h-[300px] bg-gray-500 col-span-2 transition-all animate-pulse delay-0" />
        <div className="w-full h-[300px] bg-gray-400 transition-all animate-pulse delay-75" />
        <div className="w-full h-[300px] bg-gray-300 transition-all animate-pulse delay-75" />
        <div className="w-full h-[300px] bg-gray-300 transition-all animate-pulse delay-75" />
        <div className="w-full h-[300px] bg-gray-300 transition-all animate-pulse delay-75" />
    </>
)

export default function Portfolio(props:HeaderProps) {
    return (
        <>
            <h1 
                id="Portfolio"
                className="text-2xl md:text-3xl font-bold tracking-wide py-4"
            >Portfólio</h1>
            <div className="grid grid-cols-1 gap-2 place-items-center md:grid-cols-2 lg:grid-cols-3">

                {props.load && <Loading />}

                {!props.load && props.data.map((index, key) => (
                    <Posts
                        key={key} 
                        posts={index} 
                        grid={key === 0 ? 'md:col-span-2' : ''}
                    />
                ))}
            </div>
        </>
    );
}