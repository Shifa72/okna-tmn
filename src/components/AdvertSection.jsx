import React from "react";

export default function AdvertSection() {
    const sectionStyle = {
        border: "1px solid #000",
        padding: "10px",
        height: "90px",
        
    };
    
    return (
        <section style={sectionStyle}>
            <div className="advert" style={{color: "#666", textAlign:"center"}}>
               Здесь может быть Ваша реклама
            </div>
        </section>
    );
}