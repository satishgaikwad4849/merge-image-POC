import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import mergeImages from "merge-images";
import MergeImgComponent from "./mergeImgComponent";
import { EyesImageData, MouthsImageData } from "./constant";
// mergeImages(['/body.png', '/eyes.png', '/mouth.png'])
// .then(b64 => document.querySelector('img').src = b64);

export default function App() {
  const [imgUrlForCrown, setImgUrlForCrown] = useState("");
  const [imgUrlForTrunk, setImgUrlForTrunk] = useState("");
  const [isCrown, setIsCrown] = useState(true);
  const [selectedImageForCrown, setSelectedImageForCrown] = useState("");
  const [selectedImageForTrunk, setSelectedImageForTrunk] = useState("");
  let crownUrl = "https://picsum.photos/v2/list?page=3&limit=100";
  let trunkUrl = "https://picsum.photos/v2/list?page=2&limit=100";
  let faceUrl =
    "https://raw.githubusercontent.com/mattcarlotta/merge-images-example/d36391fe55819d6c84907dc1073808f7f8d361e6/src/images/head1.png";
  const getCrownImages = () => {
    // axios.get(crownUrl).then((result) => {
    //   console.log(result?.data?.slice(0, 4));
    //   setImgUrlForCrown(result?.data?.slice(0, 4));
    // });
    setImgUrlForCrown(EyesImageData);
  };

  const getTrunkImages = () => {
    // axios.get(trunkUrl).then((result) => {
    //   console.log(result?.data?.slice(0, 4));
    //   setImgUrlForTrunk(result?.data?.slice(0, 4));
    // });
    setImgUrlForTrunk(MouthsImageData);
  };

  useEffect(() => {
    isCrown ? getCrownImages() : getTrunkImages();
  }, [isCrown]);

  return (
    <div className="App">
      <div class="container">
        {isCrown
          ? Array.isArray(imgUrlForCrown) &&
            imgUrlForCrown.map((image, index) => (
              <div class="item">
                <div>
                  <img
                    src={`${image.download_url}`}
                    style={{ width: "60%", height: "200px" }}
                  />
                </div>
                <button
                  className="btn"
                  onClick={() => {
                    setSelectedImageForCrown(image.download_url);
                  }}
                >
                  {/* {console.log(selectedImage)} */}
                  SELECT
                </button>
              </div>
            ))
          : Array.isArray(imgUrlForTrunk) &&
            imgUrlForTrunk.map((image, index) => (
              <div class="item">
                <div>
                  <img
                    src={`${image.download_url}`}
                    style={{ width: "60%", height: "200px" }}
                  />
                </div>
                <button
                  className="btn"
                  onClick={() => {
                    setSelectedImageForTrunk(image.download_url);
                  }}
                >
                  SELECT
                </button>
              </div>
            ))}

        <div class="item_item2">
          {/* {selectedImageForCrown !== "" ? (
            <div>
              <div>Crown</div>
              <img
                src={selectedImageForCrown}
                style={{ width: "30%", height: "50px" }}
              />
            </div>
          ) : null}
          {selectedImageForTrunk !== "" ? (
            <div>
              <div>Trunk</div>
              <img
                src={selectedImageForTrunk}
                style={{ width: "30%", height: "50px" }}
              />
            </div>
          ) : null} */}

          {/* {selectedImageForCrown !== "" && selectedImageForTrunk !== "" ? ( */}
          <MergeImgComponent
            selectedImageForCrown={selectedImageForCrown}
            selectedImageForTrunk={selectedImageForTrunk}
            faceUrl={faceUrl}
          />
          {/* ) : null} */}
        </div>

        <div class="item"></div>
        <div class="item">
          <div>
            <table className="table_container">
              <tr>
                <th>
                  <button
                    className="btn"
                    onClick={() => {
                      setIsCrown(true);
                    }}
                  >
                    Crown
                  </button>
                </th>
                <th>
                  <button
                    className="btn"
                    onClick={() => {
                      setIsCrown(false);
                    }}
                  >
                    Trunk
                  </button>
                </th>
              </tr>
              <tr>
                <td>size</td>
                <td>Left</td>
              </tr>
              <tr>
                <td>color</td>
                <td>Right</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="item"></div>
      </div>
    </div>
  );
}
