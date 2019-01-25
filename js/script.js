//Input Check with Check All - <input type="checkbox" onchange="inputCheck(this,'.listCheck','.checkAll')">
function inputCheck(thisCheck, thisClass, selectorCheckAll) {
  var i, n = 0,
    inputClass = document.querySelectorAll(thisClass),
    checkAll = document.querySelector(selectorCheckAll);
  for (i = 0; i < inputClass.length; i++) {
    if (inputClass[i].checked == true) {
      n = n + 1; //count input checked number
    }
  }
  if (thisCheck.checked == false) {
    checkAll.checked = false;
    checkAll.classList.remove("checked");
    thisCheck.offsetParent.classList.remove("checked"); //the nearest ancestor that has a position other than static
    //parent el</li> remove class "checked" when input unchecked
  } else if (thisCheck.checked == true && n == inputClass.length) {
    checkAll.checked = true;
    checkAll.classList.add("checked");
  } else {
    thisCheck.offsetParent.classList.add("checked");
    //parent el</li> add class "checked" when input checked
  }
}

//Checkbox toggle check all
function toggleCheckAll(thisClick, inputClass) {
  //thisClick means the "owner" and CANNOT use "this" that means the Global object "Window"
  thisClick.classList.toggle("checked");
  var i, el = document.querySelectorAll(inputClass);
  //--set all input checked & unchecked--
  if (thisClick.classList.contains("checked")) {
    //if 'select all' checked
    for (i = 0; i < el.length; i++) {
      el[i].checked = true;
      el[i].offsetParent.classList.add("checked");
      //parent el</li> add class "checked" when input checked
    }
  } else {
    //if 'select all' unchecked
    for (i = 0; i < el.length; i++) {
      el[i].checked = false;
      el[i].offsetParent.classList.remove("checked");
      //parent el</li> remove class "checked" when input unchecked
    }
  }
}

//Remove all checked
function removeAll(parent) {
  var Parent = document.querySelector(parent);
  var Children = Parent.querySelectorAll('.checked'); //not working on "var Children = Parent.children;"
  for (i = 0; i < Children.length; i++) {
    Parent.removeChild(Children[i]);
  }
}

//Toggle Input Type (Password Visibility) with onclick="togglePassword('>input')"
function togglePassword(cs) {
  //cs means CSS selectors
  var i, el = document.querySelectorAll(cs);
  for (i = 0; i < el.length; i++) {
    if (el[i].type === "password") {
      el[i].type = "text";
    } else {
      el[i].type = "password";
    }
  }
}

//Input Value Reset empty
function inputReset(cs) {
  var i, el = document.querySelectorAll(cs);
  for (i = 0; i < el.length; i++) {
    el[i].value = "";
  }
}

//Clone
function addCloneBlock(cloneBlock) {
  var cln = document.querySelector(cloneBlock).firstElementChild.cloneNode(true);
  cln.classList.remove("uk-hidden");
  document.querySelector(cloneBlock).appendChild(cln);
}

//--------------- end js ----------------------------------------------------------//

//Gototop fadeIn & fadeOut on scrollTop / scroll
$("[uk-totop]").hide();
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
    $("[uk-totop]").fadeIn();
  } else {
    $("[uk-totop]").fadeOut();
  }
});

$(window).on("load", function() {
  //Get current year
  $(".year").text(new Date().getFullYear());

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty, .ifonlychild:only-child:last").remove();

  //font resize
  if ($(".btnFontSizeS").is(".active")) {
    $("html").removeClass("fontSizeM fontSizeL");
  }
  if ($(".btnFontSizeM").is(".active")) {
    $("html").removeClass("fontSizeL").addClass("fontSizeM");
  }
  if ($(".btnFontSizeL").is(".active")) {
    $("html").removeClass("fontSizeM").addClass("fontSizeL");
  }
  $(".btnFontSize").click(function() {
    $(".btnFontSize").removeClass("active");
    $(this).addClass("active");
  });
  $(".btnFontSizeL>:only-child").click(function() {
    // $('.font_resize').removeClass('font_.btnFontSizeM').addClass('font_large');
    $("html").removeClass("fontSizeM").addClass("fontSizeL");
  });
  $(".btnFontSizeM>:only-child").click(function() {
    // $('.font_resize').removeClass('font_large').addClass('font_.btnFontSizeM');
    $("html").removeClass("fontSizeL").addClass("fontSizeM");
  });
  $(".btnFontSizeS>:only-child").click(function() {
    // $('.font_resize').removeClass('font_.btnFontSizeM font_large');
    $("html").removeClass("fontSizeM fontSizeL");
  });

  //(02-empirical2) Search input & two levels of select - change parent select option to display & enable child select option
  $("#select_dep").change(function() {
    //parent select
    $(".select_div").prop("disabled", "disabled").prop("hidden", "hidden"); //all child select hidden
    if ($(this).children(":first-child").is(":selected")) {
      //if 1st option selected
      $(".select_div:first").prop("disabled", "disabled").prop("hidden", false); //default first child select show & disabled
      $("#search_input").val(""); //empty input text
    } else {
      $('.select_div[data-div="' + $(this).val() + '"]').prop("disabled", false).prop("hidden", false); //child select show & enabled
      $("#search_input").val($(this).val()); //option text selected placeed into input
    }
  });
  $(".select_div").change(function() {
    //child select
    if ($(this).children(":first-child").is(":selected")) {
      //if 1st option selected
      if ($("#select_dep").children(":first-child").is(":selected")) {
        //and if 1st option of parent select selected
        $("#search_input").val(""); //empty input text
      } else {
        $("#search_input").val($("#select_dep").val()); //option text of parent select selected placeed into input
      }
    } else {
      $("#search_input").val($(this).val()); //not 1st option text of child select selected placeed into input
    }
  });

  //(02-empirical3, 03-knowledge2) for Add clone - button #add cannot place in <form> or not working
  $(".clone:first").before($(".clone:first").clone().addClass("uk-hidden"));
  $(".addClone").click(function() {
    var clone = $(this).parent().parent(".cloneGroup").children(".cloneBlock").children(".clone");
    var counter = clone.not(".uk-hidden").length;
    if (counter < 4) {
      clone.last().after($(".clone.uk-hidden").clone().removeClass("uk-hidden"));
    }
  });

});

$(window).on("resize load", function() {
  //Match height
  var h_middle = $(".heightJS").height() - $(".heightJS>div:nth-child(2)").height() - $(".heightJS>div:nth-child(4)").height();
  $(".heightJS").css("padding-bottom", $(".heightJS>div:nth-child(4)").height());
  $(".heightJS>div:nth-child(3)").css("height", h_middle);
});

//(02-empirical2) add class .fav 
function toggleFav(thisBtn, cls) {
  el = $(thisBtn).parent().parent();
  $(el).toggleClass(cls);
  // location.reload();
}
//(02-empirical6) search PICO 
function clickShow(el, cls) {
  $(el).removeClass(cls);
}
