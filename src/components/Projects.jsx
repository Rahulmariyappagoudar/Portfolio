import React from "react";
import automatic from '../assets/automatic.png';
import sugarcane from '../assets/sugarcane.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="w-full sm:w-[300px] min-h-[450px] sm:h-[450px] bg-gray-900 border border-neutral-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <a href="#">
                <img className="w-full h-[180px] object-cover rounded-t-lg" src={image} alt={title} />
            </a>
            <div className="p-4 flex-grow">
                <a href="#">
                    <h5 className="text-lg font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className='m-2 flex justify-between items-end'>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className='text-[12px] text-blue-500'>
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 hover:text-green-500 duration-300">
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black py-12">
            <div className="flex flex-wrap gap-7 justify-center items-center m-4 sm:m-12 p-4 sm:p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Automatic Report Generator',
        description: 'A report generator using Google Gemini API in different languages and templates, frameworks using Streamlit.',
        image: automatic,
        git: 'https://github.com/Rahulmariyappagoudar/Automatic-report-generator',
        technologies: ['Python', 'API integration', 'NLP', 'Generative AI', 'Streamlit']
    },
    {
        title: 'Sugarcane leaf disease detection',
        description: 'This project is a machine learning-based approach to detect diseases in sugarcane leaves. It uses a ResNet50 model for classification.',
        image: sugarcane,
        git: "https://github.com/Rahulmariyappagoudar/sugarane-leaf-disease-detection",
        technologies: ['Machine learning', 'Python', 'Flask', 'Tensorflow', 'Keras']
    }
];

export default Projects;
