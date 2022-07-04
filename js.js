let products = [["Pulled Pork Defrost",3],["Garlic Oil",7],["Defrost Pepperoni",3],["roasted pepper",5],["Starter Dough",2],["Goat Cheese",5],["Mozarella Fiora di Latte",3],["grated parmesan",5],["Chupped Chilli",3],["Pizza Sauce",5],["Coocked Sausages",3],["Pineapple",3],["Sweetcorn",3],["Coocked Chicken",3],["Chpped Parsley",3]]




var color

document.getElementById("search").addEventListener("click",()=>
{

    document.getElementById("searchFeld").style.display="block"

})


let container = document.getElementById("container")
function getProduct()
{
    container.innerHTML=""
    let array = []
    for(let i=0;i<products.length;i++)
    {
        let product = document.getElementById("searchFeld").value.toLowerCase()
        if (products[i][0].toLowerCase().includes(product)=== true)
        {
            array.push(products[i])
            console.log(array)
        }
    }
    for(let i=0;i<array.length;i++)
        {
            let label = document.createElement("button")
            label.className = "productLabel"
            label.innerHTML = array[i][0]
            label.onclick = function()
            {

                document.getElementById("print").style.display="block"
            
                let today = new Date()
                let day = today.getDate()
                var timing= today.toTimeString().slice(0,5)
                var year = String(today.getFullYear())
                var month = String(today.getMonth() +1)

                console.log(day)
                console.log(timing)

                if (month.length===1)
                {
                    month="0"+month
                }
                if (day.length===1)
                {
                    day="0"+day
                }

                let date_ = year+"-"+month+"-"+day
                //const d = new Date('2019-04-14');

                date      = new Date(date_);
                next_date = new Date(date.setDate(date.getDate() + array[i][1]));
                console.log(next_date)
                expiredDay_text = next_date.toLocaleDateString ('en-US', {weekday: 'long'})
                expired_date = next_date.getFullYear()+"-"+next_date.getMonth()+"-"+next_date.getDate()
                console.log(next_date)

                /*working on the printed label*/
                document.getElementById("printedLabel").style.display = "block"
                document.getElementById("expiredDay").innerHTML= expiredDay_text

                let userid = document.getElementById("selectUsers")
                let label = document.getElementById("printedLabel")
                switch(next_date.getDay()) {

                    case 0:
                        color = "rgb(255, 30, 0)"
                        label.style.backgroundColor = color
                        userid.style.background = color
                        break;
                      case 1:
                        color="rgb(0, 153, 255)"
                        label.style.backgroundColor =color
                        userid.style.background = color
                        break;
                      case 2:
                          color="rgb(80, 121, 20)"
                        label.style.backgroundColor = color
                        userid.style.background = color
                        break;
                      case 3:
                          color="rgb(145, 145, 12)"
                        label.style.backgroundColor =color
                        userid.style.background = color
                        break;
                      case 4:
                          color="orange"
                        label.style.backgroundColor = color
                        userid.style.background = color
                        break;
                      case 5:
                          color="blueviolet"
                        label.style.backgroundColor = color
                        userid.style.background = color
                        break;
                      case 6:
                        color="grey"
                        label.style.backgroundColor =color
                        userid.style.background = color
                    }
                document.getElementById("productName").innerHTML = array[i][0]
                document.getElementById("todaysDate").innerHTML = date_
                document.getElementsByClassName("timing")[0].innerHTML = timing
                document.getElementsByClassName("timing")[1].innerHTML = timing
                document.getElementById("expired").innerHTML = expired_date


                return console.log(expired_date + "   "+ expiredDay_text)
                            }
            container.appendChild(label)
            
        }
        document.getElementById("searchFeld").value=""

}


document.getElementById("delete").addEventListener("click",()=>{
    document.getElementById("searchFeld").value = ""
    document.getElementById("container").innerHTML = ""
    document.getElementById("printedLabel").style.display="none"
    document.getElementById("print").style.display="none"
})


var userSubmit=false
function addUsers()
{

    if(userSubmit==false)
    {
        document.getElementById("newUser").style.display = "inline-block"
        userSubmit=true
        document.getElementById("add").innerHTML="Submit"
    }
   else
    {

            let select = document.getElementById("selectUsers")
            let option= document.createElement("option")
            if(document.getElementById("newUser").value!=="" && document.getElementById("newUser").value.length >1)
            {
                option.text=document.getElementById("newUser").value.toUpperCase().slice(0,1)+"."+ document.getElementById("newUser").value.toUpperCase().slice(1)
                select.add(option)
                document.getElementById("newUser").style.display ="none";
                userSubmit=false
                document.getElementById("newUser").value=""
                document.getElementById("add").innerHTML="Add User"
            }

    }
   
}

document.getElementById("add").addEventListener("click",addUsers)




function popup() {
    let data=document.getElementById("printedLabel").innerHTML;
    var mywindow = window.open('', '', 'height=300,width=300');
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('<style>#userIdLabel{margin:auto auto;}#printedLabel{width:300px;height:300px;border:1px solid black;margin:auto auto;padding:5px;color:white;border-radius:15px;}#printedLabel p{margin:5px}.flex{display:flex;flex-direction: row;justify-content: space-around;}#printedLabel div{ margin:20px auto;}#expiredDay{font-size:30px;font-weight: bold;margin:5px auto;}#productName, #expiredDay{text-align:center;}#user{margin:auto auto;width:150px;}#selectUsers{margin:5px auto;color:white;border: none;font-size:15px;display:inline-block} </style>');
    mywindow.document.write('</head><body>');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');

    
   
    mywindow.print(); 
    mywindow.close(); 
    

    return true;
}



document.getElementById("print").addEventListener("click",popup)