import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import './App.css'
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Initial from './components/Initial/Initial';
import Footer from './components/Footer/Footer';
import translations from './lib/translations';

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {
    console.log(translations.en.translation)
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <>
    <div style={{width: "100%"}} >

      <Header />
      <Initial />
      <Section />
      <Footer />
    </div>

      
    </>
  )
}

export default App
