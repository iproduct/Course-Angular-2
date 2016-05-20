/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
  'demo-app': {
    format: 'cjs',
    defaultExtension: 'js'
  },
  'components': {
    format: 'cjs',
    defaultExtension: 'js'
  },
  'core': {
    format: 'cjs',
    defaultExtension: 'js'
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'ng2-charts',

  // App specific barrels.
  'app',
  'app/shared',
  'app/home',
  'app/polls',
  'app/chart',
  /** @cli-barrel */
];

const _cliSystemConfig = {};
barrels.forEach((barrelName: string) => {
  (<any> _cliSystemConfig)[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'ng2-charts': 'vendor/ng2-charts',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: _cliSystemConfig
});

// Apply the user's configuration.
System.config({ map, packages });
