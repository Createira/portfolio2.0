const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
   //change the theme of the page
   document.body.classList.toggle('dark');
});

/* Menu nav toggle */
$("#nav_toggle").on("click", function(event) {
   event.preventDefault();

   $(this).toggleClass("active");
   $("#nav").toggleClass("active");
});

/* Collapse */
$("[data-collapse]").on("click", function(event) {
   event.preventDefault();

   var $this = $(this),
      blockId = $this.data('collapse');

   $this.toggleClass("active");
});