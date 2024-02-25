import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.krunalbhadesiya.app',
  appName: 'krunalbhadesiya',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
