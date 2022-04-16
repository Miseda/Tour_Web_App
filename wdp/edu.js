document
    .querySelector(".search button").addEventListener("click", function() {
        var country = document.getElementById("country").value

        var url = "http://universities.hipolabs.com/search?country=" + country

        fetch(url)
            .then((response) => response.json())
            .then((data) => {

                console.log(data)


                var length = data.length
                var index = length - 1
                var uni1 = document.getElementById("uni1")
                var uni2 = document.getElementById("uni2")
                var uni3 = document.getElementById("uni3")
                var uni4 = document.getElementById("uni4")
                var uni5 = document.getElementById("uni5")
                var uni6 = document.getElementById("uni6")
                var uni7 = document.getElementById("uni7")
                var uni8 = document.getElementById("uni8")
                var uni9 = document.getElementById("uni9")
                var uni10 = document.getElementById("uni10")
                var city = document.getElementById("city")


                city.innerHTML = "TOP 10 UNIVERSITIES " + country.toUpperCase();
                uni1.innerHTML = "1. ";
                uni2.innerHTML = "2. ";
                uni3.innerHTML = "3. ";
                uni4.innerHTML = "4. ";
                uni5.innerHTML = "5. ";
                uni6.innerHTML = "6. ";
                uni7.innerHTML = "7. ";
                uni8.innerHTML = "8. ";
                uni9.innerHTML = "9. ";
                uni10.innerHTML = "10. ";
               
              

               uni1.append(data[1].name)
               uni2.append(data[2].name)
               uni3.append(data[3].name)
               uni4.append(data[4].name)
               uni5.append(data[5].name)
               uni6.append(data[6].name)
               uni7.append(data[7].name)
               uni8.append(data[8].name)
               uni9.append(data[9].name)
               uni10.append(data[10].name)
               
               

            })
    });

let slideIndex = 0;
showSlides();
            
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}

