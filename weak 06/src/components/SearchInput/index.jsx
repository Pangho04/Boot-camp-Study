import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Input from "../shared/Input";

export default function SearchInput({ placeholder, setSearchValue, setRandomVideos, setShowError }) {
  const inputRef = useRef();
  const navigate = useNavigate();

  function handleSubmit (event) {
    event.preventDefault();

    const searchValue = inputRef.current.value;
    setSearchValue(searchValue);

    if (searchValue.length === 0 || searchValue.trim() === "") {
      setShowError(true);
    } else {
      window.scrollTo(0, 0);

      navigate({
        pathname:'/',
        search:`?q=${searchValue}`
      });

      setRandomVideos([]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        data-test={"input-search"}
        type="text"
        placeholder={placeholder}
        ref={inputRef}
      />
    </form>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
  setRandomVideos: PropTypes.func.isRequired,
  setShowError: PropTypes.func.isRequired,
};
