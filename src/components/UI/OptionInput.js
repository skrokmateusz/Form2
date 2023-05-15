import classes from './OptionInput.module.css'

const OptionInput = props => {
	return (
		<div className={classes.input}>
			<label htmlFor="">{props.label}</label>
			<select name={props.name} className={classes.options} onChange={props.onChange}>
				<option value="">Wybierz...</option>
				<option value={props.option1}>{props.option1}</option>
				<option value={props.option2}>{props.option2}</option>
				<option value={props.option3}>{props.option3}</option>
				<option value={props.option4}>{props.option4}</option>
			</select>
		</div>
	)
}

export default OptionInput