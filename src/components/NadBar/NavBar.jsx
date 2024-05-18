import * as React from 'react';
import ButtonComponent from '../ButtonComponent';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import IconShoppingCartComponent from '../IconShopinCartComponent'; // Icono de carrito de compras
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { Link } from 'react-router-dom';

const pages = ['CALLE', 'SCOOTERS', 'ENDURO', 'CUSTOM'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const clickEnCalle = () => {
    console.log('Hiciste click en Calle');
  };

  const clickEnScooters = () => {
    console.log('Hiciste click en Scooters');
  };

  const clickEnEnduro = () => {
    console.log('Hiciste click en Enduro');
  };

  const clickEnCustom = () => {
    console.log('Hiciste click en Custom');
  };

  return (
    <>
      <AppBar color="primary" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <TwoWheelerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MOTO STYLE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <TwoWheelerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MOTO ROMA
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <ButtonComponent nombre="Calle" callback={clickEnCalle}/>
              <ButtonComponent nombre="Scooters" callback={clickEnScooters} />
              <ButtonComponent nombre="Enduro" callback={clickEnEnduro} />
              <ButtonComponent nombre="Custom" callback={clickEnCustom} />
            </Box>
            <IconShoppingCartComponent />
          </Toolbar>
        </Container>
      </AppBar>
      <nav
        style={{
          display: 'flex',
          gap: 10,
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <button>
          <Link to={'/products'}>Products</Link>
        </button>
        <button>
          <Link to={'/contact'}>Contact</Link>
        </button>
      </nav>
    </>
  );
}

export default ResponsiveAppBar;

/*import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
  const clickEnCalle = () => {
    console.log('Hiciste click en Calle');
  };

  const clickEnScooters = () => {
    console.log('Hiciste click en Scoters');
  };

  const clickEnEnduro = () => {
    console.log('Hiciste click en Enduro');
  };

  const clickEnCustom = () => {
    console.log('Hiciste click en Custom');
  };

  return (
    <header className="allNav">
      <h1>Tienda de Motos</h1>
      <nav className="barra">
        <ButtonComponent nombre="Calle" callback={clickEnCalle} />
        <ButtonComponent nombre="Scooters" callback={clickEnScooters} />
        <ButtonComponent nombre="Enduro" callback={clickEnEnduro} />
        <ButtonComponent nombre="Custom" callback={clickEnCustom} />
      </nav>
      <CartWidget />
    </header>
  );
}*/