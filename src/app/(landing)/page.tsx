import {FreeMonth, Hero, QuestionForm, Questions, StudyingProgram, Subscriptions, WhyChooseUs} from "@/modules";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <FreeMonth />
      <StudyingProgram />
      <Questions />
      <Subscriptions />
      <QuestionForm />
    </main>
  );
}
