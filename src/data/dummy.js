import React from 'react';
import { GrLocation } from 'react-icons/gr';
import {AiOutlineHome} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {BiHelpCircle} from "react-icons/bi"
import {BiSearchAlt} from "react-icons/bi"
import {FiTarget} from "react-icons/fi"

export const links = [
    {
      title: 'Main',
      links: [
        {
          name: 'home',
          icon: <AiOutlineHome />,
        },
        {
          name: 'scan',
          icon: <BiSearchAlt/>,
        },
        {
          name: 'All Targets',
          icon: <FiTarget/>,
        },
        {
          name: 'Vulnerabilities',
          icon: <BiSearchAlt/>,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'Profile',
          icon: <CgProfile/>,
        },
        {
          name: 'About Us',
          icon: <AiOutlineInfoCircle />,
        },
        {
          name: 'Contact',
          icon: <AiOutlineMail />,
        },
        {
          name: 'help',
          icon: <BiHelpCircle />,
        },
        

      ],
    },
]

  export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];