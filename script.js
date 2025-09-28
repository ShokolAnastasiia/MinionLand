// Будь ласка, не змінюй код нижче. Він необхідний для правильного налаштування позиціонування елементів :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// Код, який потрібно виправити
let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names = ['Футболка', 'Вафельниця', 'Лего', 'Іграшка']
for (let i = 0; i < item_name_objects.length; i += 1) {
   item_name_objects[i].innerHTML = item_names[i]
}

let item_descriptions = ['Футболка з принтом міньйона. Доступна в жовтому, сірому, білому та в чорному кольорах', 'Вафельниця миньйон. Доступна в жовтому та помаранчевому кольорах', 'Лего миньйон. Дивовижні фігури і ескраві емоції при збиранні', ' Миньйон Funko POP. Доступні милі фігурки усіх міньйонів']
let item_prices = [400, 1452, 1037, 622]
let item_description_objects = document.querySelectorAll('.merch-item-descr')
let item_price_objects = document.querySelectorAll('.merch-item-price')
for (let i = 0; i < item_description_objects.length; i += 1) {
    item_description_objects[i].innerHTML = item_descriptions[i]
    item_price_objects[i].innerHTML = item_prices[i]
}
 

let total_price = 0
let cart_items_count = document.querySelector('.cart-amount')
let add_to_cart_buttons = document.querySelectorAll('.add-to-cart-btn')

let cart_button = document.querySelectorAll('.nav-item')[4]
let cart_button_text = cart_button.querySelector('.cart-text')

for (let i = 0; i < add_to_cart_buttons.length; i += 1) {
    add_to_cart_buttons[i].addEventListener('click', function() {
        cart_items_count.innerHTML = +cart_items_count.innerHTML + 1
        total_price += item_prices[i]
        if (cart_button_text.innerHTML != 'Кошик') {
            cart_button_text.innerHTML = total_price
        }
    })
}
cart_button.addEventListener('click', function() {
    if (cart_button_text.innerHTML == 'Кошик') {
        cart_button_text.innerHTML = total_price
    } else {
        cart_button_text.innerHTML = 'Кошик'
    }
})


























 

// Підрахунок вартості квитка
function calc_price() {
   let days_input = document.querySelector('.days-input')
   let days_amount = days_input.value
   if (days_amount == '') {
       days_input.style.border = '1px solid #AD4851'
   } else {
       let one_day_price = +document.querySelector('.submit-select').value
       let total = +days_amount * one_day_price
       days_input.style.border = 'none'
       days_input.style.borderBottom = '1px solid #5D4229'
       alert(total)
   }
}
let calc_button = document.querySelector('.submit-btn-calc')
calc_button.addEventListener('click', calc_price)


// Красива кнопка 'Відправити'
function make_transparent() {
    send_btn.style.backgroundColor = '#f3b645ff'
}
 
function make_colorful() {
    send_btn.style.backgroundColor = '#ffc354'
}

let send_btn = document.querySelector('.submit-btn-send')

send_btn.addEventListener('mouseenter', make_transparent)
send_btn.addEventListener('mouseleave', make_colorful)

// Пасхалка
function easter_egg() {
    let mars1 = document.querySelector('.mars1')
    let mars2 = document.querySelector('.mars2')
    let mars3 = document.querySelector('.mars3')
    let mars4 = document.querySelector('.mars4')
    let mars5 = document.querySelector('.mars5')
    mars1.style.color = '#AD4851'
    mars2.style.color = '#AD4851'
    mars3.style.color = '#AD4851'
    mars4.style.color = '#AD4851'
    mars5.style.color = '#AD4851'
}
 
let mars = document.querySelector('.mars1')
mars.addEventListener('click', easter_egg)

// Tranclate

 const minionDict = {
     "привіт": "Bello",
  "бувай": "Poopaye",
  "дякую": "Tank yu",
  "люблю": "Me want bananaaa!",
  "так": "Si",
  "ні": "No",
  "друг": "Papoi",
  "їжа": "Bananonina",
  "грати": "Tulaliloo ti amo",
  "я": "Me",
  "тебе": "you",
  "як у тебе справи": "Tulaliloo?",
  "як тебе звати": "Para tu nom?",
  "мене звати": "Me nom",
  "доброго ранку": "Bello!",
  "добрий вечір": "Bello papaguena!",
  "на добраніч": "Poopaye zzz",
  "мама": "Mamáaaaa",
  "тато": "Papoiii",
  "банан": "Banana!!!",
  "павло": "Pavlito",
  "настя": "Nasti-banana",
  "максим": "Maxito-ne-zoxodito-gifthabito"
    };

 function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function translateToMinion() {
      let text = document.getElementById("inputText").value.toLowerCase().trim();
      let result = text;

      for (let phrase in minionDict) {
        if (text.includes(phrase)) {
          result = result.replaceAll(phrase, minionDict[phrase]);
        }
      }

      const words = result.split(/\s+/);
      result = words.map(word => {
        if (minionDict[word]) {
          return minionDict[word];
        }
        return word;
      }).join(" ");

      document.getElementById("outputText").textContent = result;
    }








