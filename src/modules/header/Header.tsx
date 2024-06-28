import {WhiteButton, Logo, BlueButton, SharedSpriteSVG} from "@/shared";
import Link from "next/link";

export default function Header () {
  return (
    <header>
      <div className={"container mx-auto py-12 px-[10px] xl:px-20 flex items-center xl:justify-between"}>
        <button className={"block xl:hidden"}><SharedSpriteSVG name={"menu"} /></button>
        <Logo />
        <div className={"hidden xl:flex items-center gap-[50px] font-nunito font-bold text-[24px] text-white"}>
          <div className={"flex gap-[30px]"}>
            <Link href={"/"}>Навчальна програма</Link>
            <Link href={"/"}>Ціни</Link>
            <Link href={"/"}>FAQ</Link>
          </div>
          <div className={"flex items-center gap-[30px]"}>
            <WhiteButton href={"/sign-in"} type={"link"} text={"Увійти"} />
            <BlueButton href={"/sign-up"} type={"link"} text={"Реєстрація"} />
          </div>
        </div>
      </div>
    </header>
  )
}