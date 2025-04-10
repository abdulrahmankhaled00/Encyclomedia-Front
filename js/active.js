/*********************************************************************************

    Template Name: Boighor Books Library eCommerce Store 
    Version: 1.0

**********************************************************************************/

/*================================================
            [ INDEX ]
===================================================

    Scroll Up Activation
    Mobile Menu
    Wow Active
    Sticky Header
    Banner Slider Active
    Testimonial Slick Carousel
    Testimonial Slick Carousel As Nav
    Product Activation
    Brand Activation
    Blog Activation
    Module Activation
    Cartbox Toggler
    Search Toggler
    Cart Toggler
    Setting Toggler
    Slider Activation
    Slider Text Activation
    Setting Option
    Fancybox
    Video
    Gallery Mesonry Activation
    CheckOut Page
    Price Slider Active
    Dropdown


=================================================================================
            [ END INDEX ]
================================================================================*/

(function ($) {
  "use strict";

  /*============ Scroll Up Activation ============*/
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "slide",
  });

  /*=========== Mobile Menu ===========*/
  $("nav.mobilemenu__nav").meanmenu({
    meanMenuClose: "X",
    meanMenuCloseSize: "18px",
    meanScreenWidth: "991",
    meanExpandableChildren: true,
    meanMenuContainer: ".mobile-menu",
    onePage: true,
  });

  /*=========== Wow Active ===========*/
  new WOW().init();

  /*=========== Sticky Header ===========*/
  function stickyHeader() {
    $(window).on("scroll", function () {
      var sticky_menu = $(".sticky__header");
      var pos = sticky_menu.position();
      if (sticky_menu.length) {
        var windowpos = sticky_menu.top;
        $(window).on("scroll", function () {
          var windowpos = $(window).scrollTop();
          if (windowpos > pos.top + 250) {
            sticky_menu.addClass("is-sticky");
          } else {
            sticky_menu.removeClass("is-sticky");
          }
        });
      }
    });
  }
  stickyHeader();

  /*===========  Testimonial Slick Carousel =============*/
  $(".testext_active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    prevArrow:
      '<button type="button" class="wen-slick-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="wen-slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
    fade: true,
    dots: false,
    asNavFor: ".thumb_active",
  });

  /*============= Testimonial Slick Carousel As Nav =============*/
  $(".thumb_active").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testext_active",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 769,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  /*=============  Brand Activation  ==============*/
  $(".brand__activation").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 10000,
    items: 6,
    navText: [
      '<i class="zmdi zmdi-chevron-left"></i>',
      '<i class="zmdi zmdi-chevron-right"></i>',
    ],
    dots: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 2,
      },
      1920: {
        items: 6,
      },
      768: {
        items: 4,
      },
      576: {
        items: 3,
      },
      420: {
        items: 3,
      },
    },
  });

  /*=============  Produst Activation  ==========*/
  $(".productcategory__slide").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 10000,
    items: 4,
    navText: [
      '<i class="zmdi zmdi-chevron-left"></i>',
      '<i class="zmdi zmdi-chevron-right"></i>',
    ],
    dots: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 4,
      },
      768: {
        items: 3,
      },
      576: {
        items: 2,
      },
      1920: {
        items: 4,
      },
    },
  });

  /*=============  Produst Activation  ==========*/
  $(".productcategory__slide--2").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: false,
    autoplayTimeout: 10000,
    items: 3,
    navText: [
      '<i class="zmdi zmdi-chevron-left"></i>',
      '<i class="zmdi zmdi-chevron-right"></i>',
    ],
    dots: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });

  /*=============  Product Activation ============*/
  $(".product__indicator--4").owlCarousel({
    margin: 30,
    nav: true,
    autoplay: false,
    loop: true,
    items: 4,
    navText: [
      '<i class="zmdi zmdi-chevron-left"></i>',
      '<i class="zmdi zmdi-chevron-right"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  /*=============  Product Activation  ==============*/
  var furnitureOwl = $(".furniture--4");
  furnitureOwl.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: false,
    autoplayTimeout: 10000,
    items: 4,
    addClassActive: true,
    dots: false,
    margin: 30,
    lazyLoad: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  //javascript
  $(".customNextBtn").click(function () {
    furnitureOwl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".customPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    furnitureOwl.trigger("prev.owl.carousel", [300]);
  });

  /*============= Cartbox Toggler ==============*/
  function cartboxToggler() {
    var trigger = $(".block__active"),
      container = $(".block_content");
    trigger.on("click", function (e) {
      e.preventDefault();
      container.toggleClass("is-visible");
    });
    $(".close__wrap").on("click", function () {
      container.removeClass("is-visible");
    });
  }
  cartboxToggler();

  /*============= Search Toggler ==============*/
  function searchToggler() {
    var trigger = $(".search__active"),
      container = $(".search_active");
    trigger.on("click", function (e) {
      e.preventDefault();
      container.toggleClass("is-visible");
    });
    $(".close__wrap").on("click", function () {
      container.removeClass("is-visible");
    });
  }
  searchToggler();

  /*============= Cart Toggler ==============*/
  function cartToggler() {
    var trigger = $(".cartbox_active"),
      container = $(".minicart__active");
    trigger.on("click", function (e) {
      e.preventDefault();
      container.toggleClass("is-visible");
    });
    trigger.on("click", function (e) {
      e.preventDefault();
      container.toggleClass("");
    });
    $(".micart__close").on("click", function () {
      container.removeClass("is-visible");
    });
  }
  cartToggler();

  /*============= Setting Toggler ==============*/
  function settingToggler() {
    var settingTrigger = $(".setting__active"),
      settingContainer = $(".setting__block");
    settingTrigger.on("click", function (e) {
      e.preventDefault();
      settingContainer.toggleClass("is-visible");
    });
    settingTrigger.on("click", function (e) {
      e.preventDefault();
      settingContainer.toggleClass("");
    });
  }
  settingToggler();

  /*=============  Slider Activation  ==============*/
  $(".slide__activation").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 10000,
    items: 1,
    navText: [
      '<i class="zmdi zmdi-chevron-left"></i>',
      '<i class="zmdi zmdi-chevron-right"></i>',
    ],
    dots: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });

  /*============= Setting Option ==============*/
  function settingOption() {
    var settingItem = $(".currency-trigger");
    settingItem.on("click", function () {
      $(this).siblings(".switcher-dropdown").toggleClass("is-visible");
    });
  }
  settingOption();

  /*============= Fancybox ==============*/
  $(".fancybox").fancybox({
    prevEffect: "none",
    nextEffect: "none",
    helpers: {
      title: {
        type: "outside",
      },
      thumbs: {
        width: 50,
        height: 50,
      },
    },
  });

  /*========= Video ===========*/
  var video_frame_w = $(".img_static").outerWidth();
  var video_frame_h = $(".img_static").outerHeight();
  $("#cms_play").on("click", function () {
    $(this).hide("fast");
    $(".img_static").fadeOut("fast");
    $(".static_video").append(
      '<iframe class="added_video" width="' +
        video_frame_w +
        'px" height="' +
        video_frame_h +
        'px" src="https://www.youtube.com/embed/0fYMLQjK-MI?rel=0&autoplay=1" frameborder="0"></iframe>'
    );
  });

  /*=============  Gallery Mesonry Activation  ==============*/
  $(".gallery__masonry__activation").imagesLoaded(function () {
    // filter items on button click
    $(".gallery__menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    // change is-checked class on buttons
    $(".gallery__menu button").on("click", function () {
      $(".gallery__menu button").removeClass("is-checked");
      $(this).addClass("is-checked");
      var selector = $(this).attr("data-filter");
      $containerpage.isotope({
        filter: selector,
      });
      return false;
    });
    // init Isotope
    var $grid = $(".masonry__wrap").isotope({
      itemSelector: ".gallery__item",
      percentPosition: true,
      transitionDuration: "0.7s",
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".gallery__item",
      },
    });
  });

  /*====== CheckOut Page ======*/
  function checkoutLogin() {
    var showLogin = $(".showlogin");
    var form = $(".checkout_login");
    showLogin.on("click", function (e) {
      e.preventDefault();
      form.slideToggle();
      form.remove("style");
    });
  }
  checkoutLogin();
  function checkoutCoupon() {
    var showLogin = $(".showcoupon");
    var form = $(".checkout_coupon");
    showLogin.on("click", function (e) {
      e.preventDefault();
      form.slideToggle();
      form.remove("style");
    });
  }
  checkoutCoupon();
  $(".wn__accountbox").on("click", function () {
    $(".account__field").slideToggle().remove("style");
  });
  $(".differt__address").on("click", function () {
    $(".differt__form").slideToggle().remove("style");
  });

  /*====== Price Slider Active ======*/
  $("#slider-range").slider({
    range: true,
    min: 10,
    max: 500,
    values: [110, 400],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );

  /*====== Dropdown ======*/
  $(".dropdown").parent(".drop").css("position", "relative");

  /*====== slick slider ======*/
  $(".center").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },
    ],
  });

  /*===================================
        Snowfall Effect
    ====================================*/
  // document.className  = "darkBg";
  // $(document).snowfall({image :"images/flake.png", minSize: 10, maxSize:32});
  // $('.christmas-snow').snowfall({image :"images/flake.png", minSize: 10, maxSize:32});
  // $('.christmas-snow-2').snowfall({image :"images/flake.png", minSize: 10, maxSize:32, flakeCount: 64});
})(jQuery);

/// custom slik slider
$(".continuous-carousel").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  cssEase: "linear",
  infinite: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//// books

const products = [
  {
    image: "assets/images/books/page/1.jpg",
    title: "How Management Works: The Concepts Visually Explained",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to improve your management skills...",
  },
  {
    image: "assets/images/books/page/2.jpg",
    title: "How to Start Your Own Business: And Make it Work",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to turn your big idea into a thriving business...",
  },
  {
    image: "assets/images/books/page/2.jpg",
    title: "How to Start Your Own Business: And Make it Work",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to turn your big idea into a thriving business...",
  },
  {
    image: "assets/images/books/page/1.jpg",
    title: "How Management Works: The Concepts Visually Explained",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to improve your management skills...",
  },
  {
    image: "assets/images/books/page/2.jpg",
    title: "How to Start Your Own Business: And Make it Work",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to turn your big idea into a thriving business...",
  },
  {
    image: "assets/images/books/page/1.jpg",
    title: "How Management Works: The Concepts Visually Explained",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to improve your management skills...",
  },
  {
    image: "assets/images/books/page/2.jpg",
    title: "How to Start Your Own Business: And Make it Work",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to turn your big idea into a thriving business...",
  },
  {
    image: "assets/images/books/page/1.jpg",
    title: "How Management Works: The Concepts Visually Explained",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to improve your management skills...",
  },
  {
    image: "assets/images/books/page/2.jpg",
    title: "How to Start Your Own Business: And Make it Work",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to turn your big idea into a thriving business...",
  },
  {
    image: "assets/images/books/page/1.jpg",
    title: "How Management Works: The Concepts Visually Explained",
    price: "$35",
    oldPrice: "$220.00",
    link: "porduct-details.html",
    description:
      "Discover everything you need to know to improve your management skills...",
  },
];

const wrapper = document.querySelector(".list__view__wrapper");
const pagination = document.getElementById("pagination-buttons");
const itemsPerPage = 5;
let currentPage = 1;

function renderProducts() {
  wrapper.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const current = products.slice(start, end);

  current.forEach((product, index) => {
    const bgClass = index % 2 === 1 ? "" : "bg--gray"; // apply bg--gray on odd index

    wrapper.innerHTML += `
      <div class="list__view mb--40 py-4 ${bgClass}">
        <div class="thumb">
          <a class="first__img" href="${product.link}">
            <img src="${product.image}" alt="product images">
          </a>
        </div>
        <div class="content d-flex flex-column justify-content-center">
          <h2><a href="${product.link}" class="book-titel">${product.title}</a></h2>
          <ul class="price__box">
            <li>${product.price}</li>
            <li class="old__price">${product.oldPrice}</li>
          </ul>
          <p class="book-disc">${product.description}</p>
          <ul class="cart__action d-flex">
            <li class="cart"><a href="${product.link}">Add to cart</a></li>
          </ul>
        </div>
      </div>
    `;
  });
}

function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(products.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = `pagination-btn ${i === currentPage ? "active" : ""}`;
    btn.textContent = i;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderProducts();
      renderPagination();
    });
    pagination.appendChild(btn);
  }

  // Optional: Add next arrow
  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "pagination-btn";
    nextBtn.textContent = "›";
    nextBtn.addEventListener("click", () => {
      currentPage++;
      renderProducts();
      renderPagination();
    });
    pagination.appendChild(nextBtn);
  }
}

if (wrapper) {
  renderProducts();
  renderPagination();
}

// magazines
const gridProducts = [
  {
    image: "assets/images/magazines/1.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/2.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/3.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/4.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/5.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/2.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/1.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/2.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/1.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
  {
    image: "assets/images/magazines/2.jpg",
    title: "Architecture In Creative Space",
    price: "$35.00",
    oldPrice: "$50.00",
    link: "magazine-details.html",
  },
];

const gridWrapper = document.getElementById("grid-wrapper");
const gridPagination = document.getElementById("grid-pagination-buttons");
const itemsPerPageGrid = 6;
let currentPageGrid = 1;

function renderGridProducts() {
  gridWrapper.innerHTML = "";
  const start = (currentPageGrid - 1) * itemsPerPageGrid;
  const end = start + itemsPerPageGrid;
  const currentGrid = gridProducts.slice(start, end);

  currentGrid.forEach((product, index) => {
    gridWrapper.innerHTML += `
      <div class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="product__thumb">
          <a class="first__img" href="${product.link}">
            <img src="${product.image}" alt="product image">
          </a>
          <div class="hot__box ${index % 2 == 0 ? "" : "color--2"}">
            <span class="hot-label">BEST SELLER</span>
          </div>
        </div>
        <div class="product__content content--center">
          <h4><a href="${product.link}">${product.title}</a></h4>
          <ul class="price d-flex">
            <li>${product.price}</li>
            <li class="old_price">${product.oldPrice}</li>
          </ul>
          <div class="action">
            <div class="actions_inner">
              <ul class="add_to_links">
                <li><a class="cart" href="${
                  product.link
                }"><i class="bi bi-shopping-bag4"></i></a></li>
                <li><a data-bs-toggle="modal" class="quickview modal-view detail-link" href="#productmodal"><i class="bi bi-search"></i></a></li>

              </ul>
            </div>
          </div>
                                                  <div class="product__hover--content">
                                            <ul class="rating d-flex opacity-0">
                                                <li class="on"><i class="fa fa-star-o"></i></li>
                                                <li class="on"><i class="fa fa-star-o"></i></li>
                                                <li class="on"><i class="fa fa-star-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
        </div>
      </div>
    `;
  });
}

function renderGridPagination() {
  gridPagination.innerHTML = "";
  const totalPages = Math.ceil(gridProducts.length / itemsPerPageGrid);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = `pagination-btn ${i === currentPageGrid ? "active" : ""}`;
    btn.textContent = i;
    btn.addEventListener("click", () => {
      currentPageGrid = i;
      renderGridProducts();
      renderGridPagination();
    });
    gridPagination.appendChild(btn);
  }

  // Optional: Add next arrow
  if (currentPageGrid < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "pagination-btn";
    nextBtn.textContent = "›";
    nextBtn.addEventListener("click", () => {
      currentPageGrid++;
      renderGridProducts();
      renderGridPagination();
    });
    gridPagination.appendChild(nextBtn);
  }
}
if (gridWrapper) {
  renderGridProducts();
  renderGridPagination();
}


/// cart 

    // Disable quantity inputs on load
    $('.product-quantity input').prop('disabled', true);

    // Hide delete column header and content on load
    $('.delete-item-header, .delete-item-content').hide();

    // When "Update Cart" is clicked
    $('#update-cart').on('click', function (e) {
        e.preventDefault();

        // Enable quantity inputs
        $('.product-quantity input').prop('disabled', false);

        // Show delete column
        $('.delete-item-header, .delete-item-content').show();
    });

    // Live update subtotal and totals when quantity changes
    $('.product-quantity input').on('input', function () {
        const $row = $(this).closest('tr');
        const quantity = parseInt($(this).val()) || 0;
        const priceText = $row.find('.product-price .amount').text().replace('$', '');
        const price = parseFloat(priceText) || 0;
        const subtotal = quantity * price;

        // Update subtotal
        $row.find('.product-subtotal').text(`$${subtotal.toFixed(2)}`);

        // Recalculate totals
        updateTotals();
    });

    // Remove row when "X" is clicked
    $('.delete-item-content a').on('click', function (e) {
        e.preventDefault();
        $(this).closest('tr').remove();
        updateTotals();
    });

    // Function to recalculate totals
    function updateTotals() {
        let total = 0;
        $('.product-subtotal').each(function () {
            const value = parseFloat($(this).text().replace('$', '')) || 0;
            total += value;
        });

        // Update all total values in the same structure you already have
        $('.cart__total__tk li').eq(0).text(`$${total.toFixed(2)}`);
        $('.cart__total__tk li').eq(1).text(`$${total.toFixed(2)}`);
        $('.cart__total__amount span').eq(1).text(`$${total.toFixed(2)}`);
    }

    // Initial total calc
    updateTotals();