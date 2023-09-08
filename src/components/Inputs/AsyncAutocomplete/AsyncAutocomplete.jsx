import { CircularProgress, FormControl, TextField as MuiTextField } from '@mui/material';
import MuiAutocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';

const filter = createFilterOptions();

const AsyncAutocomplete = props => {
  const {
    labelText,
    name,
    required,
    onCreateNew,
    renderLabel,
    fetchFunction,
    multiple,
    baseParams,
    showHelperText = true,
    ...rest
  } = props;
  const { control, watch } = useFormContext();
  const value = watch(name);
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(multiple ? [] : '');
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const { isFetching, isFetched } = useQuery({
    queryKey: [fetchFunction, debouncedTerm],
    queryFn: () => fetchFunction({ filter: { query: debouncedTerm, ...baseParams } }),
    enabled: debouncedTerm.length >= 2,
    onSuccess: response => {
      if (Array.isArray(response)) {
        setData(response);
        return;
      }

      if (response.data) {
        setData(response.data);
      }
    },
  });

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }

    // const foundValue = data.find(x => x.id === value?.id);
    // if (foundValue) {
    //   setSelectedValue(foundValue);
    // }
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (term) setDebouncedTerm(term);
    }, 500);

    return () => clearTimeout(timer);
  }, [term]);

  const handleChange = (_, newValue, onChange) => {
    if (newValue && newValue.inputValue) {
      onCreateNew && onCreateNew(newValue.inputValue);
      return;
    }

    setSelectedValue(newValue);
    onChange(newValue);
  };

  const getOptionLabel = option => {
    // e.g. value selected with enter, right from the input
    if (typeof option === 'string') {
      return option;
    }

    if (option.inputValue && onCreateNew) {
      return `Crear ${option.inputValue}`;
    }

    if (renderLabel) {
      return renderLabel(option);
    }

    if (option.dni) {
      return `${option.name} - ${option.dni}`;
    }

    return option.name;
  };

  const getOption = (props, option) => {
    return (
      // eslint-disable-next-line
      <li {...props} key={option.id ?? props.key}>
        {getOptionLabel(option)}
      </li>
    );
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);

    // Suggest the creation of a new value
    const inputValue = String(params.inputValue).trim();
    const noOptions = filtered.length === 0;

    if (onCreateNew && inputValue !== '' && (noOptions || !options.find(x => x.name === inputValue))) {
      filtered.push({
        inputValue: inputValue,
        name: `Agregar "${inputValue}"`,
      });
    }

    if (!onCreateNew && noOptions && inputValue !== '' && !isFetching && isFetched) {
      filtered.push({
        inputValue: inputValue,
        name: `No se encontraron resultados`,
      });
    }

    return filtered;
  };

  return (
    <FormControl fullWidth {...rest}>
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, onChange, ...field } }) => {
          return (
            <MuiAutocomplete
              multiple={multiple}
              value={selectedValue}
              onChange={(event, newValue) => handleChange(event, newValue, onChange)}
              onKeyDown={event => setTerm(event.target.value)}
              filterOptions={filterOptions}
              options={data}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              getOptionLabel={getOptionLabel}
              renderOption={getOption}
              freeSolo
              renderInput={params => (
                <MuiTextField
                  {...params}
                  {...field}
                  inputRef={ref}
                  required={required}
                  name={name}
                  label={labelText}
                  helperText={showHelperText ? 'Ingrese al menos 3 caracteres para buscar' : ''}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isFetching ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          );
        }}
      />
    </FormControl>
  );
};

AsyncAutocomplete.propTypes = {
  multiple: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  onCreateNew: PropTypes.func,
  renderLabel: PropTypes.func,
  fetchFunction: PropTypes.func,
  onChange: PropTypes.func,
  baseParams: PropTypes.object,
  showHelperText: PropTypes.bool,
};

export default AsyncAutocomplete;
