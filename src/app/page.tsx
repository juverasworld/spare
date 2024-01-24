import Image from "next/image";
import Navbar from "../../components/navbar";

import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <nav className="py-5 border-b-[1px] w-[100%] fixed z-24 text-[16px] leading-[24px] ">
        <div className="flex w-[100%] items-center justify-between pr-1">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt=""
              width="400"
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
      <div className="body">

      <div className="relative  z-0 font-bold text-center flex flex-col justify-center  container mx-auto items-center pt-32 lg:pt-48 ">
        <div className="md:text-[68px]  text-[30px] sm:text-[68px] text-3xl font-bold tracking-tighter  leading-[36px] text-left lg:text-center hero">
          Unlimited design, with flat monthly<br className="xl:flex hidden" />
          fee <span className="text-[#ea580c]">.</span>
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
          <button className="text-[20px] sm:px-[32px] sm:py-[22px] py-4 px-14 sm:text-xl text-lg tracking-tight font-medium text-center btn-gradient-orenji hover:shadow-xl hover:shadow-orange-200/50 hover:-translate-y-1 hover:scale-100 duration-300 leading-[28px] bg-[#ea580c] text-[#fff] py-6 px-8 rounded-xl">
            Start up your dream Project
          </button>
          <p className="mt-10">
            <span className="text-[#ef4444] text-[16px] leading-[24px] font-normal">1 slot left. </span>
            <span className="text-[#64748b] font-normal">want to talk first? </span>
            <span className=" text-[16px] leading-[24px] font-normal">Get in touch </span>
          </p>
        </div>
      </div>
      <div className="marque z-0 relative">
  <marquee behavior="scroll" direction="left">
<div className="flex sm:space-x-4 space-x-2 sm:mb-8 mb-4">
<Image
     src="/porto-5.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
   />
    <Image
     src="/porto-6.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
   />
    <Image
     src="/porto-7.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
   />
    <Image
     src="/porto-8.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
     
   />
   
</div>

</marquee>
<marquee behavior="scroll" direction="left">
<div className="flex sm:space-x-4 space-x-2 sm:mb-8 mb-4">

<Image
     src="/porto-9.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
   />
    <Image
     src="/porto-10.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
   />
    <Image
     src="/porto-11.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
   />
    <Image
     src="/porto-12.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
   />
    <Image
     src="/porto-13.webp"
     alt=""
     width="400"
     height="10"
     className="w-auto  rounded-[10px]"
   />
   
</div>
</marquee>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent">
<button className=" backdrop-filter backdrop-blur-lg bg-white/30 absolute bottom-10 mb-10 left-1/2 transform -translate-x-1/2 sm:px-6 px-4 sm:py-4 py-3 bg-white text-black sm:text-xl text-base font-medium rounded-xl shadow-md hover:bg-orange-50 hover:-translate-y-1 duration-300 text-[20px] leading-[28px] px-[20px] py-[13px] rounded-[5px] font-bold ">View Portfolio</button>
</div>
  </div>
      <div className="my-16 flex items-center justify-center mx-auto ">
      <Image
         src="/clients.webp"
         alt=""
         width="1000"
         height="1000"
         className=" "
       />
      </div>
      <div className="items-center text-center flex justify-center container mx-auto flex-col">
        <p className="sm:text-4xl text-2xl font-bold py-4 tracking-tighter">
        Great design, zero-hassle.

        </p>
        <p className="text-slate-600 sm:px-[450px] py-4 text-base px-4">
        When you hire us, you will get the whole team with all of our creative power. Not just 1-man-show with couple of outsourced designers like many others.
        </p>
      </div>
      </div>
    </main>
  );
}
