import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock() {
  return <section className="searchBlock">
    {/* TODO посмотреть как вместо плейсхолдера вставить текст через реакт. Так делал в форме с именем автозаполнение и в пропсы прописать плейсхолдер*/}
    <SearchString/>
    <FilterCheckbox
      text="Короткометражки"
    />
  </section>;
}

export default SearchBlock;
