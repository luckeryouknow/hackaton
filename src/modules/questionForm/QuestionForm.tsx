import Image from "next/image";
import {BlueButton} from "@/shared";

export default function QuestionForm () {
  return (
    <section className={"py-[54px]"}>
      <div className={"container mx-auto px-5 xl:px-0"}>
        <div className={"relative overflow-hidden flex flex-col gap-[50px] max-w-[1330px] mx-auto pt-[50px] px-5 xl:pb-[20px] xl:pl-[36px] xl:pr-[86px] rounded-[30px] bg-[#28248E] text-white"}>
          <h2 className={"text-[30px] xl:text-[48px] text-center font-extrabold"}>Є питання? Напиши нам</h2>

          <div className={"flex flex-col-reverse xl:flex-row justify-between"}>
            <Image className={"mb-[-20px]"} src={"/questionForm/dog.png"} alt={"Dog on the Moon"} width={584} height={664}/>

            <form className={"flex flex-col gap-6 max-w-[560px] w-full mb-5 xl:mb-0"}>
              <div className={"flex flex-col gap-4 text-[20px] font-extrabold"}>
                <label htmlFor={"name"}>Ім&apos;я</label>
                <input className={"py-4 px-3 border-2 border-[#B0B0D3] rounded-[20px] outline-none text-[#28248E]"}
                       id={"name"} type="text"/>
              </div>
              <div className={"flex flex-col gap-4 text-[20px] font-extrabold"}>
                <label htmlFor={"email"}>Електронна пошта</label>
                <input className={"py-4 px-3 border-2 border-[#B0B0D3] rounded-[20px] outline-none text-[#28248E]"}
                       id={"email"} type="text"/>
              </div>
              <div className={"flex flex-col gap-4 text-[20px] font-extrabold"}>
                <label htmlFor={"message"}>Текст повідомлення</label>
                <textarea className={"py-4 px-3 border-2 border-[#B0B0D3] rounded-[20px] outline-none text-[#28248E]"}
                       id={"message"} />
              </div>

              <div className={"w-fit ml-auto"}><BlueButton type={"submit"} text={"Надіслати"} /></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}