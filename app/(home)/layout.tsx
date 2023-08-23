"use client"
import { Button } from "@/components/ui"
import Chip from "@/components/ui/chip"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const path = usePathname();
  return (
    <>
      <header className="sm:mx-auto mt-10 rounded-2xl overflow-hidden sm:w-9/12 w-full border border-gray-200">
        <div className="w-full sm:h-[15rem] h-32 relative" >
          <Image
            alt='Cover'
            src="/image/Rectangle.png"
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className="w-full flex sm:flex-row flex-col h-fit mb-6">
          <div className="sm:w-2/12 w-full flex justify-center items-center mb-20">
            <Image
              className="rounded-full sm:relative sm:bottom-28 absolute"
              src={"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"}
              alt="Avtr" width={100} height={100} />
          </div>
          <div className="sm:w-10/12 w-full p-2">
            <h1 className="text-2xl font-bold">Anna Cheng
              <span className="text-sm px-2 py-1 bg-[#BEF264] rounded text-green-800 mx-3">Pro</span>
              <span className="text-sm px-2 py-1 bg-[#E0F2FE] rounded text-[#075985]">Looking for job</span>
            </h1>
            <p className="mt-3 text-gray-400 font-light">Full stack dev at codedamn | Harvard’22”</p>
            <p className="mt-3 text-gray-300 font-light">
              <span>
                <Image className="inline mr-1" src="/location.svg" width={15} height={15} alt="location" />
              </span>
              <span>Mumbai, India</span>
            </p>
            <div className="my-8">
              {["HTML 5", "CSS 3"].map((item) => (<Chip key={Math.random()}>{item}</Chip>))}
            </div>
            <hr />
            <div className="flex justify-between items-center mt-10">
              <div>
                {["google", "Instagram", "LinkedIn", "youtube"].map((item) =>
                  <Button key={Math.random()} className="mx-2" variant="outline" size="icon">
                    <Image className="" src={`/${item}.svg`} width={15} height={15} alt={item} />
                  </Button>)}
              </div>
              {path === "/profile" ?
                <div>
                  <Button className="mx-2" variant="secondary" size="icon">
                    <Image src="/save-2.svg" width={15} height={15} alt="save" />
                  </Button>
                  <Button>
                    Contact
                  </Button>
                </div> : <Button className="h-full" variant="secondary">Follow</Button>}
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  )
}