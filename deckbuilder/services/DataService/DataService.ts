import {IDataService} from './IDataService';
import {IDeckBuilderPageValue} from '../../models/IDeckBuilderPageValue';
import {IPageValueExtractorService} from '../../../common/services/PageValueExtractorService/IPageValueExtractorService';
import {ICard} from '../../../common/models/ICard';

export default class DataService implements IDataService {
    private pageValueExtractorService:IPageValueExtractorService;
    private dataModel:DataModel;

    constructor(pageValueExtractorService:IPageValueExtractorService) {
        this.pageValueExtractorService = pageValueExtractorService;
        this.dataModel = new DataModel();

        // init data model
        this.dataModel.setPageValue(this.pageValueExtractorService.getPageValue<IDeckBuilderPageValue>());
        this.dataModel.setFilter('');
    }

    public getFilteredCardList():ICard[] {
        if (this.dataModel.getFilter() !== '') {
            return this.getCardList().filter((card:ICard) => {
                return card.name.toLowerCase().indexOf(this.dataModel.getFilter().toLowerCase()) > -1;
            });
        }

        return this.getCardList();
    }

    public getChosenCards():ICard[] {
        return this.getCardList().filter((card:ICard) => {
            return card.selected;
        });
    }

    public setFilter(filter:string):void {
        this.dataModel.setFilter(filter);
    }

    public toggleCard(card:ICard):void {
        let cards:ICard[] = this.getCardList();

        cards.map((currentCard:ICard) => {
            if (currentCard === card) {
                card.selected = !card.selected;
            }
        });

        this.dataModel.getPageValue().cards = cards;
    }

    private getCardList():ICard[] {
        return this.dataModel.getPageValue().cards;
    }
}

class DataModel {
    private pageValue:IDeckBuilderPageValue;
    private filter:string;

    public getFilter():string {
        return this.filter;
    }

    public setFilter(value:string):void {
        this.filter = value;
    }

    public getPageValue():IDeckBuilderPageValue {
        return this.pageValue;
    }

    public setPageValue(value:IDeckBuilderPageValue):void {
        this.pageValue = value;
    }
}

DataService.$inject = ['PageValueExtractorService'];
