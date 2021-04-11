import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
// import { Image } from '../next.config'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
        <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
            {/* left */}
              <div className='flex space-x-4 items-center'>
                <p className='link'>About</p>
                <p className='link'>Store</p>
              </div>
            {/* right */}
            <div className='flex space-x-4 items-center'>
              <p className='link'>Gmail</p>
              <p className='link'>Images</p>
               {/* icon */}
            <ViewGridIcon className='w-10 p-2 h-10 rounded-full hover:bg-gray-100 cursor-pointer'/>
            

            {/* Avatar */}
            <Avatar url='https://mpng.subpng.com/20190227/exp/kisspng-logo-computer-icons-scalable-vector-graphics-clip-filemcdonaldampapossshadow-svg-wikipedia-5c775acd244151.2332977515513259011485.jpg'/>
            </div>

           
        </header>
      {/* body */}
          <form className='flex flex-col items-center mt-44 flex-grow b-6 '>
             <img
                src='https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' width={300} height={300}
             />
             <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-5 items-center sm:max-w-xl
             lg:max-w-2xl '>
                <SearchIcon className='h-5 mr-3 text-gray-500'/>
                <input type="text" className='focus:outline-none flex-grow'/>
                <MicrophoneIcon className='h-5'/>
             </div>

             <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
                <button className='btn'>Google Search</button>
                <button className='btn'>I'm Feeling Lucky</button>
             </div>
          </form>

      {/* footer */}
      <h1 className=''>Let's build google with Next.JS and Tailwind</h1>

    </div>
  )
}
