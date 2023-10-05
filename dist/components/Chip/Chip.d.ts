export function Chip({ label, backgroundColor, color, icon, sx }: {
    label: any;
    backgroundColor: any;
    color: any;
    icon: any;
    sx: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Chip {
    namespace propTypes {
        const label: PropTypes.Validator<string>;
        const backgroundColor: PropTypes.Requireable<string>;
        const color: PropTypes.Requireable<string>;
        const icon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const sx: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const color_1: string;
        export { color_1 as color };
        const backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
        const icon_1: null;
        export { icon_1 as icon };
    }
}
import PropTypes from "prop-types";
