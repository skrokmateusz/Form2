import { useSelector, useDispatch } from 'react-redux'

import useInput from '../../hooks/use-input'
import Input from '../UI/Input'
import OptionInput from '../UI/OptionInput'

import classes from './MainProductComplain.module.css'

const MainProductQuestion = props => {
	const dispatch = useDispatch()
	const isNextStepClicked = useSelector(state => state.val.isNextStepButtonClicked)
	const isErrorShown = useSelector(state => state.val.isErrorShown)
	const savedData = useSelector(state => state.data.data.registrationData)
	
	const {
		value: enteredFlavour,
		isValid: enteredFlavourIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasFlavourError, //do ustawienia klasy czy błędzie
		valueChangeHandler: flavourChangeHandler,
		inputBlurHandler: flavourBlurHandler,
	} = useInput(value => value !== '', savedData.flavour)
	
	
	return (
		<main>
			<div>
			<Input
					label="Nazwa / smak *"
					className={`${hasFlavourError ? classes.invalid : ''} ${
						isErrorShown && !enteredFlavourIsValid ? classes.invalid : ''
					}`}
					tips={
						<a href="#" data-tip="Informacja na froncie produktu">
							<i className="fa-sharp fa-solid fa-circle-question"></i>
						</a>
					}
					input={{
						type: 'text',
						id: 'flavour',
						value: enteredFlavour,
						onChange: flavourChangeHandler,
						onBlur: flavourBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasFlavourError || (isErrorShown && !enteredFlavour) ? <p>* Wypełnienie tego pola jest wymagane</p> : ''}
				</div>
				{/* <Input
					label="Data ważności i numer partii *"
					className={`${hasExpirationDateError ? classes.invalid : ''} ${
						isErrorShown && !enteredExpirationDateIsValid ? classes.invalid : ''
					}`}
					tips={
						<a href="#" data-tip="Całościowy nadruk z opakowania: np. 05.2020 1836 L808052YX.">
							<i className="fa-sharp fa-solid fa-circle-question"></i>
						</a>
					}
					input={{
						type: 'text',
						id: 'expiration-date',
						value: enteredExpirationDate,
						onChange: expirationDateChangeHandler,
						onBlur: expirationDateBlurHandler,
					}}
				/> */}
				{/* <div className={classes['invalid-input']}>
					{hasExpirationDateError || (isErrorShown && !enteredExpirationDate) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
					
				</div> */}
			<Input className={`${classes.inputs} ${classes.message}`} label="Opis sytuacji *" input={{ type: 'text' }} />
			<p>Miejsce na dołączenia zdjęć</p>
			<OptionInput
				label="Rodzaj opakowania"
				name="package"
				option1="kartonik"
				option2="karton"
				option3="butelka szklana"
				option4="butelka plastikowa"
			/>
			<OptionInput
				label="Pojemność / gramatura"
				name="capacity"
				option1="25g"
				option2="100g"
				option3="120g"
				option4="1kg"
			/>
			<p>* Pola oznaczone gwiazdką są wymagane</p>
			</div>
		</main>
	)
}

export default MainProductQuestion
