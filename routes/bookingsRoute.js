const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const stripe = require("stripe")(
  "sk_test_51Kifb0SITAKim93Y62Lckvkvj0oxHUSfHcrRPNEcEkGEunmNRvZgC6X3EepslCL8DipmCfYUauIsvZV58TonvPSM006Mr3uOvu"
);
const { v4: uuidv4 } = require("uuid");
const res = require("express/lib/response");
const req = require("express/lib/request");
const { route } = require("express/lib/application");

router.post("/bookcar", async (req, res) => {

req.body.transactionId = '1234'
try{
  const newbooking = new Booking(req.body);
    await newbooking.save();
    const car = await Car.findOne({ _id: req.body.car });
    car.bookedTimeSlots.push(req.body.bookedTimeSlots);

    await car.save();
    res.send("Your Booking is Successfull");
}
catch (error) {
  console.log(error);
  return res.status(400).json(error);
}
});

router.get("/getallbookings", async(req,res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings)
  }
  catch {
    return res.status(400).json(error);
  }
})


module.exports = router;
