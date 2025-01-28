require("dotenv").config();

const accountid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountid, authToken);

const sendSMS = async (body) => {
  let msgOptions = {
    from: process.env.TWILIO_FROM_NUMBER,
    to: process.env.TO_NUMBER,
    body,
  };
  try {
    const message = await client.messages.create(msgOptions);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

sendSMS("Hello from Node.js App");
