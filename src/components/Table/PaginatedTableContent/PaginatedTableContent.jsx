import React, { useEffect, useState } from 'react';
import { Loader } from '../../Loader';
import { TableHeader } from '../TableHeader';
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { sortOrderEnum } from '../../../utils/Table';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'qs';

function isValidRowsPerPage(rowsPerPage) {
  return [10, 25, 50, 100].includes(rowsPerPage);
}

const PaginatedTableContent = props => {
  const {
    headCells,
    fetchFunction,
    resourceName,
    defaultOrderBy,
    defaultOrderDirection = sortOrderEnum.DESC,
    defaultRowsPerPage = 10,
    baseParams,
    row,
    toolbar,
  } = props;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState({
    ...baseParams,
    per_page: defaultRowsPerPage,
    page: 1,
    sort: {
      field: defaultOrderBy,
      direction: defaultOrderDirection,
    },
    // Take URL params at the end, so it overrides the default ones
    ...qs.parse(searchParams.toString()),
  });
  const {
    isLoading,
    isFetching,
    data: paginator,
  } = useQuery({
    queryKey: [resourceName, params],
    queryFn: () => fetchFunction(params),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    // Check encoded URL params against current params, if they are the same, don't push to history
    if (
      searchParams.toString() ===
      qs.stringify(params, {
        skipNulls: true,
      })
    )
      return;

    // Push no encoded params
    navigate({
      search: qs.stringify(params, {
        skipNulls: true,
        encodeValuesOnly: true,
      }),
    });
  }, [params, searchParams, navigate]);

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      ...baseParams,
    }));
  }, [baseParams]);

  const handleChangePage = (_, newPage) => {
    setParams({ ...params, page: ++newPage });
  };

  const handleChangeRowsPerPage = e => {
    setParams({ ...params, per_page: e.target.value, page: 1 });
  };

  const handleSortRequest = (_, property) => {
    const direction =
      searchParams.get('sort[direction]') === sortOrderEnum.ASC ? sortOrderEnum.DESC : sortOrderEnum.ASC;

    setParams(prev => ({
      ...prev,
      page: 1,
      sort: {
        field: property,
        direction: direction,
      },
    }));
  };

  const Toolbar = toolbar ? React.cloneElement(toolbar, { setParams }) : null;

  return (
    <>
      <TableContainer sx={{ position: 'relative', overflow: 'visible' }}>
        {Toolbar}
        <Table>
          <TableHeader
            headCells={headCells}
            orderBy={searchParams.get('sort[field]')}
            orderDirection={searchParams.get('sort[direction]')}
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

            {paginator?.data?.length > 0 &&
              paginator.data.map(data => {
                return React.cloneElement(row, { key: data.id, data: data });
              })}

            {!isLoading && !isFetching && paginator?.data?.length === 0 && (
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
          rowsPerPage={isValidRowsPerPage(paginator.per_page) || defaultRowsPerPage}
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
    </>
  );
};

PaginatedTableContent.propTypes = {
  headCells: PropTypes.array.isRequired,
  fetchFunction: PropTypes.func.isRequired,
  resourceName: PropTypes.string.isRequired,
  defaultOrderBy: PropTypes.string,
  defaultOrderDirection: PropTypes.oneOf([sortOrderEnum.ASC, sortOrderEnum.DESC]),
  defaultRowsPerPage: PropTypes.number,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  baseParams: PropTypes.object,
  row: PropTypes.element.isRequired,
  toolbar: PropTypes.element,
};

export default PaginatedTableContent;
