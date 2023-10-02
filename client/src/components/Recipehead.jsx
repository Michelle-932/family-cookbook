import React from 'react'

function recipehead(){ 
    return (
        <div className="px-16 py-16  bg-gray-100 text-gray-800">
            <h2 className="mb-8 text-4xl font-bold leadi text-center">Search Recipes</h2>
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-blue-600">
                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span>Search Recipes</span>
                </li>
                <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-blue-600">
                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span>Search by Cuisine </span>
                </li>
                <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-blue-600">
                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span>Search by Contributor</span>
                </li>
                <li className="flex items-center space-x-2 max-w-xs">
                    {/* <div className="mx-auto max-w-xs"> */}
                        <select id="example1" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50">
                            <option value="">Option01</option>
                            <option value="">Option02</option>
                            <option value="">Option03</option>
                        </select>
                    {/* </div> */}
                </li>
                <li className="flex items-center space-x-2 max-w-xs">
                    {/* <div className="mx-auto max-w-xs"> */}
                        <select id="example1" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50">
                            <option value="">Main Dishes</option>
                            <option value="">Sides</option>
                            <option value="">Desserts</option>
                            <option value="">Instant Pot</option>
                            <option value="">Emergencies</option>
                        </select>
                    {/* </div> */}
                </li>
                <li className="flex items-center space-x-2 max-w-xs">
                    {/* <div className="mx-auto max-w-xs"> */}
                        <select id="example1" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50">
                            <option value="">Antoine</option>
                            <option value="">Barbara</option>
                            <option value="">Brenda</option>
                            <option value="">Cristal</option>
                            <option value="">Darren</option>
                            <option value="">David</option>
                            <option value="">Dennis</option>
                            <option value="">Derek S</option>
                            <option value="">Derrick W</option>
                            <option value="">Destiny</option>
                            <option value="">Dominique</option>
                            <option value="">Jocelyn</option>
                            <option value="">Lanette</option>
                            <option value="">Linda</option>
                            <option value="">Lois</option>
                            <option value="">Martha</option>
                            <option value="">Michelle</option>
                            <option value="">Opal</option>
                            <option value="">Raquel</option>
                            <option value="">Renee</option>
                            <option value="">Russell</option>
                            <option value="">Sheronda</option>
                            <option value="">Sylvester</option>
                            <option value="">Vivian</option>
                            <option value="">Yolanda</option>
                        </select>
                    {/* </div> */}
                </li>
            </ul>
        </div>
    )
}

export default recipehead