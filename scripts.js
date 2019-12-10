function TicTacToeGame() {

    let table, cells, turn, new_cells;

    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    this.initGame = function () {
        // get the table elemnt
        // table = document.getElementById("table_game");
        // console.log(table);

        // get all cells
        // cells = table.getElementsByTagName("td");
        // console.log(cells);

        turn = 0;
        // ********refactoring********
        new_cells = Array.from(document.querySelectorAll("td"))
        console.log(new_cells);
        for (let i = 0; i < new_cells.length; i++) {
            new_cells[i].innerText = i;
        }
        initEvents();
    }

    function initEvents() {
        for (let i = 0; i < new_cells.length; i++) {
            new_cells[i].addEventListener("click", onCellClick)
        }
        let clearGameBtn = document.getElementById("button_clear");
        clearGameBtn.addEventListener("click", clearGame);
        let checkWinBtn = document.getElementById("button_check");
        checkWinBtn.addEventListener("click", checkWin);
    }

    function onCellClick(event) {
        var objCell = event.target;
        if (turn) {
            makeTurn(objCell, false)
        } else {
            makeTurn(objCell, true)
        }
    }

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

    function clearGame() {
        console.clear();
        for (let i = 0; i < new_cells.length; i++) {
            const element = new_cells[i];
            if (element.classList.contains("ocupied")) {
                element.classList.remove("ocupied");
            }
            element.innerText = "";
        }
        turn = 0;
    }

    function checkWin() {
        var t0 = performance.now();

        let horizontalArr = [];
        let verticalArr = [[], [], []];
        let slantArr = [[], []];
        for (let i = 0; i < new_cells.length; i++) {

            horizontalArr.push(new_cells[i].innerText);

            if (i % 4 === 0) { //slantArr_0
                slantArr[0].push(new_cells[i].innerText);
            }
            if (i % 2 === 0 && i !== 0 && i !== 8) { //slantArr_1
                slantArr[1].push(new_cells[i].innerText);
            }
            if (i % 3 === 0) { // verticalArr_column_1 
                verticalArr[0].push(new_cells[i].innerText);
            }
            if (i % 3 === 1) {  // verticalArr_column_2
                verticalArr[1].push(new_cells[i].innerText);
            }
            if (i % 3 === 2) {  // verticalArr_column_3
                verticalArr[2].push(new_cells[i].innerText);

                if (horizontalArr[i] !== "") {
                    if (horizontalArr.every((val, i, arr) => val === arr[0])) { // if horizontalArr have equals values -> win
                        console.log("win row: ", horizontalArr);
                        var t1 = performance.now();
                        console.log("Call took " + (t1 - t0) + " milliseconds.");
                        alert("win")
                        return;
                    } else {
                        horizontalArr = [];
                    }
                } else {
                    horizontalArr = [];
                }
            }
            // if (i === 2) {
            //     if (!verticalArr[0].includes("") && verticalArr[0].every((val, i, arr) => val === arr[0])) { // if verticalArr have equals values -> win
            //         console.log("win in column: ", j + 1, verticalArr[0]);
            //         var t1 = performance.now();
            //         console.log("Call took " + (t1 - t0) + " milliseconds.");
            //         alert("win")
            //         return;
            //     }
            //     if (!slantArr[1].includes("") && slantArr[1].every((val, i, arr) => val === arr[0])) {
            //         console.log("win in slant right: ", slantArr[1]);
            //         var t1 = performance.now();
            //         console.log("Call took " + (t1 - t0) + " milliseconds.");
            //         alert("win")
            //         return;
            //     }
            // }
            // if (i === 2 && j === 1 && !verticalArr[1].includes("")) {
            //     if (verticalArr[j].every((val, i, arr) => val === arr[0])) { // if verticalArr have equals values -> win
            //         console.log("win in column: ", j + 1, verticalArr[j]);
            //         var t1 = performance.now();
            //         console.log("Call took " + (t1 - t0) + " milliseconds.");
            //         alert("win")
            //         return;
            //     }
            // }
            // if (i === 2 && j === 2) {
            //     if (!verticalArr[2].includes("") && verticalArr[j].every((val, i, arr) => val === arr[0])) { // if verticalArr have equals values -> win
            //         console.log("win in column: ", j + 1, verticalArr[j]);
            //         var t1 = performance.now();
            //         console.log("Call took " + (t1 - t0) + " milliseconds.");
            //         alert("win")
            //         return;
            //     }

            //     if (!slantArr[0].includes("") && slantArr[0].every((val, i, arr) => val === arr[0])) { // if slantArr have equals values -> win
            //         console.log("win in slant left: ", slantArr[0]);
            //         var t1 = performance.now();
            //         console.log("Call took " + (t1 - t0) + " milliseconds.");
            //         alert("win")
            //         return;
            //     }
            // }
        }
        console.log(horizontalArr);
        console.log(verticalArr);
        console.log(slantArr);
        var t1 = performance.now();
        console.log("Call took " + (t1 - t0) + " milliseconds.");
    }
}

let objGame = new TicTacToeGame();
objGame.initGame();
