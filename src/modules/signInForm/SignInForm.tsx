"use client"

import {BlueButton} from "@/shared";
import Link from "next/link";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function SignInForm () {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[a-zA-Z]/, 'Password must contain Latin letters')
        .matches(/[0-9]/, 'Password must contain numbers')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain special characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      await axios.post("http://127.0.0.1:8001/user/sign_in", {
        email: values.email,
        password: values.password,
      })
    }
  })

  return (
    <section>
      <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[30px] w-[690px] p-10 rounded-[30px] bg-white"}>
        <h2 className={"font-extrabold text-center text-[30px]"}>Увійти в аккаунт</h2>
        <form className={"flex flex-col gap-4"} onSubmit={formik.handleSubmit}>
          <div className={"flex flex-col gap-[10px]"}>
            <label
              className={"text-[20px] text-[#73738D] font-extrabold"}
              htmlFor={"email"}
            >
              Електронна пошта
            </label>
            <input
              className={"py-4 px-3 border-2 border-[#B0B0D3] rounded-[20px] outline-none text-black font-extrabold text-[20px]"}
              id={"email"}
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className={"flex flex-col gap-[10px]"}>
            <label
              className={"text-[20px] text-[#73738D] font-extrabold"}
              htmlFor={"password"}
            >
              Пароль
            </label>
            <input
              className={"py-4 px-3 border-2 border-[#B0B0D3] rounded-[20px] outline-none text-black font-extrabold text-[20px]"}
              id={"password"}
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <BlueButton containerStyles={"!w-[610px]"} type={"submit"} text={"Увійти в акаунт"} />
        </form>

        <Link className={"w-fit mx-auto text-center text-[18px] underline text-[#28248E] font-bold"} href={"/sign-up"}>Я не маю акаунту</Link>
      </div>
    </section>
  )
}