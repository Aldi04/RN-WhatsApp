import React from 'react';
import { AppLoading } from 'expo';
import { Container, Separator, View, Fab, Header, Tabs, Tab, TabHeading, Left, Right, Button, Icon, Title, Text, Content, List, ListItem, Thumbnail, Body, Badge } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import CameraScreen from './screens/CameraScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        
        <Header noShadow hasTabs style={{backgroundColor: '#075e54'}} androidStatusBarColor="#075e54">
          <Left>
            <Title style={{fontSize: 24, marginLeft: 3}}>WhatsApp</Title>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Tabs tabContainerStyle={{elevation: 0}}>
          <Tab heading={ <TabHeading style={{backgroundColor: '#075e54'}}><Icon name="camera" /></TabHeading>}>
            <CameraScreen />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#075e54'}}><Text>CHATS</Text></TabHeading>}>

          <Content>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>
          </Content>

            <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#25D366' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="chatboxes" />
          </Fab>
        </View>
          </Tab>

          <Tab heading={ <TabHeading style={{backgroundColor: '#075e54'}}><Text>STATUS</Text></TabHeading>}>  
          <Content>
            <List>
          <ListItem avatar noBorder style={{paddingBottom: 10}}>
          <Left>
            <View style={{position: "relative"}}>
              <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} />
            <Badge success style={{width: 21, height: 21, display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0, right: 0}}><Icon name="add" style={{ color: "#FFFFFF", fontSize: 13, fontWeight: "bold"}} /></Badge>
            </View>
            </Left>
            <Body>
              <Text>My Status</Text>
              <Text note>Tap to add status updates</Text>
            </Body>
          </ListItem>
          </List>
          <List>
            <Separator style={{height: 28}}>
              <Text style={{ fontWeight: "bold", fontSize: 14}}>Recent updates</Text>
            </Separator>
            <ListItem avatar>
              <Left>
                <View style={{borderRadius: 50, borderColor: "#075E54", borderWidth: 2.5, overflow: "hidden", padding: 1.5 }}>
                <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0'}} style={{ width: 55, height: 55 }} />
                </View>
              </Left>
              <Body>
                <Text>Imaduddin</Text>
                <Text note>5 minutes ago</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <View style={{borderRadius: 50, borderColor: "#075E54", borderWidth: 2.5, overflow: "hidden", padding: 1.5 }}>
                <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0'}} style={{ width: 55, height: 55 }} />
                </View>
              </Left>
              <Body>
                <Text>Imaduddin</Text>
                <Text note>5 minutes ago</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder style={{paddingBottom: 10}}>
              <Left>
                <View style={{borderRadius: 50, borderColor: "#075E54", borderWidth: 2.5, overflow: "hidden", padding: 1.5 }}>
                <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0'}} style={{ width: 55, height: 55 }} />
                </View>
              </Left>
              <Body>
                <Text>Imaduddin</Text>
                <Text note>5 minutes ago</Text>
              </Body>
            </ListItem>
            <Separator style={{height: 28}}>
              <Text style={{ fontWeight: "bold", fontSize: 14}}>Viewed updates</Text>
            </Separator>
            <ListItem avatar>
              <Left>
                <View style={{borderRadius: 50, borderColor: "#ECE5DD", borderWidth: 2.5, overflow: "hidden", padding: 1.5 }}>
                <Thumbnail source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0'}} style={{ width: 55, height: 55 }} />
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
            <Icon name="create" style={{color: '#075E54'}} />
          </Fab>
          <Fab
            style={{ backgroundColor: '#25D366' }}
            position="bottomRight">
            <Icon name="camera"/>
          </Fab>
        </View>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#075e54'}}><Text>CALLS</Text></TabHeading>}>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} style={{borderRadius: 50}} />
              </Left>
              <Body>
                <Text>Imaduddin</Text>
                <Text note numberOfLines={1}><Icon name="redo" style={{ color: '#25d366'}}/>  Sekarang 20.00pm</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='call' style={{color:"#075354"}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://puui.qpic.cn/qqvideo_ori/0/i00317cg07h_496_280/0' }} style={{borderRadius: 50}}/>
              </Left>
              <Body>
                <Text>Andrea</Text>
                <Text note numberOfLines={1}><Icon name="undo" style={{ color: '#DA483B'}}/>  Kemarin 15.20pm</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='videocam' style={{color:"#075354"}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
           <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="call"/>
          </Fab>
        </View>
          </Tab>
        </Tabs>
 
    </Container>
    );
  }
}
