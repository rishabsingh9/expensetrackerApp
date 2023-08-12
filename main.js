var button=document.getElementById('butone');
button.addEventListener('click',callme);
function callme(e){
e.preventDefault();
var selectElement = document.getElementById("categories");
var selectedOption = selectElement.options[selectElement.selectedIndex];
let obj={
    amount:document.getElementById('expenseamount').value,
    des:document.getElementById('description').value,
    category:selectedOption.textContent
}
let user=JSON.stringify(obj);
localStorage.setItem(obj.des,user);
displayuserdetails(obj)
}
function displayuserdetails(obj){
    var parent=document.getElementById('ule');
    var child=document.createElement('li');
    child.textContent=`${obj.amount} - ${obj.category} - ${obj.des} `;
    parent.appendChild(child);
    var deletebtn=document.createElement('input')
    deletebtn.type='button'
    deletebtn.value='delete'
    var editbtn=document.createElement('button')
    editbtn.textContent="Edit"
    child.appendChild(deletebtn);
    child.appendChild(editbtn);
    deletebtn.onclick=() =>{
        localStorage.removeItem(obj.des)
        parent.removeChild(child)
      }
      editbtn.onclick=() =>{
        localStorage.removeItem(obj.des)
        var amountid=document.getElementById('expenseamount')
        var desid=document.getElementById('description');
        var catid=document.getElementById('categories');
        amountid.value=obj.amount;
        desid.value=obj.des;
        catid.value=obj.category;
      }

}
