import WayToTeach from './WayToTeach'
import React from "react"



export default function TeachingSection() {
    return (
        <section style={{
            paddingTop: "2rem",
            colore:"#666",
            
        }}>
            
            <h3> <b> Что мы предлагаем? </b></h3>
            
            <ul style={{paddingLeft:"0px"}}>
                
                <WayToTeach />
               
            </ul>
        </section>
    )
}