export default Select;
declare function Select({ data, name, labelText, required, disabled, render, ...rest }: {
    [x: string]: any;
    data: any;
    name: any;
    labelText?: string | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    render: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Select {
    namespace propTypes {
        const control: PropTypes.Validator<object>;
        const data: PropTypes.Requireable<any[]>;
        const name: PropTypes.Validator<string>;
        const labelText: PropTypes.Requireable<string>;
        const createOption: PropTypes.Requireable<(...args: any[]) => any>;
        const required: PropTypes.Requireable<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const render: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const data_1: never[];
        export { data_1 as data };
    }
}
import PropTypes from "prop-types";
