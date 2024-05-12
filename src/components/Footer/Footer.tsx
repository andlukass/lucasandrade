import './Footer.css'
import options from './options.js'

import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <>
        <div className="footer">
            <div>
                <h1>{t("contact")}</h1>
            </div>
            <div className="footer-options">
                {options.map((option, index) => (
                    <div key={index} className="footer-option">
                        <option.icon/>
                        <a href={option.link}><p>{option.text}</p></a>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Footer