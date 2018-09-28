function fDzialania(x, y){
    var addition = x + y;
    var subtraction = x - y;
    var multiplication = x * y;
    
    var actions = [addition, subtraction, multiplication];
    
    var results = ["Wynik dodawania wynosi " + addition, 
                  "Wynik odejmowania wynosi " + subtraction,
                  "Wynik mnożenia wynosi: " + multiplication];
    
    if(actions[0] < 0){
        results[0] = "Wynik jest ujemny";
    }
    if(actions[1] < 0){
        results[1] = "Wynik jest ujemny";
    }
    if(actions[2] < 0){
        results[2] = "Wynik jest ujemny";
    }
    
    var result = results[0] + '\n' + results[1] + '\n' + results[2];
    
    return result;
}

console.log(fDzialania(3,5));