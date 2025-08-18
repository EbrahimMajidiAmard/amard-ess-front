
async function GetBlob(blob){
    return URL.createObjectURL(blob);
}

async function sendBlob(image) {
    const response = await fetch(image);
    const blob = await response.blob();
    return blob;
}

async function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export { GetBlob, sendBlob, blobToBase64 }