import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FC } from 'react';
import {
  FieldError,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SettingsState } from '../../features/settings/settings.slice';
export type SaveSettingsFormProps = {
  handleSaveSettings: (data: SettingsState) => Promise<boolean>;
};

export type ErrorType = {
  target: keyof SettingsState;
  fieldError: FieldError;
};

export const SettingsForm: FC<SaveSettingsFormProps> = ({
  handleSaveSettings,
}) => {
  const navigate = useNavigate();
  const formMethods = useForm<SettingsState>();

  const onSubmit: SubmitHandler<SettingsState> = async (
    data: SettingsState
  ) => {
    return handleSaveSettings(data)
      .then(() => {
        navigate(-1);
      })
      .catch((reason) => {
        reason.errors.map((err: ErrorType) => {
          formMethods.setError(err.target, err.fieldError);
        });
      });
  };

  const appHand = (
    <ToggleButtonGroup id="appHand" exclusive aria-label="app hand">
      <ToggleButton value="left" aria-label="Left hand mode"></ToggleButton>
      <ToggleButton value="right" aria-label="Right hand mode"></ToggleButton>
    </ToggleButtonGroup>
  );

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        /* theme: 'dark' | 'light'; drawerWidth: number; drawerOpen: boolean;
        appHand: Hand; */
        {appHand}
      </form>
    </FormProvider>
  );
};
const Settings: FC = () => {
  return <SettingsForm handleSaveSettings={(data) => Promise.resolve(true)} />;
};

export default Settings;
