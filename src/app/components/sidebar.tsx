'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, PenToolIcon as Tool, Calendar, Activity, Lock, Puzzle, Globe } from 'lucide-react'

const menuItems = [
  {
    title: 'Tools',
    icon: <Tool className="mr-2 h-4 w-4" />,
    submenu: [
      { title: 'Captcha', icon: <Lock className="mr-2 h-4 w-4" />, link: '/tools/captcha' },
      { title: 'Solver', icon: <Puzzle className="mr-2 h-4 w-4" />, link: '/tools/solver' },
      { title: 'Proxy', icon: <Globe className="mr-2 h-4 w-4" />, link: '/tools/proxy' },
    ],
  },
  {
    title: 'Booking',
    icon: <Calendar className="mr-2 h-4 w-4" />,
    submenu: [
      {
        title: 'Fetcher',
        items: ['T1', 'T2', 'T3', 'O1', 'O2', 'O3', 'F1', 'F2', 'F3', 'R2', 'R3', 'C1', 'C2', 'C3', 'M1', 'M2', 'M3', 'A1', 'A2', 'A3']
      },
      {
        title: 'Logger',
        items: ['T1', 'T2', 'T3', 'O1', 'O2', 'O3', 'F1', 'F2', 'F3', 'R2', 'R3', 'C1', 'C2', 'C3', 'M1', 'M2', 'M3', 'A1', 'A2', 'A3']
      },
      {
        title: 'Manager',
        items: ['T1', 'T2', 'T3', 'O1', 'O2', 'O3', 'F1', 'F2', 'F3', 'R2', 'R3', 'C1', 'C2', 'C3', 'M1', 'M2', 'M3', 'A1', 'A2', 'A3']
      }
    ],
  },
  {
    title: 'Monitoring',
    icon: <Activity className="mr-2 h-4 w-4" />,
    submenu: ['Performance', 'Alerts', 'Reports'],
  },
]

export function Sidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({})
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({})

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({ ...prev, [title]: !prev[title] }))
  }

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <div className="w-64 bg-gray-100 h-full p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <nav>
        {menuItems.map((item) => (
          <div key={item.title} className="mb-4">
            <button
              onClick={() => toggleMenu(item.title)}
              className="flex items-center justify-between w-full text-left px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              <span className="flex items-center">
                {item.icon}
                {item.title}
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${openMenus[item.title] ? 'rotate-180' : ''}`} />
            </button>
            {openMenus[item.title] && (
              <div className="mt-2 pl-4">
                {item.submenu.map((subItem: any) => (
                  <div key={subItem.title || subItem} className="mb-2">
                    {subItem.link ? (
                      <Link
                        href={subItem.link}
                        className="flex items-center w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                      >
                        {subItem.icon}
                        {subItem.title}
                      </Link>
                    ) : subItem.items ? (
                      <>
                        <button
                          onClick={() => toggleSubMenu(subItem.title)}
                          className="flex items-center justify-between w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                        >
                          <span>{subItem.title}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform ${openSubMenus[subItem.title] ? 'rotate-180' : ''}`} />
                        </button>
                        {openSubMenus[subItem.title] && (
                          <div className="mt-1 pl-4">
                            {subItem.items.map((nestedItem: string) => (
                              <Link
                                key={nestedItem}
                                href={`/booking/${subItem.title.toLowerCase()}/${nestedItem.toLowerCase()}`}
                                className="block px-4 py-2 text-xs text-gray-600 hover:bg-gray-200 rounded-md"
                              >
                                {nestedItem}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md"
                      >
                        {subItem}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

