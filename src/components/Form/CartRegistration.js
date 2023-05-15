import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../UI/Card'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Button from '../UI/Button'
import MainProductComplain from '../Layout/MainProductComplain'
import MainProductQuestion from '../Layout/MainProductQuestion'
import MainProductComments from '../Layout/MainProductComments'
import { navActions } from '../../store/navigation'
import { valActions } from '../../store/validity'

import classes from './CartRegistration.module.css'

const CartRegistration = props => {
	const dispatch = useDispatch()
	const complainCart = useSelector(state => state.nav.complainCart)
	const questionCart = useSelector(state => state.nav.questionCart)
	const commentsCart = useSelector(state => state.nav.commentCart)
	const nextStepBtnClicked = useSelector(state => state.val.isNextStepButtonClicked)

	const isCorrectContent = useSelector(state => state.val.isCorrectContent)

	const previousStepButtonHandler = event => {
		event.preventDefault()
		dispatch(navActions.navToHomePage())
		dispatch(valActions.buttonNextStepIsNotClicked())
		dispatch(valActions.errorIsNotShown())
	}

	const nextStepButtonHandler = event => {
		event.preventDefault()
		dispatch(valActions.buttonNextStepIsClicked())
		dispatch(valActions.errorIsShown())
		if (!isCorrectContent) {
			dispatch(valActions.contentIsNotCorrect())
		}
	}

	// const complainContent = (
	// 	<React.Fragment>
	// 		<Header
	// 			classNameTwo={classes['active-two']}
	// 			normalTitle="Reklamacja produktowa"
	// 			highlightedTitle="Dane produktowe"
	// 			onClickOne={previousStepButtonHandler}
	// 		/>
	// 		<MainProductComplain />
	// 	</React.Fragment>
	// )

	// const questionContent = (
	// 	<React.Fragment>
	// 		<Header
	// 			classNameTwo={classes['active-two']}
	// 			normalTitle="Pytanie dotyczące produktu, składników, itd."
	// 			highlightedTitle="Dane produktowe"
	// 			onClickOne={previousStepButtonHandler}
	// 		/>
	// 		<MainProductQuestion />
	// 	</React.Fragment>
	// )

	// const commentsContent = (
	// 	<React.Fragment>
	// 		<Header
	// 			classNameTwo={classes['active-two']}
	// 			normalTitle="Opinie, sugestie dotyczące produktów"
	// 			highlightedTitle="Dane produktowe"
	// 			onClickOne={previousStepButtonHandler}
	// 		/>
	// 		<MainProductComments />
	// 	</React.Fragment>
	// )

	return (
		<div>
			<Card>
				<Header
					classNameTwo={classes['active-two']}
					normalTitle="Reklamacja produktowa"
					highlightedTitle="Dane produktowe"
					onClickOne={previousStepButtonHandler}
				/>
				<MainProductComplain />
			</Card>
			<Footer className={classes.footer}>
				<Button onClick={previousStepButtonHandler} title="" className={classes['back-button']} />
				<Button onClick={nextStepButtonHandler} title="Następny krok" />
			</Footer>
		</div>
	)
}

export default CartRegistration
