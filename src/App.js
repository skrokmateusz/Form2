import { useSelector } from 'react-redux'

import CartTypeAction from './components/Form/CartTypeAction'
import CartSubmissionComplain from './components/Form/CartSubmissionComplain'
import CartResult from './components/Form/CartResult'
import CartRegistration from './components/Form/CartRegistration'

function App() {
	const chosenComplainCart = useSelector(state => state.nav.complainCart)
	const chosenQuestionCart = useSelector(state => state.nav.questionCart)
	const chosenCommentCart = useSelector(state => state.nav.commentCart)
	const submissionCart = useSelector(state => state.nav.submissionCart)
	const resultCart = useSelector(state => state.nav.resultCart)

	return (
		<div>
			{!chosenComplainCart && !chosenQuestionCart && !chosenCommentCart && <CartTypeAction />}
			{(chosenComplainCart || chosenQuestionCart || chosenCommentCart) && !submissionCart && <CartRegistration />}		
			{(chosenComplainCart || chosenQuestionCart || chosenCommentCart) && submissionCart  && <CartSubmissionComplain />}
			{resultCart && <CartResult />}
		</div>
	)
}

export default App
