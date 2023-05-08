import { useState } from 'react'

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('') // stan odpowiedzialny za wpisaną wartość w input
	const [isTouched, setIsTouched] = useState(false) // stan odpowiedzalny za sprawdzenie czy input został kliknięty

    const valueIsValid = validateValue(enteredValue) //sprawdzenie czy warunki dla imienia i nazwiska są >0 oraz poprawność maila -> true lub false
	const hasError = !valueIsValid && isTouched //sprawdzenie czy wpisane wartości są zgodne z wymaganiami oraz czy input został kliknięty

    const valueChangeHandler = event => {
		setEnteredValue(event.target.value)  //funkcja która aktualizuje enteredValue aktualnie wpisanym wyrażeniem
	}

    const inputBlurHandler = event => {
		setIsTouched(true) // funkcja która aktualizuje isTouch po kliknięciu w input
	}

    return {
        value: enteredValue, isValid: valueIsValid ,hasError, valueChangeHandler, inputBlurHandler
    }
}

export default useInput