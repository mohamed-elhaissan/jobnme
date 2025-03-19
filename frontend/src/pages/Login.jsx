import loginSvg from '../assets/loginSvg.svg';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const varaints = {
    hidden: {
        y: -10,
        opacity: .5,

    },
    visible: {
        y: 0,
        opacity: 1,

    }
}
function Login() {
    const [informations, setInformations] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInformations({
            ...informations,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!informations.email || !informations.password) {
            setError('Please fill all fields');
            return;
        }
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/v1/login', informations, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                console.log(response.data);
                navigate('/home');
            } else {
                setError(response.data.message || 'Invalid credentials');
            }

        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex h-[100vh]  items-center justify-center ">
            <img src={loginSvg} className='fixed -left-120 top-0 -z-10 opacity-90' />
            <form className='flex flex-col items-center justify-center w-1/4  ' method='POST' onSubmit={handleSubmit}>
                <motion.p
                    variants={varaints}
                    initial="hidden"
                    animate="visible"
                    // transition={{
                    //     duration: 500,
                    //     delay: 500,
                    //
                    // }}
                    className='mb-10 text-2xl'>Welcome Back !
                </motion.p>
                <div className='flex flex-col  justify-center mb-4 w-full'>
                    <label htmlFor='email'>Email</label>
                    <input type="email"
                        className='border border-[#D1D1D1] text-sm px-1 py-2 w-full  rounded outline-none'
                        placeholder="exemplo@email.com"
                        name='email'
                        value={informations.email}
                        onChange={handleChange} />
                </div>
                <div className='flex flex-col  justify-center mb-4 w-full'>
                    <label htmlFor='password'>Password</label>
                    <input type="password"
                        className='border border-[#D1D1D1]  px-1 py-2 w-full  rounded outline-none mt-1'
                        placeholder="**********"
                        name='password'
                        value={informations.password}
                        onChange={handleChange} />
                </div>

                {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}

                <button className='bg-black w-full py-3 rounded text-white cursor-pointer' disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
                <p className='mt-4 text-sm'>Forgot Password? <a href='/forgot-password' className='text-blue-500'>Click here</a></p>
                <p className='mt-4 text-sm'>Don't have an account? <a href='/register' className='text-blue-500'>Register</a></p>
            </form>
        </div>
    )
}

export default Login;