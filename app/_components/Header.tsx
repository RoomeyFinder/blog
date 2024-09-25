"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "../images/logo.webp"
import { useState } from "react"
import { Socials } from "./Footer"

export default function Header() {
  return (
    <header className="h-[80px] flex items-center justify-between max-w-[1500px] mx-auto border-b border-b-[#ddd] px-6 sm:px-12">
      <Link href="/" className="flex items-center gap-4">
        <Image
          width={logo.width}
          height={logo.height}
          blurDataURL={logo.blurDataURL}
          src={logo.src}
          alt="A Pair of magnifying glasses joined together at their respective handles to form an upside down v shape"
          className="w-[30px] h-[30px]"
        />{" "}
        <span className="block font-[500] tracking-[-0.01em] text-[18px]">
          Blog
        </span>
      </Link>
      <MoblieNav />
      <DesktopNav />
    </header>
  )
}

function MoblieNav() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <button
        className="flex flex-col gap-2 w-[30px] sm:hidden"
        onClick={() => setShowNav((prev) => !prev)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="block w-full h-[1px] bg-[#222]"></span>
        <span className="block w-full h-[1px] bg-[#222]"></span>
        <span className="block w-full h-[1px] bg-[#222]"></span>
      </button>
      <nav
        className={`sm:hidden fixed top-0 inset-x-0  bg-white transition-translate duration-[250ms] ${
          showNav ? "translate-0" : "-translate-y-[100%]"
        } `}
      >
        <ul className="flex flex-col gap-8 items-start w-full py-4 max-w-[80%] mx-auto pb-12">
          <button
            className="relative w-[30px] sm:hidden ml-auto my-6"
            onClick={() => setShowNav(false)}
          >
            <span className="sr-only">Close navigation</span>
            <span className="absolute translate-y-[-50%] top-[50%] block w-full h-[2px] bg-[#222] rotate-[-45deg] origin-center"></span>
            <span className="absolute translate-y-[-50%] top-[50%] block w-full h-[2px] bg-[#222] rotate-[45deg] origin-center"></span>
          </button>
          <li>
            <Link href="https://roomeyfinder.com/about">About us</Link>
          </li>
          <li>
            <Link href="https://roomeyfinder.com/contact">Contact us</Link>
          </li>
          <li>
            <Link href="mailto:support@roomeyfinder.com">Support</Link>{" "}
          </li>
          <hr className="my-6 w-full" />
          <li className="flex items-center justify-center gap-12 w-full">
            <Socials />
          </li>
        </ul>
        <div
          className={`${
            showNav ? "h-screen" : "h-0"
          } fixed w-screen bg-[#ddd]/20`}
          onClick={() => setShowNav(false)}
        ></div>
      </nav>
    </>
  )
}

function DesktopNav() {
  return (
    <>
      <ul className="items-start ml-auto gap-8 hidden sm:flex">
        <li>
          <Link href="https://roomeyfinder.com/about">About us</Link>
        </li>
        <li>
          <Link href="https://roomeyfinder.com/contact">Contact us</Link>
        </li>
        <li>
          <Link href="mailto:support@roomeyfinder.com">Support</Link>{" "}
        </li>
      </ul>
    </>
  )
}
