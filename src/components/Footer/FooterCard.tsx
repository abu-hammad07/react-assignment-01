interface FooterCardProps {
    title: string,
    links: {
        label: string,
        href: string
    }[];
}

const FooterCard: React.FC<FooterCardProps> = ({ title, links }) => {
    return (
        <>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    {title}
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                    {links.map((link, index) => (
                        <li key={index} className="mb-4">
                            <a href={link.href} className="hover:underline">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FooterCard