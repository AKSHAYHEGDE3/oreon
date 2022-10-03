import React,{useState} from 'react'
import "../styles/sideBar.scss"
import { questions } from './Questions'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import Sections from './Sections'
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../redux/reducers/auth'

const SideBar = ({setSave}) => {

    const question = useSelector(state => state.question.currentQuestion)
    const dispatch = useDispatch()

    const handleSave = ()=>{
        setSave(true)
        setTimeout(()=>{
            setSave(false)
        },2000)
    }

    return (
        <div className='sideBar'>
            <div className='left'>
                <div>
                    <ArticleIcon style={{ color: 'white', height: '40px', width: '30px' }} />
                    <ArticleIcon style={{ color: 'white', height: '40px', width: '30px' }} />
                    <ArticleIcon style={{ color: 'white', height: '40px', width: '30px' }} />
                    <LogoutIcon onClick={()=>dispatch(logout())} style={{ color: 'white', height: '40px', width: '30px',cursor:'pointer' }} />
                </div>
                <AccountCircleIcon style={{ color: 'white', height: '40px', width: '30px' }} />
            </div>
            <div className='right'>
                <div className='ques'>
                    {
                        questions.map(que => {
                            return <Sections que={que} question={question} />
                        })
                    }
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2%'
                }}>
                    <Button onClick={handleSave} className='save' variant="outlined">Save as Draft</Button>
                </div>

            </div>
        </div>
    )
}

export default SideBar