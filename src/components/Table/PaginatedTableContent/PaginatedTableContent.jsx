import React, { useEffect, useState } from 'react';
import { Loader } from '../../Loader';
import { TableHeader } from '../TableHeader';
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
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { sortOrderEnum } from '../../../utils/Table';
import { theme } from '../../../utils/Table/Table';
import { useSearchParams } from 'react-router-dom';
import qs from 'qs';

const PaginatedTableContent = props => {
  const {
    headCells,
    fetchFunction,
    resourceName,
    defaultOrderBy,
    defaultOrderDirection = sortOrderEnum.DESC,
    defaultRowsPerPage = 10,
    filters,
    toolbar,
    row,
  } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [orderBy, setOrderBy] = useState(defaultOrderBy);
  const [orderDirection, setOrderDirection] = useState(defaultOrderDirection);
  const [params, setParams] = useState({
    ...qs.parse(searchParams.toString()),
    per_page: defaultRowsPerPage,
  });

  const {
    data: paginator,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [resourceName, params],
    queryFn: () => fetchFunction(params),
    onSuccess: () => {
      setSearchParams(qs.stringify(params, { skipNulls: true }), {
        replace: true,
      });
    },
  });

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      sort: {
        field: orderBy,
        direction: orderDirection,
      },
    }));
  }, [orderBy, orderDirection]);

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      filter: filters,
    }));
  }, [filters]);

  const handleChangePage = (event, newPage) => {
    setParams({ ...params, page: ++newPage });
  };

  const handleChangeRowsPerPage = e => {
    setParams({ ...params, per_page: e.target.value });
  };

  const handleSortRequest = (event, property) => {
    setOrderBy(property);
    setOrderDirection(
      orderBy === property && orderDirection === sortOrderEnum.ASC
        ? sortOrderEnum.DESC
        : sortOrderEnum.ASC,
    );
  };

  const Toolbar = toolbar
    ? React.cloneElement(toolbar, { setParams, params })
    : null;

  return (
    <ThemeProvider theme={theme}>
      {Toolbar}
      <TableContainer>
        <Table>
          <TableHeader
            headCells={headCells}
            orderBy={orderBy}
            orderDirection={orderDirection}
            handleSortRequest={handleSortRequest}
          />
          <TableBody>
            {(isLoading || isFetching) && (
              <TableRow>
                <TableCell colSpan={headCells.length} align="center">
                  <Loader />
                </TableCell>
              </TableRow>
            )}
            {paginator?.data?.length > 0 ? (
              paginator.data.map(data => {
                return React.cloneElement(row, { data, key: data.id });
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
      {paginator && (
        <TablePagination
          component="div"
          from={paginator.from}
          to={paginator.to}
          page={paginator.current_page - 1} // Api goes from 1 to n, but MUI goes from 0 to n-1
          rowsPerPage={paginator.per_page}
          count={paginator.total}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          backIconButtonProps={{
            disabled: paginator?.current_page === 1,
          }}
          nextIconButtonProps={{
            disabled: paginator?.current_page === paginator?.last_page,
          }}
        />
      )}
    </ThemeProvider>
  );
};

PaginatedTableContent.propTypes = {
  headCells: PropTypes.array.isRequired,
  fetchFunction: PropTypes.func.isRequired,
  resourceName: PropTypes.string.isRequired,
  defaultOrderBy: PropTypes.string,
  defaultOrderDirection: PropTypes.oneOf([
    sortOrderEnum.ASC,
    sortOrderEnum.DESC,
  ]),
  defaultRowsPerPage: PropTypes.number,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  filters: PropTypes.object,
  row: PropTypes.element,
  toolbar: PropTypes.element,
};

export default PaginatedTableContent;
