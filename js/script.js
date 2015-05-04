/**
 * Created by mohsom on 04.05.2015.
 */
document.ready = function () {
    function readFile(e) {
        var f= e.target.files[0];
        var reader = new FileReader();
        reader.readAsText(f);
        reader.onload =function(){
            var text=reader.result;
            var textElem=document.getElementById('book');
            textElem.innerHTML='';
            textElem.appendChild(document.createTextNode(text));
        }
    }
    document.getElementById('file').addEventListener('change', readFile, false);
};
