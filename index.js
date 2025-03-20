import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }

  var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)
  
    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })

  $( window ).resize(function() {
    $(".carousel-inner > .item").css("height",$(".carousel-inner > .item > img").height());
  });