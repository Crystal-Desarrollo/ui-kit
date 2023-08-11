export function Header({ user, logout, onToggleDrawer, open }: {
    user: any;
    logout: any;
    onToggleDrawer: any;
    open: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Header {
    namespace propTypes {
        const user: PropTypes.Validator<object>;
        const logout: PropTypes.Validator<(...args: any[]) => any>;
        const onToggleDrawer: PropTypes.Validator<(...args: any[]) => any>;
        const open: PropTypes.Validator<boolean>;
    }
}
import PropTypes from "prop-types";
