async function loadFile(file,TextArea) {

  let text = await (new Response(file)).text();
  let x = document.getElementById(TextArea);
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
function DownloadHandler(Name,TextArea){
  let FileName = Name;
  let x = document.getElementById(TextArea).value;
  download(FileName,x);
}