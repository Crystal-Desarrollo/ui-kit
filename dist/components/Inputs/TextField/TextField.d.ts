export default TextField;
declare function TextField({ name, labelText, required, fullWidth, InputProps, InputLabelProps, parentRef, multiline, rows, helperText, ...rest }: {
    [x: string]: any;
    name: any;
    labelText?: string | undefined;
    required?: boolean | undefined;
    fullWidth?: boolean | undefined;
    InputProps?: null | undefined;
    InputLabelProps?: null | undefined;
    parentRef?: null | undefined;
    multiline?: boolean | undefined;
    rows?: number | undefined;
    helperText?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace TextField {
    namespace propTypes {
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
