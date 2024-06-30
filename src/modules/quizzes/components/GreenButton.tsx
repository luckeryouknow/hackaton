import Link from "next/link";
import SpriteSVG from "@/modules/quizzes/components/SpriteSVG";

type Props = {
  href: string,
}

export default function GreenButton ({ href }: Props) {
  return (
    <Link
      className={"block max-w-fit py-[10px] px-5 bg-[#34A853] rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#126227] active:border-b-[0px] transition-all duration-150 [box-shadow:0_5px_0_0_#126227]"}
      href={href}
    >
      <div className={"flex gap-[14px] items-center px-[90px] py-5"}>
        <span className={"text-[28px] text-white"}>Вибрати</span>
        <SpriteSVG name={"arrow"}/>
      </div>
    </Link>
  )
}