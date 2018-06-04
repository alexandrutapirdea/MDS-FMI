
var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer

function handleFile(e) {
    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        if(!rABS) data = new Uint8Array(data);
        var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
      //  console.log(data);
        /* DO SOMETHING WITH workbook HERE */
        var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var dataParsedJSON = XLSX.utils.sheet_to_json(first_worksheet, {header:1});

        console.log(dataParsedJSON);
    };
    if(rABS) reader.readAsBinaryString(f); else reader.readAsArrayBuffer(f);
}


document.body.querySelector("#upload").addEventListener('change', handleFile);

