idd=0
let citys = [
    {code:1,name:'yerushalaym',prich:100},
    {code:2,name:'london',prich:200},
    {code:3,name:'brisel',prich:20},
    {code:4,name:'teiman',prich:2000},
    {code:5,name:'prag',prich:10},
    {code:6,name:'hongkong',prich:500},
    {code:7,name:'maroko',prich:-50},
    {code:8,name:'sumalya',prich:180},
    {code:9,name:'sry lanka',prich:130},
    {code:10,name:'varsha',prich:400}]
console.log(citys)
let orders = [] 


strrr()


 function strrr(){
    let v =document.getElementById('b1')
    let temp="<tr><td>##code%%</td><td>##name%%</td><td>##prich%%</td></tr>"
    let mas=""
    citys.forEach(alement=>
        v.innerHTML+= randerr(temp,alement))
   }

   function travl(){
    console.log("travl start");
       let namme=document.getElementById("name").value
       let personId=document.getElementById("pid").value
         console.log(namme)
       let tid=document.getElementById("tid").value
       let city1 = citys.find(alement=>{return tid==alement.code})
       console.log(city1.name)
       let passengers =document.getElementById("passengers").value
       let totale = city1.prich*passengers
       console.log(totale)
       orderss (namme,personId,city1.name,passengers,totale)
   }

   function orderss(namme,personId,city1name,passengerss,totalee){
       idd++
       let ob = {id:idd,name:namme,personid:personId,city:city1name,passengers:passengerss,totale:totalee}
       orders.push(ob)
       console.log(orders)
       let tampl ="<tr><td>##id%%</td><td>##name%%</td><td>##personid%%</td><td>##city%%</td><td>##passengers%%</td><td>##totale%%</td></tr>"
       let v1 = document.getElementById('b2')
       v1.innerHTML+=randerr(tampl,ob)
   }

   function findd(){
    console.log("findd start")
    let snam=document.getElementById("sname").value
    console.log(snam)
    let arr= orders.filter(travl => {return travl.name==snam})
    let v4= document.getElementById("b3")
    str(arr,v4)
   }
   
   function str(arr,v4){
    let temp = "<tr><td>##id%%</td><td>##name%%</td><td>##passengers%%</td><td>##totale%%</td></tr>"
    arr.forEach(alement=>
        v4.innerHTML+=randerr(temp,alement))
   }

   function chang(){
    let cityy  = document.getElementById("selec").value;
    console.log(cityy);
    let arr= orders.filter(travl => {return travl.city==cityy})
    let v4= document.querySelector("#b4")
    str(arr,v4)
    let total =0;
    arr.forEach(alement=>total+=alement.totale)
    let p = document.querySelector('#total')
    console.log(p)
    p.innerHTML+=total
   }

   function randerr(templat,data){
       let t = templat.split('##')
       for (let index = 1; index < t.length; index++){
           let trr  = t[index].split('%%')
           t[index]=data[trr[0]]+trr[1]
       } 
       return t.join('')
    }