import Image from "next/image";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Home() {
  return (
    <div className="container px-4 mx-auto flex flex-col">
      <header className="flex flex-row justify-between gap-6 h-[80px] py-4">
        <Link href="mailto:info@creativegeeks.co.ke" className="flex group flex-row gap-2 place-items-center text-[#EF801E] hover:text-[#EF801E]"><FaRegEnvelope  className="h-[18px] w-[18px]"/>
<span className="text-[#0A475C] group-hover:text-[#EF801E] text-base hidden sm:inline-block">info@creativegeeks.co.ke</span></Link>
        <Link href="tel:+254 728 429 252" className="flex group flex-row gap-2 place-items-center text-[#EF801E] hover:text-[#EF801E]"><MdOutlineLocalPhone className="h-[18px] w-[18px]"/>
<span className="text-[#0A475C] group-hover:text-[#EF801E] text-base hidden sm:inline-block">+254 728 429 252</span></Link>
      </header>
      <main>
        <section className="flex flex-col sm:flex-row justify-between mt-[100px]">
          <div className="text-center sm:text-left flex justify-start flex-col sm:justify-center">
          <figure><Image src="/imgs/logo.svg" alt="Creative geeks logo" width={89} height={70} className="inline-block"/></figure>
          <h2 className="text-[#EF801E] font-normal text-4xl mt-[30px]">We’re</h2>
          <h1 className="text-[#0A475C] font-black text-4xl">Launching Soon!</h1>
          <p className="text-black max-w-[460px] text-sm font-normal mt-[20px]">Our new website is coming soon, with a user-friendly experience. Stay tuned for the big reveal!</p>
          </div>
        <div className="flex justify-center sm:justify-end">
          <Image src="/imgs/coming.svg" alt="creative geeks coming soon iamge" width={657} height={416} className="inline-block" />
        </div>
        </section>
      </main>
      <footer>
        <h3>About Us:</h3>
      </footer>
    </div>
  );
}
