import {
  CircularProgress,
  FormControl,
  TextField as MuiTextField,
} from '@mui/material';
import MuiAutocomplete, {
  createFilterOptions,
} from '@mui/material/Autocomplete';
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
    ...rest
  } = props;
  const { control } = useFormContext();
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(multiple ? [] : '');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  const { isFetching, refetch } = useQuery({
    queryKey: ['options', debouncedTerm],
    queryFn: () => fetchFunction({ filter: { query: debouncedTerm } }),
    enabled: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (debouncedTerm) {
        refetch().then(({ data }) => {
          if (data?.data) {
            setData(data.data);
          }
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [debouncedTerm, refetch]);

  const handleChange = (event, newValue, onChange) => {
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
    if (option.inputValue) {
      return option.inputValue;
    }
    return renderLabel ? renderLabel(option) : option.name;
  };

  const getOption = (props, option) => {
    return (
      // eslint-disable-next-line
      <li {...props} key={option.id ?? props.key}>
        {renderLabel ? renderLabel(option) : option.name}
      </li>
    );
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);

    // Suggest the creation of a new value
    const inputValue = String(params.inputValue).trim();
    const noOptions = filtered.length === 0;

    if (
      onCreateNew &&
      inputValue !== '' &&
      (noOptions || !options.find(x => x.name === inputValue))
    ) {
      filtered.push({
        inputValue: inputValue,
        name: `Agregar "${inputValue}"`,
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
              onChange={(event, newValue) =>
                handleChange(event, newValue, onChange)
              }
              onKeyDown={event => setDebouncedTerm(event.target.value)}
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
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isFetching ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
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
};

export default AsyncAutocomplete;
