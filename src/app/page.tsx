import Image from "next/image";
import Link from "next/link";
import { FaRegEnvelope,FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";





export default function Home() {
  const myDate = new Date();
  return (
    <div className="container px-4 mx-auto flex flex-col min-h-screen place-content-around">
      <header className="flex flex-row justify-between gap-6 h-[50px] py-4">
        <Link href="mailto:info@creativegeeks.co.ke" className="flex group flex-row gap-2 place-items-center text-[#EF801E] hover:text-[#EF801E]"><FaRegEnvelope  className="h-[18px] w-[18px]"/>
<span className="text-[#0A475C] group-hover:text-[#EF801E] text-base hidden sm:inline-block font-normal">info@creativegeeks.co.ke</span></Link>
        <Link href="tel:+254 728 429 252" className="flex group flex-row gap-2 place-items-center text-[#EF801E] hover:text-[#EF801E]"><MdOutlineLocalPhone className="h-[18px] w-[18px]"/>
<span className="text-[#0A475C] group-hover:text-[#EF801E] text-base hidden sm:inline-block font-normal">+254 728 429 252</span></Link>
      </header>
      <main className="my-[50px] sm:my-[80px]">
        <section className="flex flex-col sm:flex-row justify-between gap-7">
          <div className="text-center sm:text-left flex justify-start flex-col sm:justify-center">
          <div><Image src="/imgs/logo2.svg" alt="Creative Geeks logo" width={89} height={70} className="inline-block"/></div>
          <h2 className="text-[#EF801E] font-normal text-4xl mt-[30px]">We’re</h2>
          <h1 className="text-[#0A475C] font-black text-4xl">Launching Soon!</h1>
          <p className="text-black max-w-[420px] mx-auto sm:mx-0 text-sm font-normal mt-[20px]">Our new website is coming soon, with a user-friendly experience. Stay tuned for the big reveal!</p>
          </div>
        <div className="flex justify-center sm:justify-end">
          <Image src="/imgs/coming.svg" alt="creative geeks coming soon iamge" width={657} height={416} className="inline-block w-[70%] sm:w-[100%]" loading="lazy" decoding="async" />
        </div>
        </section>
      </main>
      <footer className="py-4">
        <h3 className="text-base text-[#EF801E] font-medium text-center sm:text-left mb-3">About Us:</h3>
        <div className="border-t-[1px] border-solid border-[#158EB8] flex  flex-col sm:flex-row justify-between gap-5 place place-items-center pt-5">
          <nav className="flex justify-center sm:justify-between gap-4">
            <Link href="https://twitter.com/creageeks" target="_blank" title="twitter x">
              <FaXTwitter className="w-[22px] h-[22px] text-[#0A475C] hover:text-[#EF801E]"/>
            </Link>
            <Link href="https://www.facebook.com/creageeks" target="_blank" title="facebook">
              <AiOutlineFacebook className="w-[22px] h-[22px] text-[#0A475C] hover:text-[#EF801E]"/>
            </Link>
            <Link href="https://www.instagram.com/creageeks16/" target="_blank" title="instagram">
              <FaInstagram className="w-[22px] h-[22px] text-[#0A475C] hover:text-[#EF801E]"/>
            </Link>
            <Link href="https://www.linkedin.com/in/creageeks/" target="_blank" title="Linkedin">
              <FaLinkedinIn className="w-[22px] h-[22px] text-[#0A475C] hover:text-[#EF801E]"/>
            </Link>
          </nav>
          <p className="text-[#0A475C] text-sm font-normal text-center sm:text-right">Copyright &copy; {myDate.getFullYear()} Creative Geeks Limited. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
