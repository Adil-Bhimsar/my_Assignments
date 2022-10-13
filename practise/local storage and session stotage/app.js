(() => {

    $(document).ready(function () {
        var userData;

        var showwelcome = (user) => {
            document.querySelector(".welcome").innerHTML = "welcome " + user;
            document.querySelector(".welcome").style.display = "block"
        }

        var changeColor = (chooseclr) => {
            document.querySelector("body").style.backgroundColor = chooseclr
        }

        // alert(localStorage.getItem("user_name"))

        var userName = () => {
            userData = document.querySelector("#uname").value;
            localStorage.setItem("user_name", userData)
            showwelcome(userData)
        }


        if (localStorage.getItem("user_name") != null) {
            showwelcome(localStorage.getItem("user_name"))
        }
        if (localStorage.getItem("color_pick") != null) {
            changeColor(localStorage.getItem("color_pick"))
        }

        


        document.querySelector("#save").addEventListener("click", () => {
            userName();
        })

        var color = () => {
            var chhoseColor = document.querySelector("#selectTheme").value
            localStorage.setItem("color_pick", chhoseColor)
            changeColor(chhoseColor)
        }
        var changeColor = (chooseclr) => {
            document.querySelector("body").style.backgroundColor = chooseclr
        }
        document.querySelector("#selectTheme").addEventListener("change", () => {
            color()
        })
    })

})();