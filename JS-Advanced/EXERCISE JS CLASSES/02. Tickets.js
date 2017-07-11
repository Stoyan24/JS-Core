function solve(arr,sortCriteria) {

    class Ticket {
        constructor(destination,price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let sortArr = [];
    for (let line of arr) {
        let inputAsStr = line.split("|");
        let destination = inputAsStr[0];
        let price = Number (inputAsStr[1]);
        let status = inputAsStr[2];

        let ticket = new Ticket(destination,price,status);
        sortArr.push(ticket);
    }

    switch (sortCriteria){
        case "destination":
            sortArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sortArr.sort((a, b) => a.price - b.price);
            break;
        case "status":
            sortArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return sortArr;
}