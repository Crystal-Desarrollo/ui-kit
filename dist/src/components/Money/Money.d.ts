declare function Money({ money, ...rest }: {
    [x: string]: any;
    money: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Money {
    namespace propTypes {
        const money: PropTypes.Validator<number>;
    }
}
export default Money;
import PropTypes from "prop-types";
