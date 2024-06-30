import Image from "next/image";
import GreenButton from "@/modules/quizzes/components/GreenButton";

type Props = {
  active: true | false,
  cardName: string,
  cardImage: string,
  planetImage: string,
  href: string,
}

export default function Card ({ active, cardName, cardImage, planetImage, href }: Props) {
  if (active) {
    return (
      <div className={"w-fit mx-auto"}>
        <div
          className={"flex flex-col items-center gap-[26px] py-12 px-[42px] w-fit bg-white rounded-[30px] border-[8px] border-[#34A853]"}>
          <h2 className={"text-center font-extrabold text-[34px]"}>{cardName}</h2>
          <Image src={cardImage} alt={cardName} width={318} height={276} />
          <GreenButton href={href} />
        </div>
      </div>
    )
  } else {

  }
}