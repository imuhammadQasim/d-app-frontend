import React, { useState, useEffect } from "react";
import { useCSVReader, formatFileSize } from "react-papaparse";
import {
  StyledUploadFile,
  StyledBtn,
  FileUploadBox,
  FileInfo,
  FileSize,
  FileName,
  ProgressBarHolder,
  RemoveBtn,
} from "./UploadFile.styles";
import UploadImg from "../../../assets/images/upload-img.svg";
import Toast from "../Toast";
import Image from "next/image";

const UploadFile = ({
  bgWhite,
  onChange,
  disc = "File size must be less than 500MB in PDF, JPG, or PNG format.",
  title,
  uploadTitle = "Upload Image",
  label = true,
  fileSize = 500,
  accept = "image/jpeg, image/jpg, image/png",
  type = "img",
  csv,
  icon,
  img = "",
  id = "upload",
  noLabelMargin,
  ...props
}) => {
  const { CSVReader } = useCSVReader();
  const [uploaded, setUploaded] = useState("");
  function handelChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const acceptableExtensions = accept.split(",").map((ext) => ext.trim());
    if (!acceptableExtensions?.includes(file?.type)) {
      const extensions = acceptableExtensions
        .map((ext) => ext.split("/")[1].toUpperCase())
        .join(", ")
        .replace(/,(?=[^,]*$)/, " and");

      Toast({
        type: "error",
        message: `File Must be in ${extensions} format!`,
      });
      return;
    }
    if (file) {
      const fileLength = file.size / (1024 * 1024);
      if (fileLength <= fileSize) {
        setUploaded(e.target.files[0]);
        onChange(e.target.files[0]);
      } else {
        Toast({
          type: "error",
          message: "File Size Exceeded!",
        });
      }
    }
  }
  const getFileExtension = () => {
    if (uploaded) {
      const fileNameParts = uploaded.name.split(".");
      if (fileNameParts.length > 1) {
        return fileNameParts[fileNameParts.length - 1];
      }
    }
    return "";
  };
  const getFileName = () => {
    if (uploaded) {
      const fileNameParts = uploaded.name.split(".");
      let fileName =
        fileNameParts.length > 1
          ? fileNameParts.slice(0, -1).join(".")
          : uploaded.name;

      // Truncate the file name if it's greater than 10 characters
      if (fileName.length > 20) {
        fileName = `${fileName.slice(0, 20)}...`;
      }

      return fileName;
    }
    return "";
  };

  useEffect(() => {
    if (img) {
      setUploaded(img);
    } else {
      setUploaded("");
    }
  }, [img]);

  return (
    <StyledUploadFile $bg={bgWhite} $noLabelMargin={noLabelMargin}>
      {label && <span className="label-text">{title}</span>}
      {type === "img" && (
        <label htmlFor={id} className="labelButton">
          {!uploaded && (
            <span className="upload-text">
              <Image className="icon-img" src={UploadImg} alt="icon" />
              <span className="text-lg">{uploadTitle}</span>
              <span className="text">{disc}</span>
            </span>
          )}
          {uploaded && typeof uploaded === "string" ? (
            <img src={uploaded} alt="img" width={250} height={300} />
          ) : (
            uploaded && (
              <img
                src={URL.createObjectURL(uploaded)}
                alt="img"
                width={250}
                height={300}
              />
            )
          )}
        </label>
      )}
      {type === "file" && (
        <label htmlFor={id} className="labelButton">
          <span className="upload-text">
            <Image className="icon-img" src={UploadImg} alt="icon" />
            <span className="text-lg">{uploadTitle}</span>
            <span className="text">{disc}</span>
            {uploaded && (
              <span className="uploaded-file-name">
                {getFileName()}.{getFileExtension()}
              </span>
            )}
          </span>
        </label>
      )}
      <input
        type="file"
        id={id}
        accept={accept}
        onChange={(e) => handelChange(e)}
      />
      {type === "csv" && (
        <CSVReader
          onDragOver={(event) => {
            event.preventDefault();
          }}
          onDragLeave={(event) => {
            event.preventDefault();
          }}
          {...props}>
          {({
            getRootProps,
            acceptedFile,
            ProgressBar,
            getRemoveFileProps,
            Remove,
          }) => (
            <StyledBtn
              as="div"
              {...getRootProps()}
              css={`
                padding: 38px;
              `}
              className="labelButton">
              <div>
                {acceptedFile ? (
                  <FileUploadBox>
                    <FileInfo>
                      <FileSize>{formatFileSize(acceptedFile.size)}</FileSize>
                      <FileName>{acceptedFile.name}</FileName>
                    </FileInfo>
                    <ProgressBarHolder>
                      <ProgressBar />
                    </ProgressBarHolder>
                    <RemoveBtn
                      {...getRemoveFileProps()}
                      onMouseOver={(event) => {
                        event.preventDefault();
                      }}
                      onMouseOut={(event) => {
                        event.preventDefault();
                      }}>
                      <Remove />
                    </RemoveBtn>
                  </FileUploadBox>
                ) : (
                  <div className="upload-text">
                    {icon && (
                      <img className="icon-img" src={UploadImg} alt="icon" />
                    )}
                    <span className="text-lg">{uploadTitle}</span>
                    <span className="text">{disc}</span>
                  </div>
                )}
              </div>
            </StyledBtn>
          )}
        </CSVReader>
      )}
    </StyledUploadFile>
  );
};

export default UploadFile;
