import GridBox from "./Features/GridBox"
import SectionHeader from "./SectionHead"

const featuresData = [
    {
        title: "Marketing",
        description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan."
    },
    {
        title: "Legal",
        description: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you."
    },
    {
        title: "Business Automation",
        description: "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started."
    },
    {
        title: "Finance",
        description: "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."
    },
    {
        title: "Enterprise Design",
        description: "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration."
    },
    {
        title: "Operations",
        description: "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual."
    }
]

const sectionTitle = [
    {
        heading: "Designed for business teams like yours",
        subHeading: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    }
]


const Features = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                    {
                        sectionTitle.map((section) => (
                            <SectionHeader
                                heading={section.heading}
                                subHeading={section.subHeading}
                            />
                        ))
                    }
                    <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                        {
                            featuresData.map((feature) => (
                                <GridBox
                                    key={feature.title}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Features