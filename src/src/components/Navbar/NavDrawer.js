import React, { useEffect, useState } from 'react'
import { Box, Accordion, AccordionDetails, AccordionSummary, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { navConfig } from '../../configData';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const NavDrawer = ({ open, setOpen }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState({});

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: isExpanded ? true : false,
    }));
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  const Logout = () => {
    navigate('/')
    localStorage.setItem('token', "")
  }

  useEffect(() => {
    navigate('/')
  }, [token])

  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{ width: 250, margin: 0, padding: 0, height: '100%' }}
          role="presentation"
          onKeyDown={() => setOpen(false)}
        >
          <List disablePadding>
            {token && token.length ?
              <>
                {navConfig.map((item, index) => (
                  <React.Fragment key={item.title}>
                    {item.children && item.children.length > 0 ? (
                      <Accordion
                        expanded={expanded[index]}
                        onChange={handleAccordionChange(index)}
                      >
                        <AccordionSummary
                          sx={{ maxHeight: '30px', margin: '0px !important', }}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${index}-content`}
                          id={`panel${index}-header`}
                        >
                          <ListItemText primary={item.title} />
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '8px', backgroundColor: '#cecece' }}>
                          <List disablePadding>
                            {item.children.map((childItem, childIndex) => (
                              <ListItem key={childItem.title} sx={{ maxHeight: '35px' }} disablePadding>
                                <Link to={`${childItem.path}`} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                                  <ListItemButton onClick={handleItemClick}>
                                    <ListItemText primary={childItem.title} />
                                  </ListItemButton>
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    ) : (
                      <ListItem disablePadding>
                        <ListItemButton onClick={handleItemClick}>

                          <Link to={`${item.path}`} style={{ textDecoration: 'none', color: 'black', }}>
                            <ListItemText primary={item.title} />
                          </Link>
                        </ListItemButton>
                      </ListItem>
                    )}
                  </React.Fragment>
                ))}
                <Button
                  variant="contained"
                  color="error"
                  onClick={Logout}
                  size='small'
                  sx={{  height: '40px',width:'85%',margin:'15px 20px ' }}
                > Logout
                </Button>

              </>
              :
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleItemClick} sx={{margin:'0 auto'}}>

                    <Link to={`/`} style={{ textDecoration: 'none', color: 'black', }}>
                      <ListItemText primary={'Home'} />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleItemClick}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate('login')}
                      sx={{  height: '40px',width:'90%',}}
                    > Login
                    </Button>
                  </ListItemButton>
                </ListItem>
              </>
            }
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
