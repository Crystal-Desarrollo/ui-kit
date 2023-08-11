export function Sidebar({ user, logout, onToggleDrawer, open }: {
    user: any;
    logout: any;
    onToggleDrawer: any;
    open: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Sidebar {
    namespace propTypes {
        const onToggleDrawer: PropTypes.Validator<(...args: any[]) => any>;
        const open: PropTypes.Validator<boolean>;
        const user: PropTypes.Validator<object>;
        const logout: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
