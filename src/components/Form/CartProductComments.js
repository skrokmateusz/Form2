import { Fragment } from "react"


import Card from "../UI/Card"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import Button from "../UI/Button"
import MainProductComments from "../Layout/MainProductComments"

import classes from './CartProductComments.module.css'

const CartProductComments = props => {


	return (
		<Fragment>
			<Card>
				<Header classNameTwo={classes['active-two']} normalTitle="Opinie, sugestie dotyczące produktów" highlightedTitle="Dane produktowe" />
                <MainProductComments />
			</Card>
			<Footer className={classes.footer}>
				<Button title="" className={classes['back-button']}/>
				<Button title="Następny krok" />
			</Footer>
		</Fragment>
	)
}

export default CartProductComments