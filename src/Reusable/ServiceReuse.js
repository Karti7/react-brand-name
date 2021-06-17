import React from 'react'
import { NavLink } from 'react-router-dom'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const ServiceReuse = (props) => {
    return (
        <>

            <div className="col-md-6 col-12 col-lg-4">
                <div className="card" >
                    <div className="card-body"><QuestionAnswerIcon style={{ fontSize: 40 }} />
                        <h5 className="card-title mt-3">{props.title}</h5>
                        <p className="card-text mt-4">{props.desc}</p>
                        <NavLink to="/" className="btn-read">Read More</NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ServiceReuse
