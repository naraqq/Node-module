let http = require('http');

http.createServer(function (request, repsonse) {
    repsonse.writeHead(200);
    repsonse.write(`
<table style="border-collapse: collapse;
width: 100%; border: 1px solid black;">
<tr>
    <th>Nane</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Hatnaa</td>
    <td>20</td>
    <td>male</td>
    <td>student</td>
  </tr>
  <tr>
    <td>Eenee</td>
    <td>25</td>
    <td>female</td>
    <td>student</td>
  </tr>
</table>
`);
    repsonse.end();
}).listen(3000);
console.log("Server running at http://localhost:3000");