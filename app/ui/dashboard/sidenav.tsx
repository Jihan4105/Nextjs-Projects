import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-regular-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faPowerOff } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function SideNav() {
  return (
    <aside className="hidden w-[320px] h-[calc(100vh-59.33px)] shadow-[0.3px_0_4px_0_rgba(0,0,0,0.25)]">
      <ul>
        <li className="p-4 pt-8">
          <button className="cursor-pointer">
            <FontAwesomeIcon
              className="text-[25px]"
              icon={faBars}
            />
          </button>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#today" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <FontAwesomeIcon 
              className="text-[25px]"
              icon={faSun}
            />
            <p>Today&apos;s Todo</p>
            <span className="pr-4">9</span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#importants" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <FontAwesomeIcon 
              className="text-[25px]"
              icon={faStar}
            />
            <p>Importants</p>
            <span className="pr-4"></span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#schedule" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <FontAwesomeIcon 
              className="text-[25px] ml-0.5"
              icon={faCalendarDays}
            />
            <p>Schedule</p>
            <span className="pr-4">12</span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#coworks" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <FontAwesomeIcon 
              className="text-[25px]"
              icon={faUsers}
            />
            <p>Co-works</p>
            <span className="pr-4">11</span>
          </Link>
        </li>
        <hr className="w-[80%] justify-self-center text-[#E1DFDD] my-3"/>
        <li className="hover:bg-stone-100">
          <Link href="#signout" className="grid grid-cols-[3fr_13fr] p-4">
            <FontAwesomeIcon 
              className="text-[25px]"
              icon={faPowerOff}
            />
            <p>Sign Out</p>
          </Link>
        </li>
      </ul>
    </aside>
  )
}