import { useState } from "react";
import { useRouter } from "next/router";
import Joi from "joi-browser";
import Link from "next/link";
import ButtonLightLg from "@/components/common/buttonLightLg";
import Input from "@/components/common/input";
import auth from "@/services/authService";

const SignIn = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const location = useRouter();

  const schema = {
    name: Joi.string().min(2).required().label("name"),
    email: Joi.string().email().min(5).required().label("email"),
    password: Joi.string().min(6).required().label("password"),
    repeat_password: Joi.ref("password"),
  };

  const handleChange = ({ currentTarget: input }) => {
    const error = { ...errors };
    const errorMessage = validateOnChange(input);

    if (errorMessage) {
      error[input.name] = errorMessage;
    } else {
      delete error[input.name];
    }

    const data = { ...user };
    data[input.name] = input.value;
    setUser(data);
    setErrors(error);
  };

  const validateOnChange = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaValidate = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaValidate);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(user, schema, options);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item[path[0]]] = item.message;
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = user;
      const { data: jwt } = await auth.login(data.email, data.password);
      localStorage.setItem("token", jwt);
      location.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...errors };
        error.email = ex.response.data;
        setErrors(error);
      }
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-slate-300 ">
      <div className="w-[18rem] md:w-[25rem] flex flex-col justify-center items-center p-8 ring-slate-300 ring-2 shadow-sm shadow-black  rounded-xl gap-4 bg-gradient-to-r to-zinc-900 from-black">
        <h1 className="font-bold text-3xl">Sign In</h1>
        <span className="text-sm">Sign up and mint NFTs using Testnet</span>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            errors={errors.email}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />

          <div className="ml-2 md:w-[17rem] w-11/12 text-start text-[0.7rem] md:text-[0.8rem] text-red-600">
            Holy Fuck
          </div>

          <ButtonLightLg label="Log In" />
          <span className="text-[0.8rem]">
            Don't have an account?{" "}
            <Link
              className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500"
              href="/sign-up"
            >
              Sign up here
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
