import clsx from "clsx"
import { IoMenuOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { CiPower } from "react-icons/ci";
import Link from "next/link"

export default function SideNav({ status }: {
  status: "hidden" | "show"
}) {
  return (
    <aside id="sidenav" className={clsx(
      "relative min-w-[270px] h-[calc(100vh-59.33px)] shadow-[0.3px_0_4px_0_rgba(0,0,0,0.25)]",
      {
        "hidden": status === "hidden",
        "block": status === "show",
      },
    )}>
      <ul>
        <li className="p-4 pt-8">
          <button className="cursor-pointer">
            <IoMenuOutline className="text-[25px]"/>
          </button>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#today" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <IoSunnyOutline className="text-[25px]" />
            <p>Today&apos;s Todo</p>
            <span className="pr-4">9</span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#importants" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <IoIosStarOutline className="text-[25px]" />
            <p>Importants</p>
            <span className="pr-4"></span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#schedule" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <IoCalendarOutline className="text-[25px]"/>
            <p>Schedule</p>
            <span className="pr-4">12</span>
          </Link>
        </li>
        <li className="hover:bg-stone-100">
          <Link href="#coworks" className="grid grid-cols-[3fr_11fr_2fr] p-4">
            <IoPeopleOutline className="text-[25px]"/>
            <p>Co-works</p>
            <span className="pr-4">11</span>
          </Link>
        </li>
        <hr className="w-[80%] justify-self-center text-[#E1DFDD] my-3"/>
        <li className="hover:bg-stone-100">
          <Link href="#signout" className="grid grid-cols-[3fr_13fr] p-4">
            <CiPower className="text-[25px]"/>
            <p>Sign Out</p>
          </Link>
        </li>
      </ul>
    </aside>
  )
}