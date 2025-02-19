import React from "react";

// export default function IntroSection() {
//     return (
//        <section>
//             <h1 className="centered">Монтаж окон</h1>
//             <h3 className="centered" style={{color: '#666'}}>
//                 Мы предлагаем полный спектр услуг – от замера до финишной отделки.
//             </h3>
//        </section>
//     )
    
// }


export default function IntroSection() {
    return React.createElement ('section', null, [
        React.createElement('h1', {className: 'centered', key: 1 },'Монтаж окон'),
        React.createElement('h3', {className: 'centered', style:{ color: '#666'}, key: 2},
            'Мы предлагаем полный спектр услуг – от замера до финишной отделки')
    ]
    )
}