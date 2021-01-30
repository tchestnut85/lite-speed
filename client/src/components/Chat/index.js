import ChatBot from 'react-simple-chatbot';
import Emoji from '../../assets/thinking-emoji.jpg';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function Chat() {

    const steps = [
        {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
        },
    ];

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Lucida Sans',
        headerBgColor: '#5498ac',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#204ea3',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    return (
        <section>
            <div>
                <ThemeProvider theme={theme}>
                    <ChatBot
                        botAvatar={Emoji}
                        steps={steps} floating={true} />
                </ThemeProvider>
            </div>
        </section>
    );
}

export default Chat;