/**
 * Created by mohsom on 04.05.2015.
 */
function readFile(f) {
    var reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function () {
        var text = reader.result;
        var textElem = document.getElementById('book');
        textElem.innerHTML = '';
        textElem.appendChild(document.createTextNode(text));
    }
}
