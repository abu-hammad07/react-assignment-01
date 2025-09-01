import { useEffect, useState } from "react"
import BlogBox from "./Blogs/BlogBox"
import SectionHeader from "./SectionHead"

const sectionTitle = [
    {
        heading: "Blogs",
        subHeading: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    }
]


const Blogs = () => {

    const [blogs, setBlog] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => setBlog(data.products.slice(0, 12)))
    }, []);


    console.log(blogs);


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
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map(({ id, title, thumbnail, description }) => (
                            <BlogBox
                                key={id}
                                title={title}
                                shortDescription={description}
                                url={`/products/${id}`}
                                image={thumbnail}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs