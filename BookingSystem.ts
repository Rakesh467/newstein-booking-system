class Customer
{
    //Properties:
    FullName:string
    MobileNumber:number
    movieBooked:string
    theatBooked:string
    noOfTickets:number
    scrName:string
    show:string

    //Methods:
    constructor(FullName:string,MobileNuber:number)
    {
        this.FullName=FullName
        this.MobileNumber=MobileNuber
    }

    bookTicket(movie:Movie,theatre:Theatre,scr:number,shw:number,noOfTickets:number)
    {
        if(theatre.allScreen[scr].Shows[shw].currentMovie.movieName==movie.movieName)
        {
            if(theatre.allScreen[scr].Shows[shw].noOfSeats < noOfTickets)
            {
                console.log("Sorry Tickets are not available")
            }
            else
            {
                this.createTicket(movie,theatre,scr,shw,noOfTickets)

                console.log()
            }
        }
        else
        {
            console.log("Please enter the valid details to book a ticket")
        }

    }
    
    private createTicket(movie:Movie,theatre:Theatre,scr:number,shw:number,noOfTickets:number)
    {
        this.movieBooked=movie.movieName
        this.theatBooked=theatre.theatName
        this.noOfTickets=noOfTickets
        this.scrName=theatre.allScreen[scr].scrName
        this.show=theatre.allScreen[scr].Shows[shw].timing
        theatre.allScreen[scr].Shows[shw].noOfSeats -= noOfTickets
        console.log("Hurray!! Ticket got booked")
    }
    /*
    viewMovieList()
    {

    }

    viewTheatreList()
    {

    }

    checkSeatAvailability()
    {

    }
    */
    viewTicket()
    {
        console.log(`Movie Name: ${this.movieBooked}`)
        console.log(`TheatreName: ${this.theatBooked}`)
        console.log(`Screen: ${this.scrName}`)
        console.log(`Show: ${this.show}`)
        console.log(`No of Tickets: ${this.noOfTickets}`)
    }
}

class Movie
{
    constructor(movieName:string,movieLang:number,movieDurMins:number)
    {
        this.movieName=movieName
        this.movieLang=movieLanguage[movieLang]
        this.movieDurMins=movieDurMins
    }
    
    movieName:string
    movieLang:string
    movieDurMins:number

    theatresRunning()
    {

    }
}

class Show
{
    constructor(timing:string)
    {
        this.timing=timing
        this.noOfSeats=50
    }
    timing:string
    currentMovie:Movie
    noOfSeats:number

    addShow()
    {

    }

}
class Screens
{
    //Properties:
    scrName:string
    Shows:Show[]
    
    //Methods:
    constructor(scrName:string)
    {
        this.scrName=scrName
        
        this.Shows = []
        for(var i=0;i<4;i++)
        {
            this.Shows[i] = new Show(`Show ${i+1}`)
        }
    }

}

class Theatre
{
    //properties:
    theatName:string
    Location:string
    allScreen:Screens[]
    noOfScreen:number

    //Methods:
    constructor(theatName:string,Location:string,noOfScreen:number)
    {
        this.theatName=theatName
        this.Location=Location
        this.noOfScreen= noOfScreen
        this.allScreen=[]
        for(var i=0;i<this.noOfScreen;i++)
        {
            this.allScreen[i] = new Screens(`Screen${i+1}`)
        }
    }


    viewTheatreMovies()
    {
        console.log(this.theatName)
        console.log(this.Location)
        console.log(this.noOfScreen)
        for(var i=0;i<this.noOfScreen;i++)
        {
            console.log(this.allScreen[i].scrName)
            for(let j=0;j<4;j++)
            {
                console.log(this.allScreen[i].Shows[j].timing)
                console.log(this.allScreen[i].Shows[j].currentMovie)
            }
            
        }

    }

    setMovie(movName:Movie,scrName:string)
    {
        for(let i=0;i<this.noOfScreen;i++)
        {
            if(this.allScreen[i].scrName==scrName)
            {
                for(let j=0;j<4;j++)
                {
                    this.allScreen[i].Shows[j].currentMovie=movName
                }
            }
        }
    }
    /*setMovie(movName:string,theatName:string,scrName:string,showName:string)
    {

    }*/
    viewAvailability(scr:number,shw:number)
    {
        console.log(`${this.allScreen[scr].Shows[shw].noOfSeats} seats are available`)
    }
}

enum movieLanguage {
    English,
    Tamil,
    Hindi
}

let customer1 = new Customer("Rakesh",9998881112)
let movie1 = new Movie("End Game",1,180)
let theatre1 = new Theatre("PVR","Bangalore",2)

theatre1.setMovie(movie1,"Screen2")
theatre1.viewTheatreMovies()
customer1.bookTicket(movie1,theatre1,1,3,2)
customer1.viewTicket()
theatre1.viewAvailability(1,3)