import {IHomePageValue} from '../../models/IHomePageValue';

export interface IHomeService {
    returnFirstLetter(input:string): string;
    getPageValue(): IHomePageValue;
}
