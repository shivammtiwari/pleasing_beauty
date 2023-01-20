import React from 'react'
import './LocationSelector.css'

function LocationSelector() {
    return (
        <div className='selectwrapper'>
            <h3 className="headding">
                Where do you need a service?
            </h3>
            <div className="select">
                <select id="standard-select">
                    <option selected disabled>Select your city</option>
                    <option value="MIaM">Mouse In A Maze</option>
                    <option value="PL">Private Life</option>
                    <option value="SA">Suspended Animation</option>
                    <option value="NQ">No Quarter</option>
                    <option value="11:11">11:11 Ultimate Edition</option>
                    <option value="UV">Ultraviolence</option>
                    <option value="TC">The Core (with outro solo)</option>
                    <option value="TK">Telekinetic Killer</option>
                    <option value="ALL">All of the above</option>
                    <option value="NONE">None of the above</option>
                </select>
                <span class="focus"></span>
            </div>
        </div>
    )
}

export default LocationSelector