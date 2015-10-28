import HomeService from '../../../services/HomeService/HomeService';
import {IHomeService} from "../../../services/HomeService/IHomeService";

describe('HomeService', () => {
    let homeService:IHomeService;

    beforeEach(() => {
        homeService = new HomeService();
    });

    it('Should return the first letter', () => {
        expect(homeService.returnFirstLetter('this is a test')).toBe('t');
        expect(homeService.returnFirstLetter('why not')).toBe('w');
    });
});