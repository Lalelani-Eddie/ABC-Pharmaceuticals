import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListSubheader, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const drawerWidth = 240;

const Sidebar = ({ visible, setVisible }) => {
  const [status, setStatus] = useState({financial:false, operational: false});
  const navigate = useNavigate();

  const handleClickOperational = () => {
    setStatus((prevStatus)=>({
      ...prevStatus,
      operational: !prevStatus.operational
    }));
  };

  const handleClickFinancial = () => {
    setStatus((prevStatus)=>({
      ...prevStatus,
      financial: !prevStatus.financial
    }));
  };

  const handleClose = () => {
    setVisible(false);
  };

  const minimizeSidebar = () => {
    setVisible(false);
  }

  const handleNavigate = (path) => { 
    minimizeSidebar();
    navigate(path);
  }

  return (
    <Drawer
      variant="temporary"
      style={{ width: drawerWidth, flexShrink: 0 }}
      classes={{ paper: { width: drawerWidth } }}
      open={visible}
      onClose={handleClose}
    >
      <List
        component="nav"
        subheader={<ListSubheader component="div">Menu</ListSubheader>}
      >
        <ListItem button onClick={() => { handleNavigate('/') }}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleClickOperational}>
          <ListItemText primary="Operational Insights" />
          {status.operational ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={status.operational} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={{ paddingLeft: drawerWidth / 4 }} onClick={() => { handleNavigate('/production-vs-demand') }}> 
              <ListItemText primary="Production VS Demand" />
            </ListItem>
            <ListItem button style={{ paddingLeft: drawerWidth / 4 }} onClick={() => { handleNavigate('/product-results-table') }}>
              <ListItemText primary="Product Results Table" />
            </ListItem>
            <ListItem button style={{ paddingLeft: drawerWidth / 4 }} onClick={() => { handleNavigate('/product-vs-byproduct') }}>
              <ListItemText primary="Product VS By-product" />
            </ListItem>
            <ListItem button style={{ paddingLeft: drawerWidth / 4 }} onClick={() => { handleNavigate('/byproduct-discarded-vs-used') }}>
              <ListItemText primary="Byproduct Discarded vs Used" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClickFinancial}>
          <ListItemText primary="Financial Insights" />
          {status.financial ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={status.financial} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={{ paddingLeft: drawerWidth / 4 }} onClick={() => { handleNavigate('/product-revenue') }}> 
              <ListItemText primary="Product Revenue" />
            </ListItem>
            <ListItem button style={{ paddingLeft: drawerWidth / 4 }} onClick={() => { handleNavigate('/production-vs-cost') }}>
              <ListItemText primary="Production VS Cost" />
            </ListItem>
            
          </List>
        </Collapse>
       
      </List>
    </Drawer>
  );
};

export default Sidebar;