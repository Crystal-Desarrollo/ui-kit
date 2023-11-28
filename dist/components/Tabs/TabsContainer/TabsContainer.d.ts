export function TabsContainer({ children }: {
    children: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace TabsContainer {
    namespace propTypes {
        const children: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
    }
}
export function TabsAside({ onFilter, SidePanel, searchPlaceholder }: {
    onFilter: any;
    SidePanel: any;
    searchPlaceholder: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace TabsAside {
    export namespace propTypes_1 {
        const onFilter: PropTypes.Requireable<(...args: any[]) => any>;
        const SidePanel: PropTypes.Requireable<PropTypes.ReactElementLike>;
        const searchPlaceholder: PropTypes.Requireable<string>;
    }
    export { propTypes_1 as propTypes };
    export namespace defaultProps {
        const searchPlaceholder_1: string;
        export { searchPlaceholder_1 as searchPlaceholder };
    }
}
import PropTypes from "prop-types";
