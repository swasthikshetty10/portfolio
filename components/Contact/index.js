import React, { useRef, useState } from 'react'
import { HiOutlineMail } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import Link from 'next/link'
import { Zoom } from 'react-awesome-reveal'
import axios from 'axios'
function Experience() {
    const [sending, setSending] = useState(false);
    const SuccessDiv = useRef();
    const [contact, setContact] = useState({ name: "", email: "", message: "" })
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.values)
        setSending(true);
        // const res = await axios.post("/api/contact", contact)

        axios.post("https://api-swasthikshetty10.herokuapp.com/api/contact/", { ...contact, phone_no: "0000" }, 5000)
            .then(res => {
                setSending(false);
                setContact({ name: "", email: "", message: "" })
                SuccessDiv.current.innerHTML = `<p class="font-semibold text-green-600">Thankyou your message has been sent ✔️ </p>`
            })
            .catch(err => {
                setSending(false);
                SuccessDiv.current.innerHTML = `<p class="font-semibold text-red-600">Sorry something went wrong Try again</p>`
            })
    }
    return (


        <section id="contact" className='contact p-5 md:p-10 bg-gradient-to-br  w-full'>
            <form onSubmit={submitHandler} className="group p-2 justify-center items-center md:items-start gap-5 md:gap-10 lg:gap-14 flex flex-col md:flex-row md:p-10 mx-auto min-w-fit">
                <div className="space-y-5 text-center">
                    <h2 className='text-4xl font-semibold'>Let&#39;s Get In touch</h2>
                    <div className="text-3xl flex flex-wrap justify-center gap-5 ">
                        <Link href="mailto:swasthikshetty10902@gmail.com"><a className="hover:scale-110 transition duration-400 ease-in-out" target="_blank"><HiOutlineMail /></a></Link>
                        <Link href="https://wa.link/xcfy4e"><a className="hover:scale-110 transition duration-400 ease-in-out" target="_blank"><FaWhatsapp /></a></Link>
                        <Link href="https://www.linkedin.com/in/swasthikshetty10/"><a className="hover:scale-110 transition duration-400 ease-in-out" target="_blank"><FaLinkedin /></a></Link>
                        <Link href="https://github.com/swasthikshetty10"><a className="hover:scale-110 transition duration-400 ease-in-out" target="_blank"><FaGithub /></a></Link>
                    </div>
                    <Zoom delay={300}>
                        <img className="hidden md:block pt-6 w-full max-w-sm " src="/contact.svg" />
                    </Zoom>
                </div>
                <div className="flex-1  max-w-sm space-y-6 ">
                    <div>
                        <span className="uppercase text-sm  font-bold">Full Name</span>
                        <input required
                            value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })}
                            disabled={sending} className="w-full bg-slate-300/50 focus:border-2 border-opacity-50 border-sky-600 dark:border-slate-500 dark:bg-slate-300/10 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div >
                        <span className="uppercase text-sm  font-bold">Email</span>
                        <input required
                            value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })}
                            disabled={sending} className="w-full bg-slate-300/50 focus:border-2 border-opacity-50 border-sky-600 dark:border-slate-500 dark:bg-slate-300/10 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" />
                    </div>
                    <div >
                        <span className="uppercase text-sm  font-bold">Message</span>
                        <textarea
                            value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })}
                            disabled={sending}
                            className="w-full h-32 bg-slate-300/50 focus:border-2 border-opacity-50 border-sky-600 dark:border-slate-500 dark:bg-slate-300/10 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div >
                        <button disabled={sending} className="disabled:opacity-70  w-full rounded-2xl md:rounded-3xl p-3  border-2 md:border-4 cursor-pointer select-none text-xl sm:text-xl font-semibold border-sky-600 hover:bg-gradient-to-l from-cyan-200/50 to-pink-100/50 dark:from-slate-900/50 dark:to-blue-900/50  transform ease-in-out duration-500 dark:border-slate-500   inline-flex justify-center gap-2 items-center">{sending ? <> <AiOutlineLoading3Quarters className="animate-spin" />  Sending </> : "Send Message"}</button>
                    </div>
                    <div className=" text-center mt-3" ref={SuccessDiv}>

                    </div>
                </div>

            </form>
        </section>
    )
}

export default Experience