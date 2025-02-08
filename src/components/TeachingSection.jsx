import WayToTeach from './WayToTeach'
import React from "react"



export default function TeachingSection() {
    return (
        <section style={{
            margin: '2rem',
            colore:"#666"
            
        }}>
            
            <h3> Почему выбирают нас?</h3>
            
            <ul>
                
                <WayToTeach />
               
            </ul>
        </section>
    )
}