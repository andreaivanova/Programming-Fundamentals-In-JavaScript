function extractFile(str){
    let strAsArr = str.split('\\');
    let fileNameAndExtension = strAsArr.pop();
    fileNameAndExtension = fileNameAndExtension.split('.');
    let extension = fileNameAndExtension.pop();
  //  console.log(fileNameAndExtension);
    let fileName = fileNameAndExtension.join('.');
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
console.log('-------');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');