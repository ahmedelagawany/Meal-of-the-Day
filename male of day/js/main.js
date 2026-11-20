let recipes = [
  {
    name: "Spaghetti Carbonara",
    cuisine: "Easy Italian",
    veg: false,
    img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=900&q=80",
    rating: 4.8,
    reviews: 234,
    prep: 15,
    cook: 20,
    servings: 4,
    kcal: 520,
    protein: "22g",
    carbs: "58g",
    fat: "20g",
    fiber: "3g",
    sodium: "680mg",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale",
      "4 egg yolks",
      "100g grated Parmesan",
      "Black pepper",
      "Salt",
    ],
    steps: [
      "Boil pasta in salted water until al dente",
      "Crisp the pancetta in a pan",
      "Whisk egg yolks with Parmesan and pepper",
      "Toss everything with hot pasta off the heat",
    ],
    tip: "Use room-temperature eggs for a smoother sauce consistency.",
  },
  {
    name: "Herb Roasted Chicken",
    cuisine: "Mediterranean",
    veg: false,
    img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=900&q=80",
    rating: 4.6,
    reviews: 180,
    prep: 20,
    cook: 35,
    servings: 4,
    kcal: 410,
    protein: "38g",
    carbs: "6g",
    fat: "22g",
    fiber: "1g",
    sodium: "520mg",
    ingredients: [
      "4 chicken breasts",
      "Olive oil",
      "Garlic",
      "Rosemary and thyme",
      "Lemon",
    ],
    steps: [
      "Marinate chicken with oil, garlic and herbs for 1 hour",
      "Grill on medium heat 15 minutes per side",
      "Squeeze lemon juice before serving",
    ],
    tip: "Let the chicken rest 5 minutes after cooking so it stays juicy.",
  },
  {
    name: "Vegetable Lentil Soup",
    cuisine: "Vegetarian",
    veg: true,
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&q=80",
    rating: 4.7,
    reviews: 150,
    prep: 10,
    cook: 30,
    servings: 6,
    kcal: 220,
    protein: "12g",
    carbs: "34g",
    fat: "4g",
    fiber: "9g",
    sodium: "430mg",
    ingredients: [
      "2 cups yellow lentils",
      "Carrots",
      "Onion and garlic",
      "Cumin",
      "Vegetable stock",
    ],
    steps: [
      "Sauté onion and garlic",
      "Add lentils, carrots and stock",
      "Simmer 25 minutes then blend until smooth",
    ],
    tip: "Add a squeeze of lemon juice at the end for a brighter flavor.",
  },
  {
    name: "Roasted Veggie Quinoa Salad",
    cuisine: "Healthy Vegetarian",
    veg: true,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
    rating: 4.5,
    reviews: 98,
    prep: 15,
    cook: 20,
    servings: 3,
    kcal: 340,
    protein: "11g",
    carbs: "45g",
    fat: "12g",
    fiber: "7g",
    sodium: "310mg",
    ingredients: [
      "1 cup quinoa",
      "Zucchini and bell peppers",
      "Olive oil",
      "Balsamic vinegar",
      "Feta cheese",
    ],
    steps: [
      "Cook quinoa until fluffy",
      "Roast vegetables in the oven for 15 minutes",
      "Toss everything with dressing and feta",
    ],
    tip: "Rinse the quinoa thoroughly before cooking to remove bitterness.",
  },
  {
    name: "Homemade Beef Burger",
    cuisine: "American",
    veg: false,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
    rating: 4.9,
    reviews: 310,
    prep: 15,
    cook: 15,
    servings: 4,
    kcal: 610,
    protein: "30g",
    carbs: "38g",
    fat: "36g",
    fiber: "2g",
    sodium: "780mg",
    ingredients: [
      "600g ground beef",
      "Burger buns",
      "Cheddar cheese",
      "Lettuce and tomato",
      "Special sauce",
    ],
    steps: [
      "Shape beef into patties and season with salt and pepper",
      "Grill patties 4 minutes per side",
      "Assemble burgers with all toppings",
    ],
    tip: "Don't press down on the patties while grilling or you'll lose the juices.",
  },
];
const btn=document.getElementById("sendBtn")
let oldNumber;
let leftside=document.getElementById("left")
const listStp=document.getElementById("listStep")
let listIngerde=document.getElementById("listIngerde")
const listNutri=document.getElementById("listNutrition")
const tipe=document.getElementById("tabTips")

function meal(){
let num=Math.trunc(Math.random()* recipes.length)


while(num===oldNumber){
    num=Math.trunc(Math.random()* recipes.length)
}
oldNumber=num;
let cardMale=recipes[num]
displayMale(cardMale);
displayIngredients(cardMale);
displaySteps(cardMale);
displayNutrition(cardMale);
displayTips(cardMale);
}

btn.addEventListener("click",()=>{
meal()
})
 
function displayMale(cardMale){
   
    let cartona=`  <div class="">
               
                    <img class="recipe-img w-100" alt="recipe photo" src="${cardMale.img}">
                    <div class="p-4">
                        <span
                            class="cuisine-badge d-inline-block small fw-bold px-3 py-1 rounded-pill mb-2">${cardMale.cuisine}</span>

                        <div class="d-flex justify-content-between align-items-start flex-wrap gap-3">
                            <h2 class="fs-2 fw-bold mb-0">${cardMale.name}</h2>

                            <div>
                                <input type="checkbox" id="saveToggle" class="save-input d-none">
                                <label for="saveToggle"
                                    class="save-btn px-3 py-2 small d-inline-flex align-items-center gap-1">
                                    🔖 <span class="off">Save</span><span class="on">Saved</span>
                                </label>
                            </div>
                        </div>
                        <div class="d-flex gap-4 flex-wrap small text-muted-app my-3">
                            <div class="text-accent2" style="letter-spacing: .1em;">★★★★★ ${cardMale.rating}</div>
                            <div>(${cardMale.reviews} reviews)</div>
                            <div>⏱ Prep: <b class="text-light">${cardMale.prep}min</b></div>
                            <div>🔥 Cook: <b class="text-light">${cardMale.cook}min</b></div>
                            <div>👥 Serves <b class="text-light">${cardMale.servings}</b></div>
                        </div>
                    
                    </div>`
                     leftside.innerHTML=cartona

}

function displayIngredients(cardMale){
let ingredCartona=``
  for(let i=0; i <cardMale.ingredients.length;i++){
    ingredCartona +=`
     <li>${cardMale.ingredients[i]}</li>`
   
  }
      listIngerde.innerHTML=ingredCartona
}
function displaySteps(cardMale){
let stepscartona=``
for(let i=0;i<cardMale.steps.length;i++){
  stepscartona +=`<li>${i+1}- ${cardMale.steps[i]}</li>`

}
listStp.innerHTML=stepscartona
}
function displayNutrition(cardMale){
 let cartonaNutri=`
 <div class="col-6 col-sm-4">
                                    <div class="nutri-box p-3 text-center">
                                        <div class="fs-5 fw-bold text-accent2">${cardMale.kcal}</div>
                                        <div class="small text-muted-app">Calories</div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="nutri-box p-3 text-center">
                                        <div class="fs-5 fw-bold text-accent2">${cardMale.protein}</div>
                                        <div class="small text-muted-app">Protein</div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="nutri-box p-3 text-center">
                                        <div class="fs-5 fw-bold text-accent2">${cardMale.carbs}</div>
                                        <div class="small text-muted-app">Carbs</div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="nutri-box p-3 text-center">
                                        <div class="fs-5 fw-bold text-accent2">${cardMale.fat}</div>
                                        <div class="small text-muted-app">Fat</div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="nutri-box p-3 text-center">
                                        <div class="fs-5 fw-bold text-accent2">${cardMale.fiber}</div>
                                        <div class="small text-muted-app">Fiber</div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="nutri-box p-3 text-center">
                                        <div class="fs-5 fw-bold text-accent2">${cardMale.sodium}</div>
                                        <div class="small text-muted-app">Sodium</div>
                                    </div>
                                </div>`
listNutri.innerHTML=cartonaNutri

}
function displayTips(cardMale){
  let cartonTips=`
  <div class="tip-box p-3">${cardMale.tip}</div>`
tipe.innerHTML=cartonTips
}

meal();