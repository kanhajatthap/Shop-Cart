import React from 'react';
import slide1 from "../../assets/image/slide1.png"

export const Slider = () => {
    const slideStyle = {
        width: "100%",
        height: "500px",
        objectFit: "cover",
        objectPosition: "center"
    }
    return (
        <div>
            <img src={slide1} style={slideStyle} />
        </div>
    )
}
