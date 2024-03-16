import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in mind ? <br className='sm:block hidden'/>
        Lets build something</p>
        <Link to="/contact" className="btn">
            Холбогдох
        </Link>
    </section>
  )
}

export default CTA