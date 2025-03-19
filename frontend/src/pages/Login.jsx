<<<<<<< HEAD
import loginSvg from "../assets/loginSvg.svg";
import { motion } from "motion/react";
import { request } from "../utils/apiUtils";
import { useState } from "react";
import Alert from "../Components/Alert";
import leftCircle from "../assets/Ellipse 1.svg";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlashSolid } from "react-icons/lia";

import { Link } from "react-router-dom";

import rightCircle from "../assets/Subtract.svg";

const varaints = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Login() {
  const [email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [showPasswordEyes, setShowPasswordEyes] = useState(false);

  // functions

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      setEmailError(" Email is Required");
      setPasswordError(" password is Required");
    }
  };

    return (
        <div className="flex h-[100vh]  items-center justify-center ">
            <img src={loginSvg} className='fixed -left-100 top-0 -z-10 opacity-90'/>
            <form className='flex flex-col items-center justify-center w-1/4    '>
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
