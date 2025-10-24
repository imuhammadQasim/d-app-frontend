import React, { useState } from "react";
import { StyledUploadImage } from "./UploadImg.style";
import uploadImg from "@/assets/images/camera-icon.svg";
import ProfilePic from "@/assets/images/avatar.png";
import Toast from "../Toast";
import Image from "next/image";

const UploadImg = ({
  imageUrl = "",
  id = "upload",
  fileSize = 2,
  accept = ".png , .jpg , .jpeg",
  noMargin,
  ...props
}) => {
  const [uploaded, setUploaded] = useState("");

  function handelChange(e) {
    const file = e.target.files[0];
    if (file) {
      const fileLength = file.size / (1024 * 1024);
      if (fileLength <= fileSize) {
        setUploaded(e.target.files[0]);
        props.onChange(e.target.files[0]);
      } else {
        Toast({ type: "warning", message: "File size Exceeded" });
      }
    }
  }
  return (
    <StyledUploadImage $noMargin={noMargin}>
      <label htmlFor={id} className="labelButton">
        {!uploaded && (
          <span className="upload-text">
            <Image
              className="icon-img"
              src={imageUrl || ProfilePic}
              alt="icon"
            />
          </span>
        )}
        {uploaded && typeof uploaded === "string" ? (
          <Image src={uploaded} alt="img" width={250} height={300} />
        ) : (
          uploaded && (
            <Image
              src={URL.createObjectURL(uploaded)}
              alt="img"
              width={250}
              height={300}
            />
          )
        )}
        <input
          type="file"
          id={id}
          accept={accept}
          onChange={(e) => {
            handelChange(e);
          }}
        />
        <div className="change-photo">
          <Image src={uploadImg} alt="upload" width={40} height={40} />
        </div>
      </label>
    </StyledUploadImage>
  );
};

export default UploadImg;
