import React from 'react';
import Projects from './Projects';
import Contact from './Contact'
import Moon from '../components/Moon';

const Home = () => {
  return (
    <div className="space-y-32">
      {/* Sección "Sobre mí" */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-8 md:mb-0 md:mr-8">
            <Moon />
          </div>
          <div className="w-7/12 text-center md:text-left">
            <h1 className="text-2xl text-indigo-200 font-light p-2 m-4">
              Hola, soy Christian Ramirez, desarrollador frontend con experiencia en la creación de aplicaciones web y móviles. Me especializo en el diseño y maquetado de interfaces, utilizando tecnologías como React, React Native, Tailwind CSS y Bootstrap. Además, tengo habilidades en la integración de backend utilizando Node.js y MongoDB, así como en la gestión de versiones con Git y GitHub. Mi objetivo es crear soluciones intuitivas y eficientes, enfocándome en la experiencia del usuario y la calidad del código.
            </h1>
          </div>
        </div>
      </section>
      
      {/* Sección "Proyectos" */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>
      
      {/* Sección "Contacto" */}
      <section id="contact" className=" max-h-[400px] flex items-center justify-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
