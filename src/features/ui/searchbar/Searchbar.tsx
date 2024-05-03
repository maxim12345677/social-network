import SearchIcon from "shared/assets/icons/SeacrhIcon";
import s from "./Searchbar.module.scss";
import Input from "shared/ui/input/Input";

const Searchbar = () => {
  return (
    <div className={s.searchbar}>
      <SearchIcon />
      <Input placeholder="Search Facebook" className={s.searchbar_input} />
    </div>
  );
};

export default Searchbar;
