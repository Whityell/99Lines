let friends = ["Michelle", "Pat", "Bob", "Tim", "Mya"];
let word = "lines";



for (i = 0; i < friends.length; i++) {
    let count = 99;
    for( j = 99 ; j > 0; j--){
    
    
    console.log(count + " " + word + " of code in the file.");
    console.log(count + " " + word + " of code,");
    console.log(friends[i] + " " + " strikes one out, clears it all out, ");
    count = count - 1;
    if (count > 0){
        if (count == 1){
            let word = "line"
        }
            console.log(count + " " + "of code in the file.");
    } 
    else {
        if (count< 1){
            let word = "lines"
        }
        console.log("No more " + word + " of code in the file")
    }
}











}





