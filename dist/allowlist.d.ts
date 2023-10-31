interface AllowList {
    [network: number]: {
        [contractAddress: string]: {
            address: string;
            name: string;
        };
    };
}
export declare let allowlist: AllowList;
export {};
