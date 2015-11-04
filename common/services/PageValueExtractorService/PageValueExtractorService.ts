import {IPageValueExtractorService} from './IPageValueExtractorService';

/**
 * The PageValueExtractorService takes an element with the id of 'pageValue' and extracts its content.
 * The content should be in JSON format.
 */
export default class PageValueExtractorService implements IPageValueExtractorService {
    public getPageValue<T>():T {
        let pageValueElement:HTMLElement = document.getElementById('pageValue');
        let pageValueJson:Object = JSON.parse(pageValueElement.innerHTML);

        return pageValueJson as T;
    }
}
