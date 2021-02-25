import Auth from '../../utils/auth';
import ChatBot from 'react-simple-chatbot';
import Help from '../../assets/images/help.jpg';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function Chatbot() {

    const steps = [
        {
            id: 'namePrompt',
            message: 'Hello, what\'s your name?',
            trigger: 'name',
        },
        {
            id: 'name',
            user: true,
            trigger: 'helpOptions',
        },
        {
            id: 'helpOptions',
            message: 'Hi {previousValue}, what can I help you with?',
            hideInput: true,
            trigger: 'chooseOption'
        },
        {
            id: 'chooseOption',
            hideInput: true,
            options: [
                { value: 'courses', label: 'Courses', trigger: 'courseSelect' },
                { value: 'profile', label: 'Profile', trigger: (() => window.location.replace('/profile')) },
                { value: 'dashboard', label: 'Dashboard', trigger: (() => window.location.replace('/dashboard')) },
                { value: 'join', label: 'Join Lite Speed', trigger: (() => window.location.replace('/signup')) },
                { value: false, label: 'Nevermind', trigger: 'endMessage' }
            ]
        },
        {
            id: 'courseSelect',
            hideInput: true,
            options: [
                { value: 'Space', label: 'Space', trigger: (() => Auth.loggedIn() ? window.location.replace('/courses/6036f9eb7ed9590004b67bf0') : window.location.replace('/signup')) },
                { value: 'Science', label: 'Science', trigger: (() => Auth.loggedIn() ? window.location.replace('/courses/6036f9eb7ed9590004b67bf1') : window.location.replace('/signup')) },
                { value: 'History', label: 'History', trigger: (() => Auth.loggedIn() ? window.location.replace('/courses/6036f9eb7ed9590004b67bf2') : window.location.replace('/signup')) },
                { value: 'Mathematics', label: 'Mathematics', trigger: (() => Auth.loggedIn() ? window.location.replace('/courses/6036f9eb7ed9590004b67bf3') : window.location.replace('/signup')) },
                { value: 'Web Development', label: 'Web Development', trigger: (() => Auth.loggedIn() ? window.location.replace('/courses/6036f9eb7ed9590004b67bf4') : window.location.replace('/signup')) },
                { value: 'English', label: 'English', trigger: (() => Auth.loggedIn() ? window.location.replace('/courses/6036f9eb7ed9590004b67bf5') : window.location.replace('/signup')) },
                { value: 'Art', label: 'Art', trigger: (() => Auth.loggedIn() ? window.location.replace('/courses/6036f9eb7ed9590004b67bf6') : window.location.replace('/signup')) },
                { value: 'Geography', label: 'Geography', trigger: (() => Auth.loggedIn() ? window.location.replace('/courses/6036f9eb7ed9590004b67bf7') : window.location.replace('/signup')) },
                { value: false, label: 'Nevermind', trigger: 'exit' }
            ]
        },
        {
            id: 'exit',
            hideInput: true,
            message: 'Do you need help with anything else?',
            trigger: 'exitConfirm'
        },
        {
            id: 'exitConfirm',
            hideInput: true,
            options: [
                { value: true, label: 'Yes', trigger: 'helpOptions' },
                { value: false, label: 'No', trigger: 'endMessage' }
            ]
        },
        {
            id: 'endMessage',
            hideInput: true,
            message: 'Farewell! If you have another question, let me know!',
            trigger: 'repeat'
        },
        {
            id: 'repeat',
            hideInput: true,
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
                        botAvatar={Help}
                        steps={steps}
                        floating={true}
                        userDelay={250} />
                </ThemeProvider>
            </div>
        </section>
    );
}

export default Chatbot;