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
import FileUploader from '../UI/FileUploader'
import FileUploader2 from '../UI/FileUploader2'
import DragDropFiles from '../UI/dragdrop2'
import DragDrop2 from '../UI/dragdrop2'

import classes from './MainProductComplain.module.css'
import DragDrop from '../UI/DragAndDrop'

const MainProductComplain = () => {
	const [attachedPicture, setAttachedPicture] = useState({})

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

	const {
		value: enteredExpirationDate,
		isValid: enteredExpirationDateIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasExpirationDateError, //do ustawienia klasy czy błędzie
		valueChangeHandler: expirationDateChangeHandler,
		inputBlurHandler: expirationDateBlurHandler,
	} = useInput(value => value !== '', savedData.expirationDate)

	const {
		value: enteredMessage,
		isValid: enteredMessageIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasMessageError, //do ustawienia klasy czy błędzie
		valueChangeHandler: messageChangeHandler,
		inputBlurHandler: messageBlurHandler,
	} = useInput(value => value !== '', savedData.message)

	const {
		value: enteredPurchasePlace,
		isValid: enteredPurchasePlaceIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasPurchasePlaceError, //do ustawienia klasy czy błędzie
		valueChangeHandler: purchasePlaceChangeHandler,
		inputBlurHandler: purchasePlaceBlurHandler,
	} = useInput(value => value !== '', savedData.purchasePlace)

	const { value: enteredPackageKept, valueChangeHandler: packageKeptHandler } = useOptionInput(savedData.packageKept)
	const { value: enteredPackageType, valueChangeHandler: packageTypeHandler } = useOptionInput(savedData.packageType)
	const { value: enteredPackageCapacity, valueChangeHandler: packageCapacityHandler } = useOptionInput(
		savedData.packageCapacity
	)
	const { value: enteredPackageState, valueChangeHandler: packageStateHandler } = useOptionInput(savedData.packageState)
	const { value: enteredPackageStorageBefore, valueChangeHandler: packageStorageBeforeHandler } = useOptionInput(
		savedData.packageStorageBefore
	)
	const { value: enteredFirstOpen, valueChangeHandler: firstOpenHandler } = useOptionInput(savedData.firstOpen)
	const { value: enteredPackageStorageAfter, valueChangeHandler: packageStorageAfterHandler } = useOptionInput(
		savedData.packageStorageAfter
	)
	const { value: enteredProductChange, valueChangeHandler: productChangeHandler } = useOptionInput(
		savedData.productChange
	)

	const uploadPicture = picture => {
		setAttachedPicture(picture)
	}

	let correctContent = false
	correctContent =
		enteredFlavourIsValid &&
		enteredExpirationDateIsValid &&
		enteredMessageIsValid &&
		enteredPurchasePlaceIsValid &&
		enteredPackageKept

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
			console.log(newData)
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
				<Input
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
				/>
				<div className={classes['invalid-input']}>
					{hasExpirationDateError || (isErrorShown && !enteredExpirationDate) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
				</div>
				{/* <Input
					className={`${hasMessageError ? `${classes.invalid} ${classes.message}` : classes.message} ${
						isErrorShown && !enteredMessageIsValid ? `${classes.invalid} ${classes.message}` : classes.message
					}`}
					classLabel={classes['message-label']}
					classDiv={classes['message-div']}
					classInput={classes['message-input']}
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
				</div> */}

				<div className={classes['textarea-div']}>
					<label className={classes['textarea-label']} htmlFor="textarea">
						<div>Opis sytuacji*</div>
					</label>
					<textarea
						className={`${hasMessageError ? `${classes['invalid-textarea']} ${classes.textarea}` : classes.textarea}} ${
							isErrorShown && !enteredMessageIsValid
								? `${classes['invalid-textarea']} ${classes.textarea}`
								: classes.textarea
						}`}
						value={enteredMessage}
						onChange={messageChangeHandler}
						onBlur={messageBlurHandler}
						input={{
							type: 'text',
							id: 'message',
							value: enteredMessage,
							onChange: messageChangeHandler,
							onBlur: messageBlurHandler,
						}}></textarea>
				</div>
				<div className={classes['invalid-input']}>
					{hasMessageError || (isErrorShown && !enteredMessage) ? <p>* Wypełnienie tego pola jest wymagane</p> : ''}
				</div>

				<Input
					className={`${hasPurchasePlaceError ? classes.invalid : ''} ${
						isErrorShown && !enteredPurchasePlaceIsValid ? classes.invalid : ''
					}`}
					tips={
						<a
							href="#"
							data-tip="Prosimy o podanie nazwy sklepu i jego adresu. Pozwoli nam to na sprawdzenie warunków przechowywania naszych towarów">
							<i className="fa-sharp fa-solid fa-circle-question"></i>
						</a>
					}
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
					className={`${isErrorShown && !enteredPackageKept ? classes.invalid : ''}`}
					label="Czy zostało zachowane opakowanie*"
					name="is-package"
					value={enteredPackageKept}
					onChange={packageKeptHandler}
					option1="tak, posiadam opakowanie wraz z produktem"
					option2="tak, posiadam puste opakowanie"
					option3="nie, posiadam tylko produkt"
					option4="nie, opakowanie z produktem zostało wyrzucone"
				/>
				<div className={classes['invalid-input']}>
					{isErrorShown && !enteredPurchasePlace ? <p>* Wypełnienie tego pola jest wymagane</p> : ''}
				</div>
				<div className={classes['dragdrop-div']}>
					<label htmlFor="text">
						<div className={classes.description}>Prosimy o dołączenie zdjęć opakowania i produktu</div>
						<div>
							<a
								href="#"
								data-tip="Prosimy o zrobienie zdjęć min. całego opakowania oraz zamknięcia. Mile widzane będą zdjęcia każdej strony produktu">
								<i className="fa-sharp fa-solid fa-circle-question"></i>
							</a>
						</div>
					</label>
					<DragDrop2 />
				</div>

				<p>Aby kompleksowo i możliwe szybko odpowiedzieć na zgłoszenie prosimy o podanie dodatkowych informacji:</p>
				<OptionInput
					label="Rodzaj opakowania"
					name="package"
					value={enteredPackageType}
					onChange={packageTypeHandler}
					option1="kartonik"
					option2="karton"
					option3="butelka szklana"
					option4="butelka plastikowa"
				/>
				<OptionInput
					label="Pojemność / gramatura"
					name="capacity"
					value={enteredPackageCapacity}
					onChange={packageCapacityHandler}
					option1="25g"
					option2="100g"
					option3="120g"
					option4="1kg"
				/>
				<Input
					className={classes.inputs}
					label="Prosimy opisać stan opakowania"
					input={{ type: 'text', value: enteredPackageState, onChange: packageStateHandler }}
				/>
				<Input
					className={classes.inputs}
					label="Gdzie i jak długo produkt był przechowywany przed otwarciem"
					input={{ type: 'text', value: enteredPackageStorageBefore, onChange: packageStorageBeforeHandler }}
				/>
				<DateInput
					label="Data pierwszego otwarcia produktu"
					input={{ type: 'date', value: enteredFirstOpen, onChange: firstOpenHandler }}
				/>
				<Input
					className={classes.inputs}
					label="Gdzie i jak długo produkt był przechowywany po otwarciu"
					onChange={packageStorageAfterHandler}
					input={{ type: 'text', value: enteredPackageStorageAfter, onChange: packageStorageAfterHandler }}
				/>
				<DateInput
					label="Kiedy zauważono zmiany w produkcie"
					input={{ type: 'date', value: enteredProductChange, onChange: productChangeHandler }}
				/>
				<p>* Pola oznaczone gwiazdką są wymagane</p>
			</div>
		</main>
	)
}

export default MainProductComplain
