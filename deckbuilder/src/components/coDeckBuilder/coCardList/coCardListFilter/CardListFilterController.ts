import {IFacadeService} from '../../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../../../common/src/models/ICard';

export default class CardListFilterController {
    public filter:string;
    private facadeService:IFacadeService;

    constructor($scope:any, deckBuilderService:IFacadeService) {
        this.facadeService = deckBuilderService;
        this.filter = '';

        $scope.$watch(
            () => {
                return this.filter;
            },
            (newVal:string) => {
                this.setFilter(newVal);
            }
        );
    }

    private setFilter(filter:string):void {
        return this.facadeService.setFilter(filter);
    }
}

CardListFilterController.$inject = ['$scope', 'FacadeService'];
