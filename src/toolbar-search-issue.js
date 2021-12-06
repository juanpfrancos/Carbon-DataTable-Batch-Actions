import React from "react";
import { render } from "react-dom";
import "carbon-components/css/carbon-components.min.css";
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
  Delete,
  Save,
  Download,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  Button,
  TableSelectAll,
  TableSelectRow
} from "carbon-components-react";
const headerData = [
  {
    header: "Name",
    key: "name"
  },
  {
    header: "Protocol",
    key: "protocol"
  },
  {
    header: "Port",
    key: "port"
  },
  {
    header: "Rule",
    key: "rule"
  },
  {
    header: "Attached Groups",
    key: "attached_groups"
  },
  {
    header: "Status",
    key: "status"
  }
];

const rowData = [
  {
    attached_groups: "Kevins VM Groups",
    id: "a",
    name: "Load Balancer 3",
    port: 3000,
    protocol: "HTTP",
    rule: "Round robin",
    status: "Disabled"
  },
  {
    attached_groups: "Maureens VM Groups",
    id: "b",
    name: "Load Balancer 1",
    port: 443,
    protocol: "HTTP",
    rule: "Round robin",
    status: "Starting"
  },
  {
    attached_groups: "Andrews VM Groups",
    id: "c",
    name: "Load Balancer 2",
    port: 80,
    protocol: "HTTP",
    rule: "DNS delegation",
    status: "Active"
  },
  {
    attached_groups: "Marcs VM Groups",
    id: "d",
    name: "Load Balancer 6",
    port: 3000,
    protocol: "HTTP",
    rule: "Round robin",
    status: "Disabled"
  },
  {
    attached_groups: "Mels VM Groups",
    id: "e",
    name: "Load Balancer 4",
    port: 443,
    protocol: "HTTP",
    rule: "Round robin",
    status: "Starting"
  },
  {
    attached_groups: "Ronjas VM Groups",
    id: "f",
    name: "Load Balancer 5",
    port: 80,
    protocol: "HTTP",
    rule: "DNS delegation",
    status: "Active"
  }
];
const App = () => (
  <DataTable rows={rowData} headers={headerData}>
    {({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getSelectionProps,
      getBatchActionProps,
      onInputChange,
      selectedRows
    }) => (
      <TableContainer title="DataTable with batch actions">
        <TableToolbar>
          <TableBatchActions {...getBatchActionProps()}>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Delete}
              onClick={() => console.log("clicked")}
            >
              Delete
            </TableBatchAction>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Save}
              onClick={() => console.log("clicked")}
            >
              Save
            </TableBatchAction>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Download}
              onClick={() => console.log("clicked")}
            >
              Download
            </TableBatchAction>
          </TableBatchActions>
          <TableToolbarContent>
            <TableToolbarSearch
              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
              onChange={onInputChange}
            />
            <TableToolbarMenu
              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
            >
              <TableToolbarAction primaryFocus onClick={() => alert("Alert 1")}>
                Action 1
              </TableToolbarAction>
              <TableToolbarAction onClick={() => alert("Alert 2")}>
                Action 2
              </TableToolbarAction>
              <TableToolbarAction onClick={() => alert("Alert 3")}>
                Action 3
              </TableToolbarAction>
            </TableToolbarMenu>
            <Button
              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
              onClick={() => console.log("clicked")}
              size="small"
              kind="primary"
            >
              Add new
            </Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableSelectAll {...getSelectionProps()} />
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow {...getRowProps({ row })}>
                <TableSelectRow {...getSelectionProps({ row })} />
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

render(<App />, document.getElementById("root"));
