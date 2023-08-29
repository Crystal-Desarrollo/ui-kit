export default Switch;
declare function Switch({ defaultChecked, name, labelText, ...rest }: {
    [x: string]: any;
    defaultChecked?: boolean | undefined;
    name: any;
    labelText?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Switch {
    namespace propTypes {
        const defaultChecked: PropTypes.Requireable<boolean>;
        const name: PropTypes.Validator<string>;
        const labelText: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
