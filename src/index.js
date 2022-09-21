import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import App from "./App";
import Expenses from "./routes/expenses";
import FormZO from "./routes/form";
import Posts from "./routes/posts";
import Post from "./routes/post";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import User from "./routes/user";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="form" element={<FormZO />} />
          <Route path="user" element={<User />} />
          <Route path="posts" element={<Posts />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an post</p>
                </main>
              }
            />
            <Route path=":postId" element={<Post />} />
          </Route>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
