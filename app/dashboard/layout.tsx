import SideNav from "@ui/dashboard/sidenav";
import Navbar from "@ui/dashboard/navbar";

export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <SideNav />
        <div className="bg-[#FAF9F8] w-full h-[calc(100vh-59.33px)] p-5 sm:p-10">
          { children }
        </div>
      </div>
    </main>
  )
}