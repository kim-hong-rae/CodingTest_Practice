function solution(a, b) {
    let date = new Date(2016, a - 1, b); 
    let dayOfWeek = date.getDay(); 
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; 

    return days[dayOfWeek]; 
}