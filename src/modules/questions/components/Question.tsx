"use client"

import SpriteSVG from "@/modules/questions/components/SpriteSVG";
import {ReactNode, useState} from "react";

type Props = {
  questionText: string,
  questionAnswer: ReactNode,
}

export default function Question ({ questionText, questionAnswer }: Props) {
  const [displayAnswer, setDisplayAnswer] = useState(false)

  return (
    <div className={"w-full"}>
      <button
        onClick={() => setDisplayAnswer(!displayAnswer)}
        className={"flex items-center justify-between w-full py-[30px] px-5 border-y-[1px]"}>
        <p className={"text-[14px] xl:text-[24px] text-left xl:text-center font-extrabold"}>{questionText}</p>
        <div className={`${displayAnswer ? "rotate-0" : "rotate-180"} transition ease-linear`}><SpriteSVG name={"arrow"} /></div>
      </button>
      {displayAnswer && (
        <div className={"text-[16px] xl:text-[20px] p-[30px] animate-questionAnswerAnimation"}>
          {questionAnswer}
        </div>
      )}
    </div>
  )
}