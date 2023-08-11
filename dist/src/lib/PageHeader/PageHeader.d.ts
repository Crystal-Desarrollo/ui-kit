export default PageHeader;
declare function PageHeader({ title, renderAside }: {
    title: any;
    renderAside: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace PageHeader {
    namespace propTypes {
        const title: PropTypes.Validator<string>;
        const renderAside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
