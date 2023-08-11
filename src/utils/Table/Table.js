import { isValid } from 'date-fns';
import { createTheme } from '@mui/material';
import { esES } from '@mui/material/locale';

export const sortOrderEnum = {
  ASC: 'asc',
  DESC: 'desc',
};

export function genericDescendingComparator(
  a,
  b,
  orderBy,
  order = sortOrderEnum.ASC,
  customPropertiesComparator = null,
) {
  let v1 = a[orderBy] ?? '';
  let v2 = b[orderBy] ?? '';

  if (isValid(new Date(v1)) && isValid(new Date(v2))) {
    v1 = new Date(v1);
    v2 = new Date(v2);
    return order === sortOrderEnum.ASC ? v1 - v2 : v2 - v1;
  }

  if (orderBy === 'status') {
    // Specific case for the status column
    v1 = v1.deleted_at ? 'inactivo' : 'activo';
    v2 = v2.deleted_at ? 'inactivo' : 'activo';
  }

  // Handle custom properties
  if (typeof customPropertiesComparator === 'function') {
    v1 = customPropertiesComparator(a, orderBy);
    v2 = customPropertiesComparator(b, orderBy);
  }

  // If the value is an object, we need to get the name property
  if (typeof v1 === 'object' || typeof v2 === 'object') {
    v1 = v1.name;
    v2 = v2.name;
  }

  // Clean the values and convert to lowercase
  v1 = String(v1).toLowerCase().trim();
  v2 = String(v2).toLowerCase().trim();

  const result = v1.localeCompare(v2);

  return order === sortOrderEnum.ASC ? result : -result;
}

export const theme = theme =>
  createTheme(
    {
      ...theme,
      palette: {
        ...theme.palette,
        table: {
          header: '#e2e2e2',
          openRow: '#ebf1fa',
        },
      },
      components: {
        ...theme.components,
        MuiTableCell: {
          styleOverrides: {
            root: {
              fontSize: '14px',
              whiteSpace: 'nowrap',
              padding: '0.5rem 1rem',
            },
          },
        },
      },
    },
    esES,
  );
