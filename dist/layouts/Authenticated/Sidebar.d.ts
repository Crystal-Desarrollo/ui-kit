export function Sidebar({ ItemsList, onToggleDrawer, open }: {
    ItemsList: any;
    onToggleDrawer: any;
    open: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Sidebar {
    namespace propTypes {
        const onToggleDrawer: PropTypes.Validator<(...args: any[]) => any>;
        const open: PropTypes.Validator<boolean>;
        const ItemsList: PropTypes.Validator<NonNullable<PropTypes.ReactComponentLike>>;
    }
}
import PropTypes from "prop-types";
