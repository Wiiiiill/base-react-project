import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Message() {
  const [messages] = useState([
    { id: 1, title: "消息1", content: "锄禾日当午" },
    { id: 2, title: "消息2", content: "汗滴禾下土" },
    { id: 3, title: "消息3", content: "谁知盘中餐" },
    { id: 4, title: "消息4", content: "粒粒皆辛苦" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            // 路由链接
            <li key={m.id}>
              <Link
                state={{ id: m.id, title: m.title, content: m.content }}
                to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
            </li>
          );
        })}
      </ul>
      <br />
      {/* 路由链接 */}
      <Outlet></Outlet>
    </div>
  );
}
