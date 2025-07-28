import FaqsItems from "./Faqs/FaqsItems"

const Faqs = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Frequently asked questions
                    </h2>
                    <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700">
                        <div>
                            <FaqsItems question="What do you mean by 'Figma assets'?" answer="You will have access to download the full Figma project including
                                    all of the pages, the components, responsive pages, and also the
                                    icons, illustrations, and images included in the screens." />
                            <FaqsItems question="What does 'lifetime access' exactly mean?" answer="Once you have purchased either the design, code, or both packages,
                                    you will have access to all of the future updates based on the
                                    roadmap, free of charge." />
                            <FaqsItems question="How does support work?" answer="We're aware of the importance of well qualified support, that is why
                                    we decided that support will only be provided by the authors that
                                    actually worked on this project." />
                            <FaqsItems question="I want to build more than one project. Is that allowed?" answer="You can use Windster for an unlimited amount of projects, whether
                                    it's a personal website, a SaaS app, or a website for a client. As
                                    long as you don't build a product that will directly compete with
                                    Windster either as a UI kit, theme, or template, it's fine." />

                        </div>
                        <div>
                            <FaqsItems question="What does 'free updates' include?" answer="The free updates that will be provided is based on the roadmap
                                    that we have laid out for this project. It is also possible that we
                                    will provide extra updates outside of the roadmap as well." />
                            <FaqsItems question="What does the free version include?" answer="The free version
                                    of Windster includes a minimal style guidelines, component variants,
                                    and a dashboard page with the mobile version alongside it." />
                            <FaqsItems question="What is the difference between Windster and Tailwind UI?" answer="Although both Windster and Tailwind UI are built for integration
                                    with Tailwind CSS, the main difference is in the design, the pages,
                                    the extra components and UI elements that Windster includes." />
                            <FaqsItems question="Can I use Windster in open-source projects?" answer="Generally, it is accepted to use Windster in open-source projects,
                                    as long as it is not a UI library, a theme, a template, a
                                    page-builder that would be considered as an alternative to Windster
                                    itself.
                                    With that being said, feel free to use this design kit for your
                                    open-source projects." />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Faqs