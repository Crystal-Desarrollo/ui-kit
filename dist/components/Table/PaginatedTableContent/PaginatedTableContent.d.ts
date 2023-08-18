export default PaginatedTableContent;
declare function PaginatedTableContent(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace PaginatedTableContent {
    namespace propTypes {
        const headCells: PropTypes.Validator<any[]>;
        const fetchFunction: PropTypes.Validator<(...args: any[]) => any>;
        const resourceName: PropTypes.Validator<string>;
        const defaultOrderBy: PropTypes.Requireable<string>;
        const defaultOrderDirection: PropTypes.Requireable<string>;
        const defaultRowsPerPage: PropTypes.Requireable<number>;
        const onDeleteItem: PropTypes.Requireable<(...args: any[]) => any>;
        const onEditItem: PropTypes.Requireable<(...args: any[]) => any>;
        const baseParams: PropTypes.Requireable<object>;
        const row: PropTypes.Validator<PropTypes.ReactElementLike>;
        const toolbar: PropTypes.Requireable<PropTypes.ReactElementLike>;
    }
}
import PropTypes from "prop-types";
