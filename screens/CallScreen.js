import React from 'react';
import { Container, View, Fab, Left, Right, Button, Icon, Text, List, ListItem, Thumbnail, Body, } from 'native-base';

export default class CallScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    render() {
        return (
            <Container>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} style={{ borderRadius: 50 }} />
                        </Left>
                        <Body>
                            <Text>Imaduddin</Text>
                            <Text note numberOfLines={1}><Icon name="redo" style={{ color: '#25d366' }} />  Sekarang 20.00pm</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='call' style={{ color: "#075354" }} />
                            </Button>
                        </Right>
                    </ListItem>
                </List>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} style={{ borderRadius: 50 }} />
                        </Left>
                        <Body>
                            <Text>Andrea</Text>
                            <Text note numberOfLines={1}><Icon name="undo" style={{ color: '#DA483B' }} />  Kemarin 15.20pm</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='videocam' style={{ color: "#075354" }} />
                            </Button>
                        </Right>
                    </ListItem>
                </List>
                <View style={{ flex: 1 }}>
                    <Fab
                        style={{ backgroundColor: '#51e302' }}
                        position="bottomRight">
                        <Icon name="call" />
                    </Fab>
                </View>
            </Container>
        );
    }
}
