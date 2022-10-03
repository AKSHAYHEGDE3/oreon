import React from 'react'
import '../styles/home.scss'
import BottomBar from './BottomBar'
import Question1 from './Question1'
import Question2 from './Question2'
import Question5 from './Question5'
import Question4 from './Question4'
import Question3 from './Question3'
import { useSelector, useDispatch } from 'react-redux'

const MainPg = ({save}) => {

    const question = useSelector(state=>state.question.currentQuestion)
    function renderQuestion(){
        if(question===1){
            return <Question1 save={save} />
        } else if(question===2){
            return <Question2 save={save} />
        } else if(question===3){
            return <Question3 save={save} />
        } else if(question===4){
            return <Question4 save={save} />
        } else {
            return <Question5 save={save} />
        }
    }


    return (
        <div className='mainPg'>
            <div className='questionBox'>
               {renderQuestion()}
            </div>
            <BottomBar />
        </div>
    )
}

export default MainPg