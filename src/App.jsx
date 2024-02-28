import {useTranslation} from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
      <div className='container'>
        <h1>{t('Welcome to bookit')}</h1>
      </div>
  )
}

export default App
