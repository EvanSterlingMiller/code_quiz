// High scores
function high_scores() {
    var scores = JSON.parse(localStorage.getItem(saved_scores))
    scores.sort(function (x,y) {
        return y.score - x.score
    })
    for (var i = 0 ; i < scores.length; i=i+1){
        var li = document.createElement("li")
        li.classList.add("list_style")
        li.textContent = scores[i].init + " " + scores[i].score
        document.getElementById("high_scores").appendChild(li)
    }
}    

// delete current saved high scores
function delete_highscores() {
    localStorage.removeitem("saved_scores")
    window.location.reload()
}

// button to delete scores
document.querySelector("#delete_this").addEventListener("click", delete_highscores)

high_scores()

function start_quiz() {
    // hides the screen at the srart of the page
    screen_start.classList.add("hidden")
    questions.classList.remove("hidden")
}