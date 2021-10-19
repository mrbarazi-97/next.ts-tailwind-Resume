import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return(
  <div className="grid grid-cols-12 gap-6 lg:px-24 my-14 sm:px-20 md:px-32">
      <div className='col-span-12 p-4 text-center bg-white rounded-lg lg:col-span-3'><Sidebar/></div>
      <div className='flex flex-col col-span-12 p-4 text-center bg-white rounded-lg lg:col-span-9' >
        <Navbar/><Component {...pageProps} /></div>
  </div>
  )
}

export default MyApp
