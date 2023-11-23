var data = fetch('https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json').then (response => response.json())

//Elements

var tbody = document.getElementById('tbody')
var tr = () => document.createElement('tr')
var btn = () => document.createElement('button')
var td= () => document.createElement('td')
var nextBtn = document.getElementById('next')
var prevBtn = document.getElementById('prev')
var firstBtn = document.getElementById('first')
var lastBtn = document.getElementById('last')
var currentPage = document.getElementById('currentPage')
var totalPage = document.getElementById('totalPages')
var pageCon = document.getElementById('pageBtns')


//pagination class
class pagination {
    constructor() {
        this.firstIndex = 0

        //generate buttons

    data.then(data=>{
    var numOfBtn = data.length/10;
    for(let i = 0 ; i < numOfBtn ; i++){
        var pageBtn = btn()
        pageBtn.setAttribute('onclick',`page.setPage(${i})`)
        pageBtn.setAttribute('class','btn')
        pageBtn.innerHTML = i+1;
        pageCon.append(pageBtn)
    }
}).catch(error => console.log(error))
}

//logic for button

buttons(){
    data.then(data => {


        if( this.firstIndex < data.length-10 && this.firstIndex >= 0){
            nextBtn.style.display = "block"
    
        } else { 
            nextBtn.style.display = "none"
        }
    
    
        // logic for prev btn
    
        if(this.firstIndex > 0 && this.firstIndex < data.length) {
            prevBtn.style.display = "block"
        } else {
            prevBtn.style.display = "none"
    
        }
    }).catch(err => console.log(err))
 }
 
 //display the table content

 display(){
    data.then(data => {
       
       
        currentPage.innerHTML = (this.firstIndex/10)+1

        //display table
        tbody.innerHTML = ''
        for(let i = this.firstIndex ; i < this.firstIndex+10; i++){
             
            var row = tr()
            var rowData = [td(), td(), td()]
            rowData[0].innerHTML = data[i].id 
            rowData[1].innerHTML = data[i].name 
            rowData[2].innerHTML = data[i].email
            row.append(...rowData)
            tbody.append(row) 
       }
    }).catch(err => console.log(err))
    this.buttons()
 }

 //next page

 next() {
    this.firstIndex = this.firstIndex + 10
    this.display()
 }

 //prev page

 prev(){
    this.firstIndex = this.firstIndex - 10
    this.display()
 }

 // set the page

 setPage(num){
    this.firstIndex = num * 10
    this.display()
 }
 lastPage(){
    data.then(data =>{
        this.setPage((data.length/10)-1)
    }).catch(err => console.log(err))
}

}

var page = new pagination()
page.display()

//click action

firstBtn.addEventListener('click',()=> page.setPage(0))
lastBtn.addEventListener('click',()=> page.lastPage())
nextBtn.addEventListener('click',()=> page.next())
prevBtn.addEventListener('click',()=> page.prev())









