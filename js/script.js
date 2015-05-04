/**
 * Created by mohsom on 04.05.2015.
 */
document.ready = function () {
    function readFile(e) {
        alert('dw');
    }

    document.getElementById('file').addEventListener('change', readFile, false);
};
