import React from 'react';
import { Container, Separator, View, Fab, Left, Icon, Text, Content, List, ListItem, Thumbnail, Body, Badge } from 'native-base';

export default class StatusScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar noBorder style={{ paddingBottom: 10 }}>
              <Left>
                <View style={{ position: "relative" }}>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} />
                  <Badge success style={{ width: 21, height: 21, display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0, right: 0 }}><Icon name="add" style={{ color: "#FFFFFF", fontSize: 13, fontWeight: "bold" }} /></Badge>
                </View>
              </Left>
              <Body>
                <Text>My Status</Text>
                <Text note>Tap to add status updates</Text>
              </Body>
            </ListItem>
          </List>
          <List>
            <Separator style={{ height: 28 }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Recent updates</Text>
            </Separator>
            <ListItem avatar>
              <Left>
                <View style={{ borderRadius: 50, borderColor: "#075E54", borderWidth: 2.5, overflow: "hidden", padding: 1.5 }}>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} style={{ width: 55, height: 55 }} />
                </View>
              </Left>
              <Body>
                <Text>Imaduddin</Text>
                <Text note>5 minutes ago</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <View style={{ borderRadius: 50, borderColor: "#075E54", borderWidth: 2.5, overflow: "hidden", padding: 1.5 }}>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} style={{ width: 55, height: 55 }} />
                </View>
              </Left>
              <Body>
                <Text>Imaduddin</Text>
                <Text note>5 minutes ago</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder style={{ paddingBottom: 10 }}>
              <Left>
                <View style={{ borderRadius: 50, borderColor: "#075E54", borderWidth: 2.5, overflow: "hidden", padding: 1.5 }}>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} style={{ width: 55, height: 55 }} />
                </View>
              </Left>
              <Body>
                <Text>Imaduddin</Text>
                <Text note>5 minutes ago</Text>
              </Body>
            </ListItem>
            <Separator style={{ height: 28 }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Viewed updates</Text>
            </Separator>
            <ListItem avatar>
              <Left>
                <View style={{ borderRadius: 50, borderColor: "#ECE5DD", borderWidth: 2.5, overflow: "hidden", padding: 1.5 }}>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} style={{ width: 55, height: 55 }} />
                </View>
              </Left>
              <Body>
                <Text>Imaduddin</Text>
                <Text note>5 minutes ago</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <View style={{ flex: 0 }}>
          <Fab
            style={{ backgroundColor: '#F4F4F4', marginBottom: 65, height: 50, width: 50 }}
            position="bottomRight">
            <Icon name="create" style={{ color: '#075E54' }} />
          </Fab>
          <Fab
            style={{ backgroundColor: '#25D366' }}
            position="bottomRight">
            <Icon name="camera" />
          </Fab>
        </View>
      </Container>
    );
  }
}
