export type TListItem = {
    id: string;
    applicationHostname: string;
    timestamp: string;
    type: 'WEB' | 'MOBILE';
};

export type TTag = {
    title: string;
    descriptions: string;
    color: string;
};

export type TItem = {
    id: string;
    user: string;
    country: string;
    ip: string;
    device: string;
    tags: TTag[];
    isDangerous: boolean;
};

export type TLogData = {
    list: TListItem[];
    items: TItem[];
};