declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare type BaseRecord<T = string | number | boolean> = Record<string, T>;

declare interface Window {
  isDev: boolean;
}
declare namespace JSX {
  interface IntrinsicElements {
    'qa-router-button': React.DetailedHTMLProps<{
      children: Element;
      style: Record<string, string>;
    }>;
    templates: React.DetailedHTMLProps<{ children: Element; is: string }>;
  }
}
declare interface Window {
  system: any;
  loadingPromiseArr: any;
  dnwx: Record<string, any>;
  jsBridge: TJsBridge;
}

declare interface ImportMeta {
  env: any;
  globEager: any;
}
