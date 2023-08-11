export function ListItem({ icon, text, url, onClick }: {
    icon: any;
    text: any;
    url: any;
    onClick: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace ListItem {
    namespace propTypes {
        const icon: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const text: PropTypes.Validator<string>;
        const url: PropTypes.Requireable<string>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
