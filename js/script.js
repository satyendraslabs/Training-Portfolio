document.addEventListener('DOMContentLoaded', function() {


    function myapp() {
        const buttons = document.querySelectorAll(".button");
        const cards = document.querySelectorAll(".cards");
      
        function filter(category, items) {
          items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === "all";
            if (isItemFiltered && !isShowAll) {
              item.classList.add("hide");
            } else {
              item.classList.remove("hide");
            }
          });
        }


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentCategory = button.getAttribute('data-filter');
            console.log(currentCategory);
            buttons.forEach(btn => {
              btn.classList.remove('button_active');
          });
          button.classList.add('button_active');
            filter(currentCategory, cards);
        });
    });

}

myapp();



});