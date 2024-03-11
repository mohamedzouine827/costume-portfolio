import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { SparklesCore } from "./components/ui/sparkles";

export default function Home() {
  return (
    <div className="mt-[80px]  mx-[60px] flex flex-col items-center justify-center md:flex-row md:justify-between md:mx-[128px]">
      <div>
        <div className="text-5xl  text-center md:text-8xl font-bold antialiased md:text-left tracking-tight -leading-7">
          <div>
            <Link href="/">
              <h1>OTHMAN</h1>
              <h1>SALAHI</h1>
            </Link>
          </div>
        </div>
        <div className="mt-[60px] md:mt-[112px] flex justify-center md:justify-start items-center md:items-start md:ml-8 flex-col gap-11 ">
          <div className="relative w-[192px] -top-1 -left-1 flex justify-center items-center bg-white py-2.5 px-5 font-medium uppercase text-black transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[192px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
            <Link href="/about">
              <span className="text-black text-2xl font-bold hover:text-black">
                About Me
              </span>
            </Link>
          </div>
          <div className="relative w-[192px] -top-1 -left-1 flex justify-center items-center bg-white py-2.5 px-5 font-medium uppercase text-black transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[192px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
            <Link href="skills">
              <span className="text-black text-2xl font-bold hover:text-black">
                Projects
              </span>
            </Link>
          </div>
          <div className="flex flex-row gap-12 md:ml-4 mt-4 ">
            <div className="flex items-center justify-center transition-all hover:scale-125">
              <Link href="youtube.com">
                <SiLinkedin className="w-8 h-8" />
              </Link>
            </div>
            <div className="flex items-center justify-center transition-all hover:-rotate-2 hover:scale-125">
              
              <Link href="youtube.com">
                <SiGithub className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-8 items-center">
        <div className="w-96 border-2 flex flex-col items-center justify-center h-80">
          <div className="text-3xl font-bold text-center">
            NOT SURE ABOUT HIRING?
          </div>
          <div className="border-2 h-12 w-32 flex items-center justify-center mt-8 hover:bg-white hover:border-0 hover:text-black">
            <Link href="/about">CLICK ME</Link>
          </div>
        </div>
        <div className="mt-10 mb-8 md:mb-0 md:mt-12 ">
          <div className="relative w-[192px] -top-1 -left-1 flex justify-center items-center bg-black py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-[192px] before:border-2 before:border-white before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
            <h1 className="text-3xl font-bold text-center">HIRE ME!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
