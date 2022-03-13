import React from "react";
import "../components/javascript";

const VisualEditor = () => {
    return(
      <>
        <div className="centered">
        <h2>L'editor potrebbe dare problemi percui invito caldamente a munirsi di backup!</h2><br></br>
        <textarea id="inputTextToSave" styleclass="width:80%;height: 256px;"></textarea><br></br>
        <em>Selezionare il file "Chapter.txt" da modificare</em><br></br>
        <input type="file" id="file-selector" accept=".txt" onchange="loadFile(this.files[0])" />
        <button onclick="DownloadHandler()">Save Text to File</button><p class="content"></p>
        </div>
      </>
    )
  };

  export default VisualEditor;

