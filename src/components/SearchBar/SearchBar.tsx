import { ChangeEvent, FC, FormEvent, useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={css.box}>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            value={query}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
