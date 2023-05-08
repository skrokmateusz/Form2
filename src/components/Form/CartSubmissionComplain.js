import { useDispatch } from 'react-redux'

import Card from '../UI/Card'
import Header from '../Layout/Header'
import MainSubmissionComplain from '../Layout/MainSubmissionComplain'
import Footer from '../Layout/Footer'
import Button from '../UI/Button'
import { navActions } from '../../store/navigation'
import { valActions } from '../../store/validity'

import classes from './CartSubmission.module.css'

const CartSubmissionComplain = props => {
	const dispatch = useDispatch()

	const previousPageHandler = event => {
		event.preventDefault()
		dispatch(navActions.navToPreviousCart())
		dispatch(valActions.buttonNextStepIsNotClicked())
	}

	return (
		<form>
			<Card>
				<Header
					classNameTwo={classes['active-two']}
					classNameThree={classes['active-three']}
					normalTitle={props.normalTitle}
					highlightedTitle="Dane kontaktowe"

				/>
				<MainSubmissionComplain />
			</Card>
			<Footer className={classes.footer}>
				<Button onClick={previousPageHandler} title="" className={classes['back-button']} />
				<Button title="Wyślij formularz" />
			</Footer>
		</form>
	)
}

export default CartSubmissionComplain
