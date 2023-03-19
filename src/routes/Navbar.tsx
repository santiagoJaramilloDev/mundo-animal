import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MapIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { routes } from "./routes";

export const Navbar = () => {

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const logout = () => {
    setIsSignedIn(!!isSignedIn)
  };
  
  return (
    // <Disclosure as="nav" className="bg-grey-dkt-800">
    <Disclosure
      as="nav"
      className="bg-gray-800"
      style={{ position: "fixed", top: "0", width: "100%", zIndex: "1000" }}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-700">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <Link className="flex-shrink-0" to="/">
                    <img
                      className="h-10"
                        src="assets/images/logo-mp.png"
                      alt="Workflow"
                    />
                  </Link>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {routes.map(
                        (item) =>
                          item.navBarNavigation && (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              className={({ isActive }) =>
                                (item.style ? "bg-indigo-500 " : "") +
                                "px-3 py-2 rounded-md text-sm font-medium " +
                                (isActive
                                  ? "border-b bg-gray-900 text-white"
                                  : "text-white hover:bg-gray-700 hover:text-white")
                              }
                            >
                              {item.name}
                            </NavLink>
                          )
                      )}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  {isSignedIn ? (
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <div className="h-10 w-10 text-white text-lg font-bold bg-indigo-400 rounded-full flex justify-center items-center">
                              {`Santiago Jaramillo`}
                            </div>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {routes.map(
                              (item) =>
                                item.userNavigation && (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <NavLink
                                        to={item.path}
                                        className={() =>
                                          "block px-4 py-2 text-sm text-gray-700 " +
                                          (active ? "bg-gray-100" : "")
                                        }
                                      >
                                        {item.name}
                                      </NavLink>
                                    )}
                                  </Menu.Item>
                                )
                            )}
                            <button
                              onClick={logout}
                              type="button"
                              className="block px-4 py-2 text-sm text-gray-700 lg:w-full flex-col hover:bg-gray-100"
                            >
                              CERRAR SESIÓN
                            </button>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  ) : (
                    <div className="flex items-center md:ml-12">
                      <Link
                        to="register"
                        className="text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Regístrate
                      </Link>
                      <Link
                        to="login"
                        className="ml-3 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600"
                      >
                        Inicia sesión
                      </Link>
                    </div>
                  )}
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MapIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="border-b border-gray-700 md:hidden">
            <div className="px-2 py-3 space-y-1 sm:px-3">
              {routes.map(
                (item) =>
                  item.navBarNavigation && (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        (item.style ? "bg-orange-dkt-400 " : "") +
                        "block px-3 py-2 rounded-md text-base font-medium " +
                        (isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white")
                      }
                    >
                      <Disclosure.Button>{item.name}</Disclosure.Button>
                    </NavLink>
                  )
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              {isSignedIn ? (
                <>
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 text-white text-lg bg-indigo-400 rounded-full flex justify-center items-center">
                        {`Santiago Jaramillo`}
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {`Santiago Jr`}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {`santi.06.22@gmail.com`}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {routes.map(
                      (item) =>
                        item.userNavigation && (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                          >
                            <Disclosure.Button>{item.name}</Disclosure.Button>
                          </NavLink>
                        )
                    )}
                    <button
                      onClick={logout}
                      type="button"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      CERRAR SESIÓN
                    </button>
                  </div>
                </>
              ) : (
                <div className="mt-6">
                  <Link
                    to="login"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-500"
                  >
                    Inicia sesión
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-300">
                    ¿No tienes cuenta?{" "}
                    <Link
                      to="register"
                      className="text-grey-dkt-100 hover:text-indigo-500"
                    >
                      Regístrate
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
