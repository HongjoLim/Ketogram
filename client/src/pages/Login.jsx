import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div clasName='auth'>
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='username'/>
                <input type='password' placeholder='password'/>
                <button>Sign In</button>
                <p>Problem signing you in</p>
                <span>Not registered yet? <Link to='/register'>Register</Link></span>
            </form>
        </div>
    )
}

export default Login;