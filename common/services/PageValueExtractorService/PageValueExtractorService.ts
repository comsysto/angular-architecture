import {IPageValueExtractorService} from './IPageValueExtractorService';
export default class PageValueExtractorService implements IPageValueExtractorService {
    public getPageValue<T>():T {
        let pageValueElement:HTMLElement = document.getElementById('pageValue');
        let pageValueJson:Object = JSON.parse(pageValueElement.innerHTML);

        let pageValue:T = pageValueJson as T;

        return pageValue;
    }
}
