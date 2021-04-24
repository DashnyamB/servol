import React, { useEffect, useRef, useState } from "react";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import "./style.scss";
const InputFile = (props) => {
  const fileUpload = useRef();
  const realfileUpload = useRef();

  useEffect(() => {
    const chooseFileDialog = () => {
      realfileUpload.current.click();
    };
    if (fileUpload) {
      fileUpload.current.addEventListener("click", chooseFileDialog);
    }
    return () => {
      if (fileUpload) {
        fileUpload.current.removeEventListener("click", chooseFileDialog);
      }
    };
  }, []);

  return (
    <>
      <div ref={fileUpload} className="service-input-file">
        <label>
          <span>
            <BackupOutlinedIcon style={{ color: "#ffffff" }} />
          </span>
          <span>{props.label}</span>
        </label>
        <input
          ref={realfileUpload}
          type="file"
          name={props.name}
          onChange={props.onChange}
          accept="image/*"
        />
      </div>
    </>
  );
};

export default InputFile;
