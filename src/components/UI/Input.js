import React from 'react'

import classes from './Input.module.css'

const Input = props => {
    return (
        <div className={`${classes.input} ${props.classDiv} `}>
            <label className={props.classLabel} htmlFor={props.input.id}><div className={classes.description}>{props.label}</div><div>{props.tips}</div></label>
            <input className={`${props.className} ${props.classInput} ${props.classFile}`} {...props.input}>{props.children}</input>
        </div>
    )
}

export default Input

// import React from 'react'

// import classes from './Input.module.css'

// const Input = React.forwardRef((props, ref) => {
//     return (
//         <div className={classes.input}>
//             <label htmlFor={props.input.id}>{props.label}</label>
//             <input ref={ref} {...props.input} />
//         </div>
//     )
// })

// export default Input