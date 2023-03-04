import {
  AppBar,
  Drawer,
  IconButton,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  selectDrawer,
  setDrawerOpen,
} from '../../features/settings/settings.slice';
import { useAppDispatch, useAppSelector } from '../hooks';
import DrawerSettingsArea from './drawer-settings';

export const Container = (
  props: React.PropsWithChildren & { title: string }
) => {
  const { open, width } = useAppSelector(selectDrawer);
  const dispatch = useAppDispatch();
  const handleDrawerToggle = () => {
    dispatch(setDrawerOpen(!open));
  };
  const drawer = (
    <>
      <ListItem
        key="close-nav"
        sx={{ mr: 2, display: { sm: 'none' } }}
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
      {props.children}
      {DrawerSettingsArea()}
    </>
  );
  return (
    <>
      <Drawer
        variant="temporary"
        color="secondary"
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
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width },
        }}
        open
      >
        {drawer}
      </Drawer>
      <AppBar position="static">
        <Toolbar>
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
    </>
  );
};
