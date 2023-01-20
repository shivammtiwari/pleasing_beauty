import React from 'react'
import './LocationHeader.css'

function LocationHeader() {
    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="image">
                        <img src={require('../../assets/maheshwari.jpg')} alt="Maheshwari devi mandir" />
                    </div>
                    <div className="content">
                        <div className="location-name">
                            <h2>Maheshwari Devi Mandir Chauk, Banda 210001 </h2>
                        </div>
                        <div className="parlour-number">
                            <p>6 Parlours</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationHeader