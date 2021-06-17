import React, { useState } from 'react'
import Cdata from '../Reusable/Cdata'
import ContactReuse from '../Reusable/ContactReuse'

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        email: '',
        phone: '',
        msg: '',
    })

    const InputEvent = (event) => {
        const { name, value } = event.target
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        alert(`Your details is entred succesully...`)
    }

    return (
        <>
            <div className="text-primary mt-5">
                <h2>Contact Us</h2>
            </div>
            <div className="d-flex justify-conten-center text-start mt-5">
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-sm-10 col-lg-6 col-md-8" id="address">
                                <div className="row gy-4">
                                    {
                                        Cdata.map((val, ind) => {
                                            return <ContactReuse
                                                key={ind}
                                                icon={val.icon}
                                                address={val.address}
                                                add_desc1={val.add_desc1}
                                                add_desc2={val.add_desc2}
                                            />
                                        })
                                    }

                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-10 col-md-8 bg-light" id="form">
                                <form onSubmit={formSubmit}>
                                    <div className="m-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="fullname"
                                            value={data.fullname}
                                            onChange={InputEvent}
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                    <div className="m-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="email"
                                            value={data.email}
                                            onChange={InputEvent}
                                            placeholder="Enter Your Email"
                                        />
                                    </div>
                                    <div className="m-3">
                                        <label className="form-label">Contact Number</label>
                                        <input type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="contact"
                                            value={data.phone}
                                            onChange={InputEvent}
                                            placeholder="Enter Your Mobile Number"
                                        />
                                    </div>
                                    <div className="m-3">
                                        <label >Message</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            name="msg"
                                            value={data.msg}
                                            onChange={InputEvent}
                                            placeholder="Enter Your Message"
                                        ></textarea>
                                    </div>
                                    <div className=" m-3 col-10">
                                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact
