

let input_list = document.querySelector (".input_list");
let list = document.querySelector (".list");
let add_button = document.querySelector (".add");

let list_products = [];

function display_list(){
    list.innerHTML ="";
    list_products.forEach(function(item) {
        let li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);

});
}

function update_list(){

    list_products.push(input_list.value)

}

display_list()

add_button.addEventListener("click", function() {
   
update_list();
display_list();

    });
