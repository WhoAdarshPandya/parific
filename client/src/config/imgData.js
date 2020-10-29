let img = null;
export const setImagedownloadUrl = (url) => {
  // ?debug
  console.log("inside setter : " + url);
  img = url;
};

export const getImageDownloadUrl = () => {
  if (img === null) {
    //? debug
    console.log("image is null");
  } else {
    //?debug
    console.log("barchak che");
  }
  return img;
};
