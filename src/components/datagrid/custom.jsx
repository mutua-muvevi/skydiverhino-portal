import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import {
	Stack,
	Typography,
	Box,
	Rating,
	LinearProgress,
	IconButton,
	Card,
	CardHeader,
} from "@mui/material";
import {
	DataGrid,
	GridToolbar,
	getGridNumericOperators,
} from "@mui/x-data-grid";
// utils
import { fPercent } from "../../utils/format-number";
// components
import Label from "../label";
import Iconify from "../iconify";
import { CustomAvatar } from "../custom-avatar";
import { styled } from "@mui/system";
import {
	processDataForGrid,
	renderNestedTable,
} from "../../utils/datagrid/data";

// ----------------------------------------------------------------------

// const columns = [
// 	// OPTIONS
// 	// https://mui.com/x/api/data-grid/grid-col-def/#main-content
// 	// - hide: false (default)
// 	// - editable: false (default)
// 	// - filterable: true (default)
// 	// - sortable: true (default)
// 	// - disableColumnMenu: false (default)

// 	// FIELD TYPES
// 	// --------------------
// 	// 'string' (default)
// 	// 'number'
// 	// 'date'
// 	// 'dateTime'
// 	// 'boolean'
// 	// 'singleSelect'

// 	{
// 		field: "id",
// 		hide: true,
// 	},
// 	{
// 		field: "avatar",
// 		headerName: "Avatar",
// 		align: "center",
// 		headerAlign: "center",
// 		width: 64,
// 		sortable: false,
// 		filterable: false,
// 		disableColumnMenu: true,
// 		renderCell: (params) => (
// 			<CustomAvatar
// 				name={params.row.name}
// 				sx={{ width: 36, height: 36 }}
// 			/>
// 		),
// 	},
// 	{
// 		field: "name",
// 		headerName: "Name",
// 		flex: 1,
// 		editable: true,
// 	},
// 	{
// 		field: "email",
// 		headerName: "Email",
// 		flex: 1,
// 		editable: true,
// 		renderCell: (params) => (
// 			<Typography
// 				variant="body2"
// 				sx={{ textDecoration: "underline" }}
// 				noWrap
// 			>
// 				{params.row.email}
// 			</Typography>
// 		),
// 	},
// 	{
// 		field: "lastLogin",
// 		type: "dateTime",
// 		headerName: "Last login",
// 		align: "right",
// 		headerAlign: "right",
// 		width: 200,
// 	},
// 	{
// 		field: "rating",
// 		type: "number",
// 		headerName: "Rating",
// 		width: 160,
// 		disableColumnMenu: true,
// 		renderCell: (params) => (
// 			<Rating
// 				size="small"
// 				value={params.row.rating}
// 				precision={0.5}
// 				readOnly
// 			/>
// 		),
// 	},
// 	{
// 		field: "status",
// 		type: "singleSelect",
// 		headerName: "Status",
// 		valueOptions: ["online", "away", "busy"],
// 		align: "center",
// 		headerAlign: "center",
// 		width: 120,
// 		renderCell: (params) => RenderStatus(params.row.status),
// 	},
// 	{
// 		field: "isAdmin",
// 		type: "boolean",
// 		align: "center",
// 		headerAlign: "center",
// 		width: 120,

// 		renderCell: (params) =>
// 			params.row.isAdmin ? (
// 				<Iconify
// 					icon="eva:checkmark-circle-2-fill"
// 					sx={{ color: "primary.main" }}
// 				/>
// 			) : (
// 				"-"
// 			),
// 	},
// 	{
// 		field: "performance",
// 		type: "number",
// 		headerName: "Performance",
// 		align: "center",
// 		headerAlign: "center",
// 		width: 160,
// 		renderCell: (params) => (
// 			<Stack
// 				spacing={1}
// 				direction="row"
// 				alignItems="center"
// 				sx={{ px: 1, width: 1, height: 1 }}
// 			>
// 				<LinearProgress
// 					value={params.row.performance}
// 					variant="determinate"
// 					color={
// 						(params.row.performance < 30 && "error") ||
// 						(params.row.performance > 30 &&
// 							params.row.performance < 70 &&
// 							"warning") ||
// 						"primary"
// 					}
// 					sx={{ width: 1, height: 6 }}
// 				/>
// 				<Typography variant="caption" sx={{ width: 80 }}>
// 					{fPercent(params.row.performance)}
// 				</Typography>
// 			</Stack>
// 		),
// 	},
// 	{
// 		field: "action",
// 		headerName: " ",
// 		align: "right",
// 		width: 80,
// 		sortable: false,
// 		filterable: false,
// 		disableColumnMenu: true,
// 		renderCell: (params) => (
// 			<IconButton onClick={() => console.log("ID", params.row._id)}>
// 				<Iconify icon="eva:more-vertical-fill" />
// 			</IconButton>
// 		),
// 	},
// ];

// ----------------------------------------------------------------------

DataGridCustom.propTypes = {
	data: PropTypes.array,
	checkboxSelection: PropTypes.bool,
};

const StyledDataGridContainer = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.default,
}));

const StyledDataGridHeader = styled(CardHeader)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	fontFamily: "'Rubik', sans-serif",
	padding: 15,
}));

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
	border: "none",
	backgroundColor: theme.palette.background.neutral,
	width: "100%",
	borderRadius: theme.shape.default,
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.contrastText,
		fontSize: 16,
		paddingTop: 2,
		paddingBottom: 2,
		borderRadius: 0,
	},
	"& .MuiDataGrid-virtualScrollerRenderZone": {
		"& .MuiDataGrid-row": {
			"&:nth-of-type(2n)": {
				backgroundColor: theme.palette.background.default,
			},
		},
	},
}));

export default function DataGridCustom({ data, checkboxSelection }) {
	const [selectionModel, setSelectionModel] = useState([]);
	const [expandedRows, setExpandedRows] = useState([]);

	const nestedDataRenderer = (key, value) => {
		// Implement rendering logic for nested data
		return <span>{value}</span>;
	};

	const { rows, columns } = processDataForGrid(data, nestedDataRenderer);

	const handleRowClick = (params) => {
		const rowId = params.id;
		const currentExpandedRows = expandedRows.includes(rowId)
			? expandedRows.filter((id) => id !== rowId)
			: [...expandedRows, rowId];
		setExpandedRows(currentExpandedRows);
		console.log("expandedRows", expandedRows);
	};

	const renderCell = (params) => {
		if (Array.isArray(params.value)) {
			return expandedRows.includes(params.id) ? (
				renderNestedTable(params.value)
			) : (
				<Typography sx={{ cursor: "pointer", color: "primary.main" }}>
					Expand
				</Typography>
			);
		}
		return nestedDataRenderer(params.field, params.value);
	};

	if (columns.length > 0) {
		const ratingColumn = columns.find(
			(column) => column.field === "rating"
		);
		const ratingColIndex = columns.findIndex(
			(col) => col.field === "rating"
		);

		const ratingFilterOperators = getGridNumericOperators().map(
			(operator) => ({
				...operator,
				InputComponent: RatingInputValue,
			})
		);
		columns[ratingColIndex] = {
			...ratingColumn,
			filterOperators: ratingFilterOperators,
		};
	}

	// const selected = data.filter((row) => selectionModel.includes(row._id));

	return (
		<StyledDataGridContainer>
			<StyledDataGridHeader title="Custom Datagrid" />

			<Box style={{ height: "600px" }}>
				<StyledDataGrid
					checkboxSelection={checkboxSelection ? true : false}
					disableSelectionOnClick
					rows={rows}
					columns={columns}
					pagination
					getRowId={(row) => row._id}
					onSelectionModelChange={(newSelectionModel) => {
						setSelectionModel(newSelectionModel);
					}}
					components={{
						Toolbar: GridToolbar,
					}}
					onRowClick={handleRowClick}
					renderCell={renderCell}
				/>
			</Box>
		</StyledDataGridContainer>
	);
}

// ----------------------------------------------------------------------

function RenderStatus(getStatus) {
	const theme = useTheme();
	const isLight = theme.palette.mode === "light";
	return (
		<Label
			variant={isLight ? "soft" : "filled"}
			color={
				(getStatus === "busy" && "error") ||
				(getStatus === "away" && "warning") ||
				"success"
			}
			sx={{ mx: "auto" }}
		>
			{getStatus}
		</Label>
	);
}

// ----------------------------------------------------------------------

RatingInputValue.propTypes = {
	item: PropTypes.object,
	applyValue: PropTypes.func,
};

function RatingInputValue({ item, applyValue }) {
	return (
		<Box sx={{ p: 1, height: 1, alignItems: "flex-end", display: "flex" }}>
			<Rating
				size="small"
				precision={0.5}
				placeholder="Filter value"
				value={Number(item.value)}
				onChange={(event, newValue) => {
					applyValue({ ...item, value: newValue });
				}}
			/>
		</Box>
	);
}
