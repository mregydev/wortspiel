#!/usr/bin/env node
'use strict';

const game = require('./game');


game.loadRecords().then(() => {
    game.startGame();
});



