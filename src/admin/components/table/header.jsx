import IconButton from "@mui/material/IconButton";
import styles from "./table.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { IoSearch } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";
import Button from "@mui/material/Button";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className={styles.header}>
        <form className={styles.form} onSubmit={handleSearch}>
          <TextField
            label="Buscar"
            variant="filled"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.search}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <IoSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
        <div className={styles.actionContent}>
          <Button
            startIcon={<MdFilterList />}
            variant="contained"
            color="primary"
          >
            Filtro
          </Button>
        </div>
      </div>
    </div>
  );
};
