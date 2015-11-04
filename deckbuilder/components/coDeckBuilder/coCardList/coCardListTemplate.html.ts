export const html:string =
    `
    <div>
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <h2>Card gallery</h2>
                </div>
                <div class="col-xs-6">
                    <div class="pull-right" data-co-card-list-filter></div>
                </div>
            </div>
            <div class="card-list row">
                <div data-ng-repeat="card in cardListController.getCardList()"
                    data-ng-click="cardListController.toggleCard(card)"
                    class="card text-center col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <p data-ng-class="{ 'selected': card.selected }">
                        <img data-ng-src="img/cards/{{ card.image }}"
                        alt="{{ card.name }}">
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;

