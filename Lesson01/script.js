function addToList() {
    let newitem = document.querySelector('#newitem').value;
    let li = document.createElement('li');
    li.innerHTML = newitem;

    document.querySelector('#itemlist').appendChild(li);
}