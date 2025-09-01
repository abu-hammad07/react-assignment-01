import FooterCard from "./Footer/FooterCard";
import Social from "./Footer/Social"
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const footerData = [
    {
        title: "Resources",
        links: [
            { label: "Flowbite", href: "https://flowbite.com/" },
            { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
            { label: "React", href: "https://reactjs.org/" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Press", href: "/press" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help Center", href: "/help" },
            { label: "Contact Us", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy" },
        ],
    },
];


const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="https://hammadkamal.com/" className="flex items-center">
                                <img
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    className="me-3 h-8"
                                    alt="FlowBite Logo"
                                />
                                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                                    Abu Hammad
                                </span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
                            {footerData.map((section, index) => (
                                <FooterCard key={index} title={section.title} links={section.links} />
                                ))}
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2025
                            <a href="https://hammadkamal.com/" className="hover:underline"> Abu Hammad</a>
                            . All Rights Reserved.
                        </span>
                        <div className="mt-4 flex sm:mt-0 sm:justify-center">
                            <Social
                                title="Facebook"
                                url="https://facebook.com/"
                                icon={<FaFacebook className="h-5 w-5" />}
                            />
                            <Social
                                title="Twitter"
                                url="https://twitter.com/"
                                icon={<FaTwitter className="h-5 w-5" />}
                            />
                            <Social
                                title="LinkedIn"
                                url="https://linkedin.com/in/abu-hammad"
                                icon={<FaLinkedin className="h-5 w-5" />}
                            />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer