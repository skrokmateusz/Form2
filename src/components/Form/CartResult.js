import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from '../UI/Modal'
import Button from '../UI/Button'
import LoadingSpinner from '../UI/LoadingSpinner'
import { navActions } from '../../store/navigation'
import { valActions } from '../../store/validity'

// import classes from './CartResult.module.css'

const CartResult = props => {

    const dispatch = useDispatch()
    const isSubmitting = useSelector(state => state.submit.isSubmitting)
    const didSubmit = useSelector(state => state.submit.didSubmit)


	const sendingForm = <LoadingSpinner />

    const hideResultCartHandler = () => {
            dispatch(navActions.navToHomePage())
			dispatch(valActions.setDefaultValues())
    }

	const sentCorrectForm = (
		<React.Fragment>
			<p>Dziękujemy za podzielenie się opinią. Formularz został wysłany poprawnie.</p>

			<Button onClick={hideResultCartHandler} title="Zamknij" />
		</React.Fragment>
	)

	return (
		<Modal onClick={hideResultCartHandler}>
            {isSubmitting && !didSubmit && sendingForm}
            {!isSubmitting && didSubmit && sentCorrectForm}
		</Modal>
	)
}

export default CartResult
