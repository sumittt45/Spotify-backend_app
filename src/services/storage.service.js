const Imagekit = require("imagekit");


const ImagekitClient =  new Imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: "https://ik.imagekit.io/syada"
});

async function uploadFile(file) {
  const result = await ImagekitClient.upload({
    file,
    fileName: "music_" + Date.now() + ".mp3",
    folder: "Hall-of-Fame/music"
  });

  return result;
}


module.exports = {
    uploadFile
}