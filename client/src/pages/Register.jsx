import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        img: null,
        joined: Date.now
    });

    const [err, setErr] = useState(null);

    const handleChange = e => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        await axios.post('/api/auth/register', user)
            .then(navigate('/login'))
            .catch(err => {
                if(err){
                    setErr(err.response.data);
                }
            });
    }

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input type='text' placeholder='first name' name='name' onChange={handleChange}/>
                <input type='text' placeholder='last name' name='surname' onChange={handleChange}/>
                <input type='email' placeholder='email' name='email' onChange={handleChange}/>
                <input type='password' placeholder='password' name='password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register;