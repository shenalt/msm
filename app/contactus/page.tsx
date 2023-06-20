'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs(){
    const form = useRef<HTMLFormElement | null>(null)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [sender, setSender] = useState('options');

    const showToastMessage = (isSuccess: boolean) => {
        if(isSuccess){
            toast.success('Message Sent Successfully!', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            toast.error('Error occurred!', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, e.currentTarget, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
          .then((result) => 
          {
            showToastMessage(true)
          }, (error) => {
            showToastMessage(false)
            console.log(error.text)
          });
          setName('');
          setEmail('');
          setMessage('');
          e.currentTarget.reset()
    };

    return(
        <div className="z-10 w-full flex flex-col">
            <ToastContainer />
            <div className='flex flex-col items-center justify-center'>
            <h1 className="m-8 text-xl">Prospective players, game designers, press outlets, fans, buds, or anyone else can contact us by filling out the form below!</h1>
                <form className='w-11/12 xl:w-2/4 border m-8 p-8 rounded-lg bg-msmYellow' autoComplete='off' ref={form} onSubmit={sendEmail}>
                    <div className="form-control items-center justify-center my-4">
                        <label htmlFor='name' className="label">
                            <span className="label-text">Name</span>
                        </label> 
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name='name'
                            id='name'
                            className={`input input-bordered w-full sm:w-3/4 lg:w-3/5 text-neutral-900 placeholder:text-neutral-50 ${name === '' ? 'bg-neutral-900 bg-opacity-50' : 'bg-msmBlue'} transition-all duration-500`}
                            required 
                            onChange={e => setName(e.currentTarget.value)}
                        />
                    </div>
                    <div className="form-control items-center justify-center my-4">
                        <label htmlFor='email' className="label">
                            <span className="label-text">Email</span>
                        </label> 
                        <input 
                            type="email" 
                            placeholder="Email" 
                            name='email'
                            id='email'
                            className={`input input-bordered w-full sm:w-3/4 lg:w-3/5 text-neutral-900 placeholder:text-neutral-50 ${email === '' ? 'bg-neutral-900 bg-opacity-50' : 'bg-msmBlue'} transition-all duration-500`}
                            required 
                            onChange={e => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className='form-control items-center justify-center my-4'>
                        <label className="label" htmlFor='whoSending'>Who are you?</label>
                        <select 
                            className={`select select-bordered w-full sm:w-3/4 lg:w-3/5 ${sender === 'options' ? 'bg-neutral-900 bg-opacity-50 text-neutral-50' : 'bg-msmBlue text-neutral-900'} transition-all duration-500`} 
                            name='whoSending' 
                            id='whoSending'
                            onChange={e => setSender(e.currentTarget.value)}
                        >
                            <option value="options">Select an option</option>
                            <option value="fan">Fan</option>
                            <option value="player">Prospective Player</option> 
                            <option value="press">Press Outlet</option> 
                            <option value="game-designer">Game Designer</option>
                        </select>
                    </div>
                    <div className="form-control items-center justify-center my-4">
                        <label htmlFor='subject' className="label">
                            <span className="label-text">Subject</span>
                        </label> 
                        <input 
                            type="text" 
                            placeholder="Subject" 
                            name='subject'
                            id='subject'
                            className={`input input-bordered w-full sm:w-3/4 lg:w-3/5 text-neutral-900 placeholder:text-neutral-50 ${subject === '' ? 'bg-neutral-900 bg-opacity-50' : 'bg-msmBlue'} transition-all duration-500`} 
                            required 
                            onChange={e => setSubject(e.currentTarget.value)}
                        />
                    </div>
                    <div className="form-control items-center justify-center my-4">
                        <label htmlFor='message' className="label">
                            <span className="label-text">Message</span>
                        </label> 
                        <textarea 
                            className={`textarea w-full sm:w-3/4 lg:w-3/5 h-80 textarea-bordered text-neutral-900 placeholder:text-neutral-50 ${message === '' ? 'bg-neutral-900 bg-opacity-50' : 'bg-msmBlue'} transition-all duration-500`} 
                            placeholder="Message" 
                            name='message'
                            id='message'
                            onChange={e => setMessage(e.currentTarget.value)}
                            required
                        >
                        </textarea>
                    </div>
                    <div className='form-control items-center justify-center'>
                        <button 
                            type='submit' 
                            className={`btn ${name === '' || email === '' || message === '' || sender === 'options' ? 'btn-disabled' : 'text-neutral-50'} my-4 bg-msmRed hover:bg-msmRed hover:scale-125 transition-all duration-500`}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}