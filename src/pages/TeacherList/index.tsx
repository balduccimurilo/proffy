import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

// import Avatar2 from '../../assets/images/avatar-2.png';
// import Avatar3 from '../../assets/images/avatar-3.jpg';



import './styles.css';

function TeacherList() {
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="subject">Dia da semana</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="subject">Hora</label>
            <input type="text" id="subject" />
          </div>

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>   
  )
}

export default TeacherList;