import Link from "next/link";

type Props = {
  type: "link" | "submit",
  href?: string,
  text: string,
  containerStyles?: string,
  sectionStyles?: string,
}

export default function BlueButton ({ type, href, text, containerStyles, sectionStyles }: Props) {
  if (type === "link") {
    return (
      <Link href={href!} className={`block max-w-fit py-[10px] px-5 bg-[#577EDE] rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#2E57D7] active:border-b-[0px] transition-all duration-150 [box-shadow:0_5px_0_0_#2E57D7] ${containerStyles}`}>
        <span className={`flex flex-col justify-center items-center h-full text-white font-nunito font-extrabold text-[20px] ${sectionStyles}`}>{text}</span>
      </Link>
    )
  } else {
    return (
      <button
        type={"submit"}
        className={`w-fit py-[10px] px-5 bg-[#577EDE] rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#2E57D7] active:border-b-[0px] transition-all duration-150 [box-shadow:0_5px_0_0_#2E57D7] ${containerStyles}`}>
        <span
          className={`flex flex-col justify-center items-center h-full text-white font-nunito font-extrabold text-[24px] ${sectionStyles}`}>{text}</span>
      </button>
    )
  }
}