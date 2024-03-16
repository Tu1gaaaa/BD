import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from  '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link> 
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue 
    py-4 px-8 text-white mx-5'>
      Сайн уу, миний нэрийг <span className='font-semibold'>Энхтулга</span>👋
      <br />
      Их Засаг Их Сургуулийн оюутан.
    </h1>
  ),
  2: (
    <InfoBox 
      text = "Хэд хэдэн тэмцээнд өрсөлдөн амжилт үзүүлж байсан мөн цөөнгүй чадвар эзэмшсэн."
      link="/about"
      btnText="Илүү ихийг харах"
    />
  ),
  3: (
    <InfoBox 
      text = "Миний хийсэн бүтээлүүд"
      link="/projects"
      btnText="Бүтээлүүд"
    />
  ),
  4: (
    <InfoBox 
      text = "Надтай холбогдох"
      link="/Contact"
      btnText="Холбогдох"
    />
  ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo