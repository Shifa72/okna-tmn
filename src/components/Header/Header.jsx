import { useEffect, useState } from 'react'
import logo from '/logo.png'
import { styled } from 'styled-components'
//import './Header.css'

const HeaderContainer = styled.header`
  height: 200px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`



export default function Header() {
  return (
    <HeaderContainer>

      <img src={logo} width = "100" alt={"logo"} />

      <h6>
        Ремонт, обслуживание и 
        <br />аксессуары для пластиковых окон
      </h6>

      <h6>
        <b>Режим работы: с 9:00 до 21:00</b>
        <br />Работаем по Тюмени и пригороду
      </h6>

      <h4>
        <b >+7(982)787-04-39</b>
      </h4>
      </HeaderContainer>
  )

}

