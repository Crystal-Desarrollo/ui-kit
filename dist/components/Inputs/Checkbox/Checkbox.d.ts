export default Checkbox;
declare function Checkbox({ defaultChecked, name, labelText, labelPlacement, ...rest }: {
    [x: string]: any;
    defaultChecked?: boolean | undefined;
    name: any;
    labelText?: string | undefined;
    labelPlacement?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Checkbox {
    namespace propTypes {
        const defaultChecked: PropTypes.Requireable<boolean>;
        const name: PropTypes.Validator<string>;
        const labelText: PropTypes.Requireable<string>;
        const labelPlacement: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
