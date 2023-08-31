export default Select;
declare function Select({ data, name, labelText, required, disabled, render, children, ...rest }: {
    [x: string]: any;
    data: any;
    name: any;
    labelText?: string | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    render: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Select {
    namespace propTypes {
        const data: PropTypes.Requireable<object>;
        const name: PropTypes.Validator<string>;
        const labelText: PropTypes.Requireable<string>;
        const createOption: PropTypes.Requireable<(...args: any[]) => any>;
        const required: PropTypes.Requireable<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const render: PropTypes.Requireable<(...args: any[]) => any>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        const data_1: never[];
        export { data_1 as data };
    }
}
import PropTypes from "prop-types";
