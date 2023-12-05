export default Copyright;
declare function Copyright({ sx, logo }: {
    sx: any;
    logo: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Copyright {
    namespace propTypes {
        const sx: PropTypes.Requireable<object>;
        const logo: PropTypes.Validator<string>;
    }
}
import PropTypes from "prop-types";
