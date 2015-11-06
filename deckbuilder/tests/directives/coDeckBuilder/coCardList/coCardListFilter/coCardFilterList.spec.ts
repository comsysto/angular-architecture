import {appName} from '../../../../../main';
import {facadeServiceMock} from '../../../../mocks';

describe('deckbuilder.coCardListFilter', () => {
    let $compile:angular.ICompileService,
        $rootScope:any,
        template:angular.IAugmentedJQuery,
        element:angular.IAugmentedJQuery;

    beforeEach(() => {
        angular.mock.module(appName, {
            FacadeService: facadeServiceMock
        });

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });

        template = angular.element('<div data-co-card-list></div>');
        element = $compile(template)($rootScope);

        $rootScope.$digest();
    });

    it('should render the component', () => {
        expect(element.html()).toContain('<!-- deckbuilder.coCardListFilter -->');
    });

});
