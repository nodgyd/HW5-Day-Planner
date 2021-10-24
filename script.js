function time(){
    var today = dayjs();
    $("#currentDay").text(today.format('MMM DD, YYYY h:mm:ss A'))
    
}
setInterval(time, 1000)

var currentHour = dayjs().hour();
var textContent = $("#description")
// get this from local storage
var todo = {
    textContent: textContent[i],
}

function render() {

    for (var i = 9; i < 18; i++) {
        $(".container-fluid").append(`
        <div class="time-block row">
        <div class="hour col-1 text-start pt-3">${i < 12 ? `${i}AM` : i > 12 ? `${i-12}PM` : "12PM"}</div>
        <textarea 
        name="" 
        id="text" 
        class="description col-10 ${i < currentHour ? 'past' : i === currentHour ? 'present' : 'future'}">${todo[i] || ""}
        </textarea>
        <button id="save" class="saveBtn col-1">Save</button>
        </div>
        `)
    }
        
}

render()

//when saving todo update local storage

$("#save").on("click", function(){
    localStorage.setItem("todo", JSON.stringify(textContent))
})


$("#description").val(localStorage.getItem(textContent))