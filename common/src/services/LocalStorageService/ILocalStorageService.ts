export interface ILocalStorageService {
    saveSettings<T>(key:string, value:T): void;
    loadSettings<T>(key:string): T;
    clearSettings(): void;
}
