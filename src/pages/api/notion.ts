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
        title: { id: string, title: { text: { content: string } }[] },
        content: { id: string, rich_text: { text: { content: string } }[] },
        tags: { id: string, multi_select: { color: string, id: string, name: string }[] },
        page: { id: string, type: string, url: string },
        github: { id: string, type: string, url: string },
        preview: { id: string, type: string, url: string },
        img_modal: { id: string, type: string, url: string },
        video: { id: string, type: string, url: string },
        order: { id: string, type: string, number: number },
    };
    icon: { emoji: string, type: string };
    created_time: string;
    last_edited_time: string;
}

export default async function handleNotionAPI(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (!data.key || !data.db_id)
        throw new Error('Missing a data parameters.');

    const query = await notion.databases.query({
        database_id: data.db_id,
        sorts: [
            {
                property: "order",
                direction: "ascending"
            }
        ],
    }) as unknown as { results: Row[] };

    const { results: rows } = query;

    const pages = rows.map((page) => {
        return {
            title: page.properties.title?.title[0]?.text.content,
            content: page.properties.content?.rich_text[0].text.content,
            tags: page.properties.tags?.multi_select,
            page: page.properties.page?.url,
            github: page.properties.github?.url,
            preview: page.properties.preview?.url,
            img_modal: page.properties.img_modal?.url,
            video: page.properties.video?.url,
            created_time: page.created_time,
            last_edited_time: page.last_edited_time
        };
    });

    res.status(200).json(JSON.stringify(pages));
}