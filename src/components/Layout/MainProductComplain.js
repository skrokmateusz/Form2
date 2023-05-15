import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useInput from '../../hooks/use-input'
import useOptionInput from '../../hooks/use-optionInput'
import Input from '../UI/Input'
import OptionInput from '../UI/OptionInput'
import DateInput from '../UI/DateInput'
import { navActions } from '../../store/navigation'
import { valActions } from '../../store/validity'
import { dataActions } from '../../store/data'

import classes from './MainProductComplain.module.css'

const MainProductComplain = () => {
	const dispatch = useDispatch()
	const isNextStepClicked = useSelector(state => state.val.isNextStepButtonClicked)
	const isErrorShown = useSelector(state => state.val.isErrorShown)

	const {
		value: enteredFlavour,
		isValid: enteredFlavourIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasFlavourError, //do ustawienia klasy czy błędzie
		valueChangeHandler: flavourChangeHandler,
		inputBlurHandler: flavourBlurHandler,
	} = useInput(value => value !== '')

	const {
		value: enteredExpirationDate,
		isValid: enteredExpirationDateIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasExpirationDateError, //do ustawienia klasy czy błędzie
		valueChangeHandler: expirationDateChangeHandler,
		inputBlurHandler: expirationDateBlurHandler,
	} = useInput(value => value !== '')

	const {
		value: enteredMessage,
		isValid: enteredMessageIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasMessageError, //do ustawienia klasy czy błędzie
		valueChangeHandler: messageChangeHandler,
		inputBlurHandler: messageBlurHandler,
	} = useInput(value => value !== '')

	const {
		value: enteredPurchasePlace,
		isValid: enteredPurchasePlaceIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasPurchasePlaceError, //do ustawienia klasy czy błędzie
		valueChangeHandler: purchasePlaceChangeHandler,
		inputBlurHandler: purchasePlaceBlurHandler,
	} = useInput(value => value !== '')

	const { value: enteredPackageKept, valueChangeHandler: packageKeptHandler } = useOptionInput()
	const { value: enteredPackageType, valueChangeHandler: packageTypeHandler } = useOptionInput()
	const { value: enteredPackageCapacity, valueChangeHandler: packageCapacityHandler } = useOptionInput()
	const { value: enteredPackageState, valueChangeHandler: packageStateHandler } = useOptionInput()
	const { value: enteredPackageStorageBefore, valueChangeHandler: packageStorageBeforeHandler } = useOptionInput()
	const { value: enteredFirstOpen, valueChangeHandler: firstOpenHandler } = useOptionInput()
	const { value: enteredPackageStorageAfter, valueChangeHandler: packageStorageAfterHandler } = useOptionInput()
	const { value: enteredProductChange, valueChangeHandler: productChangeHandler } = useOptionInput()

	let correctContent = false
	correctContent =
		enteredFlavourIsValid && enteredExpirationDateIsValid && enteredMessageIsValid && enteredPurchasePlaceIsValid

	const data = {
		flavour: enteredFlavour,
		expirationDate: enteredExpirationDate,
		message: enteredMessage,
		purchasePlace: enteredPurchasePlace,
		packageKept: enteredPackageKept,
		packageType: enteredPackageType,
		packageCapacity: enteredPackageCapacity,
		packageState: enteredPackageState,
		packageStorageBefore: enteredPackageStorageBefore,
		firstOpen: enteredFirstOpen,
		packageStorageAfter: enteredPackageStorageAfter,
		productChange: enteredProductChange,
	}

	const newData = { ...data }
	useEffect(() => {
		if (correctContent && isNextStepClicked) {
			dispatch(valActions.contentIsCorrect())
			dispatch(dataActions.addData(newData))
			dispatch(navActions.navToSubmissionCart())
		} else if (!correctContent && isNextStepClicked) {
			dispatch(valActions.buttonNextStepIsNotClicked())
		} else {
			return
		}
	}, [correctContent, isNextStepClicked])

	return (
		<main>
			<div>
				<div>
					<p>
						Odpowiedzi na poniższe pytania pozwolą nam na wyjaśnienie Pani / Pana zgłoszenia. Uprzejmie dziękujemy za
						poświęcony czas.
					</p>
				</div>
				<Input
					label="Nazwa / smak *"
					className={`${hasFlavourError ? classes.invalid : ''} ${
						isErrorShown && !enteredFlavourIsValid ? classes.invalid : ''
					}`}
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
				<Input
					label="Data ważności i numer partii *"
					className={`${hasExpirationDateError ? classes.invalid : ''} ${
						isErrorShown && !enteredExpirationDateIsValid ? classes.invalid : ''
					}`}
					input={{
						type: 'text',
						id: 'expiration-date',
						value: enteredExpirationDate,
						onChange: expirationDateChangeHandler,
						onBlur: expirationDateBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasExpirationDateError || (isErrorShown && !enteredExpirationDate) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
				</div>
				<Input
					className={`${hasMessageError ? `${classes.invalid} ${classes.message}` : classes.message} ${
						isErrorShown && !enteredMessageIsValid ? `${classes.invalid} ${classes.message}` : classes.message
					}`}
					label="Opis sytuacji *"
					input={{
						type: 'text',
						id: 'message',
						value: enteredMessage,
						onChange: messageChangeHandler,
						onBlur: messageBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasMessageError || (isErrorShown && !enteredMessage) ? <p>* Wypełnienie tego pola jest wymagane</p> : ''}
				</div>
				<Input
					className={`${hasPurchasePlaceError ? classes.invalid : ''} ${
						isErrorShown && !enteredPurchasePlaceIsValid ? classes.invalid : ''
					}`}
					label="Gdzie i kiedy zakupiono produkt*"
					input={{
						type: 'text',
						id: 'purchase-place',
						value: enteredPurchasePlace,
						onChange: purchasePlaceChangeHandler,
						onBlur: purchasePlaceBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasPurchasePlaceError || (isErrorShown && !enteredPurchasePlace) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
				</div>
				<OptionInput
					label="Czy zostało zachowane opakowanie"
					name="is-package"
					onChange={packageKeptHandler}
					option1="tak, posiadam opakowanie wraz z produktem"
					option2="tak, posiadam puste opakowanie"
					option3="nie, posiadam tylko produkt"
					option4="nie, opakowanie z produktem zostało wyrzucone"
				/>
				<p>Aby kompleksowo i możliwe szybko odpowiedzieć na zgłoszenie prosimy o podanie dodatkowych informacji:</p>
				<OptionInput
					label="Rodzaj opakowania"
					name="package"
					onChange={packageTypeHandler}
					option1="kartonik"
					option2="karton"
					option3="butelka szklana"
					option4="butelka plastikowa"
				/>
				<OptionInput
					label="Pojemność / gramatura"
					name="capacity"
					onChange={packageCapacityHandler}
					option1="25g"
					option2="100g"
					option3="120g"
					option4="1kg"
				/>
				<Input
					className={classes.inputs}
					label="Prosimy opisać stan opakowania"
					onChange={packageStateHandler}
					input={{ type: 'text' }}
				/>
				<Input
					className={classes.inputs}
					label="Gdzie i jak długo produkt był przechowywany przed otwarciem"
					onChange={packageStorageBeforeHandler}
					input={{ type: 'text' }}
				/>
				<DateInput label="Data pierwszego otwarcia produktu" onChange={firstOpenHandler} input={{ type: 'date' }} />
				<Input
					className={classes.inputs}
					label="Gdzie i jak długo produkt był przechowywany po otwarciu"
					onChange={packageStorageAfterHandler}
					input={{ type: 'text' }}
				/>
				<DateInput
					label="Kiedy zauważono zmiany w produkcie"
					onChange={productChangeHandler}
					input={{ type: 'date' }}
				/>
				<p>* Pola oznaczone gwiazdką są wymagane</p>
			</div>
		</main>
	)
}

export default MainProductComplain
