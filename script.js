// // var today = dayjs.format();
// $("currentDay").text(today.format("MMM DD, YYYY"))


for (var i = 9; i < 18; i++) {
    $(".container-fluid").append(`<div class="time-block row"><div class="hour col-1">${i < 12 ? `${i}AM` : i > 12 ? `${i-12}PM` : "12PM"}</div><textarea name="" id="" class="description col-10"></textarea><button class="saveBtn col-1">Save</button></div>`)
}