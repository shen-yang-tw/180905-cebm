//Checkbox toggle check all
var click = 0;

function toggleCheck(cs) {
  var i, el = document.querySelectorAll(cs);
  click = click + 1; //click times
  //--set all input checked & unchecked--
  if (click % 2 == 0) {
    //if 'select all' unchecked
    for (i = 0; i < el.length; i++) {
      el[i].checked = false;
    }
  } else {
    //if 'select all' checked
    for (i = 0; i < el.length; i++) {
      el[i].checked = true;
    }
  }
}

//Toggle Input Type (Password Visibility) with onclick="togglePassword('>input')"
function togglePassword(cs) { //cs means CSS selectors
  var el = document.querySelector(cs);
  if (el.type === "password") {
    el.type = "text";
  } else {
    el.type = "password";
  }
}

//Input Reset
function inputReset(cs) {
  var i, el = document.querySelectorAll(cs);
  for (i = 0; i < el.length; i++) {
    el[i].value = "";
  }
}



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
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty")
    .parent(":empty")
    .remove();
  //Remove if empty
  $(
    "p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty"
  ).remove();

  //font resize
  if ($(".btnFontSizeS").is(".active")) {
    $("html").removeClass("fontSizeM fontSizeL");
  }
  if ($(".btnFontSizeM").is(".active")) {
    $("html")
      .removeClass("fontSizeL")
      .addClass("fontSizeM");
  }
  if ($(".btnFontSizeL").is(".active")) {
    $("html")
      .removeClass("fontSizeM")
      .addClass("fontSizeL");
  }
  $(".btnFontSize").click(function() {
    $(".btnFontSize").removeClass("active");
    $(this).addClass("active");
  });
  $(".btnFontSizeL>:only-child").click(function() {
    // $('.font_resize').removeClass('font_.btnFontSizeM').addClass('font_large');
    $("html")
      .removeClass("fontSizeM")
      .addClass("fontSizeL");
  });
  $(".btnFontSizeM>:only-child").click(function() {
    // $('.font_resize').removeClass('font_large').addClass('font_.btnFontSizeM');
    $("html")
      .removeClass("fontSizeL")
      .addClass("fontSizeM");
  });
  $(".btnFontSizeS>:only-child").click(function() {
    // $('.font_resize').removeClass('font_.btnFontSizeM font_large');
    $("html").removeClass("fontSizeM fontSizeL");
  });

  //Search input & two levels of select - change parent select option to display & enable child select option
  $("#select_dep").change(function() {
    //parent select
    $(".select_div")
      .prop("disabled", "disabled")
      .prop("hidden", "hidden"); //all child select hidden
    if (
      $(this)
      .children(":first-child")
      .is(":selected")
    ) {
      //if 1st option selected
      $(".select_div:first")
        .prop("disabled", "disabled")
        .prop("hidden", false); //default first child select show & disabled
      $("#search_input").val(""); //empty input text
    } else {
      $('.select_div[data-div="' + $(this).val() + '"]')
        .prop("disabled", false)
        .prop("hidden", false); //child select show & enabled
      $("#search_input").val($(this).val()); //option text selected placeed into input
    }
  });
  $(".select_div").change(function() {
    //child select
    if (
      $(this)
      .children(":first-child")
      .is(":selected")
    ) {
      //if 1st option selected
      if (
        $("#select_dep")
        .children(":first-child")
        .is(":selected")
      ) {
        //and if 1st option of parent select selected
        $("#search_input").val(""); //empty input text
      } else {
        $("#search_input").val($("#select_dep").val()); //option text of parent select selected placeed into input
      }
    } else {
      $("#search_input").val($(this).val()); //not 1st option text of child select selected placeed into input
    }
  });

  //dynamically checked & check all checkbox
  // $(".checkAll").click(function() {
  //   $(".listCheck").prop("checked", this.checked); //toggle check
  // });

  //for Add File - button #add cannot place in <form> or not working
  $(".file").before($(".file").clone().addClass('uk-hidden'));
  $("#addFile").click(function() {
    var counter = $(".fileBlock>div").length;
    var newFile = $(".file:first").clone().removeClass('uk-hidden');
    if (counter < 5) {
      $(".file:last").after(newFile);
    }
  });

});

$(window).on("resize load", function() {
  //Match height
  var h_middle =
    $(".heightJS").height() -
    $(".heightJS>div:nth-child(2)").height() -
    $(".heightJS>div:nth-child(4)").height();
  $(".heightJS").css(
    "padding-bottom",
    $(".heightJS>div:nth-child(4)").height()
  );
  $(".heightJS>div:nth-child(3)").css("height", h_middle);

  //keep aspect ratio of image's height to width
  $(".ratio3_4 li img, .thisRatio3_4").each(function() {
    $(this).css({
      height: ($(this).width() * 4) / 3
      //3/4 portrait
    });
  });
  $(".ratio9_16 li img, .thisRatio9_16").each(function() {
    $(this).css({
      height: ($(this).width() * 16) / 9
      //9/16 portrait
    });
  });
  $(".ratio4_3 li img, .thisRatio4_3").each(function() {
    $(this).css({
      height: ($(this).width() * 3) / 4
      //4/3 landscape
    });
  });
  $(".ratio16_9 li img, .thisRatio16_9").each(function() {
    $(this).css({
      height: ($(this).width() * 9) / 16
      //16/9 landscape
    });
  });
  $(".ratio1_1 li img, .thisRatio1_1").each(function() {
    $(this).css({
      height: $(this).width()
    });
  });
});