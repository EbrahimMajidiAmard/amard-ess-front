
async function GetBlob(blob){
    return URL.createObjectURL(blob);
}

async function sendBlob(image) {
    const response = await fetch(image);
    const blob = await response.blob();
    return blob;
}

export { GetBlob, sendBlob }