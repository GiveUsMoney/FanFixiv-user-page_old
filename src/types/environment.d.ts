declare namespace NodeJS {
  interface Process {
    isServer: boolean;
  }
  interface ProcessEnv {
    NODE_ENV: string;
    REACT_APP_PUBLIC_URL: string;
    REACT_APP_API_BASE_URL: string;
  }
}
