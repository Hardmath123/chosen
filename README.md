chosen
======

chosen is a node module to make multiple-choice questions easy on CLIs.

Install
-------

`npm install chosen`

Use
---

```js

var choose = require("chosen").choose;

console.log("What is your favorite language?");
choose(
    ["English", "Klingon", "Malbolge"],
    function(answer, index) {
        console.log("I like " + answer + ", too!");
    }
);
```
