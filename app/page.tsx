import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import largeLogo from "@public/large-white-logo.png";
import vectorDown from "@public/form-vector-down.svg";
import vectorUp from "@public/form-vector-up.svg";

export default function Page() {
  return (
    <main className="grid place-items-center relative top-0 left-0 w-[100vw] h-screen bg-gradient-to-b from-[#ED6BD6] to-[#9769C9] px-[7%] md:px-[120px] lg:px-[280px] xl:px-[120px] py-[60px] sm:py-[35px] select-none">
      <svg className="absolute left-0 bottom-0 sm:w-[581px] sm:h-[564px] h-[281px] w-[290px]" viewBox="0 0 581 564" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M148 148C40.4 93.6 4.5 26.6667 0 0V564H580.5C580.833 532.833 558.3 447.3 465.5 354.5C349.5 238.5 282.5 216 148 148Z" fill="url(#paint0_linear_6_7)"/>
        <defs>
        <linearGradient id="paint0_linear_6_7" x1="290.252" y1="0" x2="290.252" y2="564" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BB42C3"/>
        <stop offset="1" stopColor="#8753C1"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-0 top-0 sm:w-[581px] sm:h-[564px] h-[281px] w-[290px]" viewBox="0 0 581 564" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M432.504 416C540.104 470.4 576.004 537.333 580.504 564V0H0.00366211C-0.329651 31.1667 22.2037 116.7 115.004 209.5C231.004 325.5 298.004 348 432.504 416Z" fill="url(#paint0_linear_6_8)"/>
        <defs>
        <linearGradient id="paint0_linear_6_8" x1="290.252" y1="0" x2="290.252" y2="564" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EE36CD"/>
        <stop offset="1" stopColor="#B346C2"/>
        </linearGradient>
        </defs>
      </svg>

      {/* Sign up */}
      <div className="relative z-[1] w-[100%] h-[100%] flex xl:grid xl:grid-cols-2 sm:display-none bg-amber-50 rounded-[22px] max-w-[1200px] shadow-2xl">
        <div className="relative bg-[#5C228F] rounded-bl-[22px] rounded-tl-[22px] p-10 text-[white] hidden xl:block">
          <Image 
            src={largeLogo}
            alt="Logo"
            width={233}
            height={70}
          />
          <h1 className="absolute top-[35%] left-[50%] text-[50px] translate-x-[-50%] font-semibold">Welcome</h1>
          <p className="absolute top-[45%] left-[50%] font-light">Sign in to<br/>continue access</p>
          <div className="w-[130px] h-[130px] rounded-[50%] bg-gradient-to-l from-[#7A15D2] to-[#24B3D6] absolute right-50"></div>
          <div className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-b from-[#A6129E] to-[#6026AE] absolute top-[44%] left-[20%]"></div>
          <div className="w-[55px] h-[55px] rounded-[50%] bg-gradient-to-b from-[#A6129E] to-[#6026AE] absolute bottom-[10%] right-[10%]"></div>
          <span className="absolute bottom-10 z-[2] font-semibold text-[20px] left-15">www.example.com</span>
          <Image 
            className="absolute top-0 right-0"
            src={vectorUp}
            alt="vectorUp"
          />
          <Image 
            className="absolute rounded-bl-[22px] left-0 bottom-0"
            src={vectorDown}
            alt="vectorDown"
          />
        </div>
        <form className="flex flex-col items-center w-full p-11 md:p-14">
          <h1 className="text-[42px] sm:text-[45px] font-bold mb-[5px] sm:mb-[36px] xl:self-start">Sign In</h1>
          <div className="bg-gradient-to-r from-[#8353C1] to-[#E136C0] pb-[1px] w-full mb-5">
            <input 
              className="w-full py-3 bg-[#FFFBEB] outline-none h-full"
              type="text" 
              id="email" 
              name="email" 
              placeholder="Email Address"
            />
          </div>
          <div className="bg-gradient-to-r from-[#8353C1] to-[#E136C0] pb-[1px] w-full mb-[45px] sm:mb-[57px]">
            <input 
              className="w-full py-3 bg-[#FFFBEB] outline-none"
              type="password" 
              id="password" 
              name="password" 
              placeholder="Password"
            />
          </div>
          <button className="relative bg-gradient-to-r from-[#8353C1] to-[#E136C0] w-full py-3.5 font-extralight tracking-[2px] text-white mb-[40px] sm:mb-[51px] cursor-pointer">
            <span>CONTINUE</span>
            <FontAwesomeIcon
              className="absolute right-[5%] top-[50%] translate-y-[-50%] text-2xl"
              icon={faChevronRight} 
            />
          </button>
          <p className="text-[#c7c7c7] mb-[40px] sm:mb-[51px]">Or Connect with</p>
          <button className="flex justify-center items-center w-full py-3.5 text-white bg-gradient-to-r from-[#D40015] to-[#FF5E66] cursor-pointer">
            <FontAwesomeIcon 
              className="mr-2 text-2xl"
              icon={faGoogle} 
            />
            Sign In With Google
          </button>
          <button className="flex justify-center items-center w-full py-3.5 text-white bg-gradient-to-r from-[#707070] to-[#8F8F8F] cursor-pointer mt-[27px]">
            <FontAwesomeIcon 
              className="mr-2 text-2xl"
              icon={faUser} 
            />
            Sign Up As User
            <ion-icon name="home-outline"></ion-icon>
          </button>
        </form>
      </div>
    </main>
  );
}
