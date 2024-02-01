import React from 'react';
import {Card} from "./components/Card";
import styled from "styled-components";

const cardImg: any = {
    1: 'data:image/jpeg;base64,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',
    2: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-cute-little-dog-sitting-in-the-field-image_2689739.jpg',
    3: 'https://cs11.livemaster.ru/storage/topicavatar/600x450/81/c3/1b4fcc6036c2303184aa1fff299385197e32i4.jpg?h=Js7qimz3PeEX5tLVE_zPSg',
    4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg/800px-Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg',
}

const mainText: any = [
    'Привет', 'Тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв тяв', 'Гав у-у-у-у-у, гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав гав',
    `Кабан может предупреждать вас о переходе на сайты с незащищенным подключением, чтобы сделать интернет безопаснее для вас – особенно при использовании общедоступных сетей, например в кофейнях и аэропортах.\n` +
    '\n' +
    'Откройте меню Google Chrome и выберите Настройки.\n' +
    'Нажмите Конфиденциальность и безопасность и выберпоняите Безопасность.\n' +
    `В разделе Дополнительно, выберите c помощью переключателя Всегда использовать безопасные подключения.`,
]


function App() {
    return (
        <CardsBox className="App">

            <Card
                imgSource={cardImg[1]}
                titleText={'Собачка'}
                mainText={mainText[0]}
            />


            <Card
                imgSource={cardImg[2]}
                titleText={'Другая собачка'}
                mainText={mainText[1]}
            />

            <Card
                imgSource={cardImg[3]}
                titleText={'Еще одна собачка'}
                mainText={mainText[2]}
            />

            <Card
                imgSource={cardImg[4]}
                titleText={'Кабан'}
                mainText={mainText[3]}
            />

        </CardsBox>
    );
}

export default App;

const CardsBox = styled.div`
    //height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 200px;
    gap: 50px;
`





