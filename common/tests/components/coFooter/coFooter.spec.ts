describe('common.coFooter', () => {
    let $compile:angular.ICompileService,
        $rootScope:any;

    beforeEach(() => {
        angular.mock.module('common');

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('should render the footer component', () => {
        let template:angular.IAugmentedJQuery = angular.element('<div data-co-footer></div>');
        let element:angular.IAugmentedJQuery = $compile(template)($rootScope);

        $rootScope.$digest();
        expect(element.html()).toContain('<!-- common.coFooter -->');
    });
});
