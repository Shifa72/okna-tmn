import { useState, useEffect } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import { mosquitonetItems } from "../dataSection";
import {remontokonItems} from "../dataSection";
import { otkosyItems } from "../dataSection";
import {replacestekloItems} from "../dataSection";







export default function EffectSection() {
   
    const [selectedMosquitonetItem, setSelectedMosquitonetItem] = useState(null);
    const [selectedRemontokonItem, setSelectedRemontokonItem] = useState(null);
    const [selectedOtkosyItem, setSelectedOtkosyItem] = useState(null);
    const [selectedReplacestekloItem, setSelectedReplacestekloItem] = useState(null);


    const [modals, setModals] = useState({
        mosquitonet: false,
        remontokon: false,
        otkosy: false,
        replacesteklo: false,
    })   

    
    
    useEffect(() => {
        
        if (mosquitonetItems.length > 0) {
            setSelectedMosquitonetItem(mosquitonetItems[0]);
        }
        if (remontokonItems.length > 0) {
            setSelectedRemontokonItem(remontokonItems[0]);
        }
        if (otkosyItems.length > 0) {
            setSelectedOtkosyItem(otkosyItems[0]);
        }
        if (replacestekloItems.length > 0) {
            setSelectedReplacestekloItem(replacestekloItems[0]);
        }
        
    }, []);


    const handleOpenModal = (key) => () => {
        setModals((prevState) => ({
          ...prevState,
          [key]: true,
        }));
    };
    
      const handleCloseModal = (key) => () => {
        setModals((prevState) => ({
          ...prevState,
          [key]: false,
        }));
    };

    
    

    const ImageWithText = ({ src, text, active, onClick }) => (
        <div className={`image-with-text ${active ? 'active' : ''}`} onClick={onClick}>
          <img src={src} alt={text} />
          <span>{text}</span>
        </div>
    );
    

    
    return (
        <section className="differences-section">
            <>

            <ImageWithText
                src="/mosquitonets.jpeg"
                text="Москитные сетки"
                onClick={handleOpenModal("mosquitonet")}
                

                >Открыть информацию
            </ImageWithText>

            <Modal open={modals.mosquitonet}>
            
                <h3>Москитные сетки</h3> 
                <div className="horizontal-container">
                    <ul className= "Item">
                        {mosquitonetItems.map((item, index, active) => (
                        <li
                            key={index} 
                            className={item === selectedMosquitonetItem ? 'active' : ''}
                            onClick={() => setSelectedMosquitonetItem(item)}
                            >
                            {item.title}
                            
                        </li>
                        ))}
                    </ul>
                        
                    
                    {selectedMosquitonetItem && (
                        <>
                        <img
                            src={selectedMosquitonetItem.imageUrl}
                            alt={selectedMosquitonetItem.title}
                            style={{ 
                                maxWidth: "25%",
                                verticalAlign: "middle",
                                marginLeft: "10px",
                                }}
                        />

                            <div className="infoDescription">
                            {selectedMosquitonetItem.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                            ))}
                            
                            
                            <div className="priceStyle">
                                {selectedMosquitonetItem.price}
                            </div>
                        </div>
                        
                        </>
                    )}
                    
                </div>
                <br />
                
                <Button onClick={handleCloseModal("mosquitonet")}>Закрыть</Button>
                
            </Modal>

            <ImageWithText
            src="/remontokon.jpeg"
            text="Ремонт окон, замена фурнитуры"
            onClick={handleOpenModal("remontokon")}
            >Открыть информацию
            </ImageWithText>

            <Modal open={modals.remontokon}>

                <h3>Замена фурнитуры</h3> 
                <div className="horizontal-container">
                    <ul className= "Item">
                        {remontokonItems.map((item, index, active) => (
                        <li 
                            key={index} 
                            className={item === selectedRemontokonItem ? 'active' : ''}
                            onClick={() => setSelectedRemontokonItem(item)}
                            >
                            {item.title}
                        </li>
                        ))}
                    </ul>

                    {selectedRemontokonItem && (
                        <>
                        <img
                            src={selectedRemontokonItem.imageUrl}
                            alt={selectedRemontokonItem.title}
                            style={{ 
                                maxWidth: "35%",
                                verticalAlign: "middle",
                                marginLeft: "20px",
                                }}
                        />
                        <div className="infoDescription">
                            {selectedRemontokonItem.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                            ))}

                            <div className="priceStyle">
                                {selectedRemontokonItem.price}
                            </div>
                        </div>

                        </>
                    )}
                </div>
                <br />

                <Button onClick={handleCloseModal("remontokon")}>Закрыть</Button>
            </Modal>

            <ImageWithText
            src="/otkosi.jpeg"
            text="Откосы и подоконники"
            onClick = {handleOpenModal("otkosy")}
            >
                Открыть информацию
            </ImageWithText>

            <Modal open={modals.otkosy}>

                <h3>Откосы и подоконники</h3>
                <div className="horizontal-container">  
                    <ul className= "Item">
                        {otkosyItems.map((item, index, active) => (
                        <li 
                            key={index} 
                            className={item === selectedOtkosyItem ? 'active' : ''}
                            onClick={() => setSelectedOtkosyItem(item)}
                            >
                            {item.title}
                        </li>
                        ))}
                    </ul>

                    {selectedOtkosyItem && (
                        <>
                        <img
                            src={selectedOtkosyItem.imageUrl}
                            alt={selectedOtkosyItem.title}
                            style={{ 
                                maxWidth: "35%",
                                verticalAlign: "middle",
                                marginLeft: "20px",
                                }}
                        />
                        <div className="infoDescription">
                            {selectedOtkosyItem.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                            ))}


                            <div className="priceStyle">
                                {selectedRemontokonItem.price}
                            </div>
                        </div>
                        </>
                    )}

                    <br />
                </div>
                <Button onClick={handleCloseModal("otkosy")}>Закрыть</Button>
                
            </Modal>


            <ImageWithText
            src="/replacesteklo.jpeg"
            text="Замена стеклопакетов"
            onClick = {handleOpenModal("replacesteklo")}
            >Открыть информацию
            </ImageWithText>

            <Modal open={modals.replacesteklo}>
                <h3>Замена стеклопакетов</h3> 
                <div className="horizontal-container">                   
                    <ul className= "Item">
                        {replacestekloItems.map((item, index, active) => (
                        <li 
                            key={index} 
                            className={item === selectedReplacestekloItem ? 'active' : ''}
                            onClick={() => setSelectedReplacestekloItem(item)}
                            >
                            {item.title}
                        </li>
                        ))}
                    </ul>

                    {selectedReplacestekloItem && (
                        <>
                        <img
                            src={selectedReplacestekloItem.imageUrl}
                            alt={selectedReplacestekloItem.title}
                            style={{ 
                                maxWidth: "30%", 
                                verticalAlign: "middle",
                                marginLeft: "20px",
                            }}
                        />
                            <div className="infoDescription">
                            {selectedReplacestekloItem.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                            ))}

                            <div className="priceStyle">
                                {selectedReplacestekloItem.price}
                            </div>
                        </div>
                        </>
                    )}

                    <br />
                </div>
                <Button onClick={handleCloseModal("replacesteklo")}>Закрыть</Button>
            </Modal>
            </>
        </section>

        
    )
    
}