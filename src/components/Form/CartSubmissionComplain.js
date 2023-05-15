import { useDispatch, useSelector } from 'react-redux'

import Card from '../UI/Card'
import Header from '../Layout/Header'
import MainSubmissionComplain from '../Layout/MainSubmissionComplain'
import Footer from '../Layout/Footer'
import Button from '../UI/Button'
import { navActions } from '../../store/navigation'
import { valActions } from '../../store/validity'
import { submitActions } from '../../store/submit'

import classes from './CartSubmission.module.css'

const CartSubmissionComplain = props => {
	const dispatch = useDispatch()
	const inputData = useSelector(state => state.data)

	const previousPageHandler = event => {
		event.preventDefault()
		dispatch(navActions.navToPreviousCart())
		dispatch(valActions.buttonNextStepIsNotClicked())
		dispatch(valActions.errorIsNotShown())
	}

	const homePageHandler = (params) => {
		dispatch(navActions.navToHomePage())
	}


	const submitHandler = async event => {
		event.preventDefault()
		dispatch(submitActions.setIsSubmitting())
		dispatch(valActions.buttonSubmissionIsClicked())
		dispatch(navActions.navToResultCart())
		const response = await fetch('https://form-17894-default-rtdb.europe-west1.firebasedatabase.app/registration.json', {
			method: 'POST',
			body: JSON.stringify(inputData),
		})
		if (!response.ok) {
			throw new Error('something went wrong')
		}
		dispatch(submitActions.setIsNotSubmitting())
		dispatch(submitActions.setDidSubmit())
	}

	return (
		<form onSubmit={submitHandler}>
			<Card>
				<Header
					classNameTwo={classes['active-two']}
					classNameThree={classes['active-three']}
					normalTitle={props.normalTitle}
					highlightedTitle="Dane kontaktowe"
					onClickOne={homePageHandler}
					onClickTwo={previousPageHandler}
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
