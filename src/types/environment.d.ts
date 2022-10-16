declare namespace NodeJS {
  interface Process {
    isServer: boolean;
  }
  interface ProcessEnv {
    NODE_ENV: string;
    REACT_APP_API_HOST: string;
  }
}
