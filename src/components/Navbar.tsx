import Menu from "./Navbar/Menu"

const Navbar = () => {
    return (
        <>

            <nav className="border-gray-200 bg-white dark:bg-gray-900">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                            Abu Hammad
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <Menu />
                </div>
            </nav>


        </>
    )

}

export default Navbar