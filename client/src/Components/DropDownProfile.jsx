import React from 'react'

const DropDownProfile = () => {
    return (
        <div className='flex flex-col dropdown'>
            <ul className='flex flex-col gap-4'>
                <li className='hover:bg-gray-400 block pl-2 py-1 rounded-md'>Profile</li>
                <li className='hover:bg-gray-400 block pl-2 py-1 rounded-md'>Settings</li>
                <li className='hover:bg-gray-400 block pl-2 py-1 rounded-md'>Logout</li>
            </ul>
        </div>
    )
}

export default DropDownProfile