import { useSelector } from 'react-redux'

import Input from '../UI/Input'
import useInput from '../../hooks/use-input'

import classes from './MainSubmission.module.css'

const regE =
	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const MainSubmission = props => {
	const isSubmissionButtonClicked = useSelector(state => state.val.isSubmissionButtonClicked)

	const {
		value: enteredName,
		isValid: enteredNameIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasNameError, //do ustawienia klasy czy błędzie
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
	} = useInput(value => value !== '')

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasEmailError, //do ustawienia klasy czy błędzie
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput(value => value.match(regE))

	return (
		<main>
			<div>
				<Input
					className={`${hasNameError ? classes.invalid : ''} ${
						isSubmissionButtonClicked && !enteredNameIsValid ? classes.invalid : ''
					}`}
					label="Imię i nazwisko *"
					input={{
						type: 'text',
						id: 'name',
						value: enteredName,
						onChange: nameChangeHandler,
						onBlur: nameBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasNameError || (isSubmissionButtonClicked && !enteredName) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
				</div>
				<Input
					className={`${hasEmailError ? classes.invalid : ''} ${
						isSubmissionButtonClicked && !enteredEmailIsValid ? classes.invalid : ''
					}`}
					label="Adres e-mail *"
					input={{
						type: 'text',
						id: 'email',
						value: enteredEmail,
						onChange: emailChangeHandler,
						onBlur: emailBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{isSubmissionButtonClicked && !enteredEmail ? <p>* Wypełnienie tego pola jest wymagane</p> : ''}
					{hasEmailError ? <p>* Adres email jest nieprawidłowy</p> : ''}
				</div>
		
				<p>* Pola oznaczone gwiazdką są wymagane</p>
			</div>
		</main>
	)
}

export default MainSubmission
