import SideNav from "@ui/dashboard/sidenav";
import Navbar from "@ui/dashboard/navbar";

export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbar />
      <SideNav />
      <div>
        { children }
      </div>
    </main>
  )
}