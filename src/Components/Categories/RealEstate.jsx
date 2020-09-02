import React from 'react';

const RealEstate = (props) => {
    let houses = props.houses.map(h => h.description);
    let appartments = props.appartments.map(a => a.description)

    return(
        <div>
            <h1>RealEstate</h1>
            <div>
                {houses}
                {appartments}
            </div>
        </div>
    )
}
export default RealEstate;