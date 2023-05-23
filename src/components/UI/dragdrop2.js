import { useState, useRef } from 'react'

import classes from './DragDrop2.module.css'

const DragDrop2 = () => {
	const [files, setFiles] = useState(null)
	const inputRef = useRef()

	const handleDragOver = event => {
		event.preventDefault()
	}

	const handleDrop = event => {
		event.preventDefault()
		console.log(event)
		const arrayFiles = event.dataTransfer.files
		setFiles(Array.from(arrayFiles))
	}

	const addFiles = event => {
		const arrayFiles = Array.from(event.target.files)
		setFiles(arrayFiles)
	}

	const removeFile = event => {
        const deleteElement = event.target.id
		const newFiles = [...files]
		
        setFiles(newFiles.toSpliced(deleteElement, 1))
      console.log(files);
		
	}
    
	return (
		<>
			<div className={classes.container}>
				<div
					className={classes.dragdrop}
					onDragOver={handleDragOver}
					onDrop={handleDrop}
					onClick={() => inputRef.current.click()}
                    >
					<p>
						<span>Wybierz</span> z dysku lub przeciągnij pliki tutaj
					</p>
					<input type="file" hidden multiple onChange={addFiles} ref={inputRef} />
				</div>
				{files && (
					<ul>
						{files.map((file, idx) => (
							<li key={idx}>
								{file.name}
								<span>
									<i onClick={removeFile} id={idx} class="fa-solid fa-circle-xmark"></i>
								</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}

export default DragDrop2
