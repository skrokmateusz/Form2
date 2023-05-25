import { useState, useRef, useEffect } from 'react'

import LoadingSpinner from './LoadingSpinner'

import { storage } from '../firebase/firebase'
import { ref, uploadBytes, deleteObject } from 'firebase/storage'


import classes from './FileInput.module.css'

const FileInput = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [didSubmit, setDidSubmit] = useState(false)
	const [files, setFiles] = useState(null)
	const inputRef = useRef()

	const handleDragOver = event => {
		event.preventDefault()
	}

	const handleDrop = event => {
		event.preventDefault()
		const arrayFiles = event.dataTransfer.files
		setFiles(Array.from(arrayFiles))
	}

	const addFiles = event => {
		const arrayFiles = Array.from(event.target.files)
		setFiles(arrayFiles)
	}

	useEffect(() => {
		if (files != null) {
			setIsSubmitting(true)
			files.forEach(file => {
				const fileRef = ref(storage, `images/${file.name}`)
				uploadBytes(fileRef, file).then(() => {
					setIsSubmitting(false)
					setDidSubmit(true)
				})
			})
		} else {
			return
		}
	}, [files])

	if (files) {
		console.log(files[0]);
	}

	// useEffect(() => {
	// 	listAll(fileListRef).then(response => console.log(response))
	// }, [files])

	const removeFile = event => {
		const deleteElement = event.target.id
		const newFiles = [...files]
		setFiles(newFiles.toSpliced(deleteElement, 1))
		setDidSubmit(false)

		files.forEach(file => {
			const fileListRef = ref(storage, `images/${file.name}`)
			if (files[deleteElement].name === file.name) {
				deleteObject(fileListRef).then(() => {
					console.log('ok')
				})
			} else return
		})
	}

	return (
		<div className={classes.container}>
			<div
				className={classes.dragdrop}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				onClick={() => inputRef.current.click()}>
				<p className={classes.header}>
					<span>Wybierz</span> z dysku lub przeciągnij pliki tutaj
				</p>
				<input type="file" hidden multiple onChange={addFiles} ref={inputRef} />
			</div>
			{files && (
				<ul>
					{files.map((file, idx) => (
						<li key={idx}>
							<p>{file.name}</p>
							<span>
								{isSubmitting && !didSubmit && (
									<LoadingSpinner
										classNameContainer={classes['spinner-container']}
										classNameSpinner={classes['loading-spinner']}
									/>
								)}
								{!isSubmitting && didSubmit && <i onClick={removeFile} id={idx} class="fa-solid fa-circle-xmark"></i>}
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default FileInput
