export default Switch;
declare function Switch({ control, defaultChecked, name, labelText, labelPlacement, ...rest }: {
    [x: string]: any;
    control: any;
    defaultChecked?: boolean | undefined;
    name: any;
    labelText?: string | undefined;
    labelPlacement?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Switch {
    namespace propTypes {
        const control: PropTypes.Validator<object>;
        const defaultChecked: PropTypes.Requireable<boolean>;
        const name: PropTypes.Validator<string>;
        const labelText: PropTypes.Requireable<string>;
        const fullWidth: PropTypes.Requireable<boolean>;
        const labelPlacement: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
