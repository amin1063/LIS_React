import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
// import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getHeartBeat } from '../redux/actions/pathologyActions';
import { Box, Card, Paper, Stack, Switch, Typography } from '@mui/material';
import { HeartBeatHeadings } from '../configData';
import { updateDataAction } from '../redux/actions/servicesActions';

const HeartBeat = () => {
    const [heartBeatStatus, setHeartBeatStatus] = useState('false')
    const [changeId, setChangeId] = useState('false')
    const URL = 'Heartbeat';
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const heartBeatList = useSelector((state) => state.pathologyReducer.heartBeatList);

    useEffect(() => {
        dispatch(getHeartBeat(URL));
    }, [])

    useEffect(() => {
        if (heartBeatList && heartBeatList?.length) {
            setData(heartBeatList)
        }
    }, [heartBeatList])

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
                <Typography variant='h5' color={'primary'} sx={{ mt: 1 }}>Heart Beat</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    p: 4
                }}>
                    {data?.length ?
                        <React.Fragment>
                            {data?.map((item, i) =>
                            (<Card sx={{ width: '400px', borderRadius: '15px', p: 2, backgroundColor: 'lightgray',mx:2 }}>
                                    {HeartBeatHeadings?.map((heading, id) => {
                                        return (
                                            <Stack direction={'row'} sx={{ textAlign: 'justify' }}>
                                                <Typography sx={{ fontSize: '14px', fontWeight: 'bold', width: '120px', color: '#666' }}>{heading.label}</Typography> :
                                                {heading?.label == 'IsActive' ?
                                                    <Switch
                                                        size='small'
                                                        color="success"
                                                        onChange={(e) => handleChecked(e, item.ID)}
                                                        checked={item[heading.id] || false}
                                                    />
                                                    :
                                                    <Typography sx={{ fontSize: '14px', fontWeight: '600', ml: 1, color: '#444' }}>
                                                        {`${item[heading.id] || '-'}`}
                                                    </Typography>
                                                }
                                            </Stack>
                                        )
                                    })}
                                </Card>)
                            )}
                        </React.Fragment>
                        : null
                    }
                </Box>
            </Paper>
        </>
    )
}

export default HeartBeat