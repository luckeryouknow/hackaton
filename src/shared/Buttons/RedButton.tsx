import Link from "next/link";

type Props = {
  type: "link" | "submit",
  href?: string,
  text: string,
  containerStyles?: string,
  spanStyles?: string,
}

export default function RedButton ({ type, href, text, containerStyles, spanStyles }: Props) {
  if (type === "link") {
    return (
      <Link href={href!} className={`block max-w-fit py-[20px] px-[30px] bg-[#CE1384] rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#52094E] active:border-b-[0px] transition-all duration-150 [box-shadow:0_5px_0_0_#52094E] ${containerStyles}`}>
        <span className={`flex flex-col justify-center items-center h-full text-white font-nunito font-extrabold text-[16px] xl:text-[30px] ${spanStyles}`}>{text}</span>
      </Link>
    )
  } else {
    return (
      <button
        className={"w-fit py-[10px] px-5 bg-white rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#B0B0D3] active:border-b-[0px] transition-all duration-150 [box-shadow:0_5px_0_0_#B0B0D3]"}>
        <span
          className={"flex flex-col justify-center items-center h-full text-[#28248E] font-nunito font-extrabold text-[20px]"}>{text}</span>
      </button>
    )
  }
}