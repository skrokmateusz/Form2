import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../UI/Button'
import Header from '../Layout/Header'
import MainFirstPage from '../Layout/MainFirstPage'
import Card from '../UI/Card'
import Footer from '../Layout/Footer'
import { navActions } from '../../store/navigation'

import classes from './CartTypeAction.module.css'

const CartTypeAction = props => {
	const dispatch = useDispatch()
	const [currentAction, setCurrentAction] = useState('')

	const onBox = onChosenValue => {
		setCurrentAction(onChosenValue)
	}

	const nextStepBtnMainPage = () => {
		if (currentAction === 'complain') {
			dispatch(navActions.navToComplainCart())
		} else if (currentAction === 'question') {
			dispatch(navActions.navToQuestionCart())
		} else if (currentAction === 'comment') {
			dispatch(navActions.navToCommentCart())
		} else return
	}

	return (
		<Fragment>
			<Card>
				<Header normalTitle="" highlightedTitle="Temat zgłoszenia" />
				<MainFirstPage onChosenBox={onBox} />
			</Card>
			<Footer>
				<Button onClick={nextStepBtnMainPage} title="Następny krok" />
			</Footer>
		</Fragment>
	)
}

export default CartTypeAction
