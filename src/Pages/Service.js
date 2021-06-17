import React from 'react'
import Sdata from '../Reusable/Sdata'
import ServiceReuse from '../Reusable/ServiceReuse'
const Service = () => {
    return (
        <>
            <div className="mt-5">
                <h5 className="text-uppercase">Services</h5>
                <h1 className="text-primary">Veritatis et dolores facere numquam et praesentium</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind) => {
                                    return <ServiceReuse
                                        key={ind}
                                        title={val.title}
                                        desc={val.desc}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
