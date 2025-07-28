interface SocialProps {
    title: string,
    url: string
    icon: React.ReactNode,
}

const Social: React.FC<SocialProps> = ({ title, url, icon }) => {
    return (
        <>
            <a
                href={url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="sr-only">{title}</span>
                {icon}
            </a>
        </>
    )
}

export default Social