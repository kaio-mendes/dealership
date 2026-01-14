import styles from "./table.module.css";
import { Checkbox, TableCell, TableRow } from "@mui/material";
export const TableListItem = ({ information }) => {
  return (
    <>
      {information.map((item, i) => (
        <TableRow className={styles.row} key={i}>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.price}</TableCell>
          <TableCell>{item.year}</TableCell>
          <TableCell>{item.km}</TableCell>
          <TableCell>{item.color}</TableCell>
          <TableCell>{item.brand}</TableCell>
          <TableCell>
            <p
              className={`${styles.status} ${
                item.status === "ativo" ? styles.ativo : styles.inativo
              }`}
            >
              {!item.status ? "desativado" : item.status}
            </p>
          </TableCell>
          <TableCell>
            <p className={styles.details}>Ver detalhes</p>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
