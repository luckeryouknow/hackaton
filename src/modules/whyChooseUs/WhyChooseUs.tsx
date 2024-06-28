import Image from "next/image";

export default function WhyChooseUs() {
  const prosLeft = [
    {
      heading: "Ігри та заняття",
      text: "SpaceLingo мотивують дітей продовжувати вчитися.",
      image: "/whyChooseUs/pinkPlanet.png",
    },
    {
      heading: "Вивчення слів, Вимова, Розуміння на слух",
      text: "Навчальна програма SpaceLingo допомагає дітям оволодіти трьома основними елементами вивчення мови",
      image: "/whyChooseUs/yellowPlanet.png",
    }
  ]

  const prosRight = [
    {
      heading: "Голосова взаємодія",
      text: "SpaceLingo чує та відповідає за допомогою найновішої технології розпізнавання голосу ",
      image: "/whyChooseUs/bluePlanet.png",
    },
    {
      heading: "Необмежений доступ",
      text: "SpaceLingo доступний у будь-який час, коли діти хочуть вчитися без клопоту та витрат на планування занять.",
      image: "/whyChooseUs/redPlanet.png",
    }
  ]

  return (
    <section className={"pt-[70px] xl:pt-[300px]"}>
      <div className={"container px-5 xl:px-0 mx-auto"}>
        <h2 className={"text-center font-extrabold text-[24px] xl:text-[48px]"}>Чому батьки обирають SpaceLingo?</h2>

        <div className={"flex flex-col xl:flex-row xl:justify-between xl:mt-[100px]"}>
          <div className={"flex flex-col gap-5 xl:gap-[220px] mt-[94px]"}>
            {prosLeft.map(item => (
              <div className={"flex flex-row-reverse xl:flex-row items-start gap-[30px]"} key={item.heading}>
                <div className={"flex flex-col gap-[10px] max-w-[360px] text-left xl:text-right"}>
                  <h2 className={"text-[18px] xl:text-[24px] font-extrabold"}>{item.heading}</h2>
                  <p className={"text-[16px] xl:text-[20px]"}>{item.text}</p>
                </div>
                <Image className={"w-[40px] h-[40px] xl:w-[88px] xl:h-[88px]"} width={40} height={40} src={item.image} alt={item.heading}/>
              </div>
            ))}
          </div>
          <Image className={"hidden xl:block"} src={"/whyChooseUs/rocket.png"} alt={"Rocket"} width={172} height={770}/>
          <div className={"flex flex-col gap-5 xl:gap-[274px] mt-5 xl:mt-[204px]"}>
            {prosRight.map(item => (
              <div className={"flex items-start gap-[30px]"} key={item.heading}>
                <Image className={"w-[40px] h-[40px] xl:w-[88px] xl:h-[88px]"} width={40} height={40} src={item.image} alt={item.heading}/>
                <div className={"flex flex-col gap-[10px] max-w-[360px] text-left"}>
                  <h2 className={"text-[18px] xl:text-[24px] font-extrabold"}>{item.heading}</h2>
                  <p className={"text-[16px] xl:text-[20px]"}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}