import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-regular-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"

export default function SideNav() {
  return (
    <aside className="w-[340px] flex flex-col">
      <ul>
        <li className="p-4 pt-8">
          <button>
            <FontAwesomeIcon
              className="text-[25px]"
              icon={faBars}
              
            />
          </button>
        </li>
        <li className="p-4 flex justify-between items-center hover:bg-stone-100">
          <div className="flex">
            <FontAwesomeIcon 
              className="text-[25px] mr-3"
              icon={faSun}
            />
            <p>Today&apos;s Todo</p>
          </div>
          <span>9</span>
        </li>
        <li className="p-4 flex justify-between items-center hover:bg-stone-100">
          <div className="flex">
            <FontAwesomeIcon 
              className="text-[25px] mr-3"
              icon={faStar}
            />
            <p>Importants</p>
          </div>
          <span></span>
        </li>
        <li className="p-4 flex justify-between items-center hover:bg-stone-100">
          <div className="flex">
            <FontAwesomeIcon 
              className="text-[25px] mr-3"
              icon={faCalendarDays}
            />
            <p>Schedule</p>
          </div>
          <span>12</span>
        </li>
        <li className="p-4 flex justify-between items-center hover:bg-stone-100">
          <div className="flex">
            <FontAwesomeIcon 
              className="text-[25px] mr-3"
              icon={faUsers}
            />
            <p>Today&apos;s Todo</p>
          </div>
          <span></span>
        </li>
      </ul>
    </aside>
  )
}