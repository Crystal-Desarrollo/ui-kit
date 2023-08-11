export function AuthenticatedLayout({ ItemsList, logout, user }: {
    ItemsList: any;
    logout: any;
    user: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace AuthenticatedLayout {
    namespace propTypes {
        const logout: PropTypes.Validator<(...args: any[]) => any>;
        const user: PropTypes.Validator<object>;
        const ItemsList: PropTypes.Validator<NonNullable<PropTypes.ReactComponentLike>>;
    }
}
import PropTypes from "prop-types";
