import React from "react";
import Golearnlogo from "../../public/golearnlogo.png";
import hero from "../../public/home-hero.webp";
import unicalradio from "../../public/brownFM.jpg";
import techignite from "../../public/techignite.jpg";
import hitFM from "../../public/hit95FM.jpg";
import rainbow from "../../public/rainbow.jpg";
import wheel from "../../public/howitworkwheel.svg";
import parents from "../../public/parents.jpg";
import mockup from "../../public/mockup.jpg";
import naija from "../../public/naija.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { AccordionDemo } from "../accordion/AccordDemo";
import { MarqueeDemo } from "../MarqueeDemo/MarqueDemo";
import handstogether from "../../public/handstogether.png";
import naijamap from "../../public/naijaicon.png";
import keyhole from "../../public/keyhole.png";
import mse from "../../public/mse.png";

export default function LandingPage() {
  return (
    <main className="w-full bg-cussecondaryblue overflow-x-hidden">
      <header className="flex justify-between py-4  px-10 md:px-14 lg:px-32 shadow-md bg-blue-50">
        <div className="flex gap-1 items-center">
          <Image
            className="mix-blend-multiply w-8 md:w-12 lg:w-16"
            src={Golearnlogo}
            alt={"logo"}
          />
          <h1 className="font-bold text-2xl md:text-base text-blue-400">
            Golearn
          </h1>
        </div>
        <div className="flex gap-3 items-center ">
          <button className="bg-blue-400 rounded-full py-2 px-5 text-sm text-white font-semibold hidden  lg:block">
            Sign in
          </button>
          <button className="bg-gray-300 rounded-full py-2 px-5 text-sm font-semibold hidden  lg:block">
            Login
          </button>
          <GiHamburgerMenu className="text-blue-500 sm:block lg:hidden" />
        </div>
      </header>

      <div className="flex flex-col-reverse lg:flex-row px-10 md:px-14 lg:px-32 py-20 items-center gap-10">
        <div className="flex flex-col gap-5 md:w-full lg:w-1/2">
          <h1 className="text-cusblack font-bold lg:text-5xl text-3xl w-4/5">
            Personalise learning and see improvement
          </h1>
          <h1 className="text-orange-500 font-bold lg:text-5xl text-3xl">in 4 weeks!</h1>
          <p className="w-4/5">
            Students have been shown to improve by up to a grade level after 20
            hours of using GoLearn
          </p>
          <h5 className="font-bold text-cusdarkblue">
            FOR PRIMARY & SECONDARY STUDENTS
          </h5>
        </div>
        <div className="md:w-4/5 lg:w-1/2">
          <Image src={hero} alt={"hero"} className="" />
        </div>
      </div>

      <aside className="py-10 flex items-center px-10 md:px-14 lg:px-32 flex-col bg-blue-50 gap-5">
        <h3 className="font-bold">AS SEEN ON</h3>
        <div className="flex justify-between w-full md:w-3/5">
          <Image
            src={unicalradio}
            alt={"unicalradio"}
            className="mix-blend-multiply w-1/5"
          />
          <Image
            src={techignite}
            alt={"techignite"}
            className="mix-blend-multiply w-1/5"
          />
          <Image
            src={hitFM}
            alt={"hitFM"}
            className="mix-blend-multiply w-1/5"
          />
          <Image
            src={rainbow}
            alt={"rainbow"}
            className="mix-blend-multiply w-1/5"
          />
        </div>
      </aside>

      <div className="bg-blue-50 flex flex-col md:px-14  lg:px-32 items-center gap-20 text-gray-500 pt-24">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-bold md:text-2xl lg:text-5xl text-cusblack">
            How it works
          </h1>
          <p className="md:w-full lg:w-2/3 text-center">
            GoLearn uses technology to implement Mastery Learning (Benjamin
            Bloom, 1984) by creating unique learning paths for each student.
          </p>
        </div>

        <div className="flex lg:justify-between flex-col lg:flex-row md:gap-10 ">

          <div className="flex flex-col justify-between items-center gap-8 md:gap-10">
            <div className="lg:w-3/4 sm:w-full text-start md:text-center">
              <h2 className="font-bold text-cusblack text-base md:text-2xl">
                Adaptive Assessment
              </h2>
              <p>Student takes practice to identify learning gaps</p>
            </div>
            <div className="lg:w-3/4 sm:w-full text-start md:text-center">
              <h2 className="font-bold text-cusblack text-base md:text-2xl">
                Better Results
              </h2>
              <p>Attains mastery and moves on to subsequent topics</p>
            </div>
          </div>
          <Image src={wheel} alt={"wheel"} className="py-5" />
          <div className="flex flex-col justify-between items-center gap-8 md:gap-10">
            <div className="lg:w-3/4 sm:w-full text-start md:text-center">
              <h2 className="font-bold text-cusblack text-base md:text-2xl">
                Recommended Video Lessons
              </h2>
              <p>Watches recommended video lessons</p>
            </div>

            <div className="lg:w-3/4 sm:w-full text-start md:text-center">
              <h2 className="font-bold text-cusblack text-base md:text-2xl">
                Targeted 1-on-1 Tutor Sessions
              </h2>
              <p>Takes recommended tutoring in specific topics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-blue-50 py-32 gap-16 lg:px-32 md:px-14 px-10 flex-col lg:flex-row ">

        <div className=" w-full lg:w-1/2 flex lg:justify-end sm:justify-center sm:w-full items-end">

          <Image
            src={parents}
            className="w-4/5 lg:w-3/5 md:w-full rounded-md"
            alt={"parents"}
          />
        </div>

        <div className="flex flex-col gap-10 items-start lg:w-1/2 md:w-full">
          <Button className="rounded-full bg-blue-100 text-cusblack font-bold">
            FOR PARENTS
          </Button>
          <p className="text-gray-500 lg:w-3/5 md:w-full">
            Help them use GoLearn to gain mastery of difficult subject topics by
            daily practice on recommended tests, video lessons and tutor
            sessions anywhere, anytime.
          </p>
          <Button className="rounded-full border-2 border-cusblack bg-blue-50 text-cusblack font-bold">
            LEARN MORE
          </Button>
        </div>

      </div>
      <section className="px-10 md:px-14 lg:px-80 pt-20">
        <h1 className=" text-base lg:text-3xl font-semibold">FAQ&apos;s</h1>
        <AccordionDemo />
      </section>
      <div className="w-full flex justify-center items-center lg:pt-20 md:pt-10">
        <MarqueeDemo />
      </div>

      <div className=" px-10 lg:px-32 md:px-14 ">

        <div className="lg:px-10 md:p-5  flex flex-col-reverse md:flex-row items-center bg-blue-100 rounded-3xl justify-center">

          <div className="flex flex-col items-center justify-center w-full py-5 lg:w-1/2 gap-10">
            <h1 className="text-black lg:text-2xl md:text-base font-bold w-4/5 md:w-3/5 ">
              The revolutionary app everyone is talking about, Join hundreds of
              great learners using GoLearn to excel
            </h1>
            <div className="flex lg:justify-between lg:w-3/5 md:w-full gap-10">
              <div>
                <h3 className="text-blue-950 text-2xl md:text-3xl font-bold">100+</h3>
                <p className="text-base">Learners</p>
              </div>
              <div>
                <h3 className="text-blue-950 text-2xl md:text-3xl font-bold">50+</h3>
                <p>Trusted Parents</p>
              </div>
              <div>
                <h3 className="text-blue-950 text-2xl md:text-3xl font-bold">2+</h3>
                <p>Cities</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-3/4 flex justify-center items-center ">
            <Image
              src={mockup}
              alt={"mockup"}
              className=" w-4/5 mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      <footer className="lg:px-32 px-10 md:px-14  sm:items-center lg:items-start flex pt-28 flex-col lg:flex-row gap-8 md:gap-12x`">
        <div className="self-start">
          <Image
            className="mix-blend-multiply sm:w-full lg:w-2/3"
            src={Golearnlogo}
            alt={"logo"}
          />
        </div>
        <div className="lg:w-1/6 sm:w-full text-sm flex flex-col gap-5">
          <h1 className="font-bold text-blue-950 text-base">Inside GoLearn</h1>
          <p>Home</p>
          <p>About GoLearn</p>
          <p>Blog</p>
        </div>

        <div className="lg:w-1/6 sm:w-full text-sm flex flex-col gap-5">
          <h1 className="font-bold text-blue-950 text-base">Products</h1>
          <p>For Schools</p>
          <p>For Parents</p>
          <p>Tutoring</p>
          <p>Exam Prep</p>
          <p>Coding</p>
        </div>

        <div className="lg:w-1/6 sm:w-full text-sm flex flex-col gap-5">
          <h1 className="font-bold text-blue-950 text-base">Support</h1>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>Privacy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="lg:w-1/6 sm:w-full text-sm flex flex-col gap-5">
          <h1 className="font-bold text-blue-950 text-base">Contact</h1>
          <p className="flex gap-2 items-center">
            <MdPhone className="" />
            +234 703 068 2998
          </p>
          <p className="flex gap-2 items-center">
            <MdOutlineMailOutline />
            support@GoLearn.co
          </p>
          <p className="flex gap-2 items-center">
            <Image src={naija} alt={"naija"} className=" w-4 md:w-5 lg:w-1/12" />
            50,Tapa Street, Adekunle, Yaba, Lagos State
          </p>
        </div>

        <div className="lg:w-1/6 sm:w-full text-sm flex flex-col gap-5">
          <h1 className="font-bold text-blue-950 text-base">
            Awards & Affiliations
          </h1>
          <div className="flex justify-between w-3/5">
            <Image src={naijamap} alt={"naijamap"} className="w-1/5" />
            <Image src={mse} alt={"mse"} className="w-1/5" />
            <Image
              src={handstogether}
              alt={"handstogether"}
              className="w-1/5"
            />
            <Image src={keyhole} alt={"keyhole"} className="w-1/5" />
          </div>
          <div className="flex gap-5">
            <CgFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </footer>
      <div className="bg-blue-700 p-5 px-10 md:px-14 lg:px-32 text-blue-100 mt-10">
        <p>Copyright 2024, GoLearn Inc. All rights reserved.  hkh sdhjh hh  </p>
      </div>
    </main>
  );
}
