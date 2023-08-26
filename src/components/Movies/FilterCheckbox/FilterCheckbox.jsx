function FilterCheckbox({ text, shortMoviesActive, setShortMoviesActive }) {

  function handleCheckboxChecked() {
    localStorage.setItem('checkboxStatus', JSON.stringify(!shortMoviesActive));
    setShortMoviesActive(!shortMoviesActive)
    console.log('отработала функция смены стейта на', !shortMoviesActive);
    console.log('стейт в localStorage из хендлера чекбокса', localStorage.getItem('checkboxStatus'));
  }

  return <div className="filterCheckbox">
    <label className="filterCheckbox__switcher">
      <input type="checkbox"
             className="filterCheckbox__checkbox"
             checked={shortMoviesActive}
             onChange={() => {
               console.log('отработал onChange на инпуте');
               handleCheckboxChecked()
                            }}
      />
      <span className="filterCheckbox__checkboxCover"></span>
    </label>
    <p className="filterCheckbox__text">{text}</p>
  </div>;
}

export default FilterCheckbox;
