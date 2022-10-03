import React,{useState} from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector, useDispatch } from 'react-redux'

const Sections = ({ que, question }) => {

    const [open,setOpen] = useState(false)
    const Ques = useSelector(state=>state.question)

    return (
        <>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-around'
            }}>
                <h3>{`${que.name} (0/${que.ques.length})`}</h3>
                {
                    open ?
                    <KeyboardArrowUpIcon onClick={()=>setOpen(!open)} /> :
                    <KeyboardArrowDownIcon onClick={()=>setOpen(!open)} />
                }
                
            </div>
            
            {
                open ? 
                que.ques.map((q, i) => {
                    return <div style={{
                        borderLeft: question === q.id ? '5px solid orange' : 'none',
                        backgroundColor: Ques[q.qNo].saved ? 'lightgreen' : 'white'
                    }} className='questions'>
                        <div>
                            <div className='QNo'>{i + 1}</div>
                        </div>
                        <p>
                            {q.que}
                        </p>

                    </div>
                }) : ''
            }
        </>
    )
}

export default Sections