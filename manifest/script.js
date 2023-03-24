const el = document.getElementsByClassName("itable mtable")
const el_left = document.getElementsByClassName("itable ltable")

let t = setInterval(f,1000);

function f(){

    if (el_left.length>0){
        tr_left = document.createElement("tr")
        tr_left.class = ".bg"

        td_left = document.createElement("td")
        td_left.class=".ttl"
        td_left.innerHTML = "<b>Средний балл</b>"
        td_left.style.paddingLeft = "8px"

        tr_left.append(td_left)

        el_left[0].tBodies[0].append(tr_left)
    }
    
    if (el.length>0){
        let element=document.createElement('tr')
            
            
            for(b=0;b<el[0].rows[0].cells.length;b++){
                number_of_marks=0 
                num=0
                td = document.createElement('td')

                for(c=1;c<el[0].rows.length-2;c++){
                    if ((el[0].rows[c].cells[b].innerHTML)!="з."&&(el[0].rows[c].cells[b].innerHTML)!="—"&&(el[0].rows[c].cells[b].innerHTML)!=" "&&(el[0].rows[c].cells[b].innerHTML)!=""){
                    num+=Number(el[0].rows[c].cells[b].innerHTML)
                    number_of_marks++
                    }
                }
                if(num/number_of_marks<=0){
                td.innerHTML="0"}
                else if (number_of_marks!=0){
                    td.innerHTML=String(Math.round((num/number_of_marks*100))/100)
                }
                element.append(td)
            }
           
            
        element.class=".marks even"
        el[0].tBodies[0].append(element)
        clearInterval(t)
    }

    console.log(document.)
}