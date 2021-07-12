class Form {
    constructor() {
        this.input1 = createInput("WO number");
        this.input2 = createInput("DEFECT");
        this.button1 = createButton('FAULT TRACKER');

        this.button2 = createButton('FAULT REPORTING');
        this.button3 = createButton('ENTER');
        this.button4 = createButton('ENTER');
        this.button5 = createButton('Work Under Progress');
        this.button6 = createButton('SEND');
        this.greeting1 = createElement('h2');
        this.greeting2 = createElement('h2');
        this.greeting3 = createElement('h2');
        this.greeting4 = createElement('h2');
        this.greeting5 = createElement('h2');
        this.greeting6 = createElement('h2');
        this.greeting7 = createElement('h2');
        this.greeting8 = createElement('h2');
        this.greeting9 = createElement('h2');
        this.greeting10 = createElement('h2');
        this.title1 = createElement('h3');
        this.title2 = createElement('h2');
        this.reset = createButton('Reset');
    }
    hide() {
        this.greeting1.hide();
        this.button1.hide();
        this.input1.hide();
        this.title1.hide();
        this.title2.hide();
        this.input2.hide();
        this.button3.hide();
    }
    display() {

        this.title1.html("FAULT MANAGEMENT");
        this.title1.position(350, 95);
        this.title1.style('font-size', '70px');
        this.title1.style('color', 'black');

        this.title2.html("RKH QITARAT");
        this.title2.position(500, 50);
        this.title2.style('font-size', '60px');
        this.title2.style('color', 'black');

        this.button1.position(460, 500);
        this.button1.style('width', '200px');
        this.button1.style('height', '40px');
        this.button1.style('background', 'yellow');

        this.button2.position(860, 500);
        this.button2.style('width', '200px');
        this.button2.style('height', '40px');
        this.button2.style('background', 'yellow');
        sel.hide();
        this.button1.mousePressed(() => {

            textAlign(CENTER)
            sel = createSelect();
            sel.position(580, 450);
            sel.option("Marina");
            sel.option("Maina Prominade")
            sel.option("Al wadi")
            

            this.button2.hide();
            player.name = this.input1.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.button1.hide();


            this.input1.position(550, 400);
            this.input1.style('width', '200px');
            this.input1.style('height', '20px');
            this.input1.style('background', 'lavender');

            this.button1.position(560, 500);
            this.button1.style('width', '200px');
            this.button1.style('height', '40px');
            this.button1.style('background', 'yellow');
            this.reset.position(900, 660);
            this.reset.style('width', '100px');
            this.reset.style('height', '30px');
            this.reset.style('background', 'yellow');

            this.button3.position(650, 500);
            this.button3.style('width', '70px');
            this.button3.style('height', '40px');
            this.button3.style('background', 'yellow');



        });

        this.button3.mousePressed(() => {
            this.input1.hide();
            this.title2.hide();
            this.button1.hide();
            this.title1.hide();
            this.button3.hide();
            this.button2.hide();


            sel.hide();
            this.greeting1.html("WO Number : " + 1234)
            this.greeting1.position(600, 250);
            this.greeting1.style('color', 'black');
            this.greeting1.style('font-size', '30px');


            this.greeting2.html("Station Master")
            this.greeting2.position(400, 350);
            this.greeting2.style('color', 'black');
            this.greeting2.style('font-size', '30px');


            this.greeting8.html(": VAISAKH")
            this.greeting8.position(650, 360);
            this.greeting8.style('color', 'black');
            this.greeting8.style('font-size', '20px');

            this.greeting3.html("Fault controller")
            this.greeting3.position(400, 450);
            this.greeting3.style('color', 'black');
            this.greeting3.style('font-size', '30px');

            this.greeting9.html(": ABHISHEK")
            this.greeting9.position(650, 460);
            this.greeting9.style('color', 'black');
            this.greeting9.style('font-size', '20px');

            this.greeting4.html("WO Status")
            this.greeting4.position(400, 550);
            this.greeting4.style('color', 'black');
            this.greeting4.style('font-size', '30px');

            this.input2.position(680, 580);
            this.input2.style('width', '70px');
            this.input2.style('height', '30px');
            this.input2.style('background', 'red')

            this.button4.position(850, 580);
            this.button4.style('width', '70px');
            this.button4.style('height', '40px');
            this.button4.style('background', 'yellow');

        });

        this.button4.mousePressed(() => {
            sel.hide();
            this.input1.hide();
            this.title2.hide();
            this.button1.hide();
            this.title1.hide();
            this.input2.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.greeting1.hide();
            this.greeting4.hide();
            this.greeting2.hide();
            this.greeting3.hide();
            this.greeting8.hide();
            this.greeting9.hide();

            this.greeting5.html("RKH Maintenance")
            this.greeting5.position(450, 250);
            this.greeting5.style('color', 'black');
            this.greeting5.style('font-size', '30px');

            this.greeting6.html("QR")
            this.greeting6.position(450, 350);
            this.greeting6.style('color', 'black');
            this.greeting6.style('font-size', '30px');

            this.greeting7.html("Contractor")
            this.greeting7.position(450, 450);
            this.greeting7.style('color', 'black');
            this.greeting7.style('font-size', '30px');

            this.button5.position(800, 470);
            this.button5.style('width', '130px');
            this.button5.style('height', '40px');
            this.button5.style('background', 'yellow');

        });

        this.button2.mousePressed(() => {
           
            this.input1.hide();
            this.title2.hide();
            this.button1.hide();
            sel.hide();
            this.title1.hide();
            this.input2.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
   
            this.button6.position(800, 600);
            this.button6.style('width', '200px');
            this.button6.style('height', '40px');
            this.button6.style('background', 'yellow');

            this.greeting10.html("Fault Reporting Format")
            this.greeting10.position(450, 300);
            this.greeting10.style('color', 'black');
            this.greeting10.style('font-size', '30px');


        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();


        });

    }
}