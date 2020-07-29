class Home{
    constructor(){


    }

    display(){

        var title = createElement("h1");
        title.position(displayWidth/2 - 220, displayHeight/2 + 100);
        title.html("BOOST YOUR CONCENTRATION");
      
        var appImg = createElement("img");
        appImg.position(displayWidth/2 - 300, displayHeight/2 - 200);
        appImg.elt.src = "logo.png";
      
        var button = createButton("Next");
        button.position(displayWidth - 300, displayHeight - 200); 
      
        button.mousePressed(function(){
          title.hide();
          appImg.hide();
          button.hide();

          appInfo = new AppInfo();
          appInfo.display();

        });

    }



}