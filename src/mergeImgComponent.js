import mergeImages from "merge-images";
import { useEffect, useState } from "react";

const MergeImageComponent = ({
  selectedImageForCrown,
  selectedImageForTrunk,
  faceUrl
}) => {
  const [imgFlag, setImgFlag] = useState(false);
  const [mergeImage, setMergeImage] = useState("");

  useEffect(() => {
    // if (selectedImageForCrown !== "" && selectedImageForTrunk !== "") {
    imageClicked();
    // }
  }, [selectedImageForCrown, selectedImageForTrunk]);

  const imageClicked = () => {
    console.log("pressed");
    setImgFlag(true);
    const image = document.createElement("img");
    document.getElementById("merge_img").appendChild(image);
    const options = {
      width: 138,
      height: 138,
      crossOrigin: "anonymous"
    };
    if (selectedImageForCrown == "" && selectedImageForTrunk == "") {
      mergeImages(
        [
          {
            src: `${faceUrl}`,
            x: 0,
            y: 0
          }
          // {
          //   src: `${selectedImageForCrown}`,
          //   x: 0,
          //   y: 0
          // },
          // {
          //   src: `${selectedImageForTrunk}`,
          //   x: 0,
          //   y: 0
          // }
        ],
        options
      ).then((b64) => {
        // document.querySelector("img").src = b64;
        setMergeImage(b64);
      });
    } else if (selectedImageForCrown !== "" && selectedImageForTrunk == "") {
      mergeImages(
        [
          {
            src: `${faceUrl}`,
            x: 0,
            y: 0
          },
          {
            src: `${selectedImageForCrown}`,
            x: 0,
            y: 0
          }
          // {
          //   src: `${selectedImageForTrunk}`,
          //   x: 0,
          //   y: 0
          // }
        ],
        options
      ).then((b64) => {
        // document.querySelector("img").src = b64;
        setMergeImage(b64);
      });
    } else if (selectedImageForCrown !== "" && selectedImageForTrunk !== "") {
      mergeImages(
        [
          {
            src: `${faceUrl}`,
            x: 0,
            y: 0
          },
          {
            src: `${selectedImageForCrown}`,
            x: 0,
            y: 0
          },
          {
            src: `${selectedImageForTrunk}`,
            x: 0,
            y: 0
          }
        ],
        options
      ).then((b64) => {
        // document.querySelector("img").src = b64;
        setMergeImage(b64);
      });
    }
  };

  return (
    <div>
      {/* {imgFlag ? ( */}

      {/* ) : null} */}
      {/* <button onClick={imageClicked}>Click for Image</button> */}
      <div id="merge_img">
        <img src={mergeImage} />
      </div>
    </div>
  );
};
export default MergeImageComponent;
