import React from 'react'
import  './SingleParlourHeader.css'

function SingleParlourHeader() {
  return (
    <div className="container">
                <div className="wrapperr">
                    <div className="image">
                        <img src={require('../../assets/aarti-parlour.webp')} alt="Maheshwari devi mandir" />
                    </div>
                    <div className="content">
                        <div className="location-name">
                            <h2>Apsara beauty parlour </h2>
                        </div>
                        <p><i class="fa-solid fa-location-dot"></i> <span>724, Near kumar book depot, Maheshwari devi chauk Banda, Uttar Pradesh 210001</span></p>
                        <p><i class="fa-solid fa-registered"></i><span>Beautician Name</span></p>
                        <p><i class="fa-solid fa-clock"></i> <span>9 AM to 8 PM</span></p>
                        <p><i class="fa-solid fa-money-bill"></i> <span>Start From: 2₹/Minute</span></p>
                    </div>
                </div>
            </div>
  )
}

export default SingleParlourHeader