import Main from "@/pages/Main"
import { BrowserRouter } from 'react-router-dom';
import Layout from "@/layout/index.jsx"
export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Layout>
  );
}
