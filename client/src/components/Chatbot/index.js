import ChatBot from 'react-simple-chatbot';
import Emoji from '../../assets/thinking-emoji.jpg';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function Chatbot() {

    const steps = [
        {
            id: 'namePrompt',
            message: 'Hello! What\'s your name?',
            trigger: 'name',
        },
        {
            id: 'name',
            user: true,
            trigger: 'help',
        },
        {
            id: 'help',
            message: 'Hi {previousValue}, do you need help with something?',
            trigger: 'helpConfirm'
        },
        {
            id: 'helpConfirm',
            options: [
                { value: true, label: 'Yes', trigger: 'helpOptions' },
                { value: false, label: 'No', trigger: 'endMessage' }
            ]
        },
        {
            id: 'helpOptions',
            message: 'What can I help you with?',
            trigger: 'chooseOption'
        },
        {
            id: 'chooseOption',
            options: [
                { value: 'courses', label: 'Courses', trigger: 'courseSelect' },
                { value: 'profile', label: 'Profile', trigger: (() => window.location.replace('/profile')) },
                { value: 'dashboard', label: 'Dashboard', trigger: (() => window.location.replace('/dashboard')) },
                { value: 'join', label: 'Join Warp Speed', trigger: (() => window.location.replace('/signup')) },
                { value: false, label: 'Nevermind', trigger: 'exitConfirm' }
            ]
        },
        {
            id: 'courseSelect',
            options: [
                { value: 'Astronomy', label: 'Astronomy', trigger: 'learnMore' },
                { value: 'Biology', label: 'Biology', trigger: 'learnMore' },
                { value: 'History', label: 'History', trigger: 'learnMore' },
                { value: false, label: 'Nevermind', trigger: 'exit' }
            ]
        },
        {
            id: 'learnMore',
            message: 'Learn more about {previousValue} here (include a link to the relevant course).',
            trigger: 'exit'
        },
        {
            id: 'exit',
            message: 'Do you need help with anything else?',
            trigger: 'exitConfirm'
        },
        {
            id: 'exitConfirm',
            options: [
                { value: true, label: 'Yes', trigger: 'helpOptions' },
                { value: false, label: 'No', trigger: 'endMessage' }
            ]
        },
        {
            id: 'endMessage',
            message: 'Farewell! If you have another question, let me know!',
            trigger: 'repeat'
        },
        {
            id: 'repeat',
            options: [
                { value: true, label: 'Ask Another Question', trigger: 'helpOptions' }
            ]
        }
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
                        steps={steps}
                        floating={true}
                        userDelay={250} />
                </ThemeProvider>
            </div>
        </section>
    );
}

export default Chatbot;