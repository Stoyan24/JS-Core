function bill(str) {
    let items = str.filter((a,b) => b % 2 == 0);
    let prices = str.filter((a,b) => b % 2 != 0).map(Number).reduce((a,b) => a+b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${prices}`);
}
console.log(bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']));