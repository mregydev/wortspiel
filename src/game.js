const fs = require('fs');
const readFile = require('util').promisify(fs.readFile);
const lcs = require('./LCS');
const path=require('path');
const colors=require('colors');
const readInterface = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



module.exports = {
    records: [],
    selectedRecord:null,
    loadRecords: async function () {
        let content = await readFile(path.join(__dirname,'/records.json'));
        this.records = JSON.parse(content.toString());
        return true;
    },
    getRandomRecord: function () {
        let [min, max] = [0, this.records.length];
        let random = Math.floor(Math.random() * (max - min) + min);
        return this.records[random];
    },
    startGame: function () {
        if (!this.selectedRecord) {
            this.selectedRecord = this.getRandomRecord();
        }
        readInterface.question(`Was ist das wort , es ist ${this.selectedRecord.Category}:) ? `.blue, (answer) => {
            if (answer != "close") {
                let lcsPercentage = lcs(answer.toLowerCase(), this.selectedRecord.Name.toLowerCase()) / this.selectedRecord.Name.length * 100;

                if (lcsPercentage == 100) {
                    this.selectedRecord = undefined;
                    console.log("perfekt ..)".green);
                }
                else if (lcsPercentage > 80) {
                    console.log("Do bist sehr nah".yellow)
                }
                else {
                    console.log("Nein :(".red);
                }
                this.startGame();
            }
            else {
                console.log("Auf Weidersehen");
                readInterface.close();
            }
        });
    }
}