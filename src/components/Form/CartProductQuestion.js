import { Fragment } from "react"


import Card from "../UI/Card"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import Button from "../UI/Button"
import MainProductQuestion from "../Layout/MainProductQuestion"

import classes from './CartProductQuestion.module.css'

const CartProductQuestion = props => {


	return (
		<Fragment>
			<Card>
				<Header classNameTwo={classes['active-two']} normalTitle="Pytanie dotyczące produktu, składników, itd." highlightedTitle="Dane produktowe" />
                <MainProductQuestion />
			</Card>
			<Footer className={classes.footer}>
				<Button title="" className={classes['back-button']}/>
				<Button title="Następny krok" />
			</Footer>
		</Fragment>
	)
}

export default CartProductQuestion