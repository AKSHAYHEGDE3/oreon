import React, { useRef } from 'react'
import { Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector, useDispatch } from 'react-redux'
import { setQuestion } from '../redux/reducers/question'

const BottomBar = () => {

    const hiddenFileInput = useRef();
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const question = useSelector(state=>state.question.currentQuestion)
    const dispatch = useDispatch()
    // console.log(question);

    return (
        <div className='bottomBar'>
            <Button onClick={()=>dispatch(setQuestion(question-1))} disabled={question < 2} className='nextBtns' variant="contained"><ArrowBackIosIcon />Previous</Button>
            <Button style={{ border: '1px solid #202d59' }} onClick={handleClick}>
                Attachment
            </Button>
            <input
                type="file"
                // ref={hiddenFileInput}
                // onChange={handleChange}
                style={{ display: 'none' }}
            />

            <Button onClick={()=>dispatch(setQuestion(question+1))} disabled={question > 4} className='nextBtns' variant="contained">Next<ArrowForwardIosIcon /></Button>
        </div >
    )
}

export default BottomBar