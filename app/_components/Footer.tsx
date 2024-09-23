import Link from "next/link"
import XIcon from "../_icons/X"
import InstagramIcon from "../_icons/Instagram"
import LinkedInIcon from "../_icons/LinkedInIcon"
import FacebookIcon from "../_icons/FacebookIcon"

export default function Footer() {
  return (
    <footer className="flex gap-6 flex-wrap flex-col-reverse md:flex-row md:items-center justify-start md:justify-between text-[14px] border-t border-t-solid border-t-[#ddd] py-6 w-[90dvw] mx-auto max-w-[1500px]">
      <div className="flex gap-1 md:gap-6 flex-wrap items-center justify-start">
        <span className="w-full sm:w-[auto]">
          © 2024 Roomeyfinder, Inc. All rights reserved
        </span>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          href="https://roomeyfinder.com/terms-and-conditions"
        >
          Terms and conditions
        </a>
        <a
          className="flex md:ml-0 ml-6 items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          href="https://roomeyfinder.com/privacy"
        >
          Privacy
        </a>
      </div>

      <ul className="flex items-center justify-start gap-3">
        <Link
          href="https://x.com/roomeyfinder"
          target="_blank"
          className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
        >
          <XIcon />
        </Link>
        <Link
          href="https://instagram.com/roomeyfinder"
          target="_blank"
          className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/company/roomeyfinder"
          target="_blank"
          className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://web.facebook.com/profile.php?id=61558566416460"
          target="_blank"
          className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
        >
          <FacebookIcon />
        </Link>
      </ul>
    </footer>
  )
}
