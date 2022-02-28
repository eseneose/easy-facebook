import React from 'react'
import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    
} from '@heroicons/react/solid';
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,

} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        <h1>Header</h1>
        {/*left side*/}
        <div className='flex items-center'>
            <Image
                src="https://links.papareact.com/5me"
                width={40}
                height={40}
                layout="fixed"
                alt="picture"/>
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon  className="h-6 text-gray-600"/>
                <input
                type='text'
                placeholder="Search Facebook"
                className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
                 />
            </div>    
        </div>

        {/*Middle section */}
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon icon={HomeIcon} />
                <HeaderIcon icon={FlagIcon} />
                <HeaderIcon icon={PlayIcon} />
                <HeaderIcon icon={ShoppingCartIcon} />
                <HeaderIcon icon={UserGroupIcon} />
            </div>
        </div>

        {/*Right*/}
        <div className='flex items-center sm:space-x-2 justify-end'>
            {/*Profile pic goes here*/}
            
            <p className='whitespace-nowrap font-semibold pr-3'>Esene Ose</p>
            <ViewGridIcon className='icon' />

            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <ChevronDownIcon className='icon' />
        </div>

    </div>
  )
}

export default Header