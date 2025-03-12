export default function Page() {
  return (
    <main className="grid place-items-center relative top-0 left-0 w-[100vw] h-[100vh] bg-gradient-to-b from-[#ED6BD6] to-[#9769C9] px-[120px] py-[76.5px]">
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
      <div className="relative z-[1] w-[100%] h-[100%] flex sm:display-none bg-amber-50">
        hello!
      </div>
    </main>
  );
}
