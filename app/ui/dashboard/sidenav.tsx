import Image from "next/image"
import SunIcon from '@public/icons/Sun-icon.png'
import MenuIcon from "@public/icons/menu-icon.png"
import StarIcon from "@public/icons/star-icon.png"
import CalendarIcon from "@public/icons/tearOffCalender-icon.png"
import UserIcon from "@public/icons/user-icon.png"
import PowerIcon from "@public/icons/power-icon.png"
import Link from "next/link"

export default function SideNav() {
  return (
    <aside className="hidden relative min-w-[270px] h-[calc(100vh-59.33px)] shadow-[0.3px_0_4px_0_rgba(0,0,0,0.25)]">
      <ul>
        <li className="p-4 pt-8">
          <button className="cursor-pointer">
            <Image 
              src={MenuIcon}
              alt="menu-icon"
            />
          </button>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#today" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <Image 
              src={SunIcon}
              alt="sun-icon"
            />
            <p>Today&apos;s Todo</p>
            <span className="pr-4">9</span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#importants" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <Image 
              src={StarIcon}
              alt="star-icon"
            />
            <p>Importants</p>
            <span className="pr-4"></span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#schedule" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <Image 
              src={CalendarIcon}
              alt="calendar-icon"
            />
            <p>Schedule</p>
            <span className="pr-4">12</span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#coworks" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <Image 
              src={UserIcon}
              alt="user-icon"
            />
            <p>Co-works</p>
            <span className="pr-4">11</span>
          </Link>
        </li>
        <hr className="w-[80%] justify-self-center text-[#E1DFDD] my-3"/>
        <li className="hover:bg-stone-100">
          <Link href="#signout" className="grid grid-cols-[3fr_13fr] p-4">
            <Image 
              src={PowerIcon}
              alt="power-icon"
            />
            <p>Sign Out</p>
          </Link>
        </li>
      </ul>
    </aside>
  )
}