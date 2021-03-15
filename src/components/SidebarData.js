import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FcIcons.FcAbout />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdContact />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <HiIcons.HiTemplate />,
        cName: 'nav-text'
    }
]
