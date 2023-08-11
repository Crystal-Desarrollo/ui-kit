import PropTypes from 'prop-types';
import { format, formatRelative, isDate } from 'date-fns';
import { es } from 'date-fns/locale';

export const DateTime = ({
  isoDateTimeString,
  relative = false,
  showTime = true,
}) => {
  const date = isDate(isoDateTimeString)
    ? isoDateTimeString
    : new Date(isoDateTimeString);
  const formatString = showTime ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy';

  if (!relative) return <span>{format(date, formatString)}</span>;

  return (
    <span>
      {formatRelative(date, new Date(), {
        locale: es,
      })}
    </span>
  );
};

DateTime.propTypes = {
  isoDateTimeString: PropTypes.string.isRequired,
  relative: PropTypes.bool,
  showTime: PropTypes.bool,
};
