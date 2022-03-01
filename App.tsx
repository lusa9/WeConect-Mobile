/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import VideoCall from './VideoCall';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text style={[styles.sectionTitle]}>Jitsi Meet</Text>
        <Button
          title="Join the Call"
          onPress={() => setModalVisible(true)}></Button>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <VideoCall onConferenceTerminated={() => setModalVisible(false)} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 42,
    fontWeight: '600',
    padding: 50,
  },
});

export default App;
