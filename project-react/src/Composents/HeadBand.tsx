
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Link, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import '../Css/HeadBand.css';
import { Link as RouterLink } from 'react-router-dom';

interface HeadBandProps {
  window?: () => Window;
}

type NavRoute = {
  route: string;
  label: string;
  displayLink: boolean;
};

export default function HeadBand(props: HeadBandProps) {

  const navItems: NavRoute[] = [
    {
      route: '/',
      label: 'Accueil',
      displayLink: true,
    },
    {
      route: '/ListPlayers',
      label: 'Liste des joueurs',
      displayLink: true,
    },
    {
      route: '/CreatePlayers',
      label: 'Gestion des joueurs',
      displayLink: true,
    },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List className='list'>
        {navItems.map(
          (item) =>
            item.displayLink && (
              <ListItem key={item.route} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText
                    primary={
                      <Link component={RouterLink} to={item.route} className='Btn'>
                        {item.label}
                      </Link>
                    }
                  />
                </ListItemButton>
              </ListItem>
            )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }} className='HeadBand'>
      <AppBar component="nav">
        <Toolbar>

          <Typography
            textAlign={'left'}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Projet REACT ISITECH RPI-DEV
          </Typography>
          <Box>
            <Typography
              textAlign={'left'}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {drawer}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
