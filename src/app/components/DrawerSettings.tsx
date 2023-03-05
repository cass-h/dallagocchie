import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { selectTheme, setTheme } from '../../features/settings/settings.slice';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  LightModeOutlined,
  DarkModeOutlined,
  HomeOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DrawerSettingsArea() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toggleTheme = () => {
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
  };
  const homeButton = () => {
    navigate('/');
  };
  const settingsButton = () => {
    navigate('/settings');
  };

  return (
    <>
      <Divider>
        <ListItem key="settings-theme">
          <ListItemButton onClick={toggleTheme}>
            <ListItemIcon>
              {theme === 'dark' ? (
                <LightModeOutlined color="inherit" />
              ) : (
                <DarkModeOutlined color="inherit" />
              )}
            </ListItemIcon>
            <ListItemText primary="Toggle theme" />
          </ListItemButton>
        </ListItem>
        <ListItem key="list-settings">
          <ListItemButton
            disabled={useLocation().pathname === '/settings'}
            onClick={settingsButton}
          >
            <ListItemIcon>
              <SettingsOutlined color="inherit" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem key="list-home">
          <ListItemButton
            disabled={useLocation().pathname === '/'}
            onClick={homeButton}
          >
            <ListItemIcon>
              <HomeOutlined color="inherit" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </Divider>
    </>
  );
}
