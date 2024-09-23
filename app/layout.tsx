import { Inter, Lora, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#f7f7f7]">
      <body className={`${inter.className} antialiased text-[#222]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
