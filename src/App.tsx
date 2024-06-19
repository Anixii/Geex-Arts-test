import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import ModalAuth from "./components/Modal/Modal";
import { Route, Routes, useNavigate } from "react-router-dom";
import FormNumber from "./components/Form/FormNumber";
import PinCodeForm from "./components/Form/PinCodeForm";
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
        
      </Container>
      <div >
      <Routes>
        <Route
          path="/login"
          element={
            <ModalAuth
              secondaryBtnValue="Зарегистрироваться"
              onHandleClickBtn={() => nav('/pin-code')}
              btnTitle="Нет аккаунта?"
              btnValue="Получить код"
              subtitle="Код будет автоматически отправлен на Ваш номер телефона с помощью SMS"
              title="Вход на платформу"
              isOpen={true}
              onRedirect={() => nav("/auth")}
              onHandleClose={() => nav("/")}
            >
              <FormNumber />
            </ModalAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <ModalAuth
              onRedirect={() => nav("/login")} 
              onHandleClickBtn={() => nav('/pin-code')}
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
        <Route
          path="/pin-code"
          element={
            <ModalAuth
              onRedirect={() => nav("/")}
              onHandleClickBtn={() => nav("/")}
              btnTitle="Отправить снова через 01:00"
              btnValue="Подтвердить"
              subtitle={`Отправим сообщение с 6-ти значным кодом на номер +7  983 540-49-43. Изменить`}
              title="Подтвердите номер телефона"
              isOpen={true}
              onHandleClose={() => nav("/")}
            >
              <PinCodeForm />
            </ModalAuth>
          }
        />
      </Routes>
      </div>
    </>
  );
}

export default App;
