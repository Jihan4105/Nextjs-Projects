import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import largeLogo from "@public/large-white-logo.png";
import vectorDown from "@public/form-vector-down.svg";
import vectorUp from "@public/form-vector-up.svg";

export default function Page() {
  return (
    <main className="grid place-items-center relative top-0 left-0 w-[100vw] h-[100vh] bg-gradient-to-b from-[#ED6BD6] to-[#9769C9] px-[7%] md:px-[120px] py-[76.5px]">
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
      <div className="relative z-[1] w-[100%] h-[100%] flex sm:display-none bg-amber-50 rounded-[22px] p-11">
        {/* <div>
          <Image 
            src={largeLogo}
            alt="Logo"
            width={233}
            height={70}
          />
          <h1>Welcome</h1>
          <p>Sign in to continue access</p>
          <div></div>
          <div></div>
          <div></div>
          <span>www.example.com</span>
          <Image 
            src={vectorUp}
            alt="vectorUp"
          />
          <Image 
            src={vectorDown}
            alt="vectorDown"
          />
        </div> */}
        <form className="flex flex-col items-center w-full">
          <h1 className="text-[45px] font-bold mb-[36px]">Sign In</h1>
          <div className="bg-gradient-to-r from-[#8353C1] to-[#E136C0] pb-[1px] w-full mb-5">
            <input 
              className="w-full py-3 bg-[#FFFBEB] outline-none"
              type="text" 
              id="email" 
              name="email" 
              placeholder="Email Address"
            />
          </div>
          <div className="bg-gradient-to-r from-[#8353C1] to-[#E136C0] pb-[1px] w-full mb-[57px]">
            <input 
              className="w-full py-3 bg-[#FFFBEB] outline-none"
              type="password" 
              id="password" 
              name="password" 
              placeholder="Password"
            />
          </div>
          <button className="relative bg-gradient-to-r from-[#8353C1] to-[#E136C0] w-full py-3.5 font-extralight tracking-[2px] text-white">
            <span>CONTINUE</span>
            <FontAwesomeIcon
              className="absolute right-[5%] top-[50%] translate-y-[-50%]"
              icon={faChevronRight} 
            />
          </button>
          <p>Or Connect with</p>
          <button>
            <FontAwesomeIcon icon={faGoogle} />
            Sign In With Google
          </button>
        </form>
      </div>
    </main>
  );
}
