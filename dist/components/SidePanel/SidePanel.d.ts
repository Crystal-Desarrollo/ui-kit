export function SidePanel({ title, children, open, onClose, isLoading, }: {
    title?: string | undefined;
    children: any;
    open: any;
    onClose: any;
    isLoading: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace SidePanel {
    namespace propTypes {
        const title: PropTypes.Requireable<string>;
        const open: PropTypes.Validator<boolean>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const isLoading: PropTypes.Requireable<boolean>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
