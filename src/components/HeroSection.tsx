import Link from "next/link"
import { Spotlight } from "./ui/spotlight"
import { Button } from "./ui/moving-border";
function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>
      <div className="p-4 relative z-10 w-full text-center">
        <h1>Maser the art of music.</h1>
        <p>Fjfmknf gf dgh gf gh ghcghjdxgjfxjfxjgjdxfhngfm fxgjfnmc fgfxhcnnn cv dmdg. sfndg jdnjdmgm ghdgfhddhxf fjgfjdgsffdf df df fh  hdf hcg hdg hdjdhffsh gfdtghd g fc </p>
        <div className="mt-4">
            <Link href={'/courses'}>
            <Button borderRadius="1.75rem" className='bg-white dark:bg-black text-black dark:text-white vorder-neutral-200 dark:border-slate-800'>

                Explore Courses
            </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
