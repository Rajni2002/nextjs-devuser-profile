"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"

const tabs: string[] = ["profile", "socials", "portfolio", "resume"]

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const type = usePathname();
  const router = useRouter();


  return (
    <main className="flex w-full h-screen mt-3 sm:mt-16 flex-col sm:flex-row">
      <Tabs defaultValue={type.split("/")[2]} className="w-full sm:w-3/12">
        <TabsList className="flex w-full flex-row sm:flex-col h-fit items-start rounded-xl sm:py-6 px-0">
          {
            tabs.map((tab) => <TabsTrigger
              key={Math.random()}
              value={tab}
              onClick={() => router.push(`/edit/${tab}`)}
              className={`${type.split("/")[2] === tab ? "sm:border-l-4 border-stone-950" : ""} !bg-transparent !shadow-none sm:my-2`}>
              <Image src={"/chrome.svg"} width={15} height={15} className={`${(type.split("/")[2] === tab ? "opacity-100" : "opacity-20")} mr-2`} alt="chrome" />
              <span>{tab[0].toUpperCase() + tab.slice(1)}</span>
            </TabsTrigger>)
          }
        </TabsList>
      </Tabs>
      <div className="w-full sm:w-9/12">
        {children}
      </div>
    </main>
  )
}