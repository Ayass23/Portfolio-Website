'use client'

import Button from "@/components/buttons/Button";
import ButtonLink from "@/components/links/ButtonLink";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12  ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl mb-4 lg:text-6xl font-extrabold"> <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-pink-600">Hello, I'm</span>
            <br />
            <TypeAnimation
              sequence={[
                'Andreas Margono',
                3000,
                ' Andreas Margono',
                3000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: '0.9em' }}
              repeat={Infinity}
            /></h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem quidem voluptas enim, voluptatem ipsum ipsa corporis fugit dignissimos tempore id distinctio odio rerum laboriosam quisquam provident, magnam aut excepturi!
          </p>
          <div className="mt-6 ">
            <ButtonLink
              variant='primary'
              href='https://theodorusclarence.com'
              className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white border border-none"
            >
              <span className="w-full">See My Project :)</span>

            </ButtonLink>
            <ButtonLink
              variant='outline'
              href='https://theodorusclarence.com'
              className="px-1 py-1 rounded-full w-full sm:w-fit mt-3 bg-gradient-to-br  hover:bg-slate-800 from-blue-500 via-purple-500 to-pink-500  text-white border border-none"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 w-full">Download CV</span>

            </ButtonLink>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-5 lg:mt-0" >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  lg:rounded-full relative " >
            <Image src="/images/ayas.png" alt="Ayas" width={300} height={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  " />
          </div>
        </div>
      </div></section>
  )
}

export default HeroSection;