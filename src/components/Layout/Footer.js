import classes from './Footer.module.css'

const Footer = props => {
    return <div className={`${classes.footer} ${props.className}`}>{props.children}</div>
}

export default Footer