import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return (
        <div className='w-full h-20 bg-[#181741]'>
            <div className='container mx-auto flex justify-between items-center h-full '>
                <div className='flex text-2xl text-white font-bold'>
                    <span className='text-yellow-500'>DAO</span>
                        LOTTORY
                </div>
                <ConnectButton/>
            </div>
        </div>
    )
}

export default Navbar