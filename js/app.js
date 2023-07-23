const aside = document.querySelector('aside');
const menu = document.querySelector('button.menu');
const navLine = document.querySelector('.nav-line');
var navItemActive = document.querySelector('.nav__items a');


addEventListener('click', (e) => {
    if (e.target.matches('.nav__items a')) {
        navItemActive = e.target;
        document.querySelector('.nav--active').classList.remove('nav--active');
        navItemActive.classList.add('nav--active');
        setNavLine();
    }

    if (e.target.matches('.aside__items a')) {
        asideItemActive = e.target;
        document.querySelector('.aside--active').classList.remove('aside--active');
        asideItemActive.classList.add('aside--active');
        setAsideLine();

        setTimeout(() => {
            menu.classList.remove('show');
            aside.classList.remove('show');
        }, 400)
    }

    if (e.target.matches('button.menu')) {
        menu.classList.toggle('show');
        aside.classList.toggle('show');
    }
})

addEventListener('resize', () => setNavLine())
addEventListener('load', () => setNavLine())

function setNavLine () {
    let offsetLeft = navItemActive.documentOffsetLeft;
    let width = navItemActive.getBoundingClientRect().width;
    let left = (offsetLeft + width / 2) - 10;
    
    navLine.style.transform = 'translateX(0)';
    navLine.style.left = left + 'px';
}


/*
    ASIDE
*/  

const asideLine = document.querySelector('.aside-line');
var asideItemActive = document.querySelector('.aside__items a');

addEventListener('resize', () => setAsideLine())
addEventListener('load', () => setAsideLine())

function setAsideLine () {
    let offsetTop = asideItemActive.documentOffsetTop;
    let height = asideItemActive.getBoundingClientRect().height;
    let top = (offsetTop + height / 2) - 15;

    asideLine.style.top = top + 'px';
}




/*
    NAV SCROLLED
*/
const header = document.querySelector('header');
const nav = document.querySelector('nav');

addEventListener('scroll', () => {
    let offsetTop = header.documentOffsetTop;
    let height = header.getBoundingClientRect().height;
    let topHeader = offsetTop + height;
    
    if (scrollY >= topHeader) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})


/*
    DESTINATION
*/

// let destination = [
//     {
//         title: 'Palm Grove Quad Bike Tour',
//         place: 'Marrakech',
//         price: 30,
//         rating: 5,
//         review: '1,328',
//         detail: 'Hotel pickup and drop off',
//         duration: '2 hours', // Additional detail: Duration of the tour
//         includes: 'Safety equipment provided', // Additional detail: What is included in the tour
//         url: '1.html', // Add the desired URL link here
//       },
//     {
//         title: 'Camel Ride Trip in Palm Groves',
//         place: 'Marrackech',
//         price: 29,
//         rating: 3.5,
//         review: '719',
//         button: ''
//     },
//     {
//         title: 'Hot Air Balloon Flight',
//         place: 'Marrackech',
//         price: 300,
//         rating: 4.9,
//         review: '187'
//     },
//     {
//         title: 'Buggy Experience at Palmeraie',
//         place: 'Marrackech',
//         price: 90,
//         rating: 4.5,
//         review: '361'
//     },
//     {
//         title: 'Palm Grove Horseback Riding Tour',
//         place: 'Marrackech',
//         price: 45,
//         rating: 4.7,
//         review: '149',

        
//     },
//     {
//         title: 'Private Sidecar ride',
//         place: 'Marrackech',
//         price: 200,
//         rating: 4.6,
//         review: '268'
//     },
// ]

// const destinationBox = document.querySelector('.destination-box')

// destination.forEach((item, index) => {
//     let div = document.createElement('div');
//     div.classList.add('destination__item');
//     destinationBox.appendChild(div);

//     div.innerHTML = `
//         <div class="destination-image">
//             <img src="./img/destination-${index+1}.jpg" alt="Destination image">
//             <div class="price">$${item.price}</div>
            
//         </div>
//         <h2>Enjoy the Beauty of the ${item.title}</h2>
//         <p class="description">${item.place}</p>
//         <div class="opinion">
//             <div class="rating">
//                 <ion-icon name="star"></ion-icon>
//                 <p class="description">${item.rating}</p>
//             </div>
//             <p class="description">(${item.review} Review)</p>
//             <a href="https://api.whatsapp.com/send/?phone=212633332947&text=Hola+Danila.&type=phone_number&app_absent=0"
//                                     target="_blank"><button class="button contact__card-button">
//                                         Call Now
//                                     </button></a>
//                                     <style>
//                                     /* Style for the button */
//                                     .button {
//                                       background-color: #007bff;
//                                       color: #fff;
//                                       border: none;
//                                       padding: 10px 20px;
//                                       border-radius: 5px;
//                                       cursor: pointer;
//                                       font-size: 16px;
//                                       text-align: center;
//                                       text-decoration: none;
//                                     }
//                                     </style
                                    
//         </div>
//     `;
// })

let destination = [
    {
        title: 'Palm Grove Quad Bike Tour',
        place: 'Marrakech',
        price: 30,
        rating: 5,
        review: '1,328',
        detail: 'Hotel pickup and drop off',
        duration: '2 hours', // Additional detail: Duration of the tour
        includes: 'Safety equipment provided', // Additional detail: What is included in the tour
      },
    {
        title: 'Camel Ride Trip in Palm Groves',
        place: 'Marrackech',
        price: 29,
        rating: 3.5,
        review: '719',
    },
    {
        title: 'Hot Air Balloon Flight',
        place: 'Marrackech',
        price: 300,
        rating: 4.9,
        review: '187'
    },
    {
        title: 'Buggy Experience at Palmeraie',
        place: 'Marrackech',
        price: 90,
        rating: 4.5,
        review: '361'
    },
    {
        title: 'Palm Grove Horseback Riding Tour',
        place: 'Marrackech',
        price: 45,
        rating: 4.7,
        review: '149',

        
    },
    {
        title: 'Private Sidecar ride',
        place: 'Marrackech',
        price: 200,
        rating: 4.6,
        review: '268'
    },
]

const destinationBox = document.querySelector('.destination-box')

destination.forEach((item, index) => {
    let div = document.createElement('div');
    div.classList.add('destination__item');
    destinationBox.appendChild(div);

    div.innerHTML = `
        <div class="destination-image">
            <img src="./img/destination-${index+1}.jpg" alt="Destination image">
            <div class="price">$${item.price}</div>
            
        </div>
        <h2>Enjoy the Beauty of the ${item.title}</h2>
        <p class="description">${item.place}</p>
        <div class="opinion">
            <div class="rating">
                <ion-icon name="star"></ion-icon>
                <p class="description">${item.rating}</p>
            </div>
            <p class="description">(${item.review} Review)</p>
            <a href="tel:+212633332947"><button class="button contact__card-button">
                                        Call Now
                                    </button></a>
            <a href="https://api.whatsapp.com/send/?phone=212633332947&text=Hola+Danila.&type=phone_number&app_absent=0"
            target="_blank"><button class="button contact__card-button">
                Book Now
            </button></a>

                                    <style>
                                    /* Style for the button */
                                    .button {
                                      margin-bottom: 10px;
                                      background-color: #007bff;
                                      color: #fff;
                                      border: none;
                                      padding: 10px 20px;
                                      border-radius: 5px;
                                      cursor: pointer;
                                      font-size: 16px;
                                      text-align: center;
                                      text-decoration: none;
                                    }
                                    </style
                                    
        </div>
    `;
})







Object.defineProperty( Element.prototype, 'documentOffsetTop', {
    get: function () { 
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop : 0 );
    }
} );

Object.defineProperty( Element.prototype, 'documentOffsetLeft', {
    get: function () { 
        return this.offsetLeft + ( this.offsetParent ? this.offsetParent.documentOffsetLeft : 0 );
    }
} );
