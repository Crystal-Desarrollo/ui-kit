import PropTypes from 'prop-types';
import { format, formatRelative, isDate, isValid, parse } from 'date-fns';
import { es } from 'date-fns/locale';

const DateTime = ({ isoDateTimeString, relative = false, showTime = true }) => {
  const dateFormat =
    isoDateTimeString.length > 10
      ? "yyyy-MM-dd'T'HH:mm:ss.SSSSSSSSS"
      : 'yyyy-MM-dd';

  const date = isDate(isoDateTimeString)
    ? isoDateTimeString
    : parse(isoDateTimeString, dateFormat, new Date());

  if (!isValid(date)) return <span>Fecha inválida</span>;

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

export default DateTime;
