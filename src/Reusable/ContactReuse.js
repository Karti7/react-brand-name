import React from 'react'

const ContactReuse = (props) => {
    return (
        <>
            <div className="col-md-8 col-sm-10 col-lg-6">
                <div className="card-info bg-light" >
                    <i>{props.icon}</i>
                    <h3>{props.address}</h3>
                    <p>{props.add_desc1}</p>
                    <p>{props.add_desc2}</p>
                </div>
            </div>

        </>
    )
}

export default ContactReuse
