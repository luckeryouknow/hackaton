import {BlueButton} from "@/shared";
import Image from "next/image";

export default function Cards () {
  return (
    <div className={"flex flex-col xl:flex-row gap-8 w-fit mx-auto mt-[50px]"}>
      <div className={"flex flex-col gap-5 p-[30px] bg-[#E1E0FF] rounded-[30px]"}>
        <div className={"flex flex-col gap-3"}>
          <h3 className={"text-[30px] font-extrabold"}>1 місяць </h3>
          <p className={"text-[20px] font-extrabold"}>$12,49, 30 днів пробна версія</p>
        </div>
        <BlueButton
          type={"link"}
          href={"/"}
          text={"1 місяць БЕЗКОШТОВНО"}
          containerStyles={"!p-5 xl:!min-w-[362px]"}
          sectionStyles={"!text-[18px]"}
        />
      </div>
      <div className={"relative flex flex-col gap-5 p-[30px] bg-[#E1E0FF] rounded-[30px]"}>
        <div className={"flex flex-col gap-3"}>
          <h3 className={"text-[30px] font-extrabold"}>1 рік</h3>
          <p className={"text-[20px] font-extrabold"}>
            $ 49,99 <span className={"text-[#676E81]"}>($ 4,16 намісяць)</span>
          </p>
        </div>
        <p className={"absolute top-[6px] right-[30px] w-fit px-[10px] py-[4px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[2px] rounded-tr-[2px] bg-[#DE0A7C] text-[16px] text-white font-semibold"}>
          Найкраща пропозиція
        </p>
        <BlueButton
          type={"link"}
          href={"/"}
          text={"Купити зараз 49,99"}
          containerStyles={"!p-5 xl:!min-w-[362px]"}
          sectionStyles={"!text-[18px]"}
        />
      </div>
      <div className={"relative flex flex-col gap-5 p-[30px] bg-[#28248E] rounded-[30px] text-white"}>
        <Image className={"absolute w-[100px] xl:w-[150px] top-[-18px] right-[-18px] xl:top-[-46px] xl:right-[-46px]"} src={"/subscriptions/dog.png"} alt={"Dog"} width={150} height={150} />
        <div className={"flex flex-col gap-3"}>
          <h3 className={"text-[30px] font-extrabold"}>6 місяців</h3>
          <p className={"text-[20px] font-extrabold"}>
            $ 29,99 <span className={"text-[#676E81]"}>($ 4,99 на місяць)</span>
          </p>
        </div>
        <BlueButton
          type={"link"}
          href={"/"}
          text={"Купити зараз 29,99"}
          containerStyles={"!p-5 xl:!min-w-[362px]"}
          sectionStyles={"!text-[18px]"}
        />
      </div>
    </div>
  )
}