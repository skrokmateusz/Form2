import Input from '../UI/Input'
import OptionInput from '../UI/OptionInput'

import classes from './MainProductComplain.module.css'

const MainProductComments = props => {
	return (
		<main>
			<form>
				<div>
				</div>
				<Input className={classes.inputs} label="Nazwa / smak *" input={{ type: 'text' }} />
				<Input className={classes.inputs} label="Data ważności i numer partii *" input={{ type: 'text' }} />
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
			</form>
		</main>
	)
}

export default MainProductComments
