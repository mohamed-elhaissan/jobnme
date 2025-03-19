import loginSvg from '../assets/loginSvg.svg';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const variants = {
    hidden: {
        y: -10,
        opacity: 0.5,
    },
    visible: {
        y: 0,
        opacity: 1,
    }
};

function Register() {
    const [informations, setInformations] = useState({
        name: '',
        email: '',
        phone: '',
        nationality: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInformations({
            ...informations,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!informations.name || !informations.email || !informations.password) {
            setError('Please fill all fields');
            return;
        }
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/v1/register', informations, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                console.log(response.data);
                navigate('/login');
            } else {
                setError(response.data.message || 'Registration failed');
            }
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-[100vh] items-center justify-center">
            <img src={loginSvg} className='fixed -left-120 top-0 -z-10 opacity-90' />
            <form className='flex flex-col items-center justify-center w-1/4' method='POST' onSubmit={handleSubmit}>
                <motion.p
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className='mb-10 text-2xl'>Create an Account!
                </motion.p>
                <div className='flex flex-col justify-center mb-4 w-full'>
                    <label htmlFor='name'>Name</label>
                    <input type="text"
                        className='border border-[#D1D1D1] text-sm px-1 py-2 w-full rounded outline-none'
                        placeholder="Your Name"
                        name='name'
                        value={informations.name}
                        onChange={handleChange} />
                </div>
                <div className='flex flex-col justify-center mb-4 w-full'>
                    <label htmlFor='email'>Email</label>
                    <input type="email"
                        className='border border-[#D1D1D1] text-sm px-1 py-2 w-full rounded outline-none'
                        placeholder="example@email.com"
                        name='email'
                        value={informations.email}
                        onChange={handleChange} />
                </div>
                <div className='flex flex-col justify-center mb-4 w-full'>
                    <label htmlFor='phone'>Phone</label>
                    <input type="phone"
                        className='border border-[#D1D1D1] text-sm px-1 py-2 w-full rounded outline-none'
                        placeholder="+212"
                        name='phone'
                        value={informations.phone}
                        onChange={handleChange} />
                </div>
                <div className='flex flex-col justify-center mb-4 w-full'>
                    <label htmlFor='password'>Password</label>
                    <input type="password"
                        className='border border-[#D1D1D1] px-1 py-2 w-full rounded outline-none mt-1'
                        placeholder="**********"
                        name='password'
                        value={informations.password}
                        onChange={handleChange} />
                </div>

                {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}

                <button className='bg-black w-full py-3 rounded text-white cursor-pointer' disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
                <p className='mt-4 text-sm'>Already have an account? <a href='/login' className='text-blue-500'>Login</a></p>
            </form>
        </div>
    );
}

export default Register;
