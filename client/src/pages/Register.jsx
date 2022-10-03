import React, { useState } from 'react'
import '../styles/auth.scss'
import {
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    TextField,
    IconButton
}
    from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { publicRequest } from '../axios';
import { setUser } from '../redux/reducers/auth';
import { useDispatch } from 'react-redux'
import { useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

const Register = () => {

    const [checked, setChecked] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    let navigate = useNavigate();


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
        try {
            const res = await publicRequest.post('/register', {email,password})
            console.log(res.data)
            dispatch(setUser(res.data))
            if(checked){
                localStorage.setItem("token", res.data.accessToken)
            }
            setError('')
            navigate("/");
        } catch (err) {
            setError(err.response.data)
        }
    }


    return (
        <div>
            <div className='authForm'>
                <h2>Register</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField
                        name="email"
                        type="email"
                        label="Email"
                        required
                        className='inpts'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <TextField
                        name="password"
                        type="password"
                        label="Password"
                        required
                        className='inpts'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {<VisibilityIcon />}
                                </InputAdornment>
                            ),
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChange} />}
                        label="Remember me"
                    /><br />
                    <p>Already have an Account?<Link to='/login'><span style={{
                        textDecoration:'underline',marginLeft:'2%'
                    }}>Signup</span></Link></p>
                    <Button className='btn' type='submit' variant="contained">Register</Button>
                </form>
            </div>
            <p>{error}</p>
        </div>
    )
}

export default Register