export enum DeviceType {
  Mobile = "MOBILE",
  Web = "WEB",
}

export type TListItem = {
  id: number;
  applicationHostname: string;
  timestamp: string;
  type: DeviceType;
};

export type TTag = {
  title: string;
  descriptions: string;
  color: string;
};

export type TItem = {
  id: number;
  applicationHostname: string;
  timestamp: string;
  type: DeviceType;
  user: string;
  country: string;
  ip: string;
  device: string;
  tags: TTag[];
  isDangerous: boolean;
};

export type TLogData = {
  items: TItem[];
};
