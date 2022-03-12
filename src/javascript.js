async function loadFile(file) {

    let text = await (new Response(file)).text();

    let x = document.getElementById('inputTextToSave');
    x.value = text;
  }
//Download Function
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

//Download Function
function DownloadHandler(){
    let FileName = "Chapter.txt";
    let x = document.getElementById("inputTextToSave").value;
    download(FileName,x);
}