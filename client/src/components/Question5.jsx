import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {saveQ5} from '../redux/reducers/question'
import { userRequest } from '../axios'

const Question5 = ({save}) => {

    const q = useSelector(state => state.question)
    const user = useSelector(state => state.auth.currentUser)

    const sendData = async (data) => {
        await userRequest.patch(`/update/${user._id}`, {
            questions: {
                q1: q.Q1,
                q5: data,
                q3: q.Q3,
                q4: q.Q4,
                q2: q.Q2,
            }

        })
    }

    const [data,setData] = useState(q.Q5.data?q.Q5.data:{
        a11: null,
        a12: null,
        a13: null,
        a21: null,
        a22: null,
        a23: null,
        a31: null,
        a32: null,
        a33: null,
        a41: null,
        a42: null,
        a43: null,
    })
    const dispatch = useDispatch()
    

    function setAns(name,value){
        setData({
            ...data,[name]:value
        })
    }

    useEffect(()=>{
        if(save){
            const arr = Object.entries(data)
        let res = false
        for(let i=0;i<arr.length;i++){
            console.log(arr[i][1])
            if(!arr[i][1]){
                // console.log('run')
                res = true;
                break;
            }
        }
        if(!res){
            dispatch(saveQ5({data:data,save:true}))
            sendData({ data: data, save: true })
        }else{
            dispatch(saveQ5({data:data,save:false}))
            sendData({ data: data, save: false })
        }
        }
    },[save])

    console.log(data)

    useEffect(()=>{
        const arr = Object.entries(data)
        let res = false
        for(let i=0;i<arr.length;i++){
            console.log(arr[i][1])
            if(!arr[i][1]){
                // console.log('run')
                res = true;
                break;
            }
        }
        if(!res){
            dispatch(saveQ5({data:data,save:true}))
            sendData({ data: data, save: true })
        }

    },[data])
    

    return (
        <div>
            <div className='question'>
                Does the entity have an anti-corruption or anti-bribery policy?
                If yes, provide details in brief and if available, provide a web-link to the policy.
            </div>
            <table>
                <tr>
                    <th>S. No.</th>
                    <th>Product/Service </th>
                    <th>NIC Code</th>
                    <th>%	of	total	Turnover contributed</th>
                </tr>
                <tr>
                    <th>1 </th>
                    <td><textarea name='a11' value={data.a11} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                    <td><textarea name='a12' value={data.a12} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                    <td><textarea name='a13' value={data.a13} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                </tr>
                <tr>
                    <th>2  </th>
                    <td><textarea name='a21' value={data.a21} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                    <td><textarea name='a22' value={data.a22} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                    <td><textarea name='a23' value={data.a23} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td><textarea name='a31' value={data.a31} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                    <td><textarea name='a32' value={data.a32} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                    <td><textarea name='a33' value={data.a33} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                </tr>
                <tr>
                    <th>4 </th>
                    <td><textarea name='a41' value={data.a41} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                    <td><textarea name='a42' value={data.a42} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                    <td><textarea name='a43' value={data.a43} onChange={(e)=>setAns(e.target.name,e.target.value)} /></td>
                </tr>
            </table>

        </div>
    )
}

export default Question5