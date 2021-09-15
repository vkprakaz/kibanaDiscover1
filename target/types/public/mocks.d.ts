/// <reference types="jest" />
import { DiscoverSetup, DiscoverStart } from '.';
export declare type Setup = jest.Mocked<DiscoverSetup>;
export declare type Start = jest.Mocked<DiscoverStart>;
export declare const discoverPluginMock: {
    createSetupContract: () => Setup;
    createStartContract: () => Start;
};
//# sourceMappingURL=mocks.d.ts.map