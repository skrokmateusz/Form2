import { useState } from 'react'

import classes from './MainFirstPage.module.css'

const MainFirstPage = props => {
	const [isBoxClicked, setIsBoxClicked] = useState('')
	const choiceHandler = event => {
		const chosenBox = event.target.closest('div').id
		props.onChosenBox(chosenBox)
		setIsBoxClicked(chosenBox)
	}

	const classesComplainBox = isBoxClicked === 'complain' ? classes['choice-box-clicked'] : classes['choice-box']
	const classesQuestionBox = isBoxClicked === 'question' ? classes['choice-box-clicked'] : classes['choice-box']
	const classesCommentBox = isBoxClicked === 'comment' ? classes['choice-box-clicked'] : classes['choice-box']

	return (
		<main>
			<div onClick={choiceHandler} className={classesComplainBox} id="complain">
				<i className="fa-sharp fa-solid fa-circle-exclamation"></i>
				<p>Reklamacja produktowa</p>
			</div>
			<div onClick={choiceHandler} className={classesQuestionBox} id="question">
				<i className="fa-sharp fa-solid fa-circle-question"></i>
				<p>Pytanie dotyczące produktu, składników, itd.</p>
			</div>
			<div onClick={choiceHandler} className={classesCommentBox} id="comment">
				<i className="fa-sharp fa-solid fa-message"></i>
				<p>Opinie, sugestie dotyczące produktów</p>
			</div>
		</main>
	)
}

export default MainFirstPage
