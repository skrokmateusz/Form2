import { useState, useRef } from "react";

const DragDrop = (props) => {
    // drag state
    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef(null);
    
    // handle drag events
    const handleDrag = event => {
      event.preventDefault();
      event.stopPropagation();
      if (event.type === "dragenter" || event.type === "dragover") {
        setDragActive(true);
      } else if (event.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    // triggers when file is dropped
    const handleDrop = event => {
      event.preventDefault();
      event.stopPropagation();
      setDragActive(false);
      if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        // handleFiles(e.dataTransfer.files);
      }
    };
    
    // triggers when file is selected with click
    const handleChange = event => {
      event.preventDefault();
      if (event.target.files && event.target.files[0]) {
        // handleFiles(e.target.files);
      }
    };
    

    
    return (
        <div id="form-file-upload" onDragEnter={handleDrag}>
          <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>{props.title}
        </label>
        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />

        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      </div>
    );
  };

export default DragDrop