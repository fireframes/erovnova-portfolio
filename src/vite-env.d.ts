/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TG_LINK: string;
  readonly VITE_APP_WHATSUP_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
