import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Ажлын санал байна уу? <br className='sm:block hidden'/>
        </p>
        <Link to="/contact" className="btn">
            Холбогдох
        </Link>
    </section>
  )
}

export default CTA