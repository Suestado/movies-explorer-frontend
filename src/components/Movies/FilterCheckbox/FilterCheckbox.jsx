function FilterCheckbox({ text }) {
  return <div className="filterCheckbox">
    <label className="filterCheckbox__switcher">
      <input type="checkbox" className="filterCheckbox__checkbox"/>
      <span className="filterCheckbox__checkboxCover"></span>
    </label>
    <p className="filterCheckbox__text">{text}</p>
  </div>;
}

export default FilterCheckbox;
