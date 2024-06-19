import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import ModalAuth from "./components/Modal/Modal";
import { Route, Routes, useNavigate } from "react-router-dom";
import FormNumber from "./components/Form/FormNumber";

function App() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const onHandleClick = () => {
    setBurgerOpen(!isBurgerOpen);
  };
  const nav = useNavigate();
  return (
    <>
      <Container>
        <Header isOpen={isBurgerOpen} onHandleClick={onHandleClick} />
        <div className={`${isBurgerOpen && "hidden"} w-full`}></div>
      </Container>

      <Routes>
        <Route
          path="/login"
          element={
            <ModalAuth
              secondaryBtnValue="Зарегистрироваться"
              btnTitle="Нет аккаунта?"
              btnValue="Получить код"
              subtitle="Код будет автоматически отправлен на Ваш номер телефона с помощью SMS"
              title="Вход на платформу"
              isOpen={true}
              onRedirect={() => nav("/auth")}
              onHandleClose={() => nav("/")}
            >
              <FormNumber />{" "}
            </ModalAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <ModalAuth
              onRedirect={() => nav("/login")}
              secondaryBtnValue="Войти"
              btnTitle="Уже зарегистированы?"
              btnValue="Получить код"
              subtitle="Код будет автоматически отправлен на Ваш номер телефона с помощью SMS"
              title="Регистрация"
              isOpen={true}
              onHandleClose={() => nav("/")}
            >
              <FormNumber />
            </ModalAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
