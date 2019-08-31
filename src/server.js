const express = require("express");
const app = express();

//將 express 放進 http 中開啟 Server 的 3000 port ，正確開啟後會在 console 中印出訊息
const server = require("http")
  .Server(app)
  .listen(3000, () => {
    console.log("open server!");
  });

//將啟動的 Server 送給 socket.io 處理
const io = require("socket.io")(server);

// 加入線上人數計數
let onlineCount = 0;

//監聽 Server 連線後的所有事件，並捕捉事件 socket 執行
io.on("connection", socket => {
  console.log("success connect!");

  // 有連線發生時增加人數
  onlineCount++;
  // 發送人數給網頁
  io.emit("online", onlineCount);

  socket.on("getMessage", () => {
    socket.emit("greet", onlineCount);
  });

  socket.on("send", msg => {
    // 如果 msg 內容鍵值小於 2 等於是訊息傳送不完全
    // 因此我們直接 return ，終止函式執行。
    // 廣播訊息到聊天室
    console.log("send", msg);
    io.emit("msg", msg);
  });

  socket.on("disconnect", () => {
    // 有人離線了，扣人
    onlineCount = onlineCount < 0 ? 0 : (onlineCount -= 1);
    io.emit("online", onlineCount);
  });
});

// 注意，這邊的 server 原本是 app
server.listen(3000, () => {
  console.log("Server Started. http://localhost:3000");
});
