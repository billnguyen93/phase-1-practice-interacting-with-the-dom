let timer = document.getElementById("counter")
let count = 0

let intervalID = setInterval(function() {
    count++;
    timer.innerText = count
}, 1000);

let increment = document.getElementById("plus");
let decrement = document.getElementById("minus");

let incrementTimer = () => {
    count++;
    timer.innerText = count
}

increment.addEventListener("click", incrementTimer);

let decrementTimer = () => {
    count--
    timer.innerText = count
}

decrement.addEventListener("click", decrementTimer);

let likeCounter = document.getElementById("heart");

likeCounter.addEventListener("click", () => {
    let foundLI = document.getElementById(count)
    if (foundLI) {
        console.log("found", foundLI);
        foundLI.dataset.like_num++ 
        foundLI.innerText =`${count} has been liked ${foundLI.dataset.like_num} times.`

    }
    else {
    let likeList = document.createElement("li");
    likeList.id = count
    likeList.dataset.like_num = 1
    likeList.dataset.test = "test"

    likeList.innerText =`${count} has been liked 1 time.`
    let newList = document.querySelector(".likes")
    newList.append(likeList);
    console.log("likeLI",likeList)
    }
    
})

let pauseButton = document.getElementById("pause")

pauseButton.addEventListener("click", () => {
    if (intervalID == -1) {
        intervalID = setInterval(function() {
            count++;
            timer.innerText = count
        }, 1000);
        pauseButton.innerText = "pause"
        document.querySelectorAll("button").forEach(disableButtons => {
            disableButtons.disabled = false;
        })
    } else {
        clearInterval(intervalID);
        intervalID = -1
        pauseButton.innerText = "resume"
        document.querySelectorAll("button").forEach(disableButtons => {
            disableButtons.disabled = true;
        })
        document.getElementById("pause").removeAttribute('disabled');
    }
    
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#comment-form').addEventListener('submit', (e) => {
        
        e.preventDefault()
        newComment(e.target.comment_input.value)
    })
})

function newComment(comment) {
    let p = document.createElement('p')
    p.textContent = comment
    document.querySelector('#list').appendChild(p)
}
