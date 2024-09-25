import notFound from "../images/error.svg"
import Image from "next/image"

export default function ErrorFile() {
  return (
    <div className="min-h-[80dvh] px-4 flex gap-2 text-center justify-center items-center flex-col">
      <Image src={notFound} alt="" />
      <p className="text-[22px] font-[600] mt-[-42px]">OOPS!</p>
      <p className="text-[16px] max-w-[40ch]">
        An unknown error occurred. Please refresh the page.
      </p>
    </div>
  )
}
