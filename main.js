let input = document.querySelector("#input-output-area");

// Add event listener to the buttons container 
document.querySelector("#container").addEventListener("click", evt=> {
    const target = evt.target;
    if(target.classList.contains("btn")){
        input.innerHTML = target.value;
    }
});