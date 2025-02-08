import React from "react";

export default function AdvertSection() {
    const sectionStyle = {
        border: "1px solid #000",
        padding: "10px",
        
    };
    
    return (
        <section style={sectionStyle}>
            <h3 className="advert" style={{color: "#666"}}>
                Здесь будет реклама
            </h3>
        </section>
    );
}