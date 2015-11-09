export const html:string =
    `
        <div>
            <!-- deckmanager.coDeckList -->
            <div class="deck-list container">
                <div class="row">
                    <div class="col-xs-6">
                        <h2>Deck list</h2>
                    </div>
                    <div class="text-right col-xs-6">
                        <span data-ng-click="deckListController.addDeck()"
                            class="add-deck btn btn-info">+ Add new deck</span>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div data-ng-if="deckListController.getDecks().length > 0">
                        <div data-ng-repeat="deck in deckListController.getDecks() track by deck.id"
                            class="deck text-center col-xs-12 col-sm-4 col-md-3">
                            <!-- TODO: This should probably be made as a separate component, this one is getting too large -->
                            <p>
                                <h4>{{ deck.name }}</h4>
                                <p>Number of cards: {{ deck.cards.length }}</p>
                                <p class="deck-preview">
                                    <img class="deck-front" data-ng-if="deck.cards.length > 0"
                                        data-ng-src="img/cards/{{ deck.cards[0].image }}">
                                    <img class="deck-back-more" data-ng-src="img/card-back-default.png"
                                        alt="{{ deck.name }}">
                                    <img class="deck-back" data-ng-src="img/card-back-default.png"
                                        alt="{{ deck.name }}">

                                </p>
                                <p>
                                    <span data-ng-click="deckListController.editDeck(deck)"
                                        class="edit-deck btn btn-info">Edit deck</span>
                                    <span data-ng-click="deckListController.deleteDeck(deck)"
                                        class="delete-deck btn btn-danger">Delete deck</span>
                                </p>
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
