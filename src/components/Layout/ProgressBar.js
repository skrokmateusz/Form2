import classes from './ProgressBar.module.css'

const ProgressBar = props => {
	return (
		<div className={classes.progress}>
			<span>Krok</span>
			<span className={classes.one} onClick={props.onClickOne}>
				<i class="fa-sharp fa-solid fa-circle"></i>
			</span>
			<span className={`${classes.two} ${props.classNameTwo}`}onClick={props.onClickTwo}>
				<i class="fa-sharp fa-solid fa-circle"></i>
			</span>
			<span className={`${classes.three} ${props.classNameThree}`}>
				<i class="fa-sharp fa-solid fa-circle"></i>
			</span>
		</div>
	)
}

export default ProgressBar
