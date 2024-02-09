import React from "react";

const Image = ({imagesrc}) =>{
    return (
        <div>
            <img src={imagesrc} alt ="catimage" style={{width: 400, height: 400, borderRadius: 20/ 2}} />
        </div>
    )
}

export default Image;