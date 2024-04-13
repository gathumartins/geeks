import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function NewsLetter() {
  return (
    <form className="flex flex-row ring-1 justify-start rounded-3xl ring-[#158EB8] bg-white">
        <input type="email" name="email" id="email" className="flex-grow rounded-l-3xl py-2 px-3 bg-transparent ring-transparent shadow-none focus:border-none focus:shadow-none focus-within:shadow-none focus:ring-0 focus-within:ring-0" required placeholder="Enter your email.."/>
        <div className='group flex flex-row gap-2 place-items-center p-[9px] text-white bg-[#158EB8] rounded-3xl cursor-pointer hover:bg-[#EF801E]'>
            <input type="submit" value="Notify Me" />
            <FaArrowRightLong className="animate-pulse" />
        </div>
    </form>
  )
}

export default NewsLetter