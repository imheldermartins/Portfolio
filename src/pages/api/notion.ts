import { 
    NextApiRequest,
    NextApiResponse    
} from "next";

import { Client } from "@notionhq/client"; // NotionAPI

const data = {
    key: process.env.KEY,
    db_id: process.env.DB_ID
};

const notion = new Client({
    auth: data.key
});

type Row = {
    properties: {
        title: {id: string, title: {text: {content:string}}[]},
        content: {id: string, rich_text: {text: {content:string}}[]},
        tags: {id: string, multi_select: {color: string, id: string, name: string}[]},
        url: {id: string, type: string, url: string},
        preview: {id: string, type: string, url: string},
        img_modal: {id: string, type: string, url: string},
        video: {id: string, type: string, url: string},
    };
    icon: {emoji:string, type:string};
    created_time: string;
    last_edited_time:string;
  }

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
    if (!data.key || !data.db_id) throw new Error('Missing a data parameters.');

    const query = await notion.databases.query({    
        database_id: data.db_id
    });

    // @ts-ignore
    const rows = query.results as Row[];

    const rowsStructured = {
        title: rows.map(p => p.properties.title?.title[0].text.content),
        content: rows.map(c => c.properties.content?.rich_text[0].text.content),
        tags: rows.map(tag => tag.properties.tags?.multi_select),
        url: rows.map(url => url.properties.url?.url),
        preview: rows.map(prev => prev.properties.preview?.url),
        img_modal: rows.map(img => img.properties.img_modal?.url),
        video: rows.map(vid => vid.properties.video?.url),
        created_time: rows.map(dt => dt.created_time),
        last_edited_time: rows.map(lt => lt.last_edited_time)
    };

    var obj = [];

    for (let i = 0; i < rows.length; i++) {
        // @ts-ignore
        obj.push({
            title: rowsStructured.title[i],
            content: rowsStructured.content[i],
            tags: rowsStructured.tags[i],
            url: rowsStructured.url[i],
            preview: rowsStructured.preview[i],
            img_modal: rowsStructured.img_modal[i],
            video: rowsStructured.video[i],
            created_time: rowsStructured.created_time[i],
            last_edited_time: rowsStructured.last_edited_time[i]
        });
    }
    
    res.status(200).json(JSON.stringify(obj));
}