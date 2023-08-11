export function AuthenticatedLayout({ logout, user }: {
    logout: any;
    user: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace AuthenticatedLayout {
    namespace propTypes {
        const logout: PropTypes.Validator<(...args: any[]) => any>;
        const user: PropTypes.Validator<object>;
    }
}
import PropTypes from "prop-types";
