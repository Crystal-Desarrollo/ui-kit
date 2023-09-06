export function AuthenticatedLayout({ ItemsList, SpeedDial, logout, user }: {
    ItemsList: any;
    SpeedDial: any;
    logout: any;
    user: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace AuthenticatedLayout {
    namespace propTypes {
        const logout: PropTypes.Validator<(...args: any[]) => any>;
        const user: PropTypes.Validator<object>;
        const ItemsList: PropTypes.Validator<NonNullable<PropTypes.ReactComponentLike>>;
        const SpeedDial: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
