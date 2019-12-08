function TicTacToeGame() {

    let table, cells, turn, new_cells;


    function makeTurn(cell, isX) {
        if (cell.innerText === "X" || cell.innerText === "0") {
            return;
        }
        var playerName;
        if (isX) {
            playerName = "X";
            turn = 1;
            cell.classList.add("ocupied");
        } else {
            playerName = "0";
            turn = 0;
            cell.classList.add("ocupied");
        }

        cell.innerText = playerName;

    }

    function onCellClick(event) {
        var objCell = event.target;
        if (turn) {
            makeTurn(objCell, false)
        } else {
            makeTurn(objCell, true)
        }
    }


    function initEvents() {
        for (let i = 0; i < cells.length; i++) {
            const element = cells[i];
            element.addEventListener("click", onCellClick)
        }
        let clearGameBtn = document.getElementById("button_clear");
        clearGameBtn.addEventListener("click", clearGame);
        let checkWinBtn = document.getElementById("button_check");
        checkWinBtn.addEventListener("click", checkWin);
    }

    function clearGame() {
        console.clear();
        for (let i = 0; i < cells.length; i++) {
            const element = cells[i];
            if (element.classList.contains("ocupied")) {
                element.classList.remove("ocupied");
            }
            element.innerText = "";
        }
        turn = 0;
    }

    function checkWin() {
        var t0 = performance.now();

        const cellsArr = [...table.lastChild.children]
        let elementTrArr = [];
        for (let i = 0; i < cellsArr.length; i++) {
            let elementTr = [...cellsArr[i].children]
            elementTrArr = [...elementTrArr, [...elementTr]];
        }

        let verticalArr = [[], [], []];
        let slantArr = [[], []];
        for (let i = 0; i < elementTrArr.length; i++) {
            let horizontalArr = [];
            for (let j = 0; j < elementTrArr.length; j++) {
                horizontalArr.push(elementTrArr[i][j].innerText);

                if (i === j) { //slantArr_0
                    slantArr[0].push(elementTrArr[i][j].innerText);
                }
                if (i + 2 === j || i & j === 1 || j + 2 === i) { //slantArr_1
                    slantArr[1].push(elementTrArr[i][j].innerText);
                }

                if (j === 0) { // verticalArr_column_1 
                    verticalArr[0].push(elementTrArr[i][j].innerText);
                } else if (j === 1) {  // verticalArr_column_2
                    verticalArr[1].push(elementTrArr[i][j].innerText);
                } else if (j === 2) {  // verticalArr_column_3
                    verticalArr[2].push(elementTrArr[i][j].innerText);
                }

                if (j === 2 && elementTrArr[i][j].innerText !== "") {
                    if (horizontalArr.every((val, i, arr) => val === arr[0])) { // if horizontalArr have equals values -> win
                        console.log("win in row: ", i + 1, horizontalArr);
                        var t1 = performance.now();
                        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
                        alert("win")
                        return;
                    }
                }
                if (i === 2) {
                    if (!verticalArr[0].includes("") && verticalArr[0].every((val, i, arr) => val === arr[0])) { // if verticalArr have equals values -> win
                        console.log("win in column: ", j + 1, verticalArr[0]);
                        var t1 = performance.now();
                        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
                        alert("win")
                        return;
                    }
                    if (!slantArr[1].includes("") && slantArr[1].every((val, i, arr) => val === arr[0])) {
                        console.log("win in slant right: ", slantArr[1]);
                        var t1 = performance.now();
                        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
                        alert("win")
                        return;
                    }
                }
                if (i === 2 && j === 1 && !verticalArr[1].includes("")) {
                    if (verticalArr[j].every((val, i, arr) => val === arr[0])) { // if verticalArr have equals values -> win
                        console.log("win in column: ", j + 1, verticalArr[j]);
                        var t1 = performance.now();
                        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
                        alert("win")
                        return;
                    }
                }
                if (i === 2 && j === 2) {
                    if (!verticalArr[2].includes("") && verticalArr[j].every((val, i, arr) => val === arr[0])) { // if verticalArr have equals values -> win
                        console.log("win in column: ", j + 1, verticalArr[j]);
                        var t1 = performance.now();
                        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
                        alert("win")
                        return;
                    }

                    if (!slantArr[0].includes("") && slantArr[0].every((val, i, arr) => val === arr[0])) { // if slantArr have equals values -> win
                        console.log("win in slant left: ", slantArr[0]);
                        var t1 = performance.now();
                        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
                        alert("win")
                        return;
                    }



                }

            }
        }
        console.log(verticalArr);
        var t1 = performance.now();
        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
    }


    this.initGame = function (tableID) {
        // get the table elemnt
        table = document.getElementById("table_game");
        console.log(table);

        // get all cells
        cells = table.getElementsByTagName("td");
        console.log(cells);

        turn = 0;
        initEvents();


        // ********refactoring********
        new_cells = Array.from(document.querySelectorAll("td"))
        console.log(new_cells);

    }

}

let objGame = new TicTacToeGame();
objGame.initGame("table_game");


