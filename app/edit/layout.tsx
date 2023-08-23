"use client"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const path = usePathname();
  return (
    <main className="flex w-full">
      <div className="w-full sm:w-3/12">
        tabs
      </div>
      <div className="w-full sm:w-9/12">
        {children}
      </div>
    </main>
  )
}