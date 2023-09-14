const express = require("express");
const router = express.Router();
require("dotenv").config();
const { OpenAI } = require("openai");

router.get("/", (req, res) => {
  res.send("this is home page 2");
});

router.post("/askQuestion", async (req, res) => {
  try {
    const {question} = req.body;
    const openai = new OpenAI({
      apiKey: "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",
    });
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: question }],
      model: "gpt-3.5-turbo",
    });
    let response = chatCompletion.choices[0].message.content;
    console.log(response);
    res.status(200).json({
        success : true,
        message : chatCompletion,
        response
    })
  } catch (error) {
    res.status(200).json({
        success : false,
        message : error.message
    })
  }
});

module.exports.router = router;
