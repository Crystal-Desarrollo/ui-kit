import PropTypes from 'prop-types';
import {format, formatRelative, isDate} from 'date-fns';
import {es} from 'date-fns/locale';

function Date({isoDateString, relative = false}) {
  const date = isDate(isoDateString) ? isoDateString : new Date(isoDateString);

  if (!relative) return <span>{format(date, 'dd/MM/yyyy')}</span>;

  return (
    <span>
      {formatRelative(date, date, {
        locale: es,
      })}
    </span>
  );
}

Date.propTypes = {
  isoDateString: PropTypes.string.isRequired,
};

export default Date;
