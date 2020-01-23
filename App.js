import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Tabs, Tab, TabHeading, Left, Right, Button, Icon, Title, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import CameraScreen from './screens/CameraScreen';
import ChatScreen from './screens/ChatScreen';
import StatusScreen from './screens/StatusScreen';
import CallScreen from './screens/CallScreen';

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
        
        <Header noShadow hasTabs style={{ backgroundColor: '#075e54' }} androidStatusBarColor="#075e54">
          <Left>
            <Title style={{ fontSize: 24, marginLeft: 3 }}>WhatsApp</Title>
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

        <Tabs tabContainerStyle={{ elevation: 0 }}>
          <Tab heading={<TabHeading style={{ backgroundColor: '#075e54' }}><Icon name="camera" /></TabHeading>}>
            <CameraScreen />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: '#075e54' }}><Text>CHATS</Text></TabHeading>}>
            <ChatScreen />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: '#075e54' }}><Text>STATUS</Text></TabHeading>}>
            <StatusScreen />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: '#075e54' }}><Text>CALLS</Text></TabHeading>}>
            <CallScreen />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}
