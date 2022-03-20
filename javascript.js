async function loadFile(file,TextArea) {

    var Area;
    switch(TextArea){
        case 1:
            var Area = "TextAreaChapter";
            break;
        case 2:
            var Area = "TextAreaCharacter";
            break;
        case 3:
            var Area = "TextAreaMeta";
            break;
        default:
            break;
    }

    var text = await (new Response(file)).text();
    var x = document.getElementById(Area);
    x.value = text;
    }

    //Download Function
    function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    }

    //Download Function
    function DownloadHandler(value){

    var Area;
    var Name;
    switch(value){
        case 1:
            var Area = "TextAreaChapter";
            var Name = "Chapter.txt";
            break;
        case 2:
            var Area = "TextAreaCharacter";
            var Name = "Character.txt";
            break;
        case 3:
            var Area = "TextAreaMeta";
            var Name = "Meta.txt";
            break;
        default:
            break;
    }
    var FileName = Name;
    var x = document.getElementById(Area).value;
    download(FileName,x);
    }