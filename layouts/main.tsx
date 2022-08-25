import React, { Children } from 'react'

type Layout = {
    children: React.ReactNode
}

const Main = ({children}:Layout) => {
    return (
        <>
            <div className='container mx-auto'>
                {children}
            </div>
        </>
    )
}

export default Main