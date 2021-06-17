import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex justify-conten-center text-start mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>
                                        Here is the best place to grow your bussiness with
                                        <strong className="text-primary"> Brand-Name.</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are team of talented designers making websites with React.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/service" className="btn btn-outline-primary">
                                            Know More
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" className="img-fluid animated" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
