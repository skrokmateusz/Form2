import classes from './OptionInput.module.css'

const OptionInput = props => {
	return (
		<div className={classes.input}>
			<label htmlFor="">{props.label}</label>
			<select name={props.name} className={classes.options}>
				<option value="">Wybierz...</option>
				<option value="opt1">{props.option1}</option>
				<option value="opt2">{props.option2}</option>
				<option value="opt3">{props.option3}</option>
				<option value="opt4">{props.option4}</option>
			</select>
		</div>
	)
}

export default OptionInput