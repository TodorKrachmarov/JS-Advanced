function addItem() {
    let text = document.getElementById('newItemText').value;
    let value1 = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    option.value = value1;
    option.textContent = text;
    document.getElementById('menu').appendChild(option);
    document.getElementById('newItemValue').value = '';
    document.getElementById('newItemText').value = '';
}
