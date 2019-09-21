let restaurant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        let newGuests = this.guestCount + partySize
        console.log(newGuests)
        this.guestCount += newGuests
    },
    removeParty: function(partySize){
        let exitingGuests = this.guestCount - partySize
        console.log(exitingGuests)
        this.guestCount -= exitingGuests
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))