import {ILocalStorageService} from '../../../services/LocalStorageService/ILocalStorageService';
import LocalStorageService from '../../../services/LocalStorageService/LocalStorageService';

describe('LocalStorageService', () => {
    let localStorageService:ILocalStorageService;

    beforeEach(() => {
        localStorageService = new LocalStorageService();
    });

    it('should set local storage items', () => {
        localStorageService.saveSettings<string>('foo', 'bar');

        expect(localStorage.getItem('foo')).toBe('"bar"');
    });

    it('should get local storage items', () => {
        localStorage.setItem('foo', '{ "bar": "baz" }');

        expect(localStorageService.loadSettings<any>('foo')).toEqual({ bar: 'baz' });
    });
});
