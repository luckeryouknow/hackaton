import {SharedSpriteSVG} from "@/shared";

export default function Steps () {
  return (
    <div>
      <div className={"hidden xl:flex w-fit mt-[50px] mx-auto"}>
        <div className={"mr-[-30px] z-[4]"}><SharedSpriteSVG name={"quiz"}/></div>
        <div className={"mr-[-30px] z-[3]"}><SharedSpriteSVG name={"cartoon"}/></div>
        <div className={"mr-[-30px] z-[2]"}><SharedSpriteSVG name={"newWords"}/></div>
        <SharedSpriteSVG name={"pronunciation"}/>
      </div>
      <div className={"flex flex-col gap-4 xl:gap-0 xl:flex-row items-start justify-between max-w-[1190px] mt-[30px] mx-auto text-[14px] xl:text-[20px]"}>
        <div className={"flex flex-col gap-1 w-full xl:max-w-[240px]"}>
          <h3 className={"block xl:hidden font-extrabold"}>Весела вікторина</h3>
          <p>
            SpaceLingo залучає дитину до невеликих розмов, щоб допомогти їй почуватися комфортно.
          </p>
        </div>
        <div className={"flex flex-col gap-1 w-full xl:max-w-[240px]"}>
          <h3 className={"block xl:hidden font-extrabold"}>Дивимось мультик</h3>
          <p
            className={"w-full xl:max-w-[240px]"}>
            SpaceLingo показує нові англійські слова та фрази за допомогою
            цікавих інтерактивних відео, а після дитина повторює їх за допомогою картинок з аудіо.
          </p>
        </div>
        <div className={"flex flex-col gap-1 w-full xl:max-w-[240px]"}>
          <h3 className={"block xl:hidden font-extrabold"}>Вивчаємо нові слова</h3>
          <p className={"w-full xl:max-w-[240px]"}>
            Потім дитина відпрацьовує слово/фразу з SpaceLingo за допомогою
            голосових вправ та розмовних ігор.
          </p>
        </div>
        <div className={"flex flex-col gap-1 w-full xl:max-w-[240px]"}>
          <h3 className={"block xl:hidden font-extrabold"}>Вимовляємо слова</h3>
          <p
            className={"w-full xl:max-w-[240px]"}>
            SpaceLingo пропонує дитині правильно вживати слово чи фразу в
            розмові.
          </p>
        </div>
      </div>
    </div>
  )
}