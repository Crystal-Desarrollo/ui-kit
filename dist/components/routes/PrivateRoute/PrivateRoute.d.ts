export function PrivateRoute({ has, element }: {
    has: any;
    element: any;
}): any;
export namespace PrivateRoute {
    namespace propTypes {
        const element: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const has: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
