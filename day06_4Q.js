class uber{
    constructor(customer_name,pickup_location,drop_location,km,mode_of_payment)
    {
        this.customer_name = customer_name;
        this.pickup_location = pickup_location;
        this.drop_location = drop_location;
        this.km = km;
        this.mode_of_payment = mode_of_payment;
    }
    getprice()
    {
        let price = this.km*20;
        return price;
    }
}
    let driver = new uber("santhakumar","avadi","adyar",25,"Phonepe");
    console.log(driver.getprice());