import React, { useState } from 'react'
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveQ1 } from '../redux/reducers/question'
import { userRequest } from '../axios'

const Question1 = ({ save }) => {

   
    const dispatch = useDispatch()
    const q = useSelector(state => state.question)
    const user = useSelector(state => state.auth.currentUser)
    const [q1, setQ1] = useState(q.Q1.data?q.Q1.data.q1:null)
    const [q2, setQ2] = useState(q.Q1.data?q.Q1.data.q2:null)

    const sendData = async (data) => {
        await userRequest.patch(`/update/${user._id}`, {
            questions: {
                q1: data,
                q2: q.Q2,
                q3: q.Q3,
                q4: q.Q4,
                q5: q.Q5,
            }

        })
    }

    useEffect(() => {
        if (q1 && (q1 === 'no' || (q1 === 'yes' && q2))) {
            dispatch(saveQ1({ data: { q1, q2 }, save: true }))
            sendData({ data: { q1, q2 }, save: true })
        }

    }, [q1, q2])


    useEffect(() => {
        if (save) {
            if (q1 && (q1 === 'no' || (q1 === 'yes' && q2))) {
                dispatch(saveQ1({ data: { q1, q2 }, save: true }))
                sendData({ data: { q1, q2 }, save: true })
            } else {
                dispatch(saveQ1({ data: { q1, q2 }, save: false }))
                sendData({ data: { q1, q2 }, save: false })
            }
        }

    }, [save])

    console.log(q);

    return (
        <div>
            <div className='question'>
                Does the entity have an anti-corruption or anti-bribery policy?
                If yes, provide details in brief and if available, provide a web-link to the policy.
            </div>
            <p>Does the entity have an anti-corruption or anti-bribery policy?</p>
            <FormControl style={{ width: '100%' }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    <MenuItem value={'yes'}>Yes</MenuItem>
                    <MenuItem value={'no'}>No</MenuItem>
                </Select>
            </FormControl>
            <div style={q1 === 'yes' ? {} : { display: 'none' }}>
                <p>Does the entity have an anti-corruption or anti-bribery policy?</p>
                <textarea value={q2} onChange={(e) => setQ2(e.target.value)} />
            </div>

        </div>
    )
}

export default Question1