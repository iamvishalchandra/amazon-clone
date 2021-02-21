require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);

// API

// App - Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  try {
    const total = request.query.total;

    console.log("Payment Received for Amt - Rs. ", total / 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err);
  }
});

// Listen Commands
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-by-vishal-chandra/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
