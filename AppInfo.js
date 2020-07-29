class AppInfo{
    constructor(){



    }

    display(){

        var title = createElement("h1");
        title.position(displayWidth-950, displayHeight-700);
        title.html("INTRODUCTION TO THE APP");

        var info = createElement("h3");
        info.position(displayWidth/2 - 100, displayHeight/2 -100);
        info.html("Welcome to “Boost Your Brain” app.This app is developed by  J AJITESH of class IX, student at WHITEHAT JR.With the help of this app, you can check your concentration through a series of games. You will get some tips. By practicing the tips you can improve your concentration. You will also get to know the symptoms of lack of concentration.");

        var button = createButton("Next");
        button.position(displayWidth - 300, displayHeight - 200); 
        
        button.mousePressed(function(){
            title.hide();
            button.hide();
            info.hide();

            game = new Game();
            game.design();
            gameEnter = true;
            
        });

    }

}