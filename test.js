var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golf(par, stroke) {
    if(stroke == 1) {
        return names[0]
    } else if(stroke <= par-2) {
        return names[1]
    } else if(stroke <= par-1) {
        return names[3]
    } else if(stroke <= par+1) {
        return names[4]
    } else if(stroke <= par+2) {
        return names[5]
    } else {
        return names[6]
    }
    return "Change Me";
}

console.log(golf(5, 4));

