import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import leftCircle from '../assets/Ellipse 1.svg';
import rightCircle from '../assets/Subtract.svg';

const variants = {
    hidden: { y: -10, opacity: 0.5 },
    visible: { y: 0, opacity: 1 }
};

function Register() {
    const [informations, setInformations] = useState({
        name: '',
        email: '',
        phone: '',
        nationality: '',
        date_of_birth: '',
        gender: '',
        password: '',
        password_confirmation: ''
    });

    const [errors, setErrors] = useState({});
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
        setLoading(true);
        setErrors({});

        try {
            const response = await axios.post('http://localhost:8000/api/v1/register', informations, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                navigate('/login');
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: 'An error occurred. Please try again.' });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <img src={leftCircle} alt="" className="fixed left-0 " />
            <img src={rightCircle} alt="" className="fixed right-0 top-0 " />
            <form className='flex flex-col items-center justify-center w-1/3' onSubmit={handleSubmit}>
                <motion.p
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className='mb-10 text-2xl'>Create your Account
                </motion.p>

                {[
                    { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
                    { label: "Email", name: "email", type: "email", placeholder: "example@email.com" },
                    { label: "Phone", name: "phone", type: "tel", placeholder: "+212" },
                    { label: "Nationality", name: "nationality", type: "text", placeholder: "Your Nationality" },
                    { label: "Birthday", name: "date_of_birth", type: "date", placeholder: "Your Birthday" }
                ].map((field, index) => (
                    <div className='flex flex-col justify-center mb-4 w-full' key={index}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type}
                            className={`border border-[#D1D1D1] text-sm px-1 py-2 w-full rounded outline-none ${errors[field.name] ? 'border-red-500' : ''}`}
                            placeholder={field.placeholder}
                            name={field.name}
                            value={informations[field.name]}
                            onChange={handleChange}
                        />
                        {errors[field.name] && <p className="text-red-500 text-xs">{errors[field.name]}</p>}
                    </div>
                ))}

                <div className='flex flex-col justify-center mb-4 w-full'>
                    <label htmlFor="gender">Gender</label>
                    <select
                        className={`border border-[#D1D1D1] text-sm px-1 py-2 w-full rounded outline-none ${errors.gender ? 'border-red-500' : ''}`}
                        name="gender"
                        value={informations.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                </div>

                {[
                    { label: "Password", name: "password", type: "password", placeholder: "**********" },
                    { label: "Confirm Password", name: "password_confirmation", type: "password", placeholder: "**********" }
                ].map((field, index) => (
                    <div className='flex flex-col justify-center mb-4 w-full' key={index}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type}
                            className={`border border-[#D1D1D1] text-sm px-1 py-2 w-full rounded outline-none ${errors[field.name] ? 'border-red-500' : ''}`}
                            placeholder={field.placeholder}
                            name={field.name}
                            value={informations[field.name]}
                            onChange={handleChange}
                        />
                        {errors[field.name] && <p className="text-red-500 text-xs">{errors[field.name]}</p>}
                    </div>
                ))}

                {errors.general && <p className="text-red-500 text-sm mb-2">{errors.general}</p>}

                <button className='bg-black w-full py-3 rounded text-white cursor-pointer' disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
                <p className='mt-4 text-sm'>Already have an account? <a href='/login' className='text-blue-500'>Login</a></p>
            </form>
        </div>
    );
}

export default Register;
