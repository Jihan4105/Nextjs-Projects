"use client"

import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Logo from "@public/small-white-logo.png"

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#9000FF',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    backgroundColor: "#AC4AF8",
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#9000FF',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));

export default function Navbar() {


  return (
    <nav className="bg-[#AC4AF8] py-1 px-2 flex justify-between items-center ">
      <div>
        <Link href={`/dashboard`}>
          <Image 
            src={Logo}
            alt="Logo"
            width={153}
            height={34}
          />
        </Link>
      </div>
      <div className="bg-white rounded-[5px] py-1 px-1.5">
        <FontAwesomeIcon 
          className="mr-2"
          icon={faMagnifyingGlass}
          flip="horizontal"
          color="#AC4AF8"
        />
        <input 
          className="outline-none"
          type="text" 
          id="search-input" 
          name="search-input" 
        />
      </div>
      <ul className="flex gap-[15px] items-center">
        <li className="relative">
          <FontAwesomeIcon 
            icon={faBell}
          />
          <div className="absolute">
            9+
          </div>
        </li>
        <li>
          <span>한국어</span>
        </li>
        <li>
          <IOSSwitch sx={{ m: 1 }} />
        </li>
        <li>
          <div>

          </div>
        </li>
      </ul>
    </nav>
  )
}