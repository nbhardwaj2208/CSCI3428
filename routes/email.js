// todo: implement (currently just test data)
const router = require("express").Router();

const testEmail = {
  _id: "AIJKSBDakjsdbnJKBKNL",
  __v: 1,
  date: Date.now(),
  subject: "Test Subject",
  body: "Hello,\nThis is the body of the email.\nThanks",
  from: {
    name: "Justin",
    email: "justin@gray.ca",
  },
  to: [
    {
      name: "Nicholas",
      email: "nick@morash.com",
    },
  ],
  cc: [],
  bcc: [],
};

router.get("/", (req, res) => {
  res.send(testEmail);
});

module.exports = router;
