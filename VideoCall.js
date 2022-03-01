import React, {useEffect} from 'react';
import {View} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

const VideoCall = ({
  onConferenceTerminated = () => {},
  onConferenceJoined = () => {},
  onConferenceWillJoin = () => {},
}) => {
  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/deneme'; // can also be only room name and will connect to jitsi meet servers
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call(url, userInfo);
      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }, 1000);
  }, []);

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <JitsiMeetView
        style={{flex: 1, height: '100%', width: '100%'}}
        {...{onConferenceTerminated, onConferenceJoined, onConferenceWillJoin}}
      />
    </View>
  );
};

export default VideoCall;
