import {ILocalStorageService} from './ILocalStorageService';

/**
 * Very naive implementation of a local storage service.
 */
export default class LocalStorageService implements ILocalStorageService {
    public saveSettings<T>(key:string, value:T):void {
        let stringData:string = JSON.stringify(value);
        localStorage.setItem(key, stringData);
    }

    public loadSettings<T>(key:string):T {
        let objectData:Object = localStorage.getItem(key);
        if (objectData) {
            return objectData as T;
        }

        return null;
    }

    public clearSettings():void {
        localStorage.clear();
    }
}
