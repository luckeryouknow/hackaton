import Cards from "./components/Cards";
import Steps from "./components/Steps";
import {RedButton} from "@/shared";

export default function StudyingProgram() {
  return (
    <section className={"pt-[120px]"}>
      <div className={"container mx-auto px-5 xl:px-0"}>
        <div className={"flex flex-col gap-5 max-w-[880px] mx-auto text-left xl:text-center"}>
          <h2 className={"font-extrabold text-[24px] xl:text-[48px]"}>Навчальна програма</h2>
          <p className={"font-extrabold text-[16px] xl:text-[24px]"}>
            Уроки SpaceLingo можуть виглядати як ігри, але вони є частиною навчальної програми, ретельно розробленої експертами в галузі освіти.
          </p>
        </div>
        <Cards />
        <Steps />
        <div className={"hidden xl:block w-fit mx-auto mt-[30px]"}>
          <RedButton type={"link"} href={"/"} text={"Спробувати безкоштовно"} />
        </div>
      </div>
    </section>
  )
}