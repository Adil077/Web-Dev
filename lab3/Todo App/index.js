let items = new Map();
let id = 1;
let remove_btn = false;

function addItem() {
    if(document.getElementById("newItem").value != "") {
        let ul = document.getElementById("list"); //основной список

        let newItem = document.createElement("li"); // создание нового элемента списка
        newItem.id = id;
        let btn_delete = document.createElement("button"); // кнопка удаления для списка
        btn_delete.className = "btn_delete"; // создание класса для кнопки

        let itemContainer = document.createElement("div"); // контейнер для элементов списка
        itemContainer.className = "item_container"; // создание класса для контейнера элемента списка

        let checkbox = document.createElement("input"); // галочка для элемента списка
        checkbox.type = "checkbox"; 
        checkbox.value = "checked";

        let itemName = document.createElement("label");
        itemName.innerHTML = document.getElementById("newItem").value; // берем значение из input
        itemContainer.append(checkbox, itemName, btn_delete); // добавляем все в контейнер элементов списка
        newItem.append(itemContainer);
        document.getElementById("newItem").value = ""; //обнуляем значение input
        ul.append(newItem); // добавляем элемент в список
        items.set(id, newItem); // добавляем ключ = id, значение = newItem

        btn_delete.addEventListener("click", () => {
            let current_id = +newItem.id;
            items.delete(current_id);
            newItem.remove();
            for(let key of items.keys()) {
                if(key>current_id) {
                    items.get(key).id = +items.get(key).id - 1;
                    items.set(key - 1, items.get(key));
                    items.delete(key);
                    current_id = key;
                }
            }
            items.delete(id);
            id-=1;
            if ( items.size<2 && remove_btn == true ) {
                document.getElementById("btn_remove_all").remove();
                remove_btn = false;
            }
        });

        checkbox.addEventListener( "change", () => {
            if ( checkbox.checked ) {
                itemName.style.textDecoration = "line-through";
                newItem.className = "done";
            }
            else {
                itemName.style.textDecoration = "none";
                newItem.className = "in_process";
            }
        });

        if(items.size>=2) {
            if(remove_btn == false){
                let btn_remove_all = document.createElement("button");
                btn_remove_all.id = "btn_remove_all";
                btn_remove_all.innerText = "Удалить все";
                document.getElementById("new_target_container").append(btn_remove_all);
                remove_btn = true;
                btn_remove_all.addEventListener("click", deleteAll);
            }
        }
        id+=1; // увеличеваем id
        // console.log(items.entries());
    }
}

function deleteAll() {
    remove_btn = false;
    document.getElementById("list").innerHTML = "";
    document.getElementById("btn_remove_all").remove();
    id = 1;
    items.clear();
}