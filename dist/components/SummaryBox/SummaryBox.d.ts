export function SummaryBox({ color, title, value, caption, isLoading, sx, }: {
    color: any;
    title: any;
    value: any;
    caption?: null | undefined;
    isLoading?: boolean | undefined;
    sx?: null | undefined;
}): import("react/jsx-runtime").JSX.Element;
export namespace SummaryBox {
    namespace propTypes {
        const color: PropTypes.Validator<string>;
        const title: PropTypes.Validator<string>;
        const value: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        const caption: PropTypes.Requireable<string>;
        const isLoading: PropTypes.Requireable<boolean>;
        const sx: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
