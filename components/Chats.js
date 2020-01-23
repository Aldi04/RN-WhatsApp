import React from 'react';
import { Body, ListItem, Left, Right, Thumbnail, Text } from 'native-base';

export default function Chats(_chats) {
    return (
        <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: _chats.avatar }} style={{ width: 54, height: 54, marginBottom: 5 }} />
            </Left>
            <Body>
                <Text>{_chats.from}</Text>
                <Text note>{_chats.message}</Text>
            </Body>
            <Right>
                <Text note> {_chats.time} </Text>
            </Right>
        </ListItem>
    );
}