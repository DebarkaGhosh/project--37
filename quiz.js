class Quiz{
    constructor(){}


    display(){

        this.title.html("My Quiz Game")
        this.title.position(350,0);

        this.question.html("Question:- Which is the most Poisonous gas in the world?")
        this.question.position(150,80); 
        this.option1.html("1: oxygen");
        this.option1.position(150,100);
        this.option2.html("2: CarbonDioxide")
        this.option2.position(150,120)
        this.option3.html("3: Sarin")
        this.option3.position(150,140)
        this.option4.html("4: nitrogen")
        this.option4.position(150,160)

        this.input.position(150,230);
     }

async start(){
    if(gameState===0){
        contestant = new Contestant ();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        
        if(contestantCountRef.Ref.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
        question = new question();
        question.display();
    }
}

   

    
}