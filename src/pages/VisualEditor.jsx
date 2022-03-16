import React from "react";
import "./VisualEditor.css";
import {DownloadHandler, loadFile} from "../components/javascript";

/*
var Chapter;
var Character;
var Meta;
*/

const VisualEditor = () => {
    return(
      <>
        <div className="VisualEditorFullPage">

                <div className="LeftEditor">
                  <textarea className="TextAreaChapter" id="TextAreaChapter" ></textarea>
                  <em>Selezionare il file "Chapter.txt" da modificare</em><br></br>
                  <input type="file" id="file-selector" accept=".txt" onchange={loadFile(this.files[0],"TextAreaChapter")} />
                  <button /*onClick={DownloadHandler("Chapter.txt","TextAreaChapter")}*/>Save Text to File</button><p class="content"></p>
                </div>


            <div className="RightEditor">

                <textarea className="TextAreaCharacter" id="TextAreaCharacter" ></textarea>
                <em>Selezionare il file "Character.txt" da modificare</em><br></br>
                <input type="file" id="file-selector" accept=".txt" /*onchange={loadFile(this.files[0],"TextAreaCharacter")}*/ />
                <button /*onClick={DownloadHandler("Character.txt","TextAreaCharacter")}*/>Save Text to File</button><p class="content"></p><br></br>

                <textarea className="TextAreaMeta" id="TextAreaMeta" ></textarea>
                <em>Selezionare il file "Meta.txt" da modificare</em><br></br>
                <input type="file" id="file-selector" accept=".txt" /*onchange={loadFile(this.files[0],"TextAreaMeta")}*//>
                <button /*onClick={DownloadHandler("Meta.txt","TextAreaMeta")}*/>Save Text to File</button><p class="content"></p><br></br>

            </div>
        </div>
      </>
    )
  };


  export default VisualEditor;