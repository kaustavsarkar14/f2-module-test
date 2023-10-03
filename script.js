const navButton = document.getElementById('navButton')
const mobileNavbar = document.getElementById('mobileNav')
let items = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]
let itemsCopy = [...items]
const itemsContainer = document.getElementById('items')
const below_four = document.getElementById('below_four')
const four_and_above = document.getElementById('four_and_above')
const shadow = document.getElementById('shadow')

navButton.addEventListener('click', (e) => {
    e.stopPropagation()
    mobileNavbar.style.display = "flex"
    shadow.style.display ='block'
})

document.addEventListener("click", function (event) {
    if (!mobileNavbar.contains(event.target) || event.target == navButton) {
        mobileNavbar.style.display = "none";
        shadow.style.display ='none'
    }
});

function renderItems() {
    itemsContainer.innerHTML = ''
    items.forEach((el, i) => {
        const item = document.createElement('div')
        item.className = 'item'
        item.innerHTML = `
                        <img src="${el.imageSrc}" alt="">
                        <div>
                            <div>
                                <h6 style="opacity:0.6">${el.type == 'veg' ? 'Veg' : 'Non Veg'}</h6>
                            </div>
                            <div>
                                <h4>${el.name}</h4>
                                <span>
                                    <span style="color: rgba(253, 192, 64, 1);" class="material-icons">
                                        star
                                    </span>
                                    ${el.rating}
                                </span>
                            </div>
                            <div>
                                <h4 style="color:rgba(220, 88, 42, 1)"; font-weight:600>${el.time}</h4>
                                <span>
                                    <span onclick="like(this)" id=${i} style="color:${el.isLiked == true ? "red" : "grey"}" class="material-icons">
                                        favorite
                                    </span>
                                    <span style="color:grey" class="material-icons">
                                        chat_bubble
                                        </span>
                                </span>
                            </div>
                        </div>
        `
        itemsContainer.appendChild(item)
    })
}
renderItems()
const like = (likeButton) => {
    items[likeButton.id].isLiked = !items[likeButton.id].isLiked
    renderItems()
}

function vegRecipes() {
    items = itemsCopy.filter(el => el.type == 'veg')
    renderItems()
}
function nonVegRecipes() {
    items = itemsCopy.filter(el => el.type != 'veg')
    renderItems()
}
function allRecipes() {
    items = [...itemsCopy]
    renderItems()
}

function handleChange(search) {
    items = itemsCopy.filter(el => el.name.toLowerCase().includes(search.value.toLowerCase()))
    renderItems()
}

function applyFilters() {
    let filteredItems = [...itemsCopy];
    if (below_four.checked && four_and_above.checked) {
        items = [...itemsCopy];
    } else {
        if (below_four.checked) {
            filteredItems = filteredItems.filter((el) => el.rating < 4);
        }

        if (four_and_above.checked) {
            filteredItems = filteredItems.filter((el) => el.rating >= 4);
        }

        items = filteredItems;
    }
    renderItems();
}

below_four.addEventListener('input', applyFilters);
four_and_above.addEventListener('input', applyFilters);
