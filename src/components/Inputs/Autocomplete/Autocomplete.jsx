import { FormControl, TextField as MuiTextField } from '@mui/material';
import MuiAutocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';

const filter = createFilterOptions();

const Autocomplete = props => {
  const {
    labelText,
    name,
    required = false,
    onCreateNew = null,
    renderLabel,
    multiple = false,
    showHelperText = true,
    options = [],
    ...rest
  } = props;
  const { control } = useFormContext();
  const [selectedValue, setSelectedValue] = useState(multiple ? [] : '');

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

    if (!onCreateNew && noOptions && inputValue !== '') {
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
              filterOptions={filterOptions}
              options={options}
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
                  InputProps={params.InputProps}
                />
              )}
            />
          );
        }}
      />
    </FormControl>
  );
};

Autocomplete.propTypes = {
  multiple: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  onCreateNew: PropTypes.func,
  renderLabel: PropTypes.func,
  onChange: PropTypes.func,
  showHelperText: PropTypes.bool,
  options: PropTypes.array.isRequired,
};

export default Autocomplete;
