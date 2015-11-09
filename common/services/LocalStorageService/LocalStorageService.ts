import {ILocalStorageService} from './ILocalStorageService';

/**
 * Very naive implementation of a local storage service.
 */
export default class LocalStorageService implements ILocalStorageService {
    public saveSettings<T>(key:string, value:T):void {
        let stringData:string = JSON.stringify(value);
        localStorage.setItem(key, stringData);
    }

    /**
     * Load settings from local storage.
     * TODO: It would be wise to check if what we're getting from local storage is a serializable object.
     */
    public loadSettings<T>(key:string):T {
        let objectData:string = localStorage.getItem(key);
        if (objectData) {
            return JSON.parse(objectData) as T;
        }

        return null;
    }

    public clearSettings():void {
        localStorage.clear();
    }
}
