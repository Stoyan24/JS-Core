function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let option = document.getElementById('menu');
    let op = document.createElement("option");
    op.textContent = text;
    op.value = value;
    option.appendChild(op);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}