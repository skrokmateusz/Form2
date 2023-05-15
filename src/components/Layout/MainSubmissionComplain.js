import { useSelector, useDispatch } from 'react-redux'

import Input from '../UI/Input'
import useInput from '../../hooks/use-input'
import useOptionInput from '../../hooks/use-optionInput'

import classes from './MainSubmission.module.css'
import { useEffect } from 'react'
import { dataActions } from '../../store/data'
import { valActions } from '../../store/validity'

const regExpEmail =
	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const regExpNumber = /^\d{9}$/

const MainSubmissionComplain = props => {
	const dispatch = useDispatch()
	const isSubmissionButtonClicked = useSelector(state => state.val.isSubmissionButtonClicked)
	const isSubmissionErrorShown = useSelector(state => state.val.isSubmissionErrorShown)

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
	} = useInput(value => value.match(regExpEmail))

	const {
		value: enteredNumber,
		isValid: enteredNumberIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasNumberError, //do ustawienia klasy czy błędzie
		valueChangeHandler: numberChangeHandler,
		inputBlurHandler: numberBlurHandler,
	} = useInput(value => value.match(regExpNumber))

	const { value: enteredAdress, valueChangeHandler: adressHandler } = useOptionInput()
	const { value: enteredZipCode, valueChangeHandler: zipCodeHandler } = useOptionInput()
	const { value: enteredCity, valueChangeHandler: cityHandler } = useOptionInput()

	let correctContent = false
	correctContent = enteredNameIsValid && enteredEmailIsValid && enteredNumberIsValid

	useEffect(() => {
		const userData = {
			nameSurname: enteredName,
			email: enteredEmail,
			phoneNumber: enteredNumber,
			adress: enteredAdress,
			zipCode: enteredZipCode,
			city: enteredCity,
		}
		const newUserData = { ...userData }
		if (correctContent && isSubmissionButtonClicked) {
			console.log('ok');
			dispatch(dataActions.addUserData(newUserData))
			dispatch(valActions.submissionContentIsCorrect())

		} else if (!correctContent && isSubmissionButtonClicked) {
			dispatch(valActions.buttonSubmissionIsNotClicked())
		} else {
			return
		}
	}, [isSubmissionButtonClicked])


	return (
		<main>
			<div>
				<Input
					className={`${hasNameError ? classes.invalid : ''} ${
						isSubmissionErrorShown && !enteredNameIsValid ? classes.invalid : ''
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
					{hasNameError || (isSubmissionErrorShown && !enteredName) ? <p>* Wypełnienie tego pola jest wymagane</p> : ''}
				</div>
				<Input
					className={`${hasEmailError ? classes.invalid : ''} ${
						isSubmissionErrorShown && !enteredEmailIsValid ? classes.invalid : ''
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
					{isSubmissionErrorShown && !enteredEmail ? <p>* Wypełnienie tego pola jest wymagane</p> : ''}
					{hasEmailError ? <p>* Adres email jest nieprawidłowy</p> : ''}
				</div>

				<Input
					className={`${hasNumberError ? classes.invalid : ''} ${
						isSubmissionErrorShown && !enteredNumberIsValid ? classes.invalid : ''
					}`}
					label="Numer telefonu *"
					input={{
						type: 'text',
						id: 'number',
						value: enteredNumber,
						onChange: numberChangeHandler,
						onBlur: numberBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{isSubmissionErrorShown && !enteredNumber ? <p>* Wypełnienie tego pola jest wymagane</p> : ''}
					{hasNumberError ? <p>* Nieprawidłowy format telefonu. Prawidłowy format 123456789</p> : ''}
				</div>
				<Input className={classes.inputs} label="Ulica, nr domu" onChange={adressHandler} input={{ type: 'text' }} />
				<Input className={classes.inputs} label="Kod pocztowy" onChange={zipCodeHandler} input={{ type: 'text' }} />
				<Input className={classes.inputs} label="Miejscowość" onChange={cityHandler} input={{ type: 'text' }} />
				<p>* Pola oznaczone gwiazdką są wymagane</p>
			</div>
		</main>
	)
}

export default MainSubmissionComplain
