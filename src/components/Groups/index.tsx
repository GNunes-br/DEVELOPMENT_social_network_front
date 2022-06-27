import GroupCardComponent from '../GroupCard';
import { Body, Content } from './style';

interface Props {
    groups: Array<any>;
}

const GroupsComponent = (props: Props): JSX.Element => {
    const { groups } = props;

    return (
        <Content>
            <Body>
                {groups.length ? (
                    groups.map(group => {
                        return <GroupCardComponent group={group} />;
                    })
                ) : (
                    <></>
                )}
            </Body>
        </Content>
    );
};

export default GroupsComponent;
