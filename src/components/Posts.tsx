import React from 'react';
import { formatDriveUrl } from '@/utils/urlFormat';
import Modal from './Modal';
import Card from './HoverCard';

interface Posts {
  title: string;
  content: string;
  tags: {name:string}[];
  page: string;
  github: string;
  preview: string;
  img_modal: string;
  video: string;
  created_time: string;
  last_edited_time: string;
}

interface PostsProps {
    posts: Posts;
    grid: string;
}

export const Posts = ({ posts, grid }: PostsProps) => (
  <>
    {/* HoverCardPreset */}
    <Card posts={posts}>
      <div
        className={`${grid} w-full h-[200px] rounded-lg border border-slate-300 hidden md:block md:bg-slate-400  relative  overflow-hidden`}
        rel="noreferrer noopener"
      >
        <div 
          className=" absolute w-full h-full top-0  left-0  bg-no-repeat  bg-center  bg-cover hover:scale-125 transition-all  duration-200  ease-in" 
          style={{
            backgroundImage: `url('${posts.preview}')`
          }} 
        />
      </div>
    </Card>
    {/* ModalPreset */}
    <Modal posts={posts}>
      <div
        className={`${grid} w-full h-[200px] rounded-lg border border-slate-300 block md:hidden sm:bg-slate-400  relative  overflow-hidden`}
        rel="noreferrer noopener"
      >
        <div 
          className=" absolute w-full h-full top-0  left-0  bg-no-repeat  bg-center  bg-cover hover:scale-125 transition-all  duration-200  ease-in" 
          style={{
            backgroundImage: `url('${posts.img_modal}')`
          }} 
        />

      </div>
    </Modal>
  </>
);