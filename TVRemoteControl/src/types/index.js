/**
 * @typedef {Object} TVDevice
 * @property {string} id
 * @property {string} name
 * @property {'IR' | 'Smart'} type
 * @property {boolean} isConnected
 * @property {string} [brand]
 * @property {string} [model]
 */

/**
 * @typedef {Object} RemoteButton
 * @property {string} id
 * @property {string} label
 * @property {string} [icon]
 * @property {string} action
 * @property {string} [color]
 */

/**
 * @typedef {Object} RootStackParamList
 * @property {undefined} Home
 * @property {undefined} RemoteSelection
 * @property {undefined} IRRemote
 * @property {undefined} SmartRemote
 * @property {undefined} DeviceSearch
 * @property {undefined} Settings
 */

/**
 * @typedef {Object} AppState
 * @property {TVDevice[]} devices
 * @property {TVDevice | null} selectedDevice
 * @property {boolean} isSearching
 */

export {};