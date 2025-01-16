    import React from 'react';
    //import '../styles/aboutMe.css';

    const AboutMe = () => {
      return (
        <section id="about" className="about-section">
          <div className="container">
            <h2 className="title">Sobre Mí</h2>
            <div className="about-grid">
              <div className="about-image-container">
                <img
                  src="/profile-image.jpg"
                  alt="Mi foto de perfil"
                  className="profile-image"
                />
              </div>
              <div className="about-content">
                <h3>¡Hola! Soy Frander Rodriguez Lopez</h3>
                <p className="lead-text">
                  Desarrollador Full Stack Junior recién graduado, entusiasta por aprender y crecer en el mundo del desarrollo
                </p>
                <p>
                  Como desarrollador junior, tengo una sólida base en tecnologías web modernas como
                  React, Tailwind, CSS, MySQL, Django y Supabase. Estoy ansioso por aplicar mis conocimientos,
                  aprender de desarrolladores más experimentados y contribuir con nuevas perspectivas a proyectos
                  innovadores.
                </p>
                <div className="skills-section">
                  <h4>Mis Habilidades</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Tailwind</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Supabase</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">Django</span>
                  </div>
                </div>
                <div className="personal-info">
                  <p>
                    Fuera del código, disfruto Bailar(competi en baile llegando a obtener el titulo de campeon mundial en categoria grupo), Salir a caminar, Ir a la playa. Como recién graduado,
                    estoy comprometido con el aprendizaje continuo y emocionado por formar parte
                    de la comunidad de desarrolladores.
                  </p>
                  <div className="cta-buttons">
                    <button className="button primary">Descargar CV</button>
                    <button className="button secondary">Contactar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    }
    export default AboutMe;