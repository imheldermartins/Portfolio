export function formatDriveUrl (url: string) {
    var urlImg = url?.replace("/view", "")
    var img = urlImg?.trim().replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=view&id=")
    url = img;
    return url;
}