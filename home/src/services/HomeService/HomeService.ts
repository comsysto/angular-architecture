import { IHomeService } from './IHomeService';
import {IHomePageValue} from '../../models/IHomePageValue';
import {IPageValueExtractorService} from '../../../../common/src/services/PageValueExtractorService/IPageValueExtractorService';

export default class HomeService implements IHomeService {
    private pageValueExtractorService:IPageValueExtractorService;
    private homePageValue:IHomePageValue;

    constructor(pageValueExtractorService:IPageValueExtractorService) {
        this.pageValueExtractorService = pageValueExtractorService;
        this.homePageValue = this.pageValueExtractorService.getPageValue<IHomePageValue>();
    }

    public returnFirstLetter(input:string):string {
        if (input && input.length > 0) {
            return input[0];
        }

        return '';
    }

    public getPageValue():IHomePageValue {
        return this.homePageValue;
    }
}

HomeService.$inject = ['PageValueExtractorService'];
