import { NavLink } from "react-router-dom";
export default function Menus() {
    return (
        <div style={{
        }}>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 路由链接 */}
                        <NavLink className="list-group-item" to="/login"> login</NavLink>
                        <NavLink className="list-group-item" to="/about"> About</NavLink>
                        <NavLink className="list-group-item" to="/home">
                            Home
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}