import classes from './DateInput.module.css'

const DateInput = props => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input className={classes.dateinput} {...props.input} />
		</div>
	)
}

export default DateInput

// import React from 'react'

// import classes from './Input.module.css'

// const Input = props => {
//     return (
//         <div className={classes.input}>
//             <label htmlFor={props.input.id}>{props.label}</label>
//             <input className={props.className} {...props.input} />
//         </div>
//     )
// }

// export default Input
