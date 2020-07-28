// $( "#bookName" ).append( $ );

// var url_string = window.location.href;
// console.log(url_string);
// var url = new URL(url_string);
// var id = url.searchParams.get("id");

// var name = url.searchParams.get("name");
// console.log(name);
// $( "#bookName" ).append(name);

$( document ).ready(function() {
    console.log( "ready!" );




    $(".submit").on("click", (event) => {
        event.preventDefault();
        const newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };
        console.log(newBurger);
        // create a new burger list item
        const tableList = $("#tableList");
        const listItem = $("<li class='list-group-item mt-4'>");
        listItem.append(
            $("<hr>"),
            // $("<h3>").text("Member ID: " + tableData[i].user_id),
            $("<br>"),
            // $("<h2>").text(tableData[i].reviews),
            $("<h2>").text(newBurger.burger_name),
            // $(`<button type="button" id=${tableData[i].review_id} class="btn-lg btn-danger submit delete">Devour</button>`)
            $(`<button type="button" id="1" class="btn-lg btn-danger submit delete">Devour</button>`)
        );
        tableList.append(listItem);

        // create a new burger in database with ajax call
        $.post("http://localhost:9000/burger-new", newBurger, () => {
            // if (!data) {
            //     alert("Sorry! You already left a review for the book, you can update it");
            // }
            // else {
            //     alert("Yay! Your book review has been noted!");
            
            $("#burger_name").val("");
        });

        
    });

    // $(".delete").click(function(event) {
    //     event.preventDefault();
    //     $(this).parent('li').remove();
    //     console.log("delete");
    //   });

    $(document).on('click','.delete', () => {
        event.preventDefault();
        // const id= $(this).attr("id");
        // const id = 1; 
        const elem1 = $(this).closest('li.list-group-item.mt-4');
        console.log(elem1);
        $(this).closest('li.list-group-item.mt-4').remove();
        // deleteReview(id);
        console.log("delete");
       
        // const newBurger = {
        //     burger_name: $("#burger-name").val().trim(),
        //     devoured: 0
        // };
        // console.log(newBurger);

        const tableList = $("#tableList-2");
        const listItem = $("<li class='list-group-item mt-4'>");
        listItem.append(
            $("<hr>"),
            // $("<h3>").text("Member ID: " + tableData[i].user_id),
            $("<br>"),
            // $("<h2>").text(tableData[i].reviews),
            $("<h2>").text("abc"),
        );
        tableList.append(listItem);
    });

    // const deleteReview = (id) => {
    // const url = "http://localhost:9000/review/"+id;
    // console.log(url);
    // $.ajax({ url: url, method: "DELETE" }).then((tableData) => {
    //     console.log(tableData);
    // });
    // }

    const loadAllBurgers = () => {
        
        $.ajax({ url: "http://localhost:9000/burger-all", method: "GET"}).then((tableData) => {
            console.log(tableData);
            for (let i = 0; i < tableData.length; i++) {
                const tableList = $("#tableList");
                const listItem = $("<li class='list-group-item mt-4'>");
                listItem.append(
                    $("<hr>"),
                    // $("<h3>").text("Member ID: " + tableData[i].user_id),
                    $("<br>"),
                    $("<h2>").text(tableData[i].burger_name),
                    $("<br>"),
                    $(`<button type="button" id=${tableData[i].id} class="btn-lg btn-danger submit delete">Devour</button>`)
                );
                tableList.append(listItem);
            }
        });
    };
    loadAllBurgers();
});