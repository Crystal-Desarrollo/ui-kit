import {CircularProgress, FormControl} from '@mui/material';
import MuiAutocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import PropTypes from 'prop-types';

const filter = createFilterOptions();

export const AsyncAutocomplete = props => {
  const {
    value,
    onChange,
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
  const [debouncedTerm, setDebouncedTerm] = useState(value);

  const {isFetching, refetch} = useQuery(['options'], {
    queryFn: () => {
      return fetchFunction({
        filter: {
          query: debouncedTerm,
        },
      });
    },
    enabled: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (debouncedTerm) {
        refetch().then(({data}) => {
          setData(data.data ?? []);
        });

        return;
      }
      setData([]);
    }, 1000);

    return () => clearTimeout(timer);
  }, [debouncedTerm, refetch]);

  const handleChange = (event, newValue, onChange) => {
    if (newValue && newValue.inputValue) {
      onCreateNew && onCreateNew(newValue.inputValue);
    } else {
      onChange({
        target: {
          name: name,
          value: newValue ? newValue.id : null,
        },
      });
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
    return <li {...props}>{renderLabel ? renderLabel(option) : option.name}</li>;
  };

  const filterOptions = (data, params) => {
    const filtered = filter(data, params);

    // Suggest the creation of a new value
    const inputValue = String(params.inputValue).trim();
    const noOptions = filtered.length === 0;

    if (onCreateNew && inputValue !== '' && (noOptions || !options.find(x => x.name === inputValue))) {
      filtered.push({
        inputValue: inputValue,
        name: `Agregar "${inputValue}"`,
      });
    }

    return filtered;
  };

  return (
    <FormControl fullWidth>
      <MuiAutocomplete
        multiple={multiple}
        value={typeof value === 'string' ? value : data.find(x => x.id === value) ?? null}
        onChange={(event, newValue) => handleChange(event, newValue, onChange)}
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
            required={required}
            name={name}
            label={labelText}
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
    </FormControl>
  );
};

AsyncAutocomplete.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  options: PropTypes.array,
  labelText: PropTypes.string,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  onCreateNew: PropTypes.func,
  renderLabel: PropTypes.func,
  fetchFunction: PropTypes.func,
};
