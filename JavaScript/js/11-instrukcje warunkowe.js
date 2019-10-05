const wiekKasi = 23;
const wiekDominiki = 22;
const miesiac = 10;

if(wiekKasi > wiekDominiki && miesiac == 9) {
    document.body.style.backgroundColor = "red";
} else if(wiekKasi > wiekDominiki && miesiac == 10) {
    document.body.style.backgroundColor = "blue";
}
else {
    document.body.style.backgroundColor = "green";
}

switch(miesiac) {
    case 8:
        document.body.textContent = "Sierpień";
        break;
        case 9:
                document.body.textContent = "Wrzesień";
                break;
                case 10:
                document.body.textContent = "Październik";
                break;
case 11:
        document.body.textContent = "Listopad";
        break;
        default:
            document.body.textContent = "Nie mam pojęcia co za miesiąc";
}