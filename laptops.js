let allLaptops = []
const container = document.querySelector('.container')

async function displayLaptops(){
    
    
    try {
        console.log("ggg");
        
        let response = await fetch('laptops.json')
        let Laptops = await response.json()
        allLaptops = Laptops.products
        let div = ``
        allLaptops.forEach(laptop => {
            
            div += `
                <div class = "card">
                    <img src="${laptop.image_url}" alt="">
                    <h4>${laptop.name}</h4>
                    <p>${laptop.price}</p>
                </div>
            `
        });
        console.log("fre", allLaptops);
        
        container.innerHTML = div
    } catch (error) {
        console.log(error);
    }
}
displayLaptops()
