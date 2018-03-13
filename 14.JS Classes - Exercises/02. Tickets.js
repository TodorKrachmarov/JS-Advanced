function solve(ticketArr, sortCriteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (let i = 0; i < ticketArr.length; i++) {
        let [a, b, c] = ticketArr[i].split('|');
        tickets.push(new Ticket(a, Number(b), c));
    }
    switch (sortCriteria){
        case 'destination':
           return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        case 'price':
            return tickets.sort((a, b) => a.price - b.price);
        case 'status':
           return tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
}