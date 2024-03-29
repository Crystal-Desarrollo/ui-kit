import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { TableHeader } from '../TableHeader';
import { Loader } from '../../Loader';
import PropTypes from 'prop-types';
import { genericDescendingComparator, sortOrderEnum } from '../../../utils/Table';
import { theme } from '../../../theme';

const TableContent = props => {
  const {
    headCells,
    records = [],
    defaultRowsPerPage = 25,
    isLoading = false,
    defaultOrderBy = '',
    customPropertiesComparator = null,
    defaultOrderDirection = sortOrderEnum.ASC,
    row,
  } = props;
  const [orderDirection, setOrderDirection] = useState(defaultOrderDirection);
  const [orderBy, setOrderBy] = useState(defaultOrderBy);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const handleRequestSort = (_, property) => {
    const isAsc = orderBy === property && orderDirection === sortOrderEnum.ASC;
    setOrderDirection(isAsc ? sortOrderEnum.DESC : sortOrderEnum.ASC);
    setOrderBy(property);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const getRecords = () => {
    const stabilizedRowArray = records.map((x, i) => [x, i]);

    stabilizedRowArray.sort((a, b) => {
      const order = genericDescendingComparator(a[0], b[0], orderBy, orderDirection, customPropertiesComparator);
      if (order !== 0) return order;
      return a[1] - b[1];
    });

    const dataArray = stabilizedRowArray.map(x => x[0]);

    return dataArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  };

  const rows = getRecords();

  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        <Table>
          <TableHeader
            headCells={headCells}
            orderBy={orderBy}
            orderDirection={orderDirection}
            handleSortRequest={handleRequestSort}
          />
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={headCells.length} align="center">
                  <Loader />
                </TableCell>
              </TableRow>
            )}

            {rows?.length > 0 ? (
              rows.map(data => {
                return React.cloneElement(row, { key: data.key || data.id, data });
              })
            ) : (
              <TableRow>
                <TableCell colSpan={headCells.length} align="center">
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    No hay nada por aquí
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPage={rowsPerPage}
        page={page}
        count={records.length}
        component="div"
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </ThemeProvider>
  );
};

TableContent.propTypes = {
  headCells: PropTypes.array.isRequired,
  records: PropTypes.array,
  customPropertiesComparator: PropTypes.func,
  defaultRowsPerPage: PropTypes.number,
  isLoading: PropTypes.bool,
  defaultOrderBy: PropTypes.string,
  defaultOrderDirection: PropTypes.string,
  row: PropTypes.element,
};

export default TableContent;
