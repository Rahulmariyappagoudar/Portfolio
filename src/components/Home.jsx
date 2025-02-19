import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Background from './Background';
import Footer from './Footer';

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');

   useEffect(() => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < name.length) {
      setText((prev) => prev + name[index]);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 500);
  return () => clearInterval(interval);
}, []);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);  // No dependencies to prevent unwanted resets

    return (
        <div className='area relative z-0 bg-black w-screen h-screen'>
            {/* Background Circles */}
            <ul className="circles">
                {[...Array(10)].map((_, i) => <li key={i}></li>)}
            </ul>

            {/* Hero Section */}
            <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
                <div className='pt-4 min-h-[10rem] rounded-3xl'>
                    <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
                        Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span>
                    </h1>
                    <p className='mt-3 text-xl'>
                        I am a passionate Data Analyst and Visualization Enthusiast, exploring the world of data and building impactful insights.
                    </p>
                </div>      
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}

export default Home;
