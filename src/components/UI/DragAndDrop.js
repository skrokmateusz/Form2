import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import classes from './DragAndDrop.module.css'

const fileTypes = ["JPG", "PNG", "GIF"];

const DragDrop = props => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} classes={classes.dragdrop}/>
  );
}

export default DragDrop;