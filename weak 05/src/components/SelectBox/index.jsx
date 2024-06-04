import { useState } from 'react';
import LANGUAGES from '../../constants/languages';
import './styles.css';

export default function SelectBox({ onSubmit, isDisabled }) {
  const defaultLanguage = LANGUAGES[0];
  const [locale, setLocale] = useState("ko");
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage.en);

  function handleChangeLocale() {
    if (locale === "ko") {
      setLocale("en");
    } else {
      setLocale("ko");
    }
  }

  function handleChangeLanguage(e) {
    setSelectedLanguage(e.target.value);
  }

  function getSendingLanguage(setLanguage) {
    const foundLanguage = LANGUAGES.find(
      (language) => {
        return language.en === setLanguage ||
        language.ko === setLanguage
      }
    );
    console.log(foundLanguage)
    return foundLanguage.en;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const sendingLanguage = getSendingLanguage(selectedLanguage);

    onSubmit(sendingLanguage);
  }

  return (
    <form
      className="Language-select-box"
      onSubmit={handleSubmit}
    >
      <select
        value={selectedLanguage}
        onChange={handleChangeLanguage}
      >
        {
          LANGUAGES.map((language, index) => {
            return (
              <option key={index}>
                {language[locale]}
              </option>
            );
          })
        }
      </select>
      <button
        className="Language-button"
        type="button"
        onClick={handleChangeLocale}
      >
        KO/EN
      </button>
      <button
        className="Language-button"
        disabled={isDisabled}
      >
        제출
      </button>
    </form>
  );
}
