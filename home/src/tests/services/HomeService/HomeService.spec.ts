import HomeService from '../../../services/HomeService/HomeService';
import {IHomeService} from '../../../services/HomeService/IHomeService';

describe('HomeService', () => {
    let homeService:IHomeService;

    beforeEach(() => {
        let pageValueExtractorServiceMock:any = {
            getPageValue: ():void => {}
        };
        homeService = new HomeService(pageValueExtractorServiceMock);
    });

    it('Should return the first letter', () => {
        expect(homeService.returnFirstLetter('this is a test')).toBe('t');
        expect(homeService.returnFirstLetter('why not')).toBe('w');
    });
});
