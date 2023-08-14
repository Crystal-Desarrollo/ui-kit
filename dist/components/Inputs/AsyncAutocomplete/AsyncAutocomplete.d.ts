export default AsyncAutocomplete;
declare function AsyncAutocomplete(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace AsyncAutocomplete {
    namespace propTypes {
        const multiple: PropTypes.Requireable<boolean>;
        const labelText: PropTypes.Requireable<string>;
        const name: PropTypes.Requireable<string>;
        const required: PropTypes.Requireable<boolean>;
        const onCreateNew: PropTypes.Requireable<(...args: any[]) => any>;
        const renderLabel: PropTypes.Requireable<(...args: any[]) => any>;
        const fetchFunction: PropTypes.Requireable<(...args: any[]) => any>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
