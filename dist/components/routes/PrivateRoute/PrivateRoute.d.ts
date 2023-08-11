export function PrivateRoute({ user, has, element }: {
    user: any;
    has: any;
    element: any;
}): any;
export namespace PrivateRoute {
    namespace propTypes {
        const element: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const has: PropTypes.Requireable<object>;
        const user: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
