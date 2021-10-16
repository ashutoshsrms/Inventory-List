let form=document.getElementById("addForm")
//console.log(form);
let itemList=document.getElementById("items")
//console.log(itemList);
let filter=document.getElementById("filter")
// console.log(filter);

form.addEventListener("submit",additem)
itemList.addEventListener("click",removeItem)
filter.addEventListener("keyup",filterItem)

function additem(x)
{
     x.preventDefault()
    // console.log(x);
    // console.log("submit");
    let newItem=document.getElementById("Item").value;
    // console.log(newItem);
    let li=document.createElement("li");
    let btn=document.createElement("button");
    btn.className="btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode("x"));
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(btn);
    li.className="list-group-item";

    itemList.appendChild(li);
}

function removeItem(y)
{
    if(y.target.classList.contains("delete"))
    {
        if(confirm("Are You Sure"))
        {
           //console.log(y.target.parentElement.remove());
            y.target.parentElement.remove()
        }
    }
}


function filterItem(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();

    //Get List item
    var items = document.getElementsByTagName("li");

    //Convert to an array

    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}