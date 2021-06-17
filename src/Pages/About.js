import React from 'react'
import { NavLink } from 'react-router-dom'


const About = () => {
    return (
        <>
            <section id="about" className="d-flex justify-conten-center text-start mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-8 col-12 col-lg-6">
                                    <div className="bg-light p-4" style={{ width: "103%" }} id="about-bg">
                                        <h5 className="fs-5 text-primary mt-3">About Us</h5>
                                        <p className="fw-bold fs-4">Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</p>
                                        <p className="fw-bold fs-4">Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                                        </p>
                                        <div className="mt-3">
                                            <NavLink to="/home" className="btn btn-outline-primary">
                                                Know More
                                            </NavLink>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="img-fluid animated" alt="" style={{ width: "550px", height: "450px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
