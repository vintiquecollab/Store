import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Shopping from "../shopping/Card";
// import {
//   ChevronDownIcon,
//   PhoneIcon,
//   PlayCircleIcon,
//   RectangleGroupIcon,
// } from "@heroicons/react/20/solid";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/vintique.png";
import Dropdown from "../../UI/DropDown";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Accessoires
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Phone
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Animals
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Bain & Beauté
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Bijoux
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Bébé
      </a>
    ),
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-white shadow-lg">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="mt-2 border-t border-gray-200 ">
                  <h2 className="text-lg font-bold mb-6 px-4 pt-4">
                    Categories
                  </h2>
                  {items.map((item) => (
                    <div key={item.key} className="px-4 pb-4">
                      <div className="grid grid-cols-1 items-start gap-x-6">
                        <div className="grid grid-cols-1 gap-x-6">
                          <div>
                            <ul
                              role="list"
                              aria-labelledby={`mobile-featured-heading-${item.key}`}
                              className=""
                            >
                              <li className="flex">{item.label}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Contact
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {/* Currency selector */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-[#eab308]">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <div className="hidden lg:block lg:flex-1"></div>

              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Get free delivery on orders over $100
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Create an account
                </a>
                <span className="h-6 w-px bg-white" aria-hidden="true" />
                <a
                  href="#"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img className="h-[100px] w-auto" src={logo} alt="" />
                    </a>
                  </div>
                  <div className="flex lg:hidden">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Search Bar */}
                  <div className="flex justify-center items-center flex-1 lg:justify-center">
                    <Dropdown />

                    <div className="w-full max-w-xs lg:max-w-md">
                      <label htmlFor="search" className="sr-only">
                        Que cherchez-vous ?
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 text-[#eab308]"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full pl-6 pr-10 py-2 border border-[#eab308] rounded-full focus:outline-none focus:ring-indigo-500 focus:border-[#eab308] placeholder-gray-500 sm:text-sm"
                          placeholder="Que cherchez-vous ?"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Profile and Cart */}
                  <div className="flex items-center">
                    {/* Profile */}
                    <div className="mr-4 lg:flex lg:ml-6">
                      <a
                        href="#"
                        className="-m-2 p-2 text-gray-800 hover:text-gray-500"
                      >
                        <span className="sr-only">Account</span>
                        <UserIcon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </div>

                    {/* Cart */}
                    <div className=" lg:flex lg:ml-4">
                      <a
                        href="#"
                        className="-m-2 p-2  text-gray-800 hover:text-gray-500"
                      >
                        <span className="sr-only">Cart</span>
                        <ShoppingCartIcon
                          onClick={toggleDialog}
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    <Shopping isOpen={isDialogOpen} onClose={toggleDialog} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
