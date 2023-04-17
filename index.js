const fs = require("fs");
let output=[]
fs.readFile("data.json",function(err,data){
    if(err){
        throw err
    }
    const datas = JSON.parse(data);

   
    for(i=0;i<datas.payload.namespaces.length;i++){
    const prefixdata=datas.payload.namespaces[i]["prefix"];
    const patterndata=datas.payload.namespaces[i]["pattern"];
    output.push({"prefix":prefixdata,"pattern":patterndata});
}
    console.log(output);

    const jsonString = JSON.stringify(output)
fs.writeFile('newdata.json', jsonString,'utf-8', err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
})



