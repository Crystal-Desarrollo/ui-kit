import PaginatedTableContent from './PaginatedTableContent/PaginatedTableContent';
import { TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';

export default {
  title: 'Table',
  component: PaginatedTableContent,
};

const TableRowExample = ({ data }) => {
  return (
    <TableRow>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.dni}</TableCell>
      <TableCell>{data.email}</TableCell>
    </TableRow>
  );
};

TableRowExample.propTypes = {
  data: PropTypes.object,
};

export const ExampleTable = {
  args: {
    defaultOrderBy: 'name',
    defaultOrderDirection: 'asc',
    defaultRowsPerPage: 10,
    fetchFunction: () => [
      { id: 1, name: 'Test', dni: '12345678', email: 'aasd@text.com' },
      { id: 2, name: 'Test', dni: '12345678', email: 'aasd@text.com' },
      { id: 3, name: 'Test', dni: '12345678', email: 'dds@asd.com' },
    ],
    headCells: [
      { id: 'name', label: 'Nombre' },
      { id: 'name', label: 'DNI' },
      { id: 'name', label: 'Email' },
    ],
    resourceName: 'customers',
    row: <TableRowExample />,
  },
};
