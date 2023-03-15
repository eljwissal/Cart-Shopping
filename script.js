const listProducts = [
    {
        name: "Bague en alliage",
        price: 19.99,
        img: "https://img.ltwebstatic.com/images3_pi/2021/10/09/1633744171a89a84f1e12158580177e94ecef18b5b.webp",
        qte: 0,
    },
    {
        name: "Boucles d'oreilles à design goutte d'eau à strass & Collier avec pendentif",
        price: 50.00,
        img: "https://img.ltwebstatic.com/images3_pi/2022/05/30/16538874522c7e7f462714c8b34c83981981377a17.webp",
        qte: 0,
    },
    {
        name: "Lunettes de mode à monture carrée à verres teintés",
        price: 29.99,
        img: "https://img.ltwebstatic.com/images3_pi/2022/06/21/1655783140c1d557d64f0028e416c72f22080379f5.webp",
        qte: 0,
    },
    {
        name: "Sac hobo mini à motif géométrique à chaîne",
        price: 12.99,
        img: "https://img.ltwebstatic.com/images3_pi/2023/03/01/16776330266eacafe824c96114e0da9990bc3800c8.webp",
        qte: 0,
    }
];

let theRooot = document.getElementById ("produit");

function buildDOM() {
listProducts.forEach((listProducts) => {
    let productroot = document.createElement("div");
    productroot.classList.add("all_product");

    let productTitle = document.createElement("h2");
    productTitle.innerHTML = listProducts.name;


    let productIMG = document.createElement("img");
    productIMG.setAttribute("src", listProducts.img);

    let productPrice = document.createElement("span");
    productPrice.innerHTML = listProducts.price;

    //heart

    let heart = document.createElement("i");
    heart.classList.add(["fa-heart"]);
    heart.classList.add(["fa-regular"]);


    productroot.appendChild(heart);
    console.log(heart);
    heart.addEventListener("click", function () {
    heart.classList.toggle("fa-solid");
    heart.style.color = "red";
    })
;

    let inputQTE = document.createElement('input')
    inputQTE.setAttribute('type', 'number')
    inputQTE.setAttribute('value', listProducts.qte)

    inputQTE.addEventListener('change', (e) => {
    listProducts.qte = e.target.value  ;
    document.querySelector('#totalPrices').value = totalPrices();
    });

    let delete_item = document.createElement('i');
    delete_item.classList.add(["fa-solid"]);
    delete_item.classList.add(['fa-xmark']);
    delete_item.style.color = "red "
    
    /*productroot.appendChild(delete_item);*/

    delete_item.addEventListener("click", function() {
    theRooot.removeChild(productroot)
    })

    productroot.appendChild(productTitle);
    productroot.appendChild(productIMG);
    productroot.appendChild(productPrice);
    productroot.appendChild(heart);
    productroot.appendChild(inputQTE);
    theRooot.appendChild(productroot);
    productroot.appendChild(delete_item);
})

}

buildDOM();

let total = document.createElement('input')
total.setAttribute('readonly', 'readonly')
total.setAttribute('id', 'totalPrices')
total.setAttribute('placeholder', 'Total price')
theRooot.appendChild(total)

function totalPrices() {

  return listProducts.reduce((s, p,) => s + (p.price * p.qte), 0)
}


