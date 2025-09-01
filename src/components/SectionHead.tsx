interface SectionHeaderProps {
    heading: string,
    subHeading?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({heading, subHeading}) => {
    return (
        <>
            <div className="mb-8 max-w-screen-md lg:mb-16">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {heading}
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                    {subHeading}
                </p>
            </div>
        </>
    )
}

export default SectionHeader