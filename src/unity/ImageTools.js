
async function GetBlob(blob){
    return URL.createObjectURL(blob);
}

async function sendBlob(image) {
    const response = await fetch(image);
    const blob = await response.blob();
    return blob;
    // const response = await fetch(blobUrl);
    // const blob = await response.blob();
    // return blob
    // const formData = new FormData();
    // formData.append("image", blob, "uploaded-image.png");

    // await fetch("/api/upload", {
    //     method: "POST",
    //     body: formData
    // });
}

export { GetBlob, sendBlob }