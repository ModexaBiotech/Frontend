import Image from "next/image"
import illustration from "../assets/hero1.png"
import playstore from "../assets//playstore.svg"
import appstore from "../assets/6467932_apple_appstore_icon.svg"


// This is the hero section on the main page


const Hero1 = () => {
  return (
    <div className="w-full bg-gradient-custom h-[600px] items-center m-[70px] justify-center gap-[10px]  flex bg-light-green lg:flex-row flex-col lg:mt-[150px] mt-[90px]">
      <div className="left-section  lg:mt-[-50px]">
        <h1 className="text lg:text-[60px] lg:mt-[-150px] font-medium ">Instant <span className="text-green">Medical</span> Healthcare Anywhere</h1>
        <div className="download1 mt-[30px] flex flex-col gap-5">
          <h3 className=" text-[18px]">Install the app</h3>

          <div className="flex gap-10">
            <div className="flex gap-5 justify-center rounded-md items-center bg-black-main w-[220px] h-[70px]">
              <Image alt="appstore" width={40} height={40} src={playstore} />
              <div className="flex flex-col">
                <p className="text-white font-light text-[14px]">GET IT ON</p>
                <p className="text-white font-bold text-[18px]">Google Play</p>
              </div>
            </div>
            <div className="flex gap-5 justify-center rounded-md items-center bg-black-main w-[220px] h-[70px]">
              <Image alt="appstore" width={40} height={40} src={appstore} />
              <div className="flex flex-col">
                <p className="text-white font-light text-[14px]">Download on </p>
                <p className="text-white font-bold text-[18px]">App Store</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="second-section lg:mt-[-50px]">
        <Image alt="illustration" src={illustration} />
      </div>
    </div>
  )
}

export default Hero1

