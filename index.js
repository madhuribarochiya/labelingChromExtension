//string-->array
// let myLeads = '["www.epiclead.com"]';//this is string and aa form local storage ma save karsu bcoz local storage ma khali string j jai sake
// myLeads = JSON.parse(myLeads);//string ne array ma convert
// myLeads.push("www.greatlead.com");//have array operation apply kari ne extra elemenr te arrya ma add karyo
// console.log(myLeads);//print that array

//array-->string
// let myLeads  = ["www.epiclead.com"];//aa atyre array chhe aane local storage ma store karva mate string banavi pade
// myLeads  = JSON.stringify(myLeads);//array ne string ,ma convert kari 
// console.log(typeof myLeads);

let myLeads = [];
let myLabel=[];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");


const leadsFromLoalStorage =  JSON.parse( localStorage.getItem("myLeads") );


if(leadsFromLoalStorage) {
    myLeads =  leadsFromLoalStorage;
    renderLeads(myLeads);
}
const tabs = [
    {url: "https://www.youtube.com/"}
]
tabBtn.addEventListener("click",function() {
    //grab the url of current tab
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads(myLeads);
})

deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear();
    myLeads=[]
    renderLeads(myLeads);
})



inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads); 
    
    console.log(localStorage.getItem("myLeads"))

}) 
function renderLeads(leads) {
    let listIteam = "";
    //render the list out in the unordered list using ulEl.textContent
    for(let i = 0; i< leads.length; i++) {
         listIteam += 

         `<li>
            <a target="blank"  href="${leads[i]}">
                ${leads[i]}
            </a>
         
         <\li>`
         //console.log(listIteam);
        //  //create element
        //  const li =  document.createElement("li");
        //  //set text content
        //  li.innerText = myLeads[i];
        //  //append to ul
        //  listIteam.append(li);
    }
    ulEl.innerHTML = listIteam;
}
