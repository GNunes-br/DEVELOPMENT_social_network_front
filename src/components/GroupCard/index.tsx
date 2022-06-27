import { useState } from 'react';
import { api } from '../../services/api';
import AlertMessageComponent from '../AlertMessage';
import { Body, Content, Footer, Header } from './style';

interface Props {
    group: {
        id: number;
        group_name: string;
        description: string;
        include: boolean;
    };
}

const GroupCardComponent = (props: Props): JSX.Element => {
    const {
        group: { group_name: name, description, include },
    } = props;

    const [toParticipate, setToParticipate] = useState(include);

    const [toParticipateError, setToParticipateError] = useState(false);
    const [toParticipateErrorMessage, setToParticipateErrorMessage] =
        useState('');

    const submitForm = async (): Promise<void> => {
        setToParticipateError(false);

        await api
            .post('/group/user', {
                groupname: name,
            })
            .catch(error => {
                if (error?.response?.error?.message) {
                    const errorMessage = error.response.error.message;
                    setToParticipateErrorMessage(errorMessage);
                } else {
                    setToParticipateErrorMessage('Algo inesperado aconteceu!');
                }
                setToParticipateError(true);
            });
    };

    function toParticipateGroup() {
        setToParticipate(true);
        submitForm();
    }

    return (
        <div>
            <Content>
                <Header>
                    <h1>{name}</h1>
                </Header>
                <Body>
                    <p>{description}</p>
                </Body>
                <Footer>
                    {toParticipate ? (
                        <button disabled>Participando</button>
                    ) : (
                        <button onClick={toParticipateGroup}>Participar</button>
                    )}
                </Footer>
            </Content>
            <AlertMessageComponent
                message={toParticipateErrorMessage}
                severity={'error'}
                open={toParticipateError}
                setOpen={setToParticipateError}
            />
        </div>
    );
};

export default GroupCardComponent;
