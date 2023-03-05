import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  selectAppHand,
  selectDrawer,
  setDrawerOpen,
} from '../../features/settings/settings.slice';
import { useAppDispatch, useAppSelector } from '../hooks';
import DrawerSettingsArea from './DrawerSettings';
export const DrawerContainer = (
  props: React.PropsWithChildren & {
    title: string;
    drawer?: React.ReactElement;
  }
) => {
  const { open, width } = useAppSelector(selectDrawer);
  const dispatch = useAppDispatch();
  const hand = useAppSelector(selectAppHand);
  const handleDrawerToggle = () => {
    dispatch(setDrawerOpen(!open));
  };
  const drawer = (
    <>
      <ListItem
        key="close-nav"
        sx={{ mt: 2, mr: 2, display: { sm: 'none' } }}
        secondaryAction={
          <IconButton
            onClick={handleDrawerToggle}
            color="inherit"
            aria-label="close drawer"
          >
            <CloseIcon />
          </IconButton>
        }
      ></ListItem>
      {props.drawer && props.drawer}
      {DrawerSettingsArea()}
    </>
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          color="secondary"
          anchor={hand}
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          anchor={hand}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${width}px)` },
        }}
      >
        <AppBar position="static">
          <Toolbar
            style={{ flexDirection: hand === 'left' ? 'row' : 'row-reverse' }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">{props.title}</Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ margin: { xs: 2, s: 4 } }}> {props.children}</Box>
      </Box>
    </Box>
  );
};
