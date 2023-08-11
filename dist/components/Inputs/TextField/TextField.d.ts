export default TextField;
declare function TextField({ name, labelText, required, fullWidth, InputProps, InputLabelProps, parentRef, multiline, rows, helperText, ...rest }: {
    [x: string]: any;
    name: any;
    labelText?: string | undefined;
    required: any;
    fullWidth?: boolean | undefined;
    InputProps: any;
    InputLabelProps: any;
    parentRef: any;
    multiline: any;
    rows: any;
    helperText: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace TextField {
    namespace propTypes {
        const control: PropTypes.Validator<object>;
        const name: PropTypes.Validator<string>;
        const labelText: PropTypes.Requireable<string>;
        const ref: PropTypes.Requireable<object>;
        const required: PropTypes.Requireable<boolean>;
        const fullWidth: PropTypes.Requireable<boolean>;
        const multiline: PropTypes.Requireable<boolean>;
        const rows: PropTypes.Requireable<number>;
        const helperText: PropTypes.Requireable<string>;
        const InputProps: PropTypes.Requireable<object>;
        const InputLabelProps: PropTypes.Requireable<object>;
        const parentRef: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
