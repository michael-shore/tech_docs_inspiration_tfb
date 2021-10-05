function changeElementVisibilityByClassName(className){
    const el = document.getElementsByClassName(className)[0];
    const display = getComputedStyle(el).display;
    if(display == "none"){
        el.style.display = "block";
    }else{
        el.style.display = "none";
    }
}

function checkEmptyView(){
    const salesOverviewElement = document.getElementsByClassName('sales-overview')[0];
    const userGuideElement = document.getElementsByClassName('user-guide')[0];
    const techDeepDiveElement = document.getElementsByClassName('tech-guide')[0];
    const emptyViewElement = document.getElementsByClassName('empty-view')[0];

    const salesOverviewDisplay = getComputedStyle(salesOverviewElement).display;
    const userGuideDisplay = getComputedStyle(userGuideElement).display;
    const techDeepDiveDisplay = getComputedStyle(techDeepDiveElement).display;

    if(salesOverviewDisplay == "none" &&
        userGuideDisplay == "none" &&
        techDeepDiveDisplay == "none"){
        emptyViewElement.style.display = "block";
    }else{
        emptyViewElement.style.display = "none";
    }
}

