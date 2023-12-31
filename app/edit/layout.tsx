"use client"
import { Button } from "@/components/ui";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
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

  const TabRef = <TabsList className="flex w-full flex-col h-fit items-start rounded-xl py-6 px-0">
      {
        tabs.map((tab) => <TabsTrigger
          key={Math.random()}
          value={tab}
          onClick={() => router.push(`/edit/${tab}`)}
          className={`${type.split("/")[2] === tab ? "border-l-4 border-stone-950" : ""} !bg-transparent !shadow-none sm:my-2`}>
          <Image src={"/chrome.svg"} width={15} height={15} className={`${(type.split("/")[2] === tab ? "opacity-100" : "opacity-20")} mr-2`} alt="chrome" />
          <span>{tab[0].toUpperCase() + tab.slice(1)}</span>
        </TabsTrigger>)
      }
    </TabsList>

  return (
    <main className="flex w-full h-screen mt-3 sm:mt-16 flex-col sm:flex-row">
      <Tabs defaultValue={type.split("/")[2]} className="sm:block w-full sm:w-3/12 hidden">
        {TabRef}
      </Tabs>
      <Sheet>
        <SheetTrigger asChild className="sm:hidden">
          <Button className="bg-white m-0" size="icon">
            <ChevronRight color="#000000" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Tabs defaultValue={type.split("/")[2]} className="w-full mt-6">
            {TabRef}
          </Tabs>
        </SheetContent>
      </Sheet>
      <div className="w-full sm:w-9/12 h-fit">
        {children}
      </div>
    </main >
  )
}