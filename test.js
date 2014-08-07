var choose = require("./main.js").choose;
choose(
    ["Bulbasaur", "Pikachu", "Torchic", "Lucario", "Raichu"],
    function(x) {console.log("I choose you, "+x+"!");},
    {}
);  
