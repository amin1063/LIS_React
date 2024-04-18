import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
// import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getHeartBeat } from '../redux/actions/pathologyActions';
import { Box, Button, Card, Container, IconButton, Paper, Popover, Stack, Switch, TextField, Typography } from '@mui/material';
import { HeartBeatHeadings } from '../configData';
import { getAnalyzers, updateDataAction } from '../redux/actions/servicesActions';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import AdjustIcon from '@mui/icons-material/Adjust';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

const AnalyzerMachine = () => {
    const [heartBeatStatus, setHeartBeatStatus] = useState('false')
    const [changeId, setChangeId] = useState('false')
    const URL = 'Analyzer';
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [openDrawer, setOpenDrawer] = useState(false)
    const analyzerLists =  useSelector((state) => state.servicesReducer.analyzerLists);

    const handleSearch = () => {
        console.log("pppp");
    };

    useEffect(() => {
        dispatch(getAnalyzers(URL));
    }, [])

    const handleDrawer = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenDrawer(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenDrawer(false);
    };

    useEffect(()=>{
        if(searchTerm.length >2){
            let filterData = data.filter((item,i)=> item?.Name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()) )
            setData(filterData)
        }else{
            setData(analyzerLists)
        }

    },[searchTerm])


    useEffect(() => {
        if (analyzerLists && analyzerLists?.length) {
            setData(analyzerLists)
        }
    }, [analyzerLists])

    const handleChecked = (e, itemId) => {
        const updatedData = data.map(item => {
            if (item.ID === itemId) {
                return { ...item, IsActive: e.target.checked };
            }
            return item;
        });
        const updateDataValue = updatedData.filter((item) => item.ID == itemId)
        setData(updatedData);
        dispatch(updateDataAction(URL, itemId, ...updateDataValue, getHeartBeat));
    };

    return (
        <>
            <Paper sx={{ borderRadius: '20px', marginX: '30px', mt: 1, height: '80vh', overflow: 'auto' }}>
                <Typography variant='h5' color={'primary'} sx={{ mt: 1 }}>Analyzers</Typography>
                <Stack gap={2} direction={'row'} sx={{ width: '40%', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                    <TextField
                        placeholder='Search here...'
                        type='text'
                        label="Search"
                        variant="outlined"
                        value={searchTerm}
                        className='search-field'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button size='small' sx={{ border: '2px solid lightblue', padding: '0px !important', height: '55px' }} onClick={() => handleSearch}>
                        <FileUploadIcon />
                    </Button>
                </Stack>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    p: 4
                }}>
                    {data?.length ?
                        <Box sx={{ display: 'flex', justifyContent: 'start', width: '100%', flexWrap: 'wrap', }}>
                            {data?.map((item, i) =>
                            (<Card sx={{ width: '200px', height: '180px', borderRadius: '15px', p: 2, backgroundColor: 'white', m: 1, border: '3px solid #89ddd8', boxShadow: '1px 1px 10px #89ddd8', position: 'relative' }}>
                                <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} onClick={(e) => handleDrawer(e)}>
                                    <MoreVertIcon />
                                </IconButton>
                                <Popover
                                    open={openDrawer}
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
                                    <Card sx={{ width: '200px',p:1,px:2 }}>
                                        <Typography sx={{display:'flex',alignItems:'center',mt:0.2}}><SettingsSuggestIcon  sx={{ color: 'gray', fontSize: '22px',mr:1 }}/> Configure</Typography>
                                        <Typography sx={{display:'flex',alignItems:'center',mt:0.2}}><DeviceHubIcon  sx={{ color: 'gray', fontSize: '22px',mr:1 }}/> Map Tests</Typography>
                                        <Typography sx={{display:'flex',alignItems:'center',mt:0.2}}><AdjustIcon  sx={{ color: 'gray', fontSize: '22px',mr:1 }}/> Undeploy</Typography>
                                        <Typography sx={{display:'flex',alignItems:'center',mt:0.2}}><PlagiarismIcon  sx={{ color: 'gray', fontSize: '22px',mr:1 }}/> Analyzer doc</Typography>
                                    </Card>
                                </Popover>
                                <Stack direction={'column'} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                                    <FileUploadIcon sx={{ mt: 2, color: 'gray', fontSize: '30px' }} />
                                    <Typography sx={{ fontSize: '18px', width: '120px', color: 'black', my: 1 }}>{item?.Name || "-"}</Typography>
                                    {/* {heading?.label == 'IsActive' ? */}
                                    <Stack direction={'row'} style={{ width: '80%', justifyContent: 'space-between', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                                        {false ?
                                            <Switch
                                                color="success"
                                            // onChange={(e) => handleChecked(e, item.ID)}
                                            // checked={data.IsActive || false}
                                            />
                                            :
                                            <Button >
                                                <RocketLaunchIcon sx={{ color: 'gray', fontSize: '30px' }} />
                                            </Button>
                                        }
                                        <Button>
                                            <DownloadIcon sx={{ color: 'gray', fontSize: '30px' }} />
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Card>)
                            )}
                        </Box>
                        : null
                    }
                </Box>
            </Paper>
        </>
    )
}

export default AnalyzerMachine;