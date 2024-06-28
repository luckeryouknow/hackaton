import Image from "next/image";
import {RedButton} from "@/shared";

export default function Hero () {
  return (
    <section>
      <div className={"relative max-w-[1440px] mx-auto px-5 xl:px-20 mt-20"}>
        <div className={"flex flex-col gap-[30px] max-w-[600px] font-extrabold"}>
          <h2 className={"text-[24px] xl:text-[48px]"}>
            Віртуальний помічник з вивчення англійської мови для вашої дитини!
          </h2>
          <p className={"text-[16px] xl:text-[24px]"}>
            Це не просто платформа для вивчення мови, а справжня пригода, яка перетворить навчання англійської мови на
            веселий та захопливий процес.
          </p>
          <RedButton type={"link"} href={"/"} text={"Спробувати безкоштовно"} />
        </div>
        <Image
          className={"absolute top-[-300px] right-0 xl:top-[-300px] xl:right-[-39px] z-[-1]"}
          src={"/hero/dogSpace.png"}
          width={1000}
          height={830}
          alt={"Dog in space"}
        />
      </div>
    </section>
  )
}