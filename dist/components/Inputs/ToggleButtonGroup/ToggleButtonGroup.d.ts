export default ToggleButtonGroup;
declare function ToggleButtonGroup({ name, children, ...rest }: {
    [x: string]: any;
    name: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ToggleButtonGroup {
    namespace propTypes {
        const defaultChecked: PropTypes.Requireable<boolean>;
        const name: PropTypes.Validator<string>;
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    }
}
import PropTypes from "prop-types";
