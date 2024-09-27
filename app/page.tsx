"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Container from "./components/Container";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Container />
      </main>
    </Provider>
  );
}
