console.log("Jenkins DarkMode loaded")
goDark();

function invertImage()
{
    console.log("Inverting images");
    var onlineImages = document.getElementById('jenkins-head-icon');
    
    
    var l1 = onlineImages.length;
    
    var l3 = profileImage.length;
    try{
        for(i=0;i<l1;i++)
        {
            onlineImages[i].style.filter = "invert(100%)";
        }
    }
    catch(err)
    {
        console.log(err);
    }
}
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) 
{
    // console.log(mutations.length);
    if(mutations.length > 3)
    {
        invertImage();
    }
});

observer.observe(document, {
  subtree: true,
  attributes: true
});

function goDark() {

    var css = 'html {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' +
        '-o-filter: invert(100%);' +
        '-ms-filter: invert(100%); }',

        head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    console.log("bravo six, going Dark!!");
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    }
    else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);

    // invert the images from negative to normal after 3 secs
    setTimeout(invertImage, 3000);
    console.log("awake");;
}


