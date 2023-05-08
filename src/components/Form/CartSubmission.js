import { useSelector } from 'react-redux'

import Card from '../UI/Card'
import Header from '../Layout/Header'
import MainSubmission from '../Layout/MainSubmission'
import Footer from '../Layout/Footer'
import Button from '../UI/Button'

import classes from './CartSubmission.module.css'

const CartSubmission = props => {

	const isNextStepClicked = useSelector(state => state.val.isNextStepButtonClicked)
console.log(isNextStepClicked);

	return (
		<form>
			<Card>
				<Header
					classNameTwo={classes['active-two']}
					classNameThree={classes['active-three']}
					normalTitle={props.normalTitle}
					highlightedTitle="Dane kontaktowe"

				/>
				<MainSubmission />
			</Card>
			<Footer className={classes.footer}>
				<Button title="" className={classes['back-button']} />
				<Button title="Wyślij formularz" />
			</Footer>
		</form>
	)
}

export default CartSubmission
