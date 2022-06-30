let products = [["Pulled Pork Defrosted",3],["Garlic Oil",7],["Defrost Pepperoni",3],["roasted pepper",5],["Starter Dough",2],["Goat Cheese",5],["Mozarella Fiora di Latte",3],["grated parmesan",5],["Chupped Chilli",3]]






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
        let product = document.getElementById("searchFeld").value
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

                let userid = document.getElementById("userid")
                switch(next_date.getDay()) {

                    case 0:
                        document.getElementById("printedLabel").style.background ="red"
                        userid.style.background = "red"
                        break;
                      case 1:
                        document.getElementById("printedLabel").style.background ="blue"
                        userid.style.background = "blue"
                        break;
                      case 2:
                        document.getElementById("printedLabel").style.background ="green"
                        userid.style.background = "green"
                        break;
                      case 3:
                        document.getElementById("printedLabel").style.background ="yellow"
                        userid.style.background = "yellow"
                        break;
                      case 4:
                        document.getElementById("printedLabel").style.background ="orange"
                        userid.style.background = "orange"
                        break;
                      case 5:
                        document.getElementById("printedLabel").style.background ="purple"
                        break;
                      case 6:
                        document.getElementById("printedLabel").style.background ="grey"
                        userid.style.background = "grey"
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
    
}

document.getElementById("delete").addEventListener("click",()=>{
    document.getElementById("searchFeld").value = ""
    document.getElementById("container").innerHTML = ""
    document.getElementById("printedLabel").style.display="none"
})





