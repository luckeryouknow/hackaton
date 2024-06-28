import Cards from "@/modules/subscriptions/components/Cards";

export default function Subscriptions() {
  return (
    <section className={"pt-[120px]"}>
      <div className={"container mx-auto px-5 xl:px-0"}>
        <div className={"flex flex-col gap-5 max-w-[880px] mx-auto"}>
          <h2 className={"text-[24px] xl:text-[48px] font-extrabold text-center"}>Ціни та підписка</h2>
          <p className={"text-[16px] xl:text-[24px] font-extrabold text-center"}>
            Приєднуйтесь до SpaceLingo вже сьогодні та подаруйте своїй дитині ключ до успішного майбутнього!
          </p>
        </div>
        <Cards />
      </div>
    </section>
  )
}