import React from 'react'
//import { propTypes } from 'react-bootstrap/esm/Image'
//Upgrade needed to font awesome 5 cuz. its 4
const Rating = ({value, from, color}) => {
    return (
        <div className="rating">
            <span>
                <i style={{color}} className={value>=1?'fa fa-star':value>=0.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
            </span>
            <span>
                <i style={{color}} className={value>=2?'fa fa-star':value>=1.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
            </span>
            <span>
                <i style={{color}} className={value>=3?'fa fa-star':value>=2.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
            </span>
            <span>
                <i style={{color}} className={value>=4?'fa fa-star':value>=3.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
            </span>
            <span>
                <i style={{color}} className={value>=5?'fa fa-star':value>=4.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
            </span>
            {/* <span> {from ? from:''} of reviews</span> */}
            <span> reviews</span>
        </div>
    )
}

Rating.defaultProps ={
    color: '#f8e825'
}
//Not Working
// Rating.propTypes ={
//     value : propTypes.number.isRequired
// }

export default Rating