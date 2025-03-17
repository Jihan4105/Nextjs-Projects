import Image from "next/image"
import SunIcon from "@public/icons/Sun-icon.png"

export default function Page() {
  return (
    <>
      <div>
        <div>
          <Image 
            src={SunIcon}
            alt="sun"
          />
        </div>
      </div>
    </>
  )
}