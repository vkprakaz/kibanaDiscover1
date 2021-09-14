import { SavedObjectsClientContract } from 'kibana/public';
import { SavedObjectLoader, SavedObjectsStart } from '../../../saved_objects/public';
interface Services {
    savedObjectsClient: SavedObjectsClientContract;
    savedObjects: SavedObjectsStart;
}
export declare function createSavedSearchesLoader({ savedObjectsClient, savedObjects }: Services): SavedObjectLoader;
export {};
//# sourceMappingURL=saved_searches.d.ts.map