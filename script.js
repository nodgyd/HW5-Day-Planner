var today = dayjs();
$("currentDay").text(today.format('MMM DD, YYYY h:mm A'))

var currentHour = dayjs().hour();

// get this from local storage
var todos = {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
}

function render() {

    for (var i = 9; i < 18; i++) {
        $(".container-fluid").append(`
        <div class="time-block row">
        <div class="hour col-1 text-start pt-3">${i < 12 ? `${i}AM` : i > 12 ? `${i-12}PM` : "12PM"}</div>
        <textarea 
        name="" 
        id="" 
        class="description col-10 ${i < currentHour ? 'past' : i === currentHour ? 'present' : 'future'}">${todos[i] || ""}
        </textarea>
        <button class="saveBtn col-1">Save</button>
        </div>
        `)
    }
    
    
}

render()

//when saving todo update local storage
