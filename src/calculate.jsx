function calChange(money) {
    var remainder = inputChange % type[0];
    var temp = inputChange - remainder;
    document.getElementById(type[1]).innerHTML = temp / type[0];
    inputChange = inputChange % type[0];
}