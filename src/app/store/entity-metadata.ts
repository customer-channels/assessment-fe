import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from 'src/environments/environment';




const entityMetadata: EntityMetadataMap = {
    Todo: {},
};

export const entityConfig = {
    entityMetadata
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
    entityHttpResourceUrls: {
        Todo: {
            entityResourceUrl: `${environment.todoApiUrl}`,
            collectionResourceUrl: `${environment.todoApiUrl}`,
        }
    }
};


