let money = 100;
let cats = 0;
let baristas = 0;
let itemInc = 0;
let currentMenuItem = 0;
let menuItemPrice = 1000;
let menuStore = [{
    name: 'Hot Chocolate ',
    price: 1
  },
  {
    name: 'Espresso ',
    price: 2
  },
  {
    name: 'Croissant ',
    price: 2
  },
  {
    name: 'Chocolate Croissant ',
    price: 3
  },
  {
    name: 'Latte ',
    price: 3
  },
  {
    name: 'Americano ',
    price: 3
  },
  {
    name: 'Oolong Tea ',
    price: 2
  },
  {
    name: 'Chocolate Chip Cookies ',
    price: 2
  },
  {
    name: 'Earl Grey Tea ',
    price: 3
  },
  {
    name: 'Herbal Tea ',
    price: 2
  },
  {
    name: 'Chai Tea ',
    price: 3
  },
  {
    name: 'Green Tea ',
    price: 2
  },
  {
    name: 'Cappuccino ',
    price: 3
  },
  {
    name: 'Macchiato ',
    price: 3
  },
  {
    name: 'Caramel Latte ',
    price: 5
  },
  {
    name: 'Mint Tea ',
    price: 3
  },
  {
    name: 'Nutella Waffle ',
    price: 5
  },
  {
    name: 'Red Velvet Cake ',
    price: 6
  }
];

let baristaBtn = document.getElementById("barista-btn");
baristaBtn.addEventListener('click', () => {
  document.getElementById('cat-btn').disabled = false;
  document.getElementById("menu-btn").disabled = false;
  if (currentMenuItem === menuStore.length) {
    document.getElementById("menu-btn").disabled = true;
  }


  if (money >= 50) {
    baristas += 1;
    itemInc += 2;
    money -= 50;
    setInterval(() => {
      let items = document.querySelectorAll('.item > span');
      let prices = document.querySelectorAll('.menu-item > .price');
      prices.forEach(p => {
        let priceNumber = parseInt(p.innerHTML);
        let currentTotal = priceNumber * itemInc;
        money += currentTotal;
      })

      items.forEach(i => {
        let number = parseInt(i.innerHTML);
        i.innerHTML = updateNumberOfItemsSold(number, itemInc);
      })
      render();
    }, 1200)
  } else {
    return '';
  }

})

let catBtn = document.getElementById("cat-btn");
catBtn.addEventListener('click', () => {
  if (money >= 100) {
    cats += 1;
    itemInc += 4;
    money -= 100;
  } else {
    return '';
  }
})

let menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
  if (money >= menuItemPrice) {
    money -= menuItemPrice;
    menuItemPrice += 10000;
    let menu = document.getElementById('menu-list');
    let li = document.createElement("li");
    let span = document.createElement("span");
    let coin = document.createElement("span");
    span.appendChild(document.createTextNode(menuStore[currentMenuItem].price));
    coin.appendChild(document.createTextNode(' coins'));
    li.setAttribute("class", "menu-item");
    li.appendChild(document.createTextNode(menuStore[currentMenuItem].name));
    li.appendChild(span);
    li.appendChild(coin);
    menu.appendChild(li);

    let items = document.getElementById('items-list');
    let li2 = document.createElement("li");
    let span2 = document.createElement("span");
    span2.appendChild(document.createTextNode('0'));
    li2.setAttribute("class", "item");
    li2.appendChild(document.createTextNode(menuStore[currentMenuItem].name));
    li2.appendChild(span2);
    items.appendChild(li2);

    currentMenuItem += 1;

    if (currentMenuItem < menuStore.length) {
      document.getElementById('menu-btn').innerHTML = `Add ${menuStore[currentMenuItem].name} ${menuItemPrice} coins`;
    } else {
      document.getElementById("menu-btn").disabled = true;
      document.getElementById('menu-btn').innerHTML = "All Items Bought";
    }

  }
})

function updateNumberOfItemsSold(num, increase) {
  return num + increase;
}

function render() {
  document.getElementById('money').innerHTML = money;
  document.getElementById('cats').innerHTML = cats;
  document.getElementById('baristas-number').innerHTML = baristas;
}

function renderMenuItem() {
  document.getElementById('menu-btn').innerHTML = `Add ${menuStore[0].name} 1000 coins`;
}

function startGame() {
  document.getElementById("cat-btn").disabled = true;
  document.getElementById("menu-btn").disabled = true;
  render();
  renderMenuItem();
}

startGame();