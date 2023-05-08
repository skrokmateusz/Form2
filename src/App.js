import { useSelector } from 'react-redux'

import CartProductComplain from './components/Form/CartProductComplain'
import CartTypeAction from './components/Form/CartTypeAction'
import CartSubmissionComplain from './components/Form/CartSubmissionComplain'

function App() {
	const chosenComplainBox = useSelector(state => state.nav.complainCart)
	const chosenQuestionBox = useSelector(state => state.nav.questionCart)
	const chosenCommentBox = useSelector(state => state.nav.commentCart)
	const submissionBox = useSelector(state => state.nav.submissionCart)


	const inputData = useSelector(state => state.data)
	console.log(inputData);

	return (
		<div>
			{!chosenComplainBox && !chosenQuestionBox && !chosenCommentBox && <CartTypeAction />}
			{chosenComplainBox && !submissionBox && <CartProductComplain />}
			{/* {chosenQuestionBox && !submissionBox && <CartProductQuestion />}
			{chosenCommentBox && !submissionBox && <CartProductComments />} */}
			{chosenComplainBox && submissionBox && <CartSubmissionComplain normalTitle='Reklamacja produktowa.'/>}
			{/* {chosenQuestionBox && submissionBox && <CartSubmission normalTitle='Pytania dotyczące produktu, składników, itd.'/>}
			{chosenCommentBox && submissionBox && <CartSubmission normalTitle='Opinie, sugestie dotyczące produktów.'/>} */}
		</div>
	)
}

export default App
