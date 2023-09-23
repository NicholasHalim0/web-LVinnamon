$(document).ready(function(){
    let currIdx = 0
    showSlide()
    
    function showSlide(){
        let sliders = $('.slider-img')
        let length = sliders.length
        
        for(let i = 0; i < length; i++){
            $(sliders[i]).hide()
            if(i === currIdx){
                $(sliders[currIdx]).fadeIn().show();
            }
        }
        currIdx++;
        if(currIdx === length) currIdx = 0;
        setTimeout(showSlide, 3000); 

    }
    
    $('.product-categories .card').click(function(){
        window.location.href = 'products.html'
    })
});