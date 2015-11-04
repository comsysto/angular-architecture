import {IPageValueExtractorService} from '../../../services/PageValueExtractorService/IPageValueExtractorService';
import PageValueExtractorService from '../../../services/PageValueExtractorService/PageValueExtractorService';

describe('PageValueExtractor', () => {
    let pageValueExtractor:IPageValueExtractorService;

    beforeEach(() => {
        pageValueExtractor = new PageValueExtractorService();
    });

    it('should extract the page value', () => {
        let pageValueElement:HTMLScriptElement = document.createElement('script');
        pageValueElement.id = 'pageValue';
        pageValueElement.type = 'application/json';
        pageValueElement.innerHTML = '{ "foo": "bar" }';

        let body:Element = document.querySelector('body');
        body.appendChild(pageValueElement);

        let pageValueExtracted:string = JSON.stringify(pageValueExtractor.getPageValue<any>());
        let pageValueMock:any = JSON.stringify({foo: 'bar'});

        expect(pageValueExtracted).toBe(pageValueMock);
    });
});
