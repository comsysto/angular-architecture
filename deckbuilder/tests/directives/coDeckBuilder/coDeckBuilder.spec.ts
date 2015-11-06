import {appName} from '../../../main';
import {IPageValueExtractorService} from '../../../../common/services/PageValueExtractorService/IPageValueExtractorService';
import {facadeServiceMock} from '../../mocks';

describe('deckbuilder.coDeckBuilder', () => {
    let $compile:angular.ICompileService,
        $rootScope:any;

    beforeEach(() => {
        angular.mock.module(appName, {
            FacadeService: facadeServiceMock
        });

        inject((_$compile_:ng.ICompileService,
                _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('should render the component', () => {
        let template:angular.IAugmentedJQuery = angular.element('<div data-co-deck-builder></div>');
        let element:angular.IAugmentedJQuery = $compile(template)($rootScope);

        $rootScope.$digest();
        expect(element.html()).toContain('<!-- deckbuilder.coDeckBuilder -->');
    });
});
