
//Find Element's Closest Parent by tag name - the tag name must be uppercase in html: onclick="findParent(this, 'LI')"
function findParent(thisElement, parentTagName) {
  while ((thisElement = thisElement.parentElement) && (thisElement.tagName != parentTagName));
  //Searching loop only stop while parent is founded
  return thisElement; //if searching no one will return null
}

//Find Element's Closest Parent by Class
function findParentClass(thisElement, cls) {
  while ((thisElement = thisElement.parentElement) && !thisElement.classList.contains(cls));
  //Searching loop only stop while parent class name is "cls"
  return thisElement; //if searching no one will return null
}

//Get child id
function findChildID(el) {
  return document.querySelector(el).id;
}

//Get child class name
function findChildClass(parentEL, sl) {
  console.log(parentEL);
  return parentEL.querySelector(sl).className;
}

//Get child by Selector
function findChild(parentEL, sl) {
  return parentEL.querySelector(sl);
}

//Go to given anchor
function gotoHash(elID) {
  location.hash = elID;
}

//Show Selector
function showSelector(sl) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  var el = document.querySelector(sl)
  if (el.hasAttribute("hidden")) {
    el.removeAttribute("hidden");
  }
  el.classList.remove("uk-hidden");
}

//Show this element
function showElement(thisElement) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  if (thisElement.hasAttribute("hidden")) {
    thisElement.removeAttribute("hidden");
  }
  thisElement.classList.remove("uk-hidden");
}

//Toggle Show this element
function toggleShowElement(thisElement) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  if (thisElement.hasAttribute("hidden")) {
    thisElement.removeAttribute("hidden");
  } else {
    thisElement.setAttribute("hidden", true);
  }
}

//Go to given anchor
function gotoShow(elID) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  var el = document.querySelector(elID)
  if (el.hasAttribute("hidden")) {
    el.removeAttribute("hidden");
  }
  location.hash = elID;
  // gotoHash(elID);
}

//Input Check with Check All - <input type="checkbox" onchange="inputCheck(this,'.listCheck','.checkAll')">
function inputCheck(thisCheck, thisClass, selectorCheckAll) {
  var i,
    n = 0,
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
  var i,
    el = document.querySelectorAll(inputClass);
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
  var Children = Parent.querySelectorAll(".checked"); //not working on "var Children = Parent.children;"
  for (i = 0; i < Children.length; i++) {
    Parent.removeChild(Children[i]);
  }
}

//Toggle Input Type (Password Visibility) with onclick="togglePassword('>input')"
function togglePassword(cs) {
  //cs means CSS selectors
  var i,
    el = document.querySelectorAll(cs);
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
  var i,
    el = document.querySelectorAll(cs);
  for (i = 0; i < el.length; i++) {
    el[i].value = "";
  }
}

//Clone first child
function addCloneBlock(cloneBlock) {
  var cln = document.querySelector(cloneBlock).firstElementChild.cloneNode(true);
  cln.classList.remove("uk-hidden");
  cln.removeAttribute("hidden");
  document.querySelector(cloneBlock).appendChild(cln);
}

//select onchange Event - <select onchange="showOption()">
function showOption(thisSelect, index, cls) {
  var showDiv = document.querySelector(cls);
  if (thisSelect.selectedIndex == index) {
    showDiv.style.setProperty("display", "block", "important");
  } else {
    showDiv.style.setProperty("display", "none", "important");
  }
}


//--------------Mesh-------------------------------------//
//Trim space text
function trimTxt(inputtx) {
  return inputtx.replace(/^\s+|\s+$/gm, "");
}

//Clone someone child with any parent
function cloneBlock(cloneDiv, el) {
  var clnParent = document.querySelector(cloneDiv);
  var cln = el.cloneNode(true);
  cln.classList.remove("uk-hidden");
  cln.removeAttribute("hidden");
  clnParent.appendChild(cln);
  // document.querySelector(cloneDiv).appendChild(cln);
}

//Remove child by class
function remove(cls) {
  var el = document.getElementsByClassName(cls);
  while (el[0]) {
    el[0].parentNode.removeChild(el[0]);
  }
}

//Form Reset
function resetForm(sl) {
  document.querySelector(sl).reset();
}

//----Mesh----
//Click del button to fire unchecking
function unCheck(thisClick, modalSelector) {
  var modalDiv = document.querySelector(modalSelector);
  var meshCheck = modalDiv.querySelectorAll(".uk-modal-body>form>label>input[type=checkbox]:checked");
  var thisMeshTxt = thisClick.parentElement.querySelector("span").innerHTML;
  var i;
  //uncheck if the value is the same as this mesh tag
  for (i = 0; i < meshCheck.length; i++) {
    if (meshCheck[i].parentElement.textContent == thisMeshTxt) {
      meshCheck[i].checked = false;
      UIkit.alert(thisClick.parentElement).close();
    }
  }
}

//Add new tag
function inputMesh(modalSelector, inputKey, tag, classKey, classMesh) {
  var modalDiv = document.querySelector(modalSelector);
  var modalKeyword = modalDiv.querySelector(".uk-modal-body>form>p");
  var keywordTxt = document.querySelector(inputKey).value;
  var keys = trimTxt(keywordTxt).split(",");
  var tagBlock = document.querySelector(tag);
  var key = tagBlock.querySelector("small:nth-child(1)");
  var mesh = tagBlock.querySelector("small:nth-child(2)");
  var i;

  //Trim input keywords and set into modal
  if (trimTxt(keywordTxt).length > 0) {
    modalKeyword.innerHTML = trimTxt(keywordTxt);
  } else {
    modalKeyword.innerHTML = "(未輸入任何關鍵字)";
  }

  //Click button to add new tag
  modalDiv.querySelector("#btnSave").addEventListener("click", newTag);

  //Add new tag
  function newTag() {
    var meshChecked = modalDiv.querySelectorAll(".uk-modal-body>form>label>input[type=checkbox]:checked");

    remove(classKey);

    //Add tag KEY if keywords not empty
    if (trimTxt(keywordTxt).length > 0) {
      for (i = 0; i < keys.length; i++) {
        cloneBlock(tag, key);
        tagBlock.querySelector("small:last-child").classList.add(classKey);
        // tagBlock.querySelector("small:last-child>span").innerHTML = trimTxt(keywordTxt);
        tagBlock.querySelector("small:last-child>span").innerHTML = keys[i];
      }
    }

    remove(classMesh);

    //Add tag MESH if checked
    if (meshChecked.length > 0) {
      for (i = 0; i < meshChecked.length; i++) {
        cloneBlock(tag, mesh);
        tagBlock.querySelector("small:last-child").classList.add(classMesh);
        tagBlock.querySelector("small:last-child>span").innerHTML = meshChecked[i].parentElement.textContent;
      }
    }
    UIkit.modal(modalSelector).hide();
  }
}
//--------------End Mesh-------------------------------------//

//The onkeypress event is not fired for all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers. To detect only whether the user has pressed a key, use the onkeydown event instead, because it works for all keys.
//Check if key enter - <input type="text" onkeydown="inputEnter(event)">
function keyEnter(event) {
  // var el = document.querySelector(sl);
  // if (!event) event = window.event;
  var keyCode = event.which || event.keyCode; //event.keyCode is used for IE8 and earlier
  // var keyCode = event.which; //another option
  if (keyCode == '13') { //code 13 means press enter key
    return true;
  }
}

//Input and Clone - 03-knowledge2-5.html
function enterClone(cloneBlock, setName, thisInput, event) {
  var inputVal = thisInput.value;
  // var nameBlock = document.querySelector(cloneBlock).lastChild;
  if (keyEnter(event) && trimTxt(inputVal).length > 0) {
    addCloneBlock(cloneBlock);
    document.querySelector(cloneBlock).lastChild.querySelector(setName).innerHTML = inputVal;
  }
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
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty")
    .parent(":empty")
    .remove();
  //Remove if empty
  $(
    "p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty, .ifonlychild:only-child:last"
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

  //(02-empirical2) Search input & two levels of select - change parent select option to display & enable child select option
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

  //(02-empirical3, 03-knowledge2) for Add clone - button #add cannot place in <form> or not working
  $(".clone:first").before(
    $(".clone:first")
    .clone()
    .addClass("uk-hidden")
  );
  $(".addClone").click(function() {
    var clone = $(this)
      .parent()
      .parent(".cloneGroup")
      .children(".cloneBlock")
      .children(".clone");
    var counter = clone.not(".uk-hidden").length;
    if (counter < 4) {
      clone.last().after(
        $(".clone.uk-hidden")
        .clone()
        .removeClass("uk-hidden")
      );
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
});

//(02-empirical2) add class .fav
function toggleFav(thisBtn, cls) {
  el = $(thisBtn)
    .parent()
    .parent();
  $(el).toggleClass(cls);
  // location.reload();
}
//(02-empirical6) search PICO
function clickShow(el, cls) {
  $(el).removeClass(cls);
}