export default function Cards () {
  const cards = [
    {
      image: "/studyingProgram/astronaut1.png",
      heading: "Запам’ятовування слів",
      text: "Додаток вивчає понад 1500 щоденних англійських слів і фраз у різних цікавих категоріях.",
    },
    {
      image: "/studyingProgram/astronaut2.png",
      heading: "Розуміння на слух",
      text: "Діти вчаться розуміти англійську, граючи в навчальні ігри та разом дивлячись мультфільми.",
    },
    {
      image: "/studyingProgram/astronaut3.png",
      heading: "Вимова",
      text: "Додаток вивчає понад 1500 щоденних англійських слів і фраз у різних цікавих категоріях.",
    }
  ]

  return (
    <div className={"flex flex-col gap-[10px] xl:flex-row items-center xl:justify-between mt-[50px]"}>
      {cards.map(card => (
        <div className={"flex flex-col gap-[30px] p-10 border-[2px] border-[#E1E0FF] rounded-[30px]"}
             key={card.heading}>
          <img className={"max-h-[200px] mx-auto"} src={card.image} alt={card.heading}/>
          <div className={"flex flex-col gap-[10px] max-w-[340px] text-center"}>
            <h3 className={"text-[18px] xl:text-[24px] font-extrabold"}>{card.heading}</h3>
            <p className={"text-[16px] xl:text-[20px]"}>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}