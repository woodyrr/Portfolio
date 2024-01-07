let data = [
    {
        "id": 1,
        "name": "Home-Chef",
        "image": "images/recipe-page-eosin.vercel.app_.png",
        "description": "This is recipe website that uses the meal DB API with a nice responsive user interface.",
        "tech1": "Vuejs",
        "tech2": "CSS",
        "tech3": "Tailwindcss",
        "tech4": "Javascript",
        "website": "https://recipe-page-eosin.vercel.app/",
        "github": "https://github.com/woodyrr/recipe-page"
        
    },
    {
        "id": 2,
        "name": "Threeb",
        "image": "images/threeb.vercel.app_ (1).png",
        "description": "Anime/manga website where user can search for their favorite series to add and save their reading/watching status for next time. This site uses an anime api and taught me how to use use vuejs, Locale storage and apis.",
        "tech1": "Vuejs",
        "tech2": "CSS",
        "tech3": "Tailwindcss",
        "tech4": "Javascript",
        "website": "https://threeb.vercel.app/",
        "github": "https://github.com/woodyrr/TWB"
        
    },
    {
        "id": 3,
        "name": "Soleilla",
        "image": "images/woodyrr.github.io_Soleilla_.png",
        "description": "An E-commerse application for buying candle, lotion  and tea products.",
        "tech1": "html",
        "tech2": "CSS",
        "tech3": "Tailwindcss",
        "tech4": "Javascript",
        "website": "https://woodyrr.github.io/Soleilla/",
        "github": "https://github.com/woodyrr/Soleilla/tree/main2"
        
    },
    {
        "id": 4,
        "name": "Random-Quotes",
        "image": "images/woodyrr.github.io_random-quotes_.png",
        "description": "This website was a challenge assigned from devChallenges.io, the site uses an api and made responsive with options to toggle and copy quotes to keyboard.",
        "tech1": "html",
        "tech2": "CSS",
        "tech3": "Tailwindcss",
        "tech4": "Javascript",
        "website": "https://woodyrr.github.io/random-quotes/",
        "github": "https://github.com/woodyrr/random-quotes"
        
    },
    // {
    //     "id": 5,
    //     "name": "Simple-homepage",
    //     "image": "images/woodyrr.github.io_simple-homepage_.png",
    //     "description": "Just a simple responsive home page With a light and dark mode option",
    //     "tech1": "html",
    //     "tech2": "CSS",
    //     "tech3": "Tailwindcss",
    //     "tech4": "Javascript",
    //     "website": "https://woodyrr.github.io/simple-homepage/",
    //     "github": "https://github.com/woodyrr/simple-homepage"
        
    // }
]

const categories = document.querySelector(".projects");
data.forEach(e =>{
    categories.innerHTML += `
            <div class="grid sm:grid-cols-2  gap-3">
                <div class="drinks  rounded-xl 2xl:mx-[15%] ">
                    <img src="${e.image}" alt="" class=" rounded-2xl border border-[rgba(20, 183, 224, 0.8)]"> 
                </div>
                    
                <div class="flex flex-col justify-center items-center">
                    <div class=" flex flex-col duration-700 md:gap-6 gap-2">
                        <div class="flex flex-col ">
                            <h2 id="hey" class="text-white font-bold  lg:text-md 2xl:text-lg text-left">${e.name}</h2>
                            <h3 class="text-gray-300 text-sm font-semibold 2xl:text-lg">${e.description}</h3>
                        </div>
                        
                        <div class="flex gap-1  text-gray-100">
                            <button class="px-2 bg-gray-500 rounded-full">
                                <h2 class="text-sm xl:text-sm">${e.tech1}</h2></a>
                            </button>
                            <button class="px-2 bg-gray-500 rounded-full">
                                <h2 class="text-sm xl:text-sm">${e.tech2}</h2></a>
                            </button>
                            <button class="px-2 bg-gray-500 rounded-full">
                                <h2 class="text-sm xl:text-sm">${e.tech3}</h2></a>
                            </button>
                            <button class="px-2 bg-gray-500 rounded-full">
                                <h2 class="text-sm xl:text-sm">${e.tech4}</h2></a>
                            </button>
                            
                        </div>

                        <div class="flex justify-left gap-3 text-center  ">
                            <a href="${e.website}" target="_blank" class=" p-2 site  rounded-lg"> Website</a>
                            <a href="${e.github}" target="_blank" class="site p-2 rounded-lg"> Github</a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
    
    `
})
// <div class="text-white">${e.description}</div>