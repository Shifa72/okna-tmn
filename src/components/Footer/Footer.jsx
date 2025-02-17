import { styled } from 'styled-components'
//import './Header.css'

const FooterContainer = styled.footer`
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
    <FooterContainer>
      <h6>
        <b>Сайт не является публичной офертой</b>
        <br />и носит информационный характер.
      </h6>

      <h6>
        Режим работы: с 9:00 до 21:00
        <br />
        <b>г.Тюмень</b>
      </h6>
    </FooterContainer>
  )

}

 
