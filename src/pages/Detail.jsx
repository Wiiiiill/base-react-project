import { useSearchParams, useLocation } from "react-router-dom";
export default function Detail() {

    const { state } = useLocation();
    const [search, setSearch] = useSearchParams();
    const id = search.get("id");
    const title = search.get("title");
    const content = search.get("content");
    return (
        <div>
            <button onClick={() => setSearch("id=1111&&title=test&content=test&time=122333445566")}>更改参数</button>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
            <li>{state ? state.id : null}</li>
            <li>{state ? state.title : null}</li>
            <li>{state ? state.content : null}</li>
        </div>
    );
}
