(() => {

    $(document).ready(function () {

        var pData = [];

        loadProduct = (pdetails) => {
            var ul = document.createElement("ul");
            ul.setAttribute("class", "pdetails");

            var li1 = document.createElement("li");
            li1.innerText = "Product Name " + pdetails.name;
            ul.append(li1);

            var li2 = document.createElement("li");
            li2.innerText = "Product price " + pdetails.price;
            ul.append(li2);

            var li3 = document.createElement("li");
            li3.innerText = "Product Manufractrer " + pdetails.manfracture;
            ul.append(li3);

            var li4 = document.createElement("li");
            li4.innerText = "Rating  " + pdetails.rating;
            ul.append(li4);

            var li5 = document.createElement("li");
            li5.setAttribute("class", "img");

            var imge = document.createElement("img");
            imge.setAttribute("src", pdetails.image);
            li5.append(imge);
            ul.append(li5);

            document.querySelector(".container").append(ul);
        }

        var getProductData = () => {
            $.ajax({
                url: "http://localhost:8081/ajaxpractise/data.json",
                method: "GET",
                dataType: "JSON",
                data: {},
                success: (response) => {
                    console.log("successful");
                    console.log(response);
                    pData = response.pDataDetails;

                    for (i = 0; i < pData.length; i++) {
                        loadProduct(pData[i]);
                    }
                },
                error: (error) => {
                    console.log("error")
                    console.log(error)

                }

            })
        }

        document.querySelector("#btn").addEventListener("click", () => {
            getProductData()
        })
    
    })

})() 