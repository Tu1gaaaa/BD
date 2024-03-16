import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert'

const Contact = () => {
  const formRef = useRef(null);
  const [form,setForm] = useState ({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Энхтулга",
        from_email: form.email,
        to_email: "enkhtulga210@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({show:true, text: 'Амжилттай илгээгдлээ', type: 'success'})

      setTimeout(() => {
        hideAlert();
        setForm({name: '', email: '', message: ''});
      }, [3000])
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      showAlert({show:true, text: 'Таны мэйлийг хүлээж авч чадсангүй', type: 'danger'})
    })
  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert}/> }
      
      
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Холбоо барих</h1>

        <form 
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Нэр
            <input 
            type='text' name='name' className='input' 
            placeholder='Батаа' required value={form.name} 
            onChange={handleChange} onFocus={handleFocus} 
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            И-Мэйл
            <input 
            type='email' name='email' className='input' 
            placeholder='Bataa@gmail.com' required value={form.email} 
            onChange={handleChange} onFocus={handleFocus} 
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Агуулга
            <textarea
            name='message' className='textarea' rows={4}
            placeholder='Танд юугаар туслах вэ?' required 
            value={form.message} 
            onChange={handleChange} onFocus={handleFocus} 
            onBlur={handleBlur}
            />
          </label>
          <button
          type='submit' className='btn' disabled={isLoading}
          onFocus={handleFocus} onBlur={handleBlur}
          >
            {isLoading ? 'Илгээж байна...' : 'Илгээх'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact