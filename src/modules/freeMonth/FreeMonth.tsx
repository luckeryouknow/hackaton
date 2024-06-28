import Image from "next/image";
import {WhiteButton} from "@/shared";

export default function FreeMonth () {
  return (
    <section className={"pt-[150px] xl:pt-[92px]"}>
      <div className={"container mx-auto px-5 xl:px-0"}>
        <div className={"relative w-full xl:w-[1110px] mx-auto xl:py-[52px] px-3 xl:px-[116px] bg-[#28248E] rounded-[30px]"}>
          <Image className={"absolute w-[220px] xl:w-[400px] top-[-150px] left-1/2 -translate-x-1/2 xl:left-[200px]"} src={"/freeMonth/dog.png"} alt={"Dog"} width={400} height={308} />
          <div className={"flex flex-col items-center gap-5 max-w-[466px] ml-auto pb-6 xl:pb-0"}>
            <h2 className={"mt-[84px] xl:mt-0 font-extrabold text-[18px] xl:text-[32px] text-center text-white"}>
              Отримайте місяць необмеженого навчання
            </h2>
            <WhiteButton
              type={"link"}
              href={"/"}
              text={"Спробувати безкоштовно"}
              containerStyles={"!py-[16px] !px-[30px]"}
              spanStyles={"xl:!text-[30px]"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}