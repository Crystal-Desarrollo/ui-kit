import PropTypes from 'prop-types';
import {format, formatRelative, isDate} from 'date-fns';
import {es} from 'date-fns/locale';

function DateTime({isoDateTimeString, relative = false}) {
  const date = isDate(isoDateTimeString) ? isoDateTimeString : new Date(isoDateTimeString);

  if (!relative) return <span>{format(date, 'dd/MM/yyyy HH:mm')}</span>;

  return (
    <span>
      {formatRelative(date, date, {
        locale: es,
      })}
    </span>
  );
}

DateTime.propTypes = {
  isoDateTimeString: PropTypes.string.isRequired,
};

export default DateTime;
