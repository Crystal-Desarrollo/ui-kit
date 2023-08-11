import { CircularProgress, FormControl } from '@mui/material';
import MuiAutocomplete, {
  createFilterOptions,
} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';

const filter = createFilterOptions();

const AsyncAutocomplete = props => {
  const {
    control,
    options = [],
    labelText,
    name,
    multiple = false,
    required,
    onCreateNew,
    renderLabel,
    fetchFunction,
  } = props;
  const [data, setData] = useState(options);
  const [debouncedTerm, setDebouncedTerm] = useState('');

  const { isLoading, refetch } = useQuery(['options'], {
    queryFn: () =>
      fetchFunction({
        filter: {
          query: debouncedTerm,
        },
      }),
    enabled: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (debouncedTerm) {
        refetch().then(({ data }) => {
          setData(data.data);
        });
        return;
      }

      setData([]);
    }, 500);
    return () => clearTimeout(timer);
  }, [debouncedTerm, refetch]);

  const handleChange = (event, newValue, onChange) => {
    if (newValue && newValue.inputValue) {
      onCreateNew && onCreateNew(newValue.inputValue);
    } else {
      event.target.value = newValue?.id ?? null;
      onChange(event);
    }
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
      <li {...props}>{renderLabel ? renderLabel(option) : option.name}</li>
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
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, onChange, value, ...field } }) => {
          return (
            <MuiAutocomplete
              multiple={multiple}
              value={
                data.find(x => x.id === Number(value))
                  ? data.find(x => x.id === Number(value)).name
                  : ''
              }
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
                <TextField
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
                        {isLoading ? (
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
  control: PropTypes.any,
  options: PropTypes.array,
  labelText: PropTypes.string,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  onCreateNew: PropTypes.func,
  renderLabel: PropTypes.func,
  fetchFunction: PropTypes.func,
};

export default AsyncAutocomplete;
