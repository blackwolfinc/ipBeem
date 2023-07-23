import { Body } from '@/components/Body'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="background w-full flex justify-center relative">
      {/* background */}
      <div className='image_background_home absolute w-full h-[2600px] bg-slate-400  mx-auto top-0'> </div>

      
      <header className='absolute w-full'>
        <Header />
      </header>
      <Body />
    </main>
  )
}
