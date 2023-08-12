export default BackendTableContent;
declare function BackendTableContent(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace BackendTableContent {
    namespace propTypes {
        const headCells: PropTypes.Validator<any[]>;
        const fetchFunction: PropTypes.Validator<(...args: any[]) => any>;
        const resourceName: PropTypes.Validator<string>;
        const defaultOrderBy: PropTypes.Requireable<string>;
        const defaultOrderDirection: PropTypes.Requireable<string>;
        const defaultRowsPerPage: PropTypes.Requireable<number>;
        const onDeleteItem: PropTypes.Requireable<(...args: any[]) => any>;
        const onEditItem: PropTypes.Requireable<(...args: any[]) => any>;
        const filters: PropTypes.Requireable<object>;
        const row: PropTypes.Requireable<PropTypes.ReactElementLike>;
        const Toolbar: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
}
import PropTypes from "prop-types";
