export function Permission({ user, children, fallback, has }: {
    user: any;
    children: any;
    fallback: any;
    has?: {} | undefined;
}): any;
export namespace Permission {
    namespace propTypes {
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const fallback: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const has: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
