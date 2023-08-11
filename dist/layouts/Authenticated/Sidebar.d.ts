export function Sidebar({ children, onToggleDrawer, open }: {
    children: any;
    onToggleDrawer: any;
    open: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Sidebar {
    namespace propTypes {
        const onToggleDrawer: PropTypes.Validator<(...args: any[]) => any>;
        const open: PropTypes.Validator<boolean>;
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    }
}
import PropTypes from "prop-types";
