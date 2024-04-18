import React from 'react'
import { Box, Button, Card, CardHeader, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TableComponent = ({columns,data}) => {
  return (
    <>
          <Card sx={{width:'90%',textAlign:'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between',zIndex:'1' }}>
          <CardHeader title="Job Status" sx={{ mb: 3 }} />
        </Box>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  {columns?.map((column, i) => (
                    <TableCell key={i}>
                      <Stack direction="row" 
                      >
                        <Typography style={{ marginRight: '8px' }}> {column}</Typography>
                      </Stack>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {data &&
                  data?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell sx={{ color: '#f79816' }}>
                        {/* {row.scheduled && (
                          <LightTooltip
                            title={`Next Execution @ ${moment(row.nextTimeOfRun).format('MMMM Do YYYY, h:mm:ss a')}`}
                          >
                            <QueryBuilderIcon />
                          </LightTooltip>
                        )} */}
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ cursor: 'pointer', color: '#699ad4' }} 
                        // onClick={() => handleOpenModal(row)}
                        >
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell>{row.info}</TableCell>
                      <TableCell>
                      <Button sx={{ minWidth: 'fit-content', p: 0 }}>
                                <ModeEditIcon />
                              </Button>
                              <Button sx={{ minWidth: 'fit-content', p: 0 }} 
                            //   onClick={() => handleDelete(row.id)}
                              >
                            <DeleteForeverIcon />
                          </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            {/* <TablePagination
              rowsPerPageOptions={[5, 10, 20, 100]}
              component="div"
              count={jobs.totalElements}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
          </TableContainer>
        {/* </Scrollbar> */}
      </Card>
    </>
  )
}

export default TableComponent