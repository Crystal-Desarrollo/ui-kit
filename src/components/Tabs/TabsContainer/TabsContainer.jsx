import { Button, CircularProgress, IconButton, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import { cloneElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../Inputs/TextField';
import { useTabs } from '../../../hooks/useTabs';

export const TabsContainer = ({ children }) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      mb={{ xs: 2, sm: 0 }}
    >
      {children}
    </Stack>
  );
};

TabsContainer.propTypes = {
  children: PropTypes.element,
};

export const TabsAside = ({ onFilter, SidePanel, searchPlaceholder }) => {
  const form = useForm();
  const query = form.watch('query');
  const { tab } = useTabs();
  const [isLoading, setIsLoading] = useState(false);
  const [sidePanel, setSidePanel] = useState(false);

  // Handles the query search
  useEffect(() => {
    if (query) setIsLoading(true);

    const timer = setTimeout(() => {
      onFilter(form.getValues());
      setIsLoading(false);
    }, [1000]);

    return () => clearTimeout(timer);
  }, [query, onFilter, form]);

  useEffect(() => {
    form.reset();
  }, [tab, form]);

  const handleClearQuery = () => {
    setIsLoading(true);
    form.setValue('query', '');
  };

  const filtersPanel = SidePanel
    ? cloneElement(SidePanel, {
        open: sidePanel,
        onClose: () => setSidePanel(false),
      })
    : null;

  return (
    <Stack direction="row" gap={1}>
      {filtersPanel}
      <FormProvider {...form}>
        <TextField
          name="query"
          type="search"
          labelText={searchPlaceholder}
          InputProps={{
            endAdornment: isLoading ? (
              <CircularProgress size={16} />
            ) : query ? (
              <IconButton disableRipple sx={{ mr: -2 }} onClick={handleClearQuery}>
                <CloseIcon />
              </IconButton>
            ) : (
              <SearchIcon />
            ),
          }}
          sx={{
            minWidth: 300,
          }}
        />
        {filtersPanel && (
          <Button startIcon={<FilterListIcon />} variant="outlined" onClick={() => setSidePanel(true)}>
            Filtros
          </Button>
        )}
      </FormProvider>
    </Stack>
  );
};

TabsAside.propTypes = {
  onFilter: PropTypes.func,
  SidePanel: PropTypes.element,
  searchPlaceholder: PropTypes.string,
};

TabsAside.defaultProps = {
  searchPlaceholder: 'Nombre o DNI',
};
