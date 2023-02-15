var selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null){
     insertNewRecord(formData);
  }
  else {
    updateRecord(formData);
  }
  resetData();
}

//Retrive the data 
function readFormData() {
  var formData = {};
  formData["studentId"] = document.getElementById('studentId').value ;
  formData["studentName"] = document.getElementById('studentName').value ;
  formData["age"] = document.getElementById('age').value ;
  formData["address"] = document.getElementById('address').value ;
  formData["faculty"] = document.getElementById('faculty').value ;
  return formData;
}

//insert the data 

function insertNewRecord(data) {
  var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
    cell1.innerHTML= data.studentId;
  var cell2 = newRow.insertCell(1);
    cell2.innerHTML= data.studentName;
  var cell3 = newRow.insertCell(2);
    cell3.innerHTML= data.age;
  var cell4 = newRow.insertCell(3);
    cell4.innerHTML= data.address;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML= data.faculty;
  var cell6 = newRow.insertCell(5);
    cell6.innerHTML= `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`
    console.log(data)
}

//Edit Function
function onEdit(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById('studentId').value = selectedRow.cells[0].innerHTML;
  document.getElementById('studentName').value = selectedRow.cells[1].innerHTML;
  document.getElementById('age').value = selectedRow.cells[2].innerHTML;
  document.getElementById('address').value = selectedRow.cells[3].innerHTML;
  document.getElementById('faculty').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.studentId;
  selectedRow.cells[1].innerHTML = formData.studentName;
  selectedRow.cells[2].innerHTML = formData.age;
  selectedRow.cells[3].innerHTML = formData.address;
  selectedRow.cells[4].innerHTML = formData.faculty;
}

//Delete data
function onDelete(td){
  if(confirm('Do you want to delete this data?')){
    row = td.parentElement.parentElement;
    document.getElementById('storeList').deleteRow(row.rowIndex); 
  }
  resetData()
}

//Reset Data
function resetData(){
  document.getElementById('studentId').value = '';
  document.getElementById('studentName').value = '';
  document.getElementById('age').value = '';
  document.getElementById('address').value = '';
  document.getElementById('faculty').value = '';
}
