export interface TVDevice {
  id: string;
  name: string;
  type: 'IR' | 'Smart';
  isConnected: boolean;
  brand?: string;
  model?: string;
}

export interface RemoteButton {
  id: string;
  label: string;
  icon?: string;
  action: string;
  color?: string;
}

export type RootStackParamList = {
  Home: undefined;
  RemoteSelection: undefined;
  IRRemote: undefined;
  SmartRemote: undefined;
  DeviceSearch: undefined;
  Settings: undefined;
};

export interface AppState {
  devices: TVDevice[];
  selectedDevice: TVDevice | null;
  isSearching: boolean;
}