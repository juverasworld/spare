"use client";
import React, { createContext } from "react";
import Image from "next/image";
import { useEffect } from "react";
// import * as THREE from 'three';
import Navbar from "../../components/navbar";
// import { fadeIn } from "../variants";
import { fadeIn } from "../variants";

import { motion } from "framer-motion";
import Link from "next/link";
import ThreeCanvasComponent from "../../components/three";
export default function Home() {
  return (
    <main className="font-sans">
      <nav className="py-5 border-b-[1px] w-[100%] font-sans fixed z-24 text-[16px] leading-[24px] ">
        <div className="flex w-[100%] items-center justify-between pr-1">
          <Link href="/" className="font-bold">
            {/* <Image
            src="/logo.svg"
            alt=""
            width="400"
            height="10"
            className="w-auto"
          /> */}
            LOGO
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
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="md:text-[68px]  text-[30px] sm:text-[68px] text-3xl font-bold tracking-tighter  leading-[36px] text-left lg:text-center hero"
          >
            Unlimited design, with flat monthly{" "}
            <br className="xl:flex hidden" />
            fee <span className="text-[#ea580c]">.</span>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-center font-normal my-12"
          >
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
          </motion.div>
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
        <div className="marquee-container z-0 my-10 relative">
          <div className="marquee">
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
          </div>
          <div className="marquees">
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
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent">
            <button className=" backdrop-filter backdrop-blur-lg bg-white/30 absolute bottom-10 mb-10 left-1/2 transform -translate-x-1/2 sm:px-6 px-4 sm:py-4 py-3 bg-white text-black sm:text-xl text-base font-medium rounded-xl shadow-md hover:bg-orange-50 hover:-translate-y-1 duration-300 text-[20px] leading-[28px] px-[20px] py-[13px] rounded-[5px] font-bold ">
              View Portfolio
            </button>
          </div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="my-16 flex items-center justify-center mx-auto "
        >
          <Image
            src="/clients.webp"
            alt=""
            width="1000"
            height="1000"
            className=" "
          />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="items-center text-center flex justify-center container mx-auto flex-col"
        >
          <p className="sm:text-4xl text-2xl font-bold py-4 tracking-tighter">
            Great design, zero-hassle.
          </p>
          <p className="text-slate-600 xl:px-[450px] lg:px-[200px] py-4 text-base px-4">
            When you hire us, you will get the whole team with all of our
            creative power. Not just 1-man-show with couple of outsourced
            designers like many others.
          </p>
        </motion.div>
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
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className=""
      >
        <div className="items-center text-center flex justify-center container mx-auto flex-col">
          <p className="sm:text-4xl text-2xl font-bold py-4 tracking-tighter">
            How does it work.
          </p>
          <p className="text-slate-600 xl:px-[450px] lg:px-[200px] py-4 text-base px-4">
            No overcomplicated workflow, no unnecessary bureaucracy or pappers.
            Let &#39; s go straight to realizing your ideas and tackling your
            business problems.
          </p>
        </div>
      </motion.div>
      <div className="sm:p-0 p-4">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="sm:flex sm:flex-row sm:space-x-4 sm:py-2"
        >
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
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="sm:flex sm:flex-row sm:space-x-4"
      >
        <div className="sm:basis-5/6 pb-4">
          <div className="sm:pr-8 sm:pt-8 p-2 bg-slate-50 rounded-3xl sm:h-[400px] h-[450px] overflow-hidden hover:-translate-y-0.5 hover:bg-orange-50 duration-300">
            <div className="flex md:flex-row flex-col">
              <div className="relative w-full">
                <h3 className="text-xl font-medium tracking-tight pb-4">
                  3. Enjoy your new shiny design
                </h3>
                <p className="sm:text-lg text-sm text-slate-500">
                  Receive your design updates within 1-3 business days. Not
                  satisfied? No problem. We will design again until you are 100%
                  happy
                </p>

                <div className="absolute top-[100%] md:flex hidden left-0 right-0 mx-auto">
                  <Image
                    src="/random.webp"
                    alt=""
                    width="400"
                    height="10"
                    // className="w-auto"
                  />
                </div>
              </div>
              <div className="sm:p-4 p-2">
                <Image
                  src="/shiny-Design.webp"
                  alt=""
                  width="500"
                  height="500"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-2/6">
          <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 p-8 rounded-3xl sm:h-[400px] h-[100px] flex justify-center items-center text-white hover:-translate-y-0.5 duration-300">
            <h2 className="sm:text-xl text-lg font-medium p-4-">
              Any Questions?
              <span className="underline">Talk to us</span>
            </h2>
          </div>
        </div>
      </motion.div>

      <div className=" my-16">
        <div className="items-center my-16 text-center flex justify-center container mx-auto flex-col">
          <p className="sm:text-4xl text-2xl font-bold py-4 tracking-tighter">
            Simple Pricing
          </p>
          <p className="text-slate-600 xl:px-[450px] lg:px-[200px] py-4 text-base px-4">
            Simple, flat, no hidden-cost. Pay once every month, get all our
            services, unlimited. Pause or cancel anytime. No question asked.
          </p>
        </div>
      </div>
      <div className="sm:flex sm:flex-row mx-auto justify-center sm:space-x-6 p-4 sm:space-y-0 space-y-2">
        <div className="sm:py-8 py-4 sm:px-12 px-6 bg-slate-50 rounded-3xl border border-slate-100">
          <div className="space-y-6 pb-10">
            <div className="space-y-3">
              <h4 className="sm:text-3xl text-2xl font-bold tracking-tighter">
                Trial
                <span className="text-slate-500 sm:text-3xl text-2xl tracking-tighter">
                  Basic
                </span>
              </h4>
              <h3 className="text-base">Try our services for a week</h3>
            </div>
            <h3 className="text-5xl font-bold">
              $999
              <span className="text-base text-slate-500 font-normal">
                /week
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Websites and App Design</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Logos and Brand Design</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Custom 2D illustrations</span>
              </li>
            </ul>
            <div className="">
              <Link
                href="/"
                className="block p-4 w-full border border-black text-center rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 hover:-translate-y-1 hover:scale-100 duration-300"
              >
                Try Us
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:py-8 py-4 sm:px-12 px-6 bg-gradient-to-b from-[#ff622f]  to-[#f45235] rounded-3xl border border-slate-100">
          <div className="space-y-6 pb-10">
            <div className="space-y-2">
              <div className="flex flex-row">
                <h3 className="sm:text-3xl text-2xl font-bold text-white tracking-tighter">
                  Monthly
                  <span className="text-white opacity-50 sm:text-3xl text-2xl tracking-tighter">
                    Premium
                  </span>
                </h3>
                <p className="sm:px-6 mx-3 px-4 py-2 bg-white rounded-full sm:text-base text-sm text-black">
                  1 Slot Left
                </p>
              </div>
              <div className="">
                <p className="text-base text-white">Everything is free plus:</p>
              </div>
            </div>
          </div>
          <h3 className="text-5xl text-[#fff] font-bold">
            $2999
            <span className="text-base text-[#fff]  font-normal">/month</span>
          </h3>
          <div className="sm:flex sm:flex-row text-[#fff] my-5 sm:space-x-14">
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Websites and App Design</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Logos and Brand Design</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Custom 2D illustrations</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Websites and App Design</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Logos and Brand Design</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="">Custom 2D illustrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <div className="">
    <ThreeCanvasComponent/>
    </div>
      
            <div className="bg-black">
        <div className="lg:p-24 p-5 py-14 px-6">
          <h1 className="lg:text-[68px] text-[32px] lg:px-52 px-5 font-bold tracking-tighter text-center text-white justify-center">
            Your own dedicated design team, just one click away.
          </h1>
          <div className="py-8">
            <ul className="space-x-6 flex flex-wrap justify-center sm:text-xl text-lg">
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-white sm:py-0 py-2">
                Unlimited Revision
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-white sm:py-0 py-2">
                Unlimited Request{" "}
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-white sm:py-0 py-2">
                Cancel Anytime
              </li>
            </ul>
          </div>
        </div>
       
        <div className="">
          <div className="w-[100%] mx-auto flex items-center justify-center">
            <Link
              href=""
              className="rounded-full bg-gradient-to-tr from-[#00FFA3] via-[#B61AFF] to-yellow-500 p-1 hover:bg-gradient-to-br hover:from-[#B61AFF] hover:via-[#2663FF] hover:to-[#00FFA3] hover:-translate-y-1 hover:scale-100 duration-300"
            >
              <div className="flex sm:py-8 py-6 sm:px-16 px-12 rounded-full items-center justify-center bg-black back">
                <h1 className="sm:text-2xl text-xl font-medium text-white">
                  Start a Project
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <hr className="h-px my-16 mx-10 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="sm:pt-12 pt-6">
          <div className="sm:flex sm:flex-row">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/logo.svg"
                alt=""
                width="400"
                height="10"
                className="w-auto"
              />
              <p className="text-slate-700 text-sm">
                Copyright 2023 Orenji Studio - All rights Reserved
              </p>
            </div>
            <div className="flex-grow sm:pb-0 pb-6"></div>
            <div className="sm:text-right text-left">
              <p className="pb-4 text-white text-center">
                Pakem, Sleman, Yogyakarta, Indonesia (55582)
              </p>
              <div className="text-white py-4">
                <footer className="flex items-center justify-center sm:space-x-4 space-x-3">
                  <Link href="" className="hover:text-red-600">
                    Dribble
                  </Link>
                  <span className="text-red-600">•</span>
                  <Link href="" className="hover:text-red-600">
                    Behance
                  </Link>
                  <span className="text-red-600">•</span>
                  <Link href="" className="hover:text-red-600">
                    Instagram
                  </Link>
                  <span className="text-red-600">•</span>
                  <Link href="" className="hover:text-red-600">
                    LinkedIn
                  </Link>
                  <span className="text-red-600">•</span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
