import './Header.css'
import b from '../../assets/brazil.png'
import u from '../../assets/usa.png'

import { useTranslation } from 'react-i18next';

function Header() {

  const { i18n } = useTranslation();

  const onChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    }

    return (
        <>
        <div className="header">
            <div className="header-name">
                <h4>Lucas Andrade</h4>
            </div>
            <div className="header-lang">
                <div className="header-lang-option" onClick={()=>{onChangeLanguage("pt")}}>
                    <div style={{width: "15pt", height: "15pt"}}>
                        <img src={b} alt="brazil" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <p>pt</p>
                </div>
                <div className="header-lang-option" onClick={()=>{onChangeLanguage("en")}}>
                    <div style={{width: "15pt", height: "15pt"}}>
                        <img src={u} alt="usa" style={{ width: '100%', height: '100%' }} />
                    </div> 
                    <p>en</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header