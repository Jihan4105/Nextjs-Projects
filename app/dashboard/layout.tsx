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
        <div>
          { children }
        </div>
      </div>
    </main>
  )
}