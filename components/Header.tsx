import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

interface DropDownContent {
    url: string,
    text: string
}

interface DropDownArguments {
    title: string,
    content: DropDownContent[]
}

const Header = () => {
  return (
    <div>
        <div className="top-header bg-slate-800 flex justify-around">
            <div className="phone p-3 text-white font-medium">
                <p className="text-green-600 inline-block">Phone</p> : (800) 123456789</div>
            <div className="left-top-header flex flex-row">
                <DropDownComponent 
                    title={'English'} 
                    content={[{
                        'text': 'French',
                        'url': '/'
                    }]}                    
                />
                <div className="currence p-3 text-white border-l-2 border-l-teal-500 border-opacity-50">USD</div>
                <div className="account p-3 text-white border-l-2 border-r-2 border-teal-500 border-opacity-50">My Account</div>
            </div>
        </div>
    </div>
  )
}

const DropDownComponent: FC<DropDownArguments> = ( {title, content }) => {
    return (
        <div>
            <div className="inline-block relative group">
                <div className="language p-3 text-white border-l-2 border-l-teal-500 border-opacity-50">
                    {title}
                </div>
                <div className="dropdown-content hidden absolute group-hover:block">
                    {
                        content.map((item, index) => (
                            <Link className='mt-3 pb-3 pr-4 pl-3 bg-slate-800 text-white' href={item.url}>{item.text}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header