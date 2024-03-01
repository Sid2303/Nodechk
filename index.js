const http = require("http");

const port = 3000;

http.createServer((req, res) => {
  // Set the status code and content type for the response
  res.writeHead(200, { "Content-Type": "text/html" });

  // Write the response content
  res.write("<h2>Hey server started! did it?</h2>");

  // End the response
  res.end();
})
.listen(port, () => {
  console.log(`Node.js server live on ${port}`);
});