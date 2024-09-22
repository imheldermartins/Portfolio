export async function fetchFromNotion() {
    const res = await fetch('https://heldermartins.vercel.app/api/notion');
    const data = await res.json();
    return JSON.parse(data);
}