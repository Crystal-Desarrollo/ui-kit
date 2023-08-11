export default DateTime;
declare function DateTime({ isoDateTimeString, relative, showTime }: {
    isoDateTimeString: any;
    relative?: boolean | undefined;
    showTime?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace DateTime {
    namespace propTypes {
        const isoDateTimeString: PropTypes.Validator<string>;
        const relative: PropTypes.Requireable<boolean>;
        const showTime: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
