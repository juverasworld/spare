import Image from "next/image";
import Navbar from "../../components/navbar";

import Link from "next/link";
export default function Home() {
  return (
    <main className="font-sans">
      <nav className="py-5 border-b-[1px] w-[100%] font-sans fixed z-24 text-[16px] leading-[24px] ">
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
      <div className="body mx-4">
        <div className="relative  z-0 font-bold text-center flex flex-col justify-center  container mx-auto items-center pt-32 lg:pt-48 ">
          <div className="md:text-[68px]  text-[30px] sm:text-[68px] text-3xl font-bold tracking-tighter  leading-[36px] text-left lg:text-center hero">
            Unlimited design, with flat monthly{" "}
            <br className="xl:flex hidden" />
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
              <span className="text-[#ef4444] text-[16px] leading-[24px] font-normal">
                1 slot left.{" "}
              </span>
              <span className="text-[#64748b] font-normal">
                want to talk first?{" "}
              </span>
              <span className=" text-[16px] leading-[24px] font-normal">
                Get in touch{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="marque z-0 my-10 relative">
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
          <marquee behavior="scroll" direction="right">
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
            <button className=" backdrop-filter backdrop-blur-lg bg-white/30 absolute bottom-10 mb-10 left-1/2 transform -translate-x-1/2 sm:px-6 px-4 sm:py-4 py-3 bg-white text-black sm:text-xl text-base font-medium rounded-xl shadow-md hover:bg-orange-50 hover:-translate-y-1 duration-300 text-[20px] leading-[28px] px-[20px] py-[13px] rounded-[5px] font-bold ">
              View Portfolio
            </button>
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
          <p className="text-slate-600 xl:px-[450px] lg:px-[200px] py-4 text-base px-4">
            When you hire us, you will get the whole team with all of our
            creative power. Not just 1-man-show with couple of outsourced
            designers like many others.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 p-2">
        <div className="container mx-auto sm:p-8 p-6 border rounded-xl hover:-translate-y-1 hover:border-orange-300 duration-300">
          <div className="flex">
            <Image
              src="/icon-feature-1.webp"
              alt=""
              width="50"
              height="30"
              className="w-auto"
            />

            <h2 className="font-medium text-xl tracking-tight font-bold  py-2 px-4">
              Unlimited design
            </h2>
          </div>
          <p className="text-[#475569] leading-[24px] text-[16px] p-4 font-normal">
            Have lots of brilliant ideas that you want to realize? Leave it all
            to us. Request all the designs you want with unlimited design
            request! Go crazy!
          </p>
        </div>
        <div className="container mx-auto sm:p-8 p-6 border rounded-xl hover:-translate-y-1 hover:border-orange-300 duration-300">
          <div className="flex">
            <Image
              src="/icon-feature-2.webp"
              alt=""
              width="50"
              height="30"
              className="w-auto"
            />

            <h2 className="font-medium text-xl tracking-tight font-bold  py-2 px-4">
              Fixed monthly rate
            </h2>
          </div>
          <p className="text-[#475569] leading-[24px] text-[16px] p-4 font-normal">
            Have lots of brilliant ideas that you want to realize? Leave it all
            to us. Request all the designs you want with unlimited design
            request! Go crazy!
          </p>
        </div>
        <div className="container mx-auto sm:p-8 p-6 border rounded-xl hover:-translate-y-1 hover:border-orange-300 duration-300">
          <div className="flex">
            <Image
              src="/icon-feature-1.webp"
              alt=""
              width="50"
              height="30"
              className="w-auto"
            />

            <h2 className="font-medium text-xl tracking-tight font-bold  py-2 px-4">
              Unlimited changes
            </h2>
          </div>
          <p className="text-[#475569] leading-[24px] text-[16px] p-4 font-normal">
            Have lots of brilliant ideas that you want to realize? Leave it all
            to us. Request all the designs you want with unlimited design
            request! Go crazy!
          </p>
        </div>
        <div className="container mx-auto sm:p-8 p-6 border rounded-xl hover:-translate-y-1 hover:border-orange-300 duration-300">
          <div className="flex">
            <Image
              src="/icon-feature-4.webp"
              alt=""
              width="50"
              height="30"
              className="w-auto"
            />

            <h2 className="font-medium text-xl tracking-tight font-bold  py-2 px-4">
              Unlimited design
            </h2>
          </div>
          <p className="text-[#475569] leading-[24px] text-[16px] p-4 font-normal">
            Have lots of brilliant ideas that you want to realize? Leave it all
            to us. Request all the designs you want with unlimited design
            request! Go crazy!
          </p>
        </div>
        <div className="container mx-auto sm:p-8 p-6 border rounded-xl hover:-translate-y-1 hover:border-orange-300 duration-300">
          <div className="flex">
            <Image
              src="/icon-feature-5.webp"
              alt=""
              width="50"
              height="30"
              className="w-auto"
            />

            <h2 className="font-medium text-xl tracking-tight font-bold  py-2 px-4">
              Fixed monthly rate
            </h2>
          </div>
          <p className="text-[#475569] leading-[24px] text-[16px] p-4 font-normal">
            Have lots of brilliant ideas that you want to realize? Leave it all
            to us. Request all the designs you want with unlimited design
            request! Go crazy!
          </p>
        </div>
        <div className="container mx-auto sm:p-8 p-6 border rounded-xl hover:-translate-y-1 hover:border-orange-300 duration-300">
          <div className="flex">
            <Image
              src="/icon-feature-6.webp"
              alt=""
              width="50"
              height="30"
              className="w-auto"
            />

            <h2 className="font-medium text-xl tracking-tight font-bold  py-2 px-4">
              Unlimited changes
            </h2>
          </div>
          <p className="text-[#475569] leading-[24px] text-[16px] p-4 font-normal">
            Have lots of brilliant ideas that you want to realize? Leave it all
            to us. Request all the designs you want with unlimited design
            request! Go crazy!
          </p>
        </div>
      </div>
      <div className="relative mt-16 flex items-center justify-center">
        <button className="text-[20px] sm:px-[32px] sm:py-[22px] py-4 px-14 sm:text-xl text-lg tracking-tight font-medium text-center btn-gradient-orenji hover:text-[#c2410c] hover:border-[#c2410c] hover:-translate-y-1 hover:scale-100 duration-300 leading-[28px] bg-[#fff]  text-[#ea580c] border-[1px] border-[#ea580c] py-6 px-8 rounded-full">
          What makes us different {">"}
        </button>
      </div>
      <div className="">
        <div className="items-center text-center flex justify-center container mx-auto flex-col">
          <p className="sm:text-4xl text-2xl font-bold py-4 tracking-tighter">
            How does it work.
          </p>
          <p className="text-slate-600 xl:px-[450px] lg:px-[200px] py-4 text-base px-4">
            No overcomplicated workflow, no unnecessary bureaucracy or pappers.
            Let's go straight to realizing your ideas and tackling your business
            problems.
          </p>
        </div>
      </div>
      <div className="sm:p-0 p-4">
        <div className="sm:flex sm:flex-row sm:space-x-4 sm:py-2">
          <div className="sm:basis-3/6 pb-4">
            <div className="pt-8 pl-8 pr-8 pb-5 bg-slate-50 rounded-3xl sm:h-[400px] h-auto hover:-translate-y-0.5 hover:bg-orange-50 duration-300">
              <div className="">
                <h1 className="text-xl font-medium tracking-tight pb-4">
                  1.Subscribe to a plan
                </h1>
                <div className="sm:basis-3/6 pb-4">
                  Click the button, fill out some questionnaires, then our CEO
                  will contact you within 1x24 to explain further.
                </div>
              </div>
              <div className="sm:pt-8 pt-2 px-4">
                <Image
                  src="/ceo.webp"
                  alt=""
                  width="400"
                  height="10"
                  // className="w-auto"
                />
              </div>
            </div>
          </div>
          <div className="sm:basis-5/6 pb-4">
            <div className="p-8 bg-slate-50 rounded-3xl sm:h-[400px] h-[300px] hover:-translate-y-0.5 hover:bg-orange-50 duration-300">
              <div className="">
                <h1 className="text-xl font-medium tracking-tight pb-4">
                  Add your design task
                </h1>
                <p className="sm:text-lg text-sm text-slate-500">
                  After your subscribe to the plan, you can request as many
                  designs as you want via Trello, Email or directly in Figma.
                  You can give as many feedback or as many revisions as you
                  want.
                </p>
                <div className="sm:pt-8 pt-6 sm:px-24">
                  <Image
                    src="/design-task.webp"
                    alt=""
                    width="400"
                    height="10"
                    className="w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-row sm:space-x-4">
        <div className="sm:pr-8 sm:pt-8 p-2 bg-slate-50 rounded-3xl sm:h-[400px] h-[450px] overflow-hidden hover:-translate-y-0.5 hover:bg-orange-50 duration-300">
          <div className="flex md:flex-row flex-col">
            <div className="relative w-full">
              <h3 className="text-xl font-medium tracking-tight pb-4">
                3. Enjoy your new shiny design
              </h3>
              <p className="sm:text-lg text-sm text-slate-500">
              Receive your design updates within 1-3 business days. Not satisfied? No problem. We will design again until you are 100% happy
              </p>
              
<div className="absolute bottom-0 left-0 right-0 mx-auto">
<Image
                  src="/random.webp"
                  alt=""
                  width="400"
                  height="10"
                  className="w-auto"
                />
</div>
            </div>
            <div className="sm:p-4 p-2">
            <Image
                  src="/shiny-Design.webp"
                  alt=""
                  width="400"
                  height="10"
                  className="w-auto"
                />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
