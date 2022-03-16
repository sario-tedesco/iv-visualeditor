import React from "react";
import "./Editor.css";

const VisualEditor = () => {
    return(
      <>
        <div className="VisualEditorFullPage">
        <h2>L'editor potrebbe dare problemi percui invito caldamente a munirsi di backup!</h2>

                <div className="LeftEditor">
                  <textarea className="TextAreaChapter" id="inputTextToSave" ></textarea>
                  <em>Selezionare il file "Chapter.txt" da modificare</em><br></br>
                  <input type="file" id="file-selector" accept=".txt" onchange="loadFile(this.files[0])" />
                  <button onclick="DownloadHandler()">Save Text to File</button><p class="content"></p>
                </div>


            <div className="RightEditor">

                <textarea className="TextAreaCharacter" id="inputTextToSave" ></textarea>
                <em>Selezionare il file "Character.txt" da modificare</em><br></br>
                <input type="file" id="file-selector" accept=".txt" onchange="loadFile(this.files[0])" />
                <button onclick="DownloadHandler()">Save Text to File</button><p class="content"></p><br></br>

                <textarea className="TextAreaMeta" id="inputTextToSave" ></textarea>
                <em>Selezionare il file "Meta.txt" da modificare</em><br></br>
                <input type="file" id="file-selector" accept=".txt" onchange="loadFile(this.files[0])" />
                <button onclick="DownloadHandler()">Save Text to File</button><p class="content"></p><br></br>

            </div>
        </div>
      </>
    )
  };

  export default VisualEditor;

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