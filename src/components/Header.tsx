import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//  image
import logoImage from "@/img/logo.png"



interface IPropsHeader {
  data?: any
}


export const Header = (props: IPropsHeader) => {
  return (
    <div className='w-full py-[45px]  flex justify-center  z-50 '>
      {/* container */}
      <div className='container w-full flex justify-between items-center'>
        {/* logo */}
        <div className='flex flex-1'>
          <Image className='w-[60px]' alt="image Logo " src={logoImage}/>
        </div>
        {/* link for router */}
        <div className='flex flex-1 space-x-[45px] text-[20px] justify-center' >
          <Link href={"#"} >
            About Us
          </Link>
          <Link href={"#"} >
            Solutions
          </Link>
          <Link href={"#"} >
            Privacy
          </Link>
        </div>
        {/* Button Solutions */}
        <div className='flex flex-1 justify-end'>
          <button className='btn-trial bg-gradient-to-bl from-[#F5F5F7]/0 to-[#F5F5F7]/30'>START FREE TRIAL</button>
        </div>
      </div>
    </div>
  )

}
