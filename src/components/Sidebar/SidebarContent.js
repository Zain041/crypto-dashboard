import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="flex ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
        <img className="mr-2 w-16 h-18" src={require('../../assets/img/m.png')} /><span className="self-center">PolkaRhino Dashboard</span>
      </a>
      <ul className="mt-6">
        {routes.map((route) => {
          return (route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name === "Cards" ? "Recovery" : route.name}</span>
              </NavLink>
            </li>)
          )
          })}
          <li className="relative px-6 py-3 my-1">
          <a
                
                href="https://twitter.com/polkarhino"
                target="_blank"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
               
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
              
              <i class=" transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200  w-5 pt-1 pl-1 h-5  fab fa-twitter"></i>
                <span className="ml-4">Twitter</span>
              </a>

          </li>
          <li className="relative px-6 py-3 my-1">
          <a
                
                href="https://t.me/rhinobsc"
                target="_blank"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
               
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
              
              <i class=" transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200  w-5 pt-1 pl-1 h-5  fab fa-telegram-plane"></i>
                <span className="ml-4">Telegram</span>
              </a>

          </li>
          <li className="relative px-6 py-3 my-1">
          <a
                
                href="https://rhinobsc.com/"
                target="_blank"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
               
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
              
              <img  src={require('../../assets/img/m.png')} class=" transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200  w-6 pt-1 pl-1 h-6  "/>
                <span className="ml-4">Website</span>
              </a>

          </li>
      </ul>
    </div>
  )
}

export default SidebarContent
