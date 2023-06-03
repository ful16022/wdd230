const myImages = document.querySelectorAll("img[data-src]")

const lazyLoad = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"))
    image.onload = () => {
        image.removeAttribute("data-src")
    };
};


const lazyoptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoad(item.target)
                observer.unobserve(item.target)
            }
        })
    }, lazyoptions)
    myImages.forEach((img) => {
        obsrvr.observe(img)
    })
}
else {
    myImages.forEach((img) => {
        lazyLoad(img)
    })
}