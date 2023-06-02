let generalWhite = true;

function onClickButton() {
    drawDesk(generalWhite) 
}

function onKeyUpInput() {
    const x = document.querySelector("#inputX").value;
    const y = document.querySelector("#inputY").value;
    const button = document.getElementsByTagName("button")[0];
    console.log(typeof x);
    console.log(typeof y);

    if (x === "" || y === "") {
        button.disabled = true;
        console.log(true);
    } else {
        button.disabled = false;
        console.log(false);
    }
}

function onClickChessdesk() {
    generalWhite = !generalWhite;
    drawDesk(generalWhite)
}

function drawDesk(isFirstWhite) {
    const x = document.querySelector("#inputX").value;
    const y = document.querySelector("#inputY").value;
    if (x <= 0 || x > 10) {
        alert ("Only numbers 1 to 10!")
        return
    }
    if (y <= 0 || y > 10) {
        alert ("Only numbers 1 to 10!")
        return
    }
    const chessdesk = document.querySelector(".chessdesk")
    
    while (chessdesk.hasChildNodes()) {
        chessdesk.removeChild(chessdesk.firstChild)
    }
    for(let i = 0; i < x; i++) {
        let row = document.createElement("div")
        row.className = "row";
        let isWhite = isFirstWhite;
        for(let a = 0; a < y; a++) {
            let column = document.createElement("div")
            column.className = isWhite ? "partwhite" : "partblack";
            isWhite = !isWhite;
            column.addEventListener("click", onClickChessdesk)
            row.appendChild(column)
        }
        isFirstWhite = !isFirstWhite;
        chessdesk.appendChild(row)
    }
}
