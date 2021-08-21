const billAmt = document.querySelector("#bill-amnt");
const cashAmt = document.querySelector("#cash-amnt");
const btn = document.querySelector("#btn");
const checkBtn = document.querySelector("#checkBtn");
const hiddenCont = document.querySelector(".hidden-cont");
const errorMsgTxt = document.querySelector("#error-msg");
const cashTable = document.querySelector("#cash-table");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availNotes = [2000, 500, 100, 20, 10, 5, 1];

btn.addEventListener('click', () => {
    HideError();
    console.log("billAmt")
    if (Number(billAmt.value) > 0) {
        btn.style.display = "none";
        hiddenCont.style.display = "flex";
    }else {
        ShowError("Enter valid Bill Amount");
    }
});

checkBtn.addEventListener('click', () => {
    HideError();
    if (Number(cashAmt.value) > 0) {
        if (Number(cashAmt.value) >= Number(billAmt.value)) {
            const amountToBeReturn = Number(cashAmt.value) - Number(billAmt.value);
            calculateReturnMoney(amountToBeReturn);
            cashTable.style.display = "flex";
        } else {
            ShowError("kitchen is that side!!")
            cashTable.style.display = "none";
        }
    } else {
        ShowError(" The cash provided should  be equal to the bill amount");
        cashTable.style.display = "none";
    }
});

function calculateReturnMoney(amountToBeReturn) {
    for (let i = 0; i < availNotes.length; i++) {
        const numberOFNote = Math.trunc(amountToBeReturn / availNotes[i]);
        amountToBeReturn = amountToBeReturn - numberOFNote * availNotes[i];
        noOfNotes[i].innerText = numberOFNote;

    }
}

function ShowError(msg) {
    errorMsgTxt.style.display = "block"
    errorMsgTxt.innerText = msg
}
function HideError() {
    errorMsgTxt.style.display = "none"
};

