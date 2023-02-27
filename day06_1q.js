class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getpg(){
      if(this.rating ===undefined){
      return "PG";
      }
      return this.rating;
}
}

let thunivu = new movie("superhit","ajith");
console.log(thunivu.getpg());

let star = new movie("Casino Royale","Eon Productions","PG­13");
console.log(star.title,star.rating);

