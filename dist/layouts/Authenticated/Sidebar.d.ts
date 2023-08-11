export function Sidebar({ onToggleDrawer, open }: {
    onToggleDrawer: any;
    open: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Sidebar {
    namespace propTypes {
        const onToggleDrawer: PropTypes.Validator<(...args: any[]) => any>;
        const open: PropTypes.Validator<boolean>;
    }
}
import PropTypes from "prop-types";