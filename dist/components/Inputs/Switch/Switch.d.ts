export default Switch;
declare function Switch({ defaultChecked, name, labelText, leftText, rightText, ...rest }: {
    [x: string]: any;
    defaultChecked?: boolean | undefined;
    name: any;
    labelText?: string | undefined;
    leftText?: string | undefined;
    rightText?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Switch {
    namespace propTypes {
        const defaultChecked: PropTypes.Requireable<boolean>;
        const name: PropTypes.Validator<string>;
        const labelText: PropTypes.Requireable<string>;
        const leftText: PropTypes.Requireable<string>;
        const rightText: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
