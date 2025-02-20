import { useEffect, useState } from "react";
import logo from "/logo.png";
import { styled } from "styled-components";


const HeaderContainer = styled.header`
  height: 170px;
  display: flex;
  padding: 0.5rem;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  return (
    <HeaderContainer className="HeaderContainer">
      <img src={logo} width="76px" alt={"logo"} className="logo" />

      <h6 className="nameCompany">
        Ремонт, обслуживание и
        <br />
        аксессуары для пластиковых окон
      </h6>

      <h6 className="working-hours">
        <b>Режим работы: с 9:00 до 21:00</b>
        <br />
        Работаем по Тюмени и пригороду
      </h6>

      <a href="tel:+79827870439" className="callButton">
        <span className="phone-icon"> +7(982)787-04-39</span>
      </a>
    </HeaderContainer>
  );
}
