function FilterCheckbox({ text, shortMoviesActive, setShortMoviesActive }) {

  function handleCheckboxChecked() {
    setShortMoviesActive(!shortMoviesActive)
  }

  return <div className="filterCheckbox">
    <label className="filterCheckbox__switcher">
      <input type="checkbox"
             className="filterCheckbox__checkbox"
             checked={shortMoviesActive}
             onChange={handleCheckboxChecked}
      />
      <span className="filterCheckbox__checkboxCover"></span>
    </label>
    <p className="filterCheckbox__text">{text}</p>
  </div>;
}

export default FilterCheckbox;
