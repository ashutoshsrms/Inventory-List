function filterItem(e)
{
    //console.log("test",z.target.value);
    let text=e.target.value
    let items=itemList.getElementsByTagName("li")
    let arr=Array.from(items)
    arr.forEach(function(a) {
        let name=a.firstChild.textContent
        let stext=name.toLowerCase()
        if(stext.indexOf(text)!=-1)
        {
            a.style.display='block'
        }else{
            a.style.dispaly='block'
        }
    })



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
}