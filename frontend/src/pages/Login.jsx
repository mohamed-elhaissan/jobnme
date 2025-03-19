import loginSvg from '../assets/loginSvg.svg';
import {motion} from "motion/react"

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
export default function Login() {
    return (
        <div className="flex h-[100vh]  items-center justify-center ">
            <img src={loginSvg} className='fixed -left-120 top-0 -z-10 opacity-90'/>
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
                           placeholder="exemplo@email.com"/>
                </div>
                <div className='flex flex-col  justify-center mb-4 w-full'>
                    <label htmlFor='password'>Password</label>
                    <input type="password"
                           className='border border-[#D1D1D1]  px-1 py-2 w-full  rounded outline-none mt-1'
                           placeholder="**********"/>
                </div>

                <button className='bg-black w-full py-3 rounded text-white cursor-pointer'>Login</button>
            </form>
        </div>
    )
}