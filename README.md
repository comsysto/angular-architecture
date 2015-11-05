# angular-architecture

## Setup

After cloning run the following commands:

```bash
npm install
cd common
gulp
cd ..
cd deckmanager
gulp
cd ..
cd deckbuilder
gulp
cd ..
npm start
```

Browse at http://localhost:8666

## Development

(If you'll also change common vertical)
Start gulp watcher in common directory
```bash
cd common
gulp watch
```

(In another terminal window, if you're also running common)
Start {vertical} watcher (deckmanager or deckbuilder)
```bash
cd {vertical}
gulp watch
```