export const AuthContext: import("react").Context<{}>;
export function hasPermissions(user: any, permissionsRequired: any): boolean;
export function AuthProvider({ children }: {
    children: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace AuthProvider {
    namespace propTypes {
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    }
}
import PropTypes from "prop-types";
