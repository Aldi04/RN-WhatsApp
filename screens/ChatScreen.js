import React from 'react';
import { Container, View, Fab, Left, Right, Icon, Text, Content, List, ListItem, Thumbnail, Body } from 'native-base';

import Chats from '../components/Chats';

import ChatJSON from '.././assets/database/chats';

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            chats: ChatJSON,
        };
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {this.state.chats.map((_chats, key) => (
                            <Chats key={key} avatar={_chats.avatar} from={_chats.from} message={_chats.message} time={_chats.time} />
                        ))}
                    </List>
                </Content>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#25D366', position: 'absolute' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="chatboxes" />
                </Fab>
            </Container>
        );
    }
}
