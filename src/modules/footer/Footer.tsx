import {Logo} from "@/shared";
import Link from "next/link";
import SpriteSVG from "@/modules/footer/components/SpritSVG";

export default function Footer () {
  return (
    <footer className={"mt-[68px]"}>
      <div className={"container mx-auto px-5 xl:px-0"}>
        <div className={"flex flex-col xl:flex-row xl:gap-[200px] max-w-[1330px] mx-auto pt-3 pb-[70px] border-t-2"}>
          <Logo />
          <div className={"flex flex-col xl:flex-row gap-20 mt-9 px-5 xl:px-0"}>
            <div className={"flex flex-col gap-5 w-[180px] text-[18px]"}>
              <h3 className={"text-[16px] font-bold uppercase"}>Ми у соцмережах:</h3>
              <Link className={"flex items-center gap-1"} href={"/"}>
                <SpriteSVG name={"instagram"} />
                <p>Instagram</p>
              </Link>
              <Link className={"flex items-center gap-1"} href={"/"}>
                <SpriteSVG name={"tikTok"} />
                <p>TikTok</p>
              </Link>
              <Link className={"flex items-center gap-1"} href={"/"}>
                <SpriteSVG name={"youTube"} />
                <p>YouTube</p>
              </Link>
            </div>
            <div className={"flex flex-col gap-5 text-[18px]"}>
              <Link href={"/"}>Головна</Link>
              <Link href={"/"}>Навчальна програма</Link>
              <Link href={"/"}>Ціни</Link>
              <Link href={"/"}>FAQ</Link>
            </div>
            <div className={"flex flex-col gap-5 w-[180px] text-[18px]"}>
              <Link href={"/"}>Terms and Conditions</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}