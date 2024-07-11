import React from 'react';
import Testimonials from './Testimonials';

const Success = () => {
    const projects = [
        {
            img: 'https://d382vuhe6yd0tq.cloudfront.net/wp-content/uploads/2023/10/custom-website-development.webp',
            title: 'Digital Transformation Initiative',
            description: `
                Spearheaded a comprehensive digital transformation initiative 
                for a leading organization in the tourism sector. The project aimed to 
                enhance their online presence and user engagement through innovative 
                digital solutions.`,
            achievements: `
                Our team successfully connected global audiences with Canada's natural wonders 
                and cultural heritage, fostering appreciation for the country's unique identity.`,
        },
        {
            img: 'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
            title: 'E-commerce Platform Enhancement',
            description: `
                Implemented significant enhancements to an e-commerce platform, 
                optimizing performance and user experience.`,
            achievements: `
                Achieved a 30% increase in conversion rates and improved user satisfaction 
                through streamlined checkout processes and personalized product recommendations.`,
        },
        {
            img: 'https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png',
            title: 'Mobile App Development',
            description: `
                Developed a cutting-edge mobile application tailored for real-time 
                tracking and management of logistics operations.`,
            achievements: `
                Enabled seamless operations with a 20% reduction in logistics handling time 
                and enhanced transparency across the supply chain.`,
        },
    ];

    return (
        <section id="testimonials" className="px-small px-md  px-large bg-primary-bg md:py-32 py-14">
            <div className="">
                <h2 className='text-5xl sm:text-6xl lg:text-7xl leading-none font-semibold tracking-tight  text-white'>
                <span className='text-underline-static'>Success</span> Stories
                </h2>
                <p className="text-md md:text-2xl my-4 text-white">
                View some of our recent projects and the impact we've had on our clients.
                </p>



                <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group relative h-[400px] lg:h-[500px] xl:h-[600px] [perspective:1000px] rounded-lg"
                        >
                            <div className="absolute inset-0 w-full  transition-all duration-200 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
                                {/* Front side */}
                                <div className="absolute inset-0  [backface-visibility:hidden] flex flex-col bg-primary-bg-hover rounded-lg">
                                    <div className="md:h-1/2  h-1/4 ">
                                        <img src={project.img} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-t-lg" />
                                    </div>
                                    <div className="p-6 lg:p-8 flex flex-col justify-evenly h-1/2">
                                        <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 line-clamp-2 text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm lg:text-base text-white line-clamp-4 lg:line-clamp-6">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Back side */}
                                <div className="absolute inset-0  [transform:rotateY(180deg)] [backface-visibility:hidden] bg-text-accent text-white p-6 lg:p-8 flex flex-col justify-center rounded-lg">
                                    <h4 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Achievements:</h4>
                                    <p className="text-sm lg:text-base line-clamp-6 lg:line-clamp-8">
                                        {project.achievements}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <Testimonials /> */}

            </div>
        </section>
    );
};

export default Success;