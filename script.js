// Zadání
// Vytvořte funkci salary se třemi parametry

// wage - hrubá mzda v korunách za hodinu
// hours - kolik hodin denně průměrně pracujete
// days - kolik dní v měsící průměrně pracujete
// Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

// Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

// Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.

//--------------------------------------------


const salary = (wage, hours, days) => {
        return wage * hours * days;
}

const grossSalary = salary(wage, hours, days);

const taxed = (grossSalary, tax) => {
    return grossSalary * ((100 - tax)/100);
}

const wage = Number(prompt("Zadej hrubou mzdu v korunách za hodinu:"));  
const hours = Number(prompt("Zadej průměrný počet odpracovaných hodin za den:"));  
const days = Number(prompt("Zadej průměrný počet odpracovaných dní za měsíc:")); 


const tax = Number(prompt("Zadej procento zdanění:")); 

console.log(`Hrubá mzda je: ${salary(wage, hours, days)}`);
console.log(`Čistá mzda je: ${taxed(grossSalary,tax)}`);