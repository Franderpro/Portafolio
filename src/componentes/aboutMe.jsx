    import React from 'react';
    import '../index.css';
import CardLumma from './cardLumma';
import CardGui from './cardGui';
    
    //import '../styles/aboutMe.css';

    const AboutMe = () => {
      return (
        <section id="about" className="min-h-screen py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex justify-center items-center">
                <img
                  src="/img/perfil.jpeg"
                  alt="Mi foto de perfil"
                  className="rounded-full w-64 h-64 object-cover shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-800">¡Hola! Soy Frander Rodriguez Lopez</h3>
                <p className="text-xl text-gray-600">
                  Desarrollador Full Stack Junior recién graduado, entusiasta por aprender y crecer en el mundo del desarrollo
                </p>
                <div className="flex gap-4">
                    <a href="/CV/Frander-Rodriguez-curriculum-2025.pdf" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Descargar CV</a>
                    <button 
                      onClick={() => document.getElementById('contactModal').showModal()}
                      className="px-6 py-3 border-2 border-blue-700 text-blue-700 rounded-lg"                    >
                      Contacto
                    </button>

                    <dialog id="contactModal" className="p-8 rounded-lg shadow-xl backdrop:bg-gray-500/50">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Información de Contacto</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:franderrl@gmail.com" className="text-blue-600 hover:underline">rfrander11@gmail.com</a>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-gray-700">+506 6025-7520</span>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            <a href="https://www.instagram.com/frander.rodrig?igsh=MTdmeHVhc2w1djd2Mg==" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@ frander.rodrig</a>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            <a href="https://www.linkedin.com/in/frander-rodriguez/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Frander Rodriguez Lopez</a>
                          </div>
                        </div>

                        <button 
                          onClick={() => document.getElementById('contactModal').close()}
                          className="mt-6 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                        >
                          Cerrar
                        </button>
                      </div>
                    </dialog>

                  </div>
                <p className="text-gray-800">
                  Como desarrollador junior, tengo una sólida base en tecnologías web modernas como
                  React, Tailwind, CSS, MySQL, Django y Supabase. Estoy ansioso por aplicar mis conocimientos,
                  aprender de desarrolladores más experimentados y contribuir con nuevas perspectivas a proyectos
                  innovadores.
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-gray-800">Mis Habilidades</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Tailwind</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">React</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Supabase</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">CSS</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">MySQL</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Django</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Liderazgo</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Creatividad</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Frontend</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Backend</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Resolución de Problemas</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Gestión del tiempo</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Adaptabilidad</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Análisis competitivo</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Inteligencia Emocional</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-gray-800">Sobre mí </h4>
                  <p className="text-gray-600">
                    Fuera del ámbito profesional, soy un apasionado del baile artístico, habiendo alcanzado el título de campeón mundial en la categoría grupal. Disfruto de actividades al aire libre como caminatas y visitas a la playa. Como profesional recién graduado, mantengo un firme compromiso con el aprendizaje continuo y estoy entusiasmado por contribuir activamente a la comunidad de desarrollo de software.
                  </p>
                
                </div>              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
              justifyContent: 'center', 
              gap: '20px', 
              marginTop: '30px',
              alignItems: 'center'
            }}>
              <CardLumma />
              <CardGui />
            </div>
          </div>
        </section>
      );

    }        
    export default AboutMe;