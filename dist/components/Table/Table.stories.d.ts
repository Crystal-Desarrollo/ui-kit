declare namespace _default {
    export const title: string;
    export { PaginatedTableContent as component };
}
export default _default;
export namespace ExampleTable {
    namespace args {
        const defaultOrderBy: string;
        const defaultOrderDirection: string;
        const defaultRowsPerPage: number;
        function fetchFunction(): {
            id: number;
            name: string;
            dni: string;
            email: string;
        }[];
        const headCells: {
            id: string;
            label: string;
        }[];
        const resourceName: string;
        const row: import("react/jsx-runtime").JSX.Element;
    }
}
import PaginatedTableContent from "./PaginatedTableContent/PaginatedTableContent";
