import React, { useState } from 'react'

const View = () => {
const [data,changeData] =useState(
       [
            {"RecipeTitle": "PANCAKE", "ImgLink": "https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/whole-grain-pancake-stack.jpg"},
    {"RecipeTitle": "BIRIYANI", "ImgLink": "https://www.12taste.com/in/wp-content/uploads/2020/04/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food-scaled.jpg" },
    {"RecipeTitle": "PIZZA", "ImgLink": "https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"},
    {"RecipeTitle": "SANDWICH", "ImgLink": "https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg"},
    {"RecipeTitle": "TIKKA", "ImgLink": "https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg"},
    {"RecipeTitle": "SPHAGETTI", "ImgLink": "https://simply-delicious-food.com/wp-content/uploads/2021/07/Bucatini-Amatriciana-1-550x550.jpg"},
    {"RecipeTitle": "TACOS", "ImgLink": "https://s23209.pcdn.co/wp-content/uploads/2023/01/220628_DD_Crispy-Baked-Chx-Tacos_363-1-360x540.jpg"},
    {"RecipeTitle": "SALAD", "ImgLink": "https://www.realsimple.com/thmb/2inPM5OriFFRq7HuQHmI-pyaTBE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1023-fea-SQUASH-Miso-Grilled-Squash-Cabbage-Salad-thanksgiving-vegetarian-recipes-60511d1f9bb44058ac63a28f3b289936.jpg"},
    {"RecipeTitle": "BURGER", "ImgLink": "https://qph.cf2.quoracdn.net/main-qimg-981ceae310b1cf68e367f110ae991ff0-lq"},
    {"RecipeTitle": "CHANA MASALA", "ImgLink": "https://i.insider.com/5d9369e2f4fc247f7d769f2a?width=1136&format=jpeg"},
    {"RecipeTitle": "BROASTED CHICKEN", "ImgLink": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/352faeb5-95f6-41e6-af4c-24ac02b46511-fried-chicken.jpg"},
    {"RecipeTitle": "PASTA", "ImgLink": "https://www.aheadofthyme.com/wp-content/uploads/2023/02/creamy-tomato-pasta.jpg"},
    {"RecipeTitle": "PORROTA", "ImgLink": "https://farm9.staticflickr.com/8586/16023214373_90552b64f6_o.jpg"},
    {"RecipeTitle": "FALOODA", "ImgLink": "https://sinfullyspicy.com/wp-content/uploads/2022/03/Rose-Falooda-Featured-Image.jpg"},
    {"RecipeTitle": "MOJITO", "ImgLink": "https://femina.wwmindia.com/thumb/content/2023/jul/mojito-011689318651.jpg?width=1200&height=900"},
       ]
    )
return (
    <div>

        <div class="p-3 mb-2 bg-body-secondary"><b>VIEW ALL</b></div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        { data.map  (
                            (value, index) => {
                                return<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img height="400px" src={value.ImgLink}></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.RecipeTitle}</h5>
                                        <a href="#" class="btn btn-success"><b>READ</b></a>
                                   
                                    </div>
                                </div>
                            </div>
                            }
                        )}

                    </div>
                </div>

            </div>






        </div>





    </div>
)
}

export default View