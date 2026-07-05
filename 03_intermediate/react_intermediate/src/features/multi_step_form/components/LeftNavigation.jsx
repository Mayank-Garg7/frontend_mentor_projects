import React from 'react'
import tabs from '../../../mock/steps.json'

const LeftNavigation = () => {
    return (
        <div
            className="w-72 h-137.5 p-8 text-white rounded-xl"
            style={{
                backgroundImage: "url('/bg-sidebar-desktop.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <ul className="space-y-10">
                {tabs.map(item => (
                    <li className="flex flex-row gap-3 items-center" key={item.id}>
                        <span className="border rounded-full flex items-center justify-center h-8 w-8">{item.id}</span>
                        <div className="flex flex-col">
                            <div className="text-gray-400">{item.title}</div>
                            <p className="text-white font-semibold">{item.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeftNavigation
