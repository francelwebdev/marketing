document.addEventListener('turbolinks:load', () => {
   function smoothScroller(targets, anchor) {
    var t = document.querySelectorAll(targets);
    var a = document.getElementById(anchor);

    if (t != null) {
       for (var i = 0, link = t.length; i < link; i++) {
        t[i].addEventListener('click', function(e) {
          a.scrollIntoView({ behavior: "smooth", block: "start" })
          e.preventDefault();
        });
      }
    }
  }
  smoothScroller("a[href='#getnotified']", "getnotified");
});
