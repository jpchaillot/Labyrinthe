"use strict";

let cell_size = 100;
let grid_size_y;
let grid_size_x;

function init_css_properties() {


    // document.querySelector("#menu").style.width = menu_width.toString(10) + "px";
    // document.querySelector("#visualizer").style.width = (window.innerWidth - menu_width).toString(10) + "px";
    // document.querySelector("#visualizer").style.left = menu_width.toString(10) + "px";


    // document.querySelector("#grid").style.width = (cell_size * grid_size_x).toString(10) + "px";
    // document.querySelector("#grid").style.height = (cell_size * grid_size_y).toString(10) + "px";

    grid_size_y = Math.floor(window.innerWidth / cell_size);
    grid_size_x = Math.floor(window.innerHeight / cell_size);

    document.querySelector("#grid").style.width = (grid_size_y * cell_size).toString(10) + "px";
    document.querySelector("#grid").style.height = (grid_size_x * cell_size).toString(10) + "px";
}

window.onload = function () {
    init_css_properties();
    generate_grid();

    window.addEventListener('resize', () => {
        clear();
    });



    // visualizer_event_listeners();
    // menu_event_listeners();

    // document.querySelector("#hider").style.visibility = "hidden";
}


function generate_grid() {


    let table = document.createElement("table");
    table.id = "my_table";

    for (let i = 0; i < grid_size_y; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < grid_size_x; j++) {
            let cell = document.createElement("td");
            let class_name = "";

            if ((i + j) % 2 == 0)
                class_name = "cell cell_paire";
            else
                class_name = "cell cell_impaire";

            class_name += " x_" + j.toString(10) + " y_" + i.toString(10);
            cell.className = class_name;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    document.querySelector("#grid").appendChild(table);
    // grid = new Array(grid_size_x).fill(0).map(() => new Array(grid_size_y).fill(0));

    // start_pos = [Math.floor(grid_size_x / 4), Math.floor(grid_size_y / 2)];
    // target_pos = [Math.floor((3 * grid_size_x) / 4), Math.floor(grid_size_y / 2)];

    // if (start_pos[0] % 2 == 0)
    //     start_pos[0] += 1;

    // if (start_pos[1] % 2 == 0)
    //     start_pos[1] -= 1;

    // if (target_pos[0] % 2 == 0)
    //     target_pos[0] += 1;

    // if (target_pos[1] % 2 == 0)
    //     target_pos[1] -= 1;

    // place_to_cell(start_pos[0], start_pos[1]).classList.add("start");
    // place_to_cell(target_pos[0], target_pos[1]).classList.add("target");
}

