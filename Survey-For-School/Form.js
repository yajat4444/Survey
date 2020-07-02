class Form {
    constructor(){
        
        this.enter = createElement("h3","Enter Your Name");
        
        
        
        
        this.que1 = createElement('h4'," ~> Does your school have medical facilities ? ");
        this.opt1 = createButton("- Yes -");
        this.opt2 = createButton("- No -");
            
        
        this.que2 = createElement('h4'," ~> Does your school have playing area?");
        this.opt3 = createButton("- Yes -");
        this.opt4 = createButton("- No -");

        
        this.que3 = createElement('h4'," ~> Does your school organise competitions ?");
        this.opt5 = createButton("- Yes -");
        this.opt6 = createButton("- No -");

        
        this.que4 = createElement('h4'," ~> Does your school have proper toilets ?");
        this.opt7 = createButton("- Yes -");
        this.opt8 = createButton("- No -");
        
       
        this.que5 = createElement('h4'," ~> Does your school have 11 and 12 classes ?");
        this.opt9 = createButton("- Yes -");
        this.opt10 = createButton("- No -");

        
        this.email = createInput();
        this.age = createInput();
        this.class = createInput();
        this.school = createInput();
        this.input = createInput();
        
        this.button = createButton(" SUBMIT  ");
        this.reset = createButton(" RESET ");

        
        this.greeting = createElement("h3");        
    }

    hide(){
        
        this.que1.hide();
        this.opt1.hide();
        this.opt2.hide();
        this.opt3.hide();

        this.que2.hide();
        this.opt4.hide();
        this.opt5.hide();
        this.opt6.hide();

        this.que3.hide();
        this.opt7.hide();
        this.opt8.hide();
        this.opt9.hide();

        this.que4.hide();
        this.opt10.hide();
        

        this.que5.hide();
        

        
        this.greeting.hide();
        
        this.input.hide();
        
        this.enter.hide();
        
        this.button.hide();
        this.reset.hide();
}

    display(){
       
        var title = createElement("h1");
        title.html("Survey of school");
        title.position(570,-20);
        
        
   
        this.que1.position(30,150);
        this.opt1.position(50,200);
        this.opt2.position(110,200);
       
        
        this.que2.position(30,224);
        this.opt3.position(50,274);
        this.opt4.position(110,274);
       

        this.que3.position(30,300);
        this.opt5.position(50,350);
        this.opt6.position(110,350);
        
        

        this.que4.position(30,370);
        this.opt7.position(50,424);
        this.opt8.position(110,424);
       
        

        this.que5.position(30,450);
        this.opt9.position(50,500);
        this.opt10.position(110,500);

        this.enter.position(displayWidth/2,100);
        this.input.position(displayWidth/2,100);
   
       
        this.button.position(1200,550);
        this.reset.position(1200,500);
       
        this.button.mousePressed(()=>{
            
            this.que1.hide();
            this.opt1.hide();
            this.opt2.hide();
            this.opt3.hide();

            this.que2.hide();
            this.opt4.hide();
            this.opt5.hide();
            this.opt6.hide();

            this.que3.hide();
            this.opt7.hide();
            this.opt8.hide();
            this.opt9.hide();

            this.que4.hide();
            this.opt10.hide();
            

            this.que5.hide();
           

            this.enter.hide();
            
            this.input.hide();
            
            this.button.hide();
            this.reset.hide();
            
            
            player.options = this.opt1.value();
            
            player.name = this.input.value();
            
            playerCount+=1;
            player.index = playerCount;
            
            
            player.update();
            player.updateCount(playerCount);
            
           this.greeting.html("Thank You so much " + player.name + " For giving this survey");
           this.greeting.position(530,160);
            
        });
    
        
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });
    }
}
