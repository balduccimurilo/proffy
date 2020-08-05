import React from 'react';

import Avatar1 from '../../assets/images/avatar-1.webp';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () =>{
  return(
    <main>
        <article className="teacher-item">
          <header>
            <img src={Avatar1} alt="Avatar 1"/>
            <div>
              <strong>Avatar1</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório 
            e por mudar a vida das pessoas através de experiências.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 80,00</strong>

            </p>

            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
  )
}

export default TeacherItem;