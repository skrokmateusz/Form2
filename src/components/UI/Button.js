import classes from './Button.module.css'

const Button = props => {
    return (
        <button onClick={props.onClick} className={`${classes.button} ${props.className}`}>{props.title}</button>
    )
}

export default Button