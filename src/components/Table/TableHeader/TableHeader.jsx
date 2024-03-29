import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import PropTypes from 'prop-types';

const TableHeader = props => {
  const { orderBy, orderDirection, headCells, handleSortRequest } = props;

  const createSortHandler = property => event => {
    handleSortRequest(event, property);
  };

  return (
    <TableHead sx={{ backgroundColor: theme => theme.palette.table.header }}>
      <TableRow>
        {headCells.map(x => {
          return (
            <TableCell component="th" key={x.id}>
              {x.isSortable ? (
                <TableSortLabel
                  active={orderBy === x.id}
                  direction={orderBy === x.id ? orderDirection : 'asc'}
                  onClick={createSortHandler(x.id)}
                >
                  {x.label}
                </TableSortLabel>
              ) : (
                <span>{x.label}</span>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  orderBy: PropTypes.string,
  orderDirection: PropTypes.string,
  headCells: PropTypes.array,
  handleSortRequest: PropTypes.func,
};

export default TableHeader;
