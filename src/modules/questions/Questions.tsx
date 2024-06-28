import Question from "@/modules/questions/components/Question";

export default function Questions () {
  return (
    <section className={"pt-[120px]"}>
      <div className={"container mx-auto px-5 xl:px-0"}>
        <h2 className={"text-[24px] xl:text-[48px] font-extrabold text-center"}>Часті питання (FAQ)</h2>
        <div className={"w-full xl:w-[874px] mx-auto mt-[50px]"}>
          <Question
            questionText={"Як розпочати користуватися платформою?"}
            questionAnswer={
              <ul className={"list-decimal"}>
                <li>Зарєеструйтеся на платформі</li>
                <li>Дайте відповіді на кілька запитань, щоб персоналізувати план навчання вашої дитини</li>
                <li>Пройдіть перший урок разом</li>
              </ul>
            }
          />
          <Question
            questionText={"Як розпочати користуватися платформою?"}
            questionAnswer={
              <ul className={"list-decimal"}>
                <li>Зарєеструйтеся на платформі</li>
                <li>Дайте відповіді на кілька запитань, щоб персоналізувати план навчання вашої дитини</li>
                <li>Пройдіть перший урок разом</li>
              </ul>
            }
          />
          <Question
            questionText={"Як розпочати користуватися платформою?"}
            questionAnswer={
              <ul className={"list-decimal"}>
                <li>Зарєеструйтеся на платформі</li>
                <li>Дайте відповіді на кілька запитань, щоб персоналізувати план навчання вашої дитини</li>
                <li>Пройдіть перший урок разом</li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  )
}