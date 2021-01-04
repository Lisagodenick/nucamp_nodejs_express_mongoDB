const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")

  .all((req, res, next) => {
    resStatusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.partner} to you`);
  })

  .post((req, res) => {
    res.end(
      `Will add the partners: ${req.body.name} with description: ${req.body.description} `
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })

  .delete((req, res) => {
    res.end("Deleting all partners");
  });

partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    resStatusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /partners/${req.params.partnerId} with description: ${req.body.description} `
    );
  })

  .put((req, res) => {
    res.write(`Updating the partners: ${req.params.partnerId}\n`);
    res.end(
      `Will update the campsite: ${req.body.name} with description: ${req.body.name}`
    );
  })

  .delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`);
  });

module.exports = partnerRouter;
