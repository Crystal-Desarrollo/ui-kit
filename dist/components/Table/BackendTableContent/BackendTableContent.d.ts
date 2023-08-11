export default BackendTableContent;
declare function BackendTableContent(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace BackendTableContent {
    namespace propTypes {
        const headCells: PropTypes.Validator<any[]>;
        const fetchRecords: PropTypes.Validator<(...args: any[]) => any>;
        const queryKey: PropTypes.Validator<string>;
        const defaultOrderBy: PropTypes.Requireable<string>;
        const defaultOrderDirection: PropTypes.Requireable<string>;
        const defaultRowsPerPage: PropTypes.Requireable<number>;
        const onDeleteItem: PropTypes.Requireable<(...args: any[]) => any>;
        const onEditItem: PropTypes.Requireable<(...args: any[]) => any>;
        const filters: PropTypes.Requireable<object>;
        const Row: PropTypes.Validator<NonNullable<PropTypes.ReactComponentLike>>;
        const Toolbar: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
}
import PropTypes from "prop-types";