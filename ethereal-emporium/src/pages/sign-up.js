import { useState } from "react";
import { Joi } from "joi";
import Link from "next/link";
import ButtonLightLg from "@/components/common/buttonLightLg";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});

  const schema = Joi.Object({
    email: Joi.string().email().min(5).required(),
    password: Joi.string().min(6).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repeat_password: Joi.ref("password"),
  });

  const handleChange = ({ data }) => {
    setData(setUser[data]);
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-slate-300 ">
      <div className="w-[18rem] md:w-[25rem] flex flex-col justify-center items-center p-8 ring-slate-300 ring-2 shadow-sm shadow-black  rounded-xl gap-4 bg-gradient-to-r to-zinc-900 from-black">
        <h1 className="font-bold text-3xl">Sign Up</h1>
        <span className="text-sm">Sign up and mint NFTs using Testnet</span>

        <div className="flex flex-col items-center justify-center gap-4">
          <input
            className="p-2 w-[15rem] md:w-[20rem] focus:outline-none bg-inherit border-b border-slate-300"
            type="email"
            placeholder="Email address"
            name={user.email}
            onChange={handleChange}
          />

          <input
            className="p-2 w-[15rem] md:w-[20rem] focus:outline-none bg-inherit border-b border-slate-300"
            type="password"
            placeholder="Password"
            name={user.password}
            onChange={handleChange}
          />
          <ButtonLightLg label="Sign Up" />

          <span className="text-[0.8rem]">
            Already have an account?{" "}
            <Link
              className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500"
              href="/login"
            >
              Sign in here
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
