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
      <img src={leftCircle} alt="" className="fixed left-0 " />
      <img src={rightCircle} alt="" className="fixed right-0 top-0 " />
      <form
        className="flex flex-col items-center justify-center w-1/4"
        onSubmit={handleSubmit}
      >
        <motion.p
          variants={varaints}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0,
            ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
          }}
          className="mb-10 text-2xl"
        >
          Welcome Back !
        </motion.p>
        <div className="flex flex-col  justify-center w-full">
          <motion.label
            variants={varaints}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
            }}
            htmlFor="email"
          >
            Email
          </motion.label>
          <motion.input
            style={{
              borderColor: !EmailError == "" ? "#F87171" : "#000",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value != 0) {
                setEmailError("");
              }
            }}
            type="email"
            variants={varaints}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
            }}
            className="border   text-sm px-1 py-2 w-full  rounded outline-none"
            placeholder="exemplo@email.com"
          />
        </div>

        {EmailError && (
          <div className="w-full   mb-5">
            <motion.p
              initial={{
                opacity: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ease: "easeInOut", // Smooth cubic bezier easing
              }}
              className="text-xs text-red-500"
            >
              {EmailError}
            </motion.p>
          </div>
        )}
        <div className="flex flex-col relative   justify-center w-full">
          <motion.label
            variants={varaints}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
            }}
            htmlFor="password"
          >
            Password
          </motion.label>
          {showPasswordEyes ? (
            <LiaEyeSolid
              className="absolute right-3 bottom-3 cursor-pointer text-xl "
              onClick={() => setShowPasswordEyes(!showPasswordEyes)}
            />
          ) : (
            <motion.div
              variants={varaints}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
              }}
              className="absolute right-3 bottom-3 cursor-pointer text-xl "
            >
              <LiaEyeSlashSolid
                onClick={() => setShowPasswordEyes(!showPasswordEyes)}
              />
            </motion.div>
          )}

          <motion.input
            style={{
              borderColor: EmailError == "" ? "#000" : "#F87171",
            }}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value != 0) {
                setPasswordError("");
              }
            }}
            variants={varaints}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
            }}
            type={!showPasswordEyes ? "password" : "text"}
            className="border border-black  px-1 py-2 w-full   rounded outline-none mt-1"
            placeholder="**********"
          />
        </div>
        {passwordError && (
          <div className="w-full  mb-5">
            <motion.p
              initial={{
                opacity: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ease: "easeInOut", // Smooth cubic bezier easing
              }}
              className="text-xs text-red-500"
            >
              {passwordError}
            </motion.p>
          </div>
        )}
        <motion.div
          variants={varaints}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
          }}
          className="w-full mb-5"
        >
          <Link
            to="/fogetPassword"
            className="mb-2 text-sm text-slate-500 hover:text-black text-left"
          >
            Forget Password ?
          </Link>
        </motion.div>
        <motion.button
          variants={varaints}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
          }}
          className="rounded w-full border-2   cursor-pointer     border-black bg-white px-6 py-3 font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]  hover:shadow-[4px_4px_0px_#1ED660] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        >
          Login
        </motion.button>
        <Link to={"register"}></Link>
      </form>
    </div>
  );
}
