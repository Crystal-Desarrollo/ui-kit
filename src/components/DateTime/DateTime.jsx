import PropTypes from 'prop-types';
import { format, formatRelative, isDate, isValid, parse, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

const DateTime = ({ isoDateTimeString, relative = false, showTime = true }) => {
  let date = isDate(isoDateTimeString) ? isoDateTimeString : parseISO(isoDateTimeString);

  if (!isValid(date)) {
    const dateFormat = isoDateTimeString.length >= 10 ? "yyyy-MM-dd'T'HH:mm:ss.SSSSSSSSS" : 'yyyy-MM-dd';
    date = parse(isoDateTimeString, dateFormat, new Date());
  }

  if (!isValid(date)) return <span>Fecha inválida</span>;

  const formatString = showTime ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy';
  const formattedDate = relative
    ? formatRelative(date, new Date(), {
        locale: es,
      })
    : format(date, formatString, {
        locale: es,
      });

  return <span>{formattedDate}</span>;
};

DateTime.propTypes = {
  isoDateTimeString: PropTypes.string.isRequired,
  relative: PropTypes.bool,
  showTime: PropTypes.bool,
};

export default DateTime;
