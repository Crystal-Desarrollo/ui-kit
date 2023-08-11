declare function AuthenticatedLayout({ logout, user }: {
    logout: any;
    user: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace AuthenticatedLayout {
    namespace propTypes {
        const logout: PropTypes.Validator<(...args: any[]) => any>;
        const user: PropTypes.Validator<object>;
    }
}
export default AuthenticatedLayout;
import PropTypes from "prop-types";
