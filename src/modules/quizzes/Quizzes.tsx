import Card from "@/modules/quizzes/components/Card";

export default function Quizzes () {
  return (
    <section>
      <div className={"container mx-auto mt-10"}>
        <Card
          active={true}
          cardName={"Тварини"}
          cardImage={"/quizzes/cardImages/animals.png"}
          planetImage={"/quizzes/planets/animalsPlanet.png"}
          href={"/quizzes/1"}
        />
      </div>
    </section>
  )
}