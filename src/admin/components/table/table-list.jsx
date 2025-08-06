import { TableListItem } from "./table-list-item";
import styles from "./table.module.css";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
export const TableList = ({ information }) => {
  return (
    <>
      <Table className={styles.table}>
        <TableHead className={styles.tableHead}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>
              <TableSortLabel>Nome</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>Preço</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>Ano</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>Km</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>Cor</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>Marca</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel>Status</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel></TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableListItem information={information} />
        </TableBody>
      </Table>
    </>
  );
};
