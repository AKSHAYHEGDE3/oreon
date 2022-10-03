import React,{useState} from 'react'
import SideBar from '../components/SideBar'
import MainPg from '../components/MainPg'

const Home = () => {

    const [details,setDetails] = useState({
        q1:null,
        q2:null,
        q3:null,
        q4:null,
        q5:null
    })
    const [save,setSave]=useState(false)

    return (
        <div style={{
            display: 'flex',
            maxHeight: '100vh',
            overflow: 'hidden'
        }}>
            <div style={{ width: '35%' }}>
                <SideBar setSave={setSave} />
            </div>
            <MainPg save={save} />

        </div>
    )
}

export default Home