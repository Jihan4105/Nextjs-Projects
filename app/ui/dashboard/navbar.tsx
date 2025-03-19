"use client"

import Image from "next/image"
import Link from "next/link"
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Logo from "@public/small-white-logo.png"
import { GoBell } from "react-icons/go";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#9000FF',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#A534F8',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#9000FF',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

export default function Navbar() {
  return (
    <nav className="bg-[#AC4AF8] py-1 px-2 flex items-center text-white justify-between">
      <div>
        <Link href={`/dashboard`}>
          <Image 
            src={Logo}
            alt="Logo"
            width={180}
          />
        </Link>
      </div>
      <div className="justify-self-start hidden md:block">
        <div className="bg-white rounded-[5px] py-1 h-[32px] px-1.5 min-w-[243px] lg:min-w-[400px] cursor-pointer ">
          <input 
            className="outline-none text-black"
            type="text" 
            id="search-input" 
            name="search-input" 
          />
        </div>
      </div>
      <ul className="flex gap-[1px] sm:gap-[10px] items-center">
        <li className="relative sm:mr-0 mr-2">
          <button className="cursor-pointer w-[40px] h-[40px] rounded-[50%] hover:bg-[#9000FF] transition delay-30 ease grid place-items-center">
            {/* <FontAwesomeIcon 
              className="text-[25px]"
              icon={faBell}
            /> */}
            <GoBell className="text-[25px]"/>
            <div className="absolute top-[7px] right-[2px] sm:right-[-1px] text-[9px] bg-red-500 rounded-[6.7px] grid place-items-center w-[20px] border-red-500">
              <span>9+</span>
            </div>
          </button>
        </li>
        <li className="block">
          <span className="text-nowrap text-[13px] cursor-pointer hover:underline">한국어</span>
        </li>
        <li className="block">
          <MaterialUISwitch sx={{ m: 1 }} defaultChecked/>
        </li>
        <li>
          <div className="rounded-[50%] overflow-hidden w-[45px] h-[45px] bg-[url(/profile-sample.jpg)] bg-cover bg-center">
          </div>
        </li>
      </ul>
    </nav>
  )
}