import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TextField, Typography, TablePagination, IconButton, Stack, Button, useMediaQuery, Tooltip, Popover, InputAdornment, Select, MenuItem, FormControl, InputLabel, Autocomplete } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AddEditPopup from './AddEditPopup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../Style.css'
import { useDispatch } from 'react-redux';
import { deleteAnalyzers } from '../../redux/actions/servicesActions';
import ConfirmDialog from '../ConfirmDialog';
import DetailViewPopup from './DetailViewPopup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CircularProgress from '@mui/material/CircularProgress';
import HISAnalyzerDialog from './HISAnalyzerDialog';
import HISDetailViewPopup from './HISDetailViewPopup';
import SampleIdDetailPopup from './SampleIdDetailPopup';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SelectFieldComponent from '../SelectFieldComponent';
import TestOrderDialog from './TestOrderDialog';


const TableData = ({ data, headingName, tableHeadings, url, fetchData, LisCodesList, analyzersList, cptList, hisList, rerender, readable, showColor, analyzerDropDown }) => {
    const dispatch = useDispatch()
    const [tableData, setTableData] = useState([])
    const [orderBy, setOrderBy] = useState(null);
    const [order, setOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openModal, setOpenModal] = useState(false);
    const [openHisModal, setOpenHisModal] = useState(false);
    const [editValue, setEditValue] = useState({})
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [hisOpenDetailsModal, setHisOpenDetailsModal] = useState(false);
    const [sampleDetailsModal, setSampleOpenDetailsModal] = useState(false);
    const [deleteId, setDeleteId] = useState(0)
    const [loading, setLoading] = useState(true)
    const isScreenSmall = useMediaQuery('(max-width:945px)');
    const forHIS = ['HisName', 'HisCode', 'HparamName', 'Hunit', 'Hrange'];
    const forAnalyzer = ['AnalyzerCode', 'AnalyzerName', 'AparamName', 'Aunit', 'Arange'];
    const [anchorEl, setAnchorEl] = useState(null);
    const [sampleSearch, setSampleSearch] = useState('');
    const [searchBy, setSearchBy] = useState('');
    const [searchBySelect, setSearchBySelect] = useState('');
    const [open, setOpen] = useState(false);
    const [openSelectField, setOpenSelectField] = useState(false);
    const [sampleFilterId, setSampleFilterId] = useState('');
    const [searchMenuOptions, setSearchMenuOptions] = useState([])
    const dateArray = ['Received', 'Collected', 'CreatedOn', 'UpdatedOn', 'Order'];
    const [analyzerMenuOptions, setAnalyzerMenuOptions] = useState([]);
    const [selectedAnalyzer, setSelectedAnalyzer] = useState('')
    const [openTestOrderModal, setOpenTestOrderModal] = useState(false)

    const handleClick = (event, selectedId) => {
        setAnchorEl(event.currentTarget);
        setSearchBy(selectedId.id)
        if (selectedId.id == 'IsActive') {
            setOpenSelectField(true)
        } else {
            let options = []
            sortedData?.map((item, i) => {
                options.push({ label: item[selectedId?.id], value: item[selectedId?.id] })
            })
            setSearchMenuOptions(options)
            setOpen(true);
        }
    };

    const currentDate = new Date().toISOString();

    const DateConvertion = (myDate) => {
        const utcDateTime = new Date(myDate);
        const formattedDateTime = utcDateTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        return formattedDateTime
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
        setOpenSelectField(false);
    };


    useEffect(() => {
        if (!analyzerDropDown) {
            setTableData(data)
        }
        if (data?.length) {
            setLoading(false)
        }
    }, [data])

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrderBy(property);
        setOrder(isAsc ? 'desc' : 'asc');
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = tableData && tableData?.filter((row) =>
        row?.Name?.toLowerCase().includes(searchTerm?.toLowerCase())
        || row?.ID?.toString().includes(searchTerm)
        || row?.Id?.toString().includes(searchTerm)
        || row?.OrderID?.toString().includes(searchTerm)
        // || row?.analyzerName?.toString().includes(searchTerm)
        // || row?.cptName?.toString().includes(searchTerm)
        // || row?.liscodeName?.toString().includes(searchTerm)
        // || row?.categoryName?.toString().includes(searchTerm)
        // || row?.sampleName?.toString().includes(searchTerm)
        // || row?.unit?.toString().includes(searchTerm)
        // || row?.orderId?.toString().includes(searchTerm)
    );


    const sortedData = orderBy
        ? [...filteredData].sort((a, b) => {
            if (typeof a[orderBy] === 'number' && typeof b[orderBy] === 'number') {
                return order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
            } else {
                const aStr = String(a[orderBy]).toLowerCase();
                const bStr = String(b[orderBy]).toLowerCase();
                return order === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
            }
        })
        : [...filteredData];

    useEffect(() => {
        if (sampleSearch?.length) {
            const filteredData = data && data?.filter((row) =>
                row?.[searchBy]?.toString().toLowerCase().includes(sampleSearch?.toLowerCase()))
            setTableData(filteredData)
        } else if (searchBySelect?.length) {
            const filteredData = data && data?.filter((row) =>
                row?.IsActive?.toString().toLowerCase().includes(searchBySelect?.toLowerCase()))
            setTableData(filteredData)
        } else {
            setTableData(data)
        }
    }, [sampleSearch, searchBySelect])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const confirmDelete = (id) => {
        setDeleteId(id)
        setDeleteDialog(true)
    }

    const deleteData = () => {
        dispatch(deleteAnalyzers(url, deleteId, rerender))
        setDeleteDialog(false)
    }

    const editData = (data) => {
        setEditValue(data)
        if (url == 'HisAnalyzer') {
            setOpenHisModal(true)
        } else {
            setOpenModal(true)
        }
    }
    const detailView = (data) => {
        setEditValue(data)
        if (url == 'HisAnalyzer') {
            setHisOpenDetailsModal(true)
        } else {
            setOpenDetailsModal(true)
        }
    }

    const sampleDetailView = (data, item) => {
        setSampleFilterId(item)
        setEditValue(data)
        setSampleOpenDetailsModal(true)
    }

    useEffect(() => {
        if (analyzersList?.length) {
            let data = []
            analyzersList && analyzersList?.map((item, i) => {
                data.push({ label: item?.Name, value: item.ID })
            })
            setAnalyzerMenuOptions(data)
        }
    }, [analyzersList, LisCodesList, hisList])

    useEffect(() => {
        if (selectedAnalyzer?.length) {
            let filterData = data?.filter((item, i) => item?.AnalyzerName == selectedAnalyzer)
            setTableData(filterData)
        }else{
            setTableData([])
        }
    }, [selectedAnalyzer])

    return (
        <>
            <ConfirmDialog remove={deleteData} openDialog={[deleteDialog, setDeleteDialog]} />
            <DetailViewPopup
                detailsModalValue={[openDetailsModal, setOpenDetailsModal]}
                editDataValue={[editValue, setEditValue]}
            />
            <SampleIdDetailPopup
                detailsModalValue={[sampleDetailsModal, setSampleOpenDetailsModal]}
                editDataValue={[editValue, setEditValue]}
                sampleFilterId={sampleFilterId}
                url = {url}
            />
            <HISDetailViewPopup
                detailsModalValue={[hisOpenDetailsModal, setHisOpenDetailsModal]}
                editDataValue={[editValue, setEditValue]}
            />
            <TestOrderDialog
              rerender={rerender}
              modalValue={[openTestOrderModal, setOpenTestOrderModal]}
              editDataValue={[editValue, setEditValue]}
              url={url}
              fetchData={fetchData}
              tableHeadings={tableHeadings}
            />

            <AddEditPopup
                rerender={rerender}
                modalValue={[openModal, setOpenModal]}
                editDataValue={[editValue, setEditValue]}
                url={url}
                fetchData={fetchData}
                tableHeadings={tableHeadings}
                cptList={cptList}
                analyzersList={analyzersList}
                LisCodesList={LisCodesList}
            />
            <HISAnalyzerDialog
                rerender={rerender}
                modalValue={[openHisModal, setOpenHisModal]}
                editDataValue={[editValue, setEditValue]}
                url={url}
                fetchData={fetchData}
                tableHeadings={tableHeadings}
                analyzersList={analyzersList}
                hisList={hisList}
            />

            <Paper sx={{ borderRadius: '20px', marginX: '30px', mt: 1, height: '80vh', overflow: 'auto' }}>
                <Stack direction={'row'} className='table-header'>
                    <Typography variant="h6" className='table-headingName'>
                        {headingName}
                    </Typography>
                    {url == 'HisAnalyzer' &&
                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                            <Autocomplete
                                value={selectedAnalyzer}
                                onChange={(event, value) => {
                                    setSelectedAnalyzer(value?.label)
                                }}
                                options={analyzerMenuOptions}
                                renderInput={(params) => <TextField {...params} label="Analyzer" />}
                            />
                        </FormControl>
                    }
                    <Stack direction={'row'} sx={{ width: isScreenSmall ? '100%' : '50%' }} className='table-header-func'>
                        <TextField
                            placeholder='Search here...'
                            type='text'
                            label="Search"
                            variant="outlined"
                            value={searchTerm}
                            className='search-field'
                            onChange={handleSearch}
                        />
                        {!readable &&
                            <>
                                {isScreenSmall ? (
                                    <IconButton
                                        aria-label="Add item"
                                        sx={{ backgroundColor: '#3d5afe', borderRadius: '50%', fontSize: '18px', p: 1, ml: 1 }}
                                        onClick={() => url == 'HisAnalyzer' ? setOpenHisModal(true) : url == 'TestOrder'? setOpenTestOrderModal(true): setOpenModal(true)}
                                    >
                                        <AddIcon fontSize='large' sx={{ color: 'white', fontSize: '30px' }} />
                                    </IconButton>
                                ) : (
                                    <Button
                                        component="label"
                                        sx={{ width: "300px", border: '2px solid', borderRadius: '20px', fontSize: '18px', p: 1, ml: 2 }}
                                        variant="outlined"
                                        endIcon={<AddIcon />}
                                        onClick={() => url == 'HisAnalyzer' ? setOpenHisModal(true) :url == 'TestOrder'? setOpenTestOrderModal(true): setOpenModal(true)}
                                    >
                                        {url == 'HisAnalyzer' ? 'ADD Mapping' : 'Add item'}
                                    </Button>
                                )}
                            </>
                        }
                    </Stack>
                </Stack>

                <TableContainer>
                    <Table size="small">
                        <TableHead >
                            <TableRow>
                                {tableHeadings?.map((item, i) => (
                                    <React.Fragment key={item + i}>
                                        <TableCell key={item.id} sx={{
                                            fontWeight: '600', fontSize: '13px', backgroundColor: 'lightgray',
                                            minWidth: item.id !== 'id' ? 'auto' :
                                                item.id == 'IsActive' ? '100px' : '20px',
                                            // minWidth: getColumnWidth(item.id)
                                            textWrap: 'nowrap', pr: 0, py: 1.5

                                        }}>
                                            <TableSortLabel
                                                active={orderBy === `${item.id}`}
                                                direction={orderBy === `${item.id}` ? order : 'asc'}
                                                onClick={() => handleSort(item.id)}
                                            >
                                                {item.label}
                                            </TableSortLabel>
                                            <>
                                                {item.id !== 'id' && item.id !== 'actions' && item.id !== 'Desc' && item.id !== 'Desciption' &&
                                                    <>
                                                        <IconButton sx={{ p: 0.2, m: 0 }} onClick={(e) => handleClick(e, item)} aria-label="edit">
                                                            <SearchIcon sx={{ ml: 0.3, fontSize: '15px' }} />
                                                        </IconButton>
                                                        <Popover
                                                            open={open}
                                                            anchorEl={anchorEl}
                                                            onClose={handleClose}
                                                            anchorOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'right',
                                                            }}
                                                            transformOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'left',
                                                            }}
                                                        >
                                                            {/* <TextField
                                                                sx={{ padding: '0px !important' }}
                                                                size='small'
                                                                value={sampleSearch}
                                                                placeholder={`Search here ...`}
                                                                onChange={(e) => setSampleSearch(e.target.value)}
                                                                InputProps={{
                                                                    endAdornment: <InputAdornment position="end">
                                                                        <IconButton aria-label="cancel" onClick={(e) => setSampleSearch('')}>
                                                                            <CloseIcon fontSize='small' color='error' />
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                }}
                                                            /> */}
                                                            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">

                                                                <Autocomplete
                                                                    value={sampleSearch}
                                                                    onChange={(event, value) => {
                                                                        setSampleSearch(value?.value)
                                                                    }}
                                                                    size='small'
                                                                    options={searchMenuOptions}
                                                                    renderInput={(params) => <TextField {...params} label="Search..." />}
                                                                />
                                                            </FormControl>
                                                        </Popover>
                                                        <Popover
                                                            open={openSelectField}
                                                            anchorEl={anchorEl}
                                                            onClose={handleClose}
                                                            anchorOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'right',
                                                            }}
                                                            transformOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'left',
                                                            }}
                                                        >
                                                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                                                <InputLabel id="demo-select-small-label">Select</InputLabel>
                                                                <Select
                                                                    labelId="demo-select-small-label"
                                                                    id="demo-select-small"
                                                                    value={searchBySelect}
                                                                    label="Select"
                                                                    onChange={(e) => setSearchBySelect(e.target.value)}
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={'true'}>Yes</MenuItem>
                                                                    <MenuItem value={'false'}>No</MenuItem>
                                                                </Select>
                                                            </FormControl>

                                                        </Popover>
                                                    </>
                                                }
                                            </>
                                        </TableCell>
                                    </React.Fragment>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={tableHeadings?.length + (!readable ? 1 : 0)} sx={{ paddingY: '10px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>
                                        <CircularProgress color="primary" />
                                    </TableCell>
                                </TableRow>
                            ) : sortedData?.length ? (
                                <>
                                    {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
                                        <TableRow key={row.ID || row.Id} sx={{
                                            '&:hover': {
                                                // scale: '1.03'
                                                // border: '1.5px solid black',
                                                boxSizing: 'border-box',
                                                backgroundColor: '#C0C0C0'

                                            }
                                        }}>
                                            {tableHeadings?.map((item, i) => (
                                                <React.Fragment key={i}>
                                                    {item.id == 'actions' ?
                                                        <>
                                                            <TableCell sx={{ display: "flex", paddingBottom: '5px', pr: 0 }}>
                                                                <IconButton onClick={() => detailView(row)}>
                                                                    <VisibilityIcon />
                                                                </IconButton>
                                                                {!readable && (
                                                                    <>
                                                                        <IconButton aria-label="edit" onClick={() => editData(row)}>
                                                                            <EditIcon />
                                                                        </IconButton>
                                                                        <IconButton onClick={() => confirmDelete(row.ID || row.Id)} aria-label="delete">
                                                                            <DeleteIcon sx={{ color: 'red' }} />
                                                                        </IconButton>
                                                                    </>
                                                                )}
                                                            </TableCell>
                                                        </>
                                                        : item.id === 'IsActive' ? (
                                                            <TableCell sx={{ paddingY: '5px', fontWeight: 600, color: row.IsActive ? 'green' : 'red', pr: 0 }}>{row.IsActive ? 'Active' : 'In Active'}</TableCell>
                                                        ) : item.id === 'id' ? (
                                                            <TableCell sx={{ paddingY: '10px', pr: 0 }}>{(page * rowsPerPage) + rowIndex + 1}</TableCell>
                                                        ) :
                                                            item.id === 'CreatedOn' ? (
                                                                <TableCell sx={{ paddingY: '10px', pr: 0 }}>
                                                                    {DateConvertion(row[item.id]) || '-'}
                                                                </TableCell>
                                                            ) :
                                                                item.id === 'SampleId' || item.id === 'MRN' || item.id === 'SampleID'  ? (
                                                                    <Tooltip arrow title="Click for Details" placement="bottom">
                                                                        <TableCell onClick={() => sampleDetailView(row, item.id)} sx={{ paddingY: '10px', color: '#27A3B9', fontWeight: '600', cursor: 'pointer', pr: 0 }}>
                                                                            {row[item.id] || '-'}
                                                                        </TableCell>
                                                                    </Tooltip>
                                                                ) :
                                                                    forHIS.includes(item.id) && showColor ? (
                                                                        <TableCell sx={{ paddingY: '5px', boxSizing: 'border-box', backgroundColor: 'rgb(242, 198, 255, 0.7)', pr: 0 }}>{row[item.id] || '-'}</TableCell>
                                                                    ) : forAnalyzer.includes(item.id) && showColor ? (
                                                                        <TableCell sx={{ paddingY: '5px', boxSizing: 'border-box', backgroundColor: 'rgb(148,221,232,0.7)', pr: 0 }}>{row[item.id] || '-'}</TableCell>
                                                                    )
                                                                        : dateArray.includes(item.id) ? (
                                                                            <TableCell sx={{ paddingY: '5px', boxSizing: 'border-box', pr: 0 }}>{row[item.id] || DateConvertion(currentDate)}</TableCell>
                                                                        )
                                                                            : (

                                                                                <TableCell sx={{ paddingY: '5px', boxSizing: 'border-box', pr: 0 }}>{row[item.id] || '-'}</TableCell>
                                                                            )
                                                    }
                                                </React.Fragment>
                                            ))}
                                        </TableRow>
                                    ))}
                                </>
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={tableHeadings?.length + (!readable ? 1 : 0)} sx={{ paddingY: '10px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>
                                        {
                                            selectedAnalyzer && !sortedData.length ? 'No Data Found' :
                                                analyzerDropDown ? 'Please Select Analyzer' :
                                                // !selectedAnalyzer ? 'Please Select Analyzer' :
                                                    'No Data Found'}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={sortedData?.length || 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default TableData;
