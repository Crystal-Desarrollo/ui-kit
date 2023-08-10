import EmptyData from '@/assets/img/emptyData.png';
import {Loader} from '@/components/common/Loader';
import {TableHeader} from '@/components/Table/TableHeader';
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
import {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {sortOrderEnum} from '@/utils/Table/Table.js';
import {theme} from '@/components/Table/TableContent';
import {useSearchParams} from 'react-router-dom';
import qs from 'qs';

export const BackendTableContent = props => {
  const {
    headCells,
    fetchRecords,
    queryKey,
    defaultOrderBy,
    defaultOrderDirection = sortOrderEnum.DESC,
    defaultRowsPerPage = 10,
    Row,
    Toolbar,
    onDeleteItem = null,
    onEditItem = null,
    filters,
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
    queryKey: [queryKey, params],
    queryFn: () => fetchRecords(params),
    onSuccess: () => {
      setSearchParams(qs.stringify(params, {skipNulls: true}), {replace: true});
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
    setParams({...params, page: ++newPage});
  };

  const handleChangeRowsPerPage = e => {
    setParams({...params, per_page: e.target.value});
  };

  const handleSortRequest = (event, property) => {
    setOrderBy(property);
    setOrderDirection(
      orderBy === property && orderDirection === sortOrderEnum.ASC ? sortOrderEnum.DESC : sortOrderEnum.ASC
    );
  };

  return (
    <ThemeProvider theme={theme}>
      {Toolbar && <Toolbar setParams={setParams} params={params} />}
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
                return <Row key={data.id} data={data} onDeleteItem={onDeleteItem} onEditItem={onEditItem} />;
              })
            ) : (
              <TableRow>
                <TableCell colSpan={headCells.length} align="center">
                  <img
                    src={EmptyData}
                    alt="Imagen no hay datos"
                    style={{
                      margin: 'auto',
                      boxSizing: 'border-box',
                      width: '200px',
                    }}
                  />
                  <Typography variant="h6" sx={{textAlign: 'center'}}>
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
          page={paginator.current_page - 1}
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

BackendTableContent.propTypes = {
  headCells: PropTypes.array.isRequired,
  fetchRecords: PropTypes.func.isRequired,
  queryKey: PropTypes.string.isRequired,
  defaultOrderBy: PropTypes.string,
  defaultOrderDirection: PropTypes.oneOf([sortOrderEnum.ASC, sortOrderEnum.DESC]),
  defaultRowsPerPage: PropTypes.number,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  filters: PropTypes.object,
  Row: PropTypes.elementType.isRequired,
  Toolbar: PropTypes.elementType,
};
