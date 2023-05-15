import { useState } from 'react'

const useOptionInput = () => {
	const [enteredValue, setEnteredValue] = useState('') // stan odpowiedzialny za wpisaną wartość w input

	const valueChangeHandler = event => {
		setEnteredValue(event.target.value) //funkcja która aktualizuje enteredValue aktualnie wpisanym wyrażeniem
	}

	return {
		value: enteredValue,
		valueChangeHandler,
	}
}

export default useOptionInput
