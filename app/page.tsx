import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <div className="mt-[80px] mx-[128px] flex flex-row justify-between">
      <div>
        <div className="text-8xl font-bold antialiased tracking-tight -leading-7">
          <h1>OTHMAN</h1>
          <h1>SALAHI</h1>
        </div>
        <div className="mt-[112px] flex flex-col gap-11">
          <div className="w-56 h-12 bg-white  flex items-center justify-center hover:border-inherit hover:border-2 hover:bg-black">
            <Link href="/">
              <h1 className="text-black text-2xl font-medium hover:text-white">
                About Me
              </h1>
            </Link>
          </div>
          <div className="w-56 h-12 bg-white  flex items-center justify-center hover:border-inherit hover:border-2 hover:bg-black">
            <Link href="skills">
              <h1 className="text-black text-2xl font-medium hover:text-white">
                SKILLS
              </h1>
            </Link>
          </div>
          <div className="flex flex-row gap-10 ml-14 mt-4">
            <div className="flex items-center justify-center ">
              <Link href="youtube.com">
                <SiLinkedin className="w-8 h-8" />
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <Link href="youtube.com">
                <SiGithub className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-8 items-center">
        <div className="w-96 border-2 flex flex-col items-center justify-center h-80">
          <div className="text-3xl font-bold text-center">NOT SURE ABOUT HIRING?</div>
          <div className="border-2 h-12 w-32 flex items-center justify-center mt-8 hover:bg-white hover:border-0 hover:text-black">
            <Link href="/about">
              CLICK ME
            </Link>
          </div>
        </div>

        <div className="border-2 h-16 w-40 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center">
              HIRE ME!
          </h1>
        </div>
      </div>
    </div>
  );
}
