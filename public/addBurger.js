$( document ).ready(function() {
    console.log( "ready!" );
        
    const loadAllBurgers = () => {
        
        $.ajax({ url: "https://eat-ea-burger-hm-13.herokuapp.com/burger-all", method: "GET"}).then((tableData) => {
            console.log(tableData);
            for (let i = 0; i < tableData.length; i++) {
                const tableList = $("#tableList");
                const listItem = $("<li class='list-group-item mt-4'>");
                listItem.append(
                    $("<br>"),
                    $(`<h2 class="burgerName">`).text(tableData[i].burger_name),
                    $("<br>"),
                    $(`<button type="button" id=${tableData[i].id} class="btn-lg btn-danger deleteBurger">Devour</button>`)
                );
                tableList.append(listItem);
            }
        });
    };

    $(".addBurger").on("click", (event) => {
        event.preventDefault();
        const newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };
        console.log(newBurger);

        // create a new burger in database with ajax call
        $.post("https://eat-ea-burger-hm-13.herokuapp.com/burger-new", newBurger, () => {
            $("#burger_name").val("");
        });

        loadAllBurgers();
    });

    $(document).on('click','.deleteBurger', () => {
        event.preventDefault();
        const elem1 = $(this).closest('li.list-group-item.mt-4');
        console.log(elem1);
        $(this).closest('li.list-group-item.mt-4').remove();
        const burger_name= $(this).closest(".burgerName").val();
        console.log(burger_name);
        const tableList = $("#tableList-2");
        const listItem = $("<li class='list-group-item mt-4'>");
        listItem.append(
            $("<br>"),
            $("<h2>").text(burger_name),
        );
        tableList.append(listItem);
        
        const id= $(this).attr("id");
        console.log(id);
        
        const data = {
            id: id,
            devoured: 1
        }

        $.ajax({url:"https://eat-ea-burger-hm-13.herokuapp.com/updateBurger", method:"PUT", data:data}).then((data) => {
            if (data) {
                alert("Yay! Burger has been devoured!");
            }
            else {
                alert("Sorry!");
            }
        });
    });

    loadAllBurgers();
});