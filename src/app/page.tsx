import Image from "next/image";
import Navbar from "../../components/navbar";

import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <nav className="py-5 border-b-[1px] w-[100%] fixed text-[16px] leading-[24px] ">
        <div className="flex w-[100%] items-center justify-between pr-1">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt=""
              width="10"
              height="10"
              className="w-auto"
            />
          </Link>
          <div className="lg:flex hidden  ">
            <Link className="nav mr-10" href="#pricing">
              Pricing
            </Link>
            <Link className="nav mr-10" href="#Portfolio">
              Portfolio
            </Link>
            <Link className="nav mr-10" href="/about">
              Why Us
            </Link>
            <Link className="nav mr-10" href="/">
              How it work
            </Link>
            <Link className="nav mr-10" href="/FAQ">
              F.A.Q
            </Link>
          </div>

          <button className="border-[1px] px-5 rounded-[10px] py-2">
            <Link href="/">Start a project</Link>
          </button>
        </div>
      </nav>
      <div className="relative font-bold text-center flex flex-col justify-center lg:h-screen h-auto  items-center pt-64 lg:pt-24 ">
        <div className="md:text-[68px]  text-[30px]  leading-[36px]  hero">
          Unlimited design, with flat monthly <br className="xl:flex hidden" />
          fee.
        </div>
        <div className="flex items-center justify-center font-normal my-12">
          <ul className="list-none lg:mr-12 mr-2 lg:flex inline">
            <li className="relative pl-5 flex text-[20px] leading-[28px] items-center text-[#000]">
              <span className="text-[#ea580c] my-2 font absolute left-0">
                &#8226;
              </span>
              Unlimited Revision
            </li>
          </ul>
          <ul className="list-none lg:mr-12 mr-2 lg:flex inline">
            <li className="relative pl-5 flex text-[20px] leading-[28px] items-center text-[#000]">
              <span className="text-[#ea580c] my-2 font absolute left-0">
                &#8226;
              </span>
              Unlimited Request
            </li>
          </ul>
          <ul className="list-none lg:mr-12 mr-2 lg:flex inline">
            <li className="relative pl-5 flex text-[20px] leading-[28px] items-center text-[#000]">
              <span className="text-[#ea580c] my-2 font absolute left-0">
                &#8226;
              </span>
              Unlimited Request
            </li>
          </ul>
        </div>
        <div className="relative  ">
          <button className="text-[20px]  leading-[28px] bg-[#ea580c] text-[#fff] py-6 px-8 rounded-xl">
            Start up your dream Project
          </button>
          <p className="mt-10">
            <span className="text-[#ef4444] text-[16px] leading-[24px] font-normal">1 slot left. </span>
            <span className="text-[#64748b] font-normal">want to talk first? </span>
            <span className=" text-[16px] leading-[24px] font-normal">Get in touch </span>
          </p>
        </div>
      </div>
    </main>
  );
}
