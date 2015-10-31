export interface IPageValueExtractorService {
    getPageValue<T>(pageValueInterface:T): T;
}