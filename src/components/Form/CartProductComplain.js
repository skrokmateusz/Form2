
import { useDispatch, useSelector } from 'react-redux'

import Card from '../UI/Card'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Button from '../UI/Button'
import MainProductComplain from '../Layout/MainProductComplain'
import { navActions } from '../../store/navigation'

import classes from './CartProductComplain.module.css'
import { valActions } from '../../store/validity'


const CartProductComplain = props => {
	const dispatch = useDispatch()
	
	const previousStepButtonHandler = event => {
		event.preventDefault()
		dispatch(navActions.navToHomePage())
		dispatch(valActions.buttonNextStepIsNotClicked())
	}
	
	const isNextStepClicked = useSelector(state => state.val.isNextStepButtonClicked)
	const isCorrectContent = useSelector(state => state.val.isCorrectContent)

	const nextStepButtonHandler = event => {
		event.preventDefault()
		dispatch(valActions.buttonNextStepIsClicked())
		if (!isCorrectContent) {
			return
		}
		else {
			dispatch(navActions.navToSubmissionCart())
		} 
			
	}
	
	return (
		<form>
			<Card>
				<Header
					classNameTwo={classes['active-two']}
					normalTitle="Reklamacja produktowa"
					highlightedTitle="Dane produktowe"
				/>

				<MainProductComplain />
			</Card>
			<Footer className={classes.footer}>
				<Button onClick={previousStepButtonHandler} title="" className={classes['back-button']} />
				<Button onClick={nextStepButtonHandler} title="Następny krok" />
			</Footer>
		</form>
	)
}

export default CartProductComplain
