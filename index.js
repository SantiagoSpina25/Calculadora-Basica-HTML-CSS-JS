
const init = () =>{

    const buttons = document.getElementsByTagName("button")

    for (const button of buttons) {
        button.addEventListener("click", (e)=>{
            const text = e.target.innerText



            switch (text) {
                case "C":
                    document.getElementById("calculator").value = ""
                    break;
                case "=":
                    document.getElementById("calculator").value = eval(document.getElementById("calculator").value)
                    break;
                default:
                    document.getElementById("calculator").value += text
                    break;
            }

        })
    }



}


window.onload = init