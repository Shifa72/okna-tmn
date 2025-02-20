import React from "react";

export default function AdvertSection() {
    const sectionStyle = {
        border: "1px solid #000",
        padding: "10px",
        height: "60px",
        
    };
    
    return (
        <section style={sectionStyle}>
            <div className="advert" style={{color: "#666"}}>
                <amp-ad
                    width="auto"
                    height="320"
                    layout="fixed-height"
                    type="yandex"
                    data-block-id="R-A-14208302-1"
                    data-html-access-allowed="true">
                </amp-ad>

            </div>
        </section>
    );
}