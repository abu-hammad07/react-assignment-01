const menuList = ["About", "Services", "Pricing", "Contact"]

const Menu = () => {

    return (
        <>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
                    <li>
                        <a
                            href="#"
                            className="block rounded-sm bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700
                            dark:text-white md:dark:text-blue-500"
                            aria-current="page"
                        >
                            Home
                        </a>
                    </li>
                    {
                        menuList.map((menu) => (
                            <li key={menu}>
                                <a
                                    href="#"
                                    className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent
                                     md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                                      md:dark:hover:text-blue-500"
                                >
                                    {menu}
                                </a>
                            </li>
                        ))
                    }
                    {/* <li>
                        <a
                            href="#"
                            className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >
                            Contact
                        </a>
                    </li> */}
                </ul>
            </div>

        </>
    )

}


export default Menu