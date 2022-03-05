import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExitedList } from "./Components/ExitedList";
import { ExitedListItem } from "./Components/ExitedListItem";
import { Layout } from "./Components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { Todo } from "./Pages/Todo";
import { Count } from "./Components/Counter";
import { UsersPage } from "./Pages/Users";
import { UserPosts } from "./Pages/UserPosts";
import { UserPost } from "./Pages/UserPost";
import { Comment } from "./Pages/Comment";

const start = 5

export const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/todo" element={<Todo />} />
            <Route path="/counter" element={
              <>
                <Count start={start} timeOut={2} />
                <Count start={10} timeOut={3} />
              </>
            }
            />
            <Route path="/users" element={<UsersPage />}
            />
            <Route path="/posts/:userId" element={<UserPosts />} />
            <Route path="/post/:id" element={<UserPost />} />
            <Route path="/post/:id/comments" element={<Comment />} />
            <Route
              path="/"
              element={
                <div>
                  <h1>Hello React Applications!</h1>
                </div>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
};
