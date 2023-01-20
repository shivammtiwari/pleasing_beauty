import React from 'react'
// import {Link} from 'react-router-dom'
// import SingleParlour from '../SingleParlour/SingleParlour'
import './ParlourList.css'
import Data from '../../data/ParlourData.json'
import Footer from '../Footer/Footer'


function ParlourList() {
    return (
        <>
            <div className="wraapper">

                {
                    Data && Data.map(parlour => {
                        return (
                            <div className="List-wrapper">
                                <div className="left">
                                    <div className="parlour-rapper" key={parlour.id}>
                                        <div className="image">
                                            <img src={parlour.image} alt="Maheshwari devi mandir" />
                                        </div>
                                        <div className="content">
                                            <h2>{parlour.name}</h2>
                                            <p>{parlour.address}</p>
                                            <p><i class="fa-regular fa-clock"></i> <span> {parlour.timing}</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="right">
                                    <div className="parlour-rapper" key={parlour.id}>
                                        <div className="image">
                                            <img src={parlour.image} alt="Maheshwari devi mandir" />
                                        </div>
                                        <div className="content">
                                            <h2>{parlour.name}</h2>
                                            <p>{parlour.address}</p>
                                            <p><i class="fa-regular fa-clock"></i> <span> {parlour.timing}</span></p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>


                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default ParlourList