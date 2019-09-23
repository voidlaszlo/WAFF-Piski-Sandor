/* VARIABLES */
const date = new Date()
const today = date.getDay()
const hours = date.getHours()


/* LOGIC */
document.write(`Today is ${dayOfTheWeek(today)}, and it is ${hours} o'clock.
 ${ (today == 5 || today == 6) ? ( hours > 17 ? 'You can drink' : "You can't drink") : "You can't drink" }` )

/* SOLUTION WITH AN IF STATEMENT... ITS THE SAME AS ABOVE

 if(today == 5 || today == 6) {
     if( hours > 17) {
         return 'You can drink'
     } else {
         return "You can't drink"
     }
 } else {
     return "You can't drink"
 }
 
*/

/* FUNCTIONS */
function dayOfTheWeek(day) {
    
    switch(day) {

        case 1:
            return 'Monday'
            break;
        
        case 2:
            return 'Tuesday'
            break;
    
        case 3:
            return 'Wednesday'
            break;
        
        case 4:
            return 'Thursday'
            break;
        
        case 5:
            return 'Friday'
            break;
    
        case 6:
            return 'Saturday'
            break;
    
        case 7:
            return 'Sunday'
            break;
            
    }
}
