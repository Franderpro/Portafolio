
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function ModalContacto({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contacto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>
          </div>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+1234567890">+123 456 7890</a>
          </div>

          <div className="social-links">
            <a href="https://instagram.com/usuario" target="_blank" rel="noopener noreferrer" className="social-item">
              <FaInstagram className="social-icon" />
              <span>@usuario</span>
            </a>

            <a href="https://linkedin.com/in/usuario" target="_blank" rel="noopener noreferrer" className="social-item">
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>

      <style jsx>{`
        .contact-info {
          padding: 1rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .contact-icon {
          margin-right: 1rem;
          color: #666;
        }
        .social-links {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .social-item {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #333;
          transition: color 0.3s ease;
        }
        .social-item:hover {
          color: #007bff;
        }
        .social-icon {
          margin-right: 1rem;
        }
      `}</style>
    </Modal>
  );
}

export default ModalContacto;
