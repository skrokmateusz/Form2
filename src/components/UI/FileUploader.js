import React from 'react';

import classes from './FileUploader.module.css'
// Style the Button component

const FileUploader = props => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <button className={classes.button} onClick={handleClick}>
        <span>Wybierz</span> z dysku lub przeciągnij pliki tutaj
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        // style={{display: 'none'}}

        />
    </>
  );
}

export default FileUploader;