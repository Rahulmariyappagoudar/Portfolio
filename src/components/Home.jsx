import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants'; 
import Background from './Background';
import Footer from './Footer';

const Home = () => {
    const [text, setText] = useState('');
    const index = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index.current < name.length) {
                setText((prev) => prev + name[index.current]);
                index.current += 1;
            } else {
                clearInterval(interval);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-0 bg-black w-screen h-screen">
            <Background />
            <div className="hero flex justify-center items-center text-white h-full">
                <div className="pt-4 h-36 backdrop-blur-sm rounded-3xl text-center">
                    <h1 className="text-6xl sm:text-7xl font-extrabold mt-2">
                        Hi, I'm <span className="text-yellow-200">{text}</span>
                    </h1>
                    <p className="mt-3 text-xl">
                        I am a passionate Data Analyst and Visualization Enthusiast, exploring the world of data and building impactful insights.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
