export const html:string =
    `
        <div>
            <div class="deck-list container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <h2>Deck list</h2>
                    </div>
                    <div class="text-right col-xs-12 col-sm-6">
                        <span data-ng-click="deckListController.addDeck()"
                            class="add-deck btn btn-info">+ Add new deck</span>
                    </div>
                </div>
                <div class="row">
                    <div data-ng-if="deckListController.getDecks().length > 0">
                        <div data-ng-repeat="deck in deckListController.getDecks() track by deck.id"
                            data-ng-click="deckListController.editDeck(deck)"
                            class="deck text-center col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <p>
                                <img data-ng-src="/img/card-back-default.png"
                                alt="{{ deck.name }}">
                                <br>
                                <span>{{ deck.name }}</span>
                            </p>
                        </div>
                    </div>

                    <div data-ng-if="deckListController.getDecks().length === 0">
                        <p class="col-xs-12">Looks like you don't have any decks yet. Why not create one now?</p>
                    </div>
                </div>
            </div>
        </div>
    `;
