import {AiFillGithub,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

//import Image from 'next/image'

const Sidebar=()=> {
    return (
        <div>
            <img
            src='https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg'
            alt='user avatar'
            className="w-48 h-48 mx-auto rounded-full"/>
            <h3 className="my-4 text-3xl tracking-wider font-small font-kaushan">
                <span className="text-blue">
                Sara
                </span>
                <br />
                   Elin
                 
                
            
            </h3>
            <p className="px-2 py-1 my-3 bg-blue-100 rounded-full">Technology WoMan</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-blue-100 rounded-full"><GiTie className="w-6 h-6" />Download My Resume</a>
            {/*//social icons address */}
            <div className="flex mx-auto my-5 text-blue-500 justify-evenly">
                <a href="">
                    <AiFillYoutube className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="">
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>
            {/*//address */}
            <div className="py-4 my-5 bg-blue-100" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Tofargan,Iran</span>
                </div>
                <p className='my-2'>Sara-Elin@gmail.com</p>
                <p className='my-2'>+989141234567</p>
                <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue to-purple-500 focus:outline-none' 
                onClick={()=>window.open('mailto:mrbarazi.97@gmail.com')}>Email Me</button>
                <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue to-purple-500'>Light UI</button>
            </div>
        </div>
    )
}

export default Sidebar
