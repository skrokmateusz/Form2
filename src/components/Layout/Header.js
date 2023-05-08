import ProgressBar from "./ProgressBar"

import classes from './Header.module.css'

const Header = props => {
	return (
		<header>
			<div className={classes.title}>
			<p className={classes['normal-title']}>{props.normalTitle}</p>
			<p className={classes['highlighted-title']}>{props.highlightedTitle}</p>
			</div>
			<ProgressBar onClickOne={props.onClickOne} onClickTwo={props.onClickTwo} classNameTwo={props.classNameTwo} classNameThree={props.classNameThree}/>
		</header>
	)
}

export default Header
