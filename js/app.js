//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var menuItems = document.getElementsByClassName('navi');

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', showItem);
}

function showItem() {
    var itemElem = this.querySelectorAll('.inner')[0];
        if(itemElem.style.display === 'block') {
            itemElem.style.display = 'none';
        }
        else {
            itemElem.style.display = 'block';
        }
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
