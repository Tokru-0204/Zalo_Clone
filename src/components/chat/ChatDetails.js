import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faChevronLeft, faCircleCheck, faLock, faMicrophone, faPhone, faPlayCircle, faPlusCircle, faSmile, faThumbsUp, faVideo, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { Pressable } from 'react-native';
import { styles } from "./style";
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

const data = [
  {
    id: 0,
    formId: 0,
    statusOnline: 1,
    typeMessage: 0,
    message: "Message to this chat and calls are now secured with End encrypted",
  },
  {
    id: 1,
    formId: 1,
    statusOnline: 1,
    typeMessage: 0,
    message: "Hello",
  },
  {
    id: 2,
    formId: 2,
    statusOnline: 1,
    typeMessage: 0,
    message: "How are you?",
    sent: 1
  },
  {
    id: 3,
    formId: 1,
    statusOnline: 1,
    typeMessage: 0,
    message: "I'm fine, thank you!",
  },
  {
    id: 4,
    formId: 2,
    statusOnline: 1,
    typeMessage: 0,
    message: "What are you doing?",
    sent: 1

  },
  {
    id: 5,
    formId: 1,
    statusOnline: 1,
    typeMessage: 0,
    message: "I'm working",
  },
  {
    id: 6,
    formId: 2,
    statusOnline: 1,
    typeMessage: 0,
    message: "I'm working too",
    sent: 1
  },
  {
    id: 7,
    formId: 1,
    statusOnline: 1,
    typeMessage: 0,
    message: "What are you doing?",
  },
  {
    id: 8,
    formId: 2,
    statusOnline: 1,
    typeMessage: 0,
    message: "I'm working",
    sent: 1
  },
  {
    id: 9,
    formId: 1,
    statusOnline: 1,
    typeMessage: 1,
    message: "I'm working too",
  },
  {
    id: 10,
    formId: 2,
    statusOnline: 1,
    typeMessage: 2,
    message: "What are you doing?",
    sent: 1
  },


]
const ChatDetails = ({ navigation }) => {

  const [value, setValue] = useState('')

  const renderMessage = (item) => {
    switch (item.formId) {
      case 0:
        return (
          <View style={styles.message_system}>
            <FontAwesomeIcon icon={faLock} color='#009AFA' size={20} />
            <Text style={styles.text_system}>{item.message}</Text>
          </View>
        )
      case 1:
        return (
          <View style={styles.message_customer}>
            <View style={styles.left_message}>
              <Image source={Images.avatar1} style={styles.avatar_item} />
              <View style={styles.dot_online} />
            </View>
            <View style={styles.message_customer_text_container}>
              {renderTextMessage(item)}
            </View>
          </View>
        )
      case 2:
        return (
          <View style={styles.message_onwer}>
            <View style={styles.right_message}>
              <View style={[styles.message_owner_text_container, {
                backgroundColor: item.typeMessage === 2 ? Colors.white : Colors.blue,
                paddingHorizontal: item.typeMessage === 2 ? 0 : 15,
                paddingVertical: item.typeMessage === 2 ? 0 : 10,
              }]}>
                {renderTextMessage(item)}
              </View>
              <View style={styles.ic_check}>
                <FontAwesomeIcon icon={faCircleCheck} color='#009AFA' size={15} />
              </View>
            </View>

          </View>
        )
    }
  }

  const renderTextMessage = (item) => {
    switch (item.typeMessage) {
      case 0:
        return (
          <Text style={[styles.text_message, { color: item.formId === 1 ? Colors.black : Colors.white }]}>{item.message}</Text>
        )

      case 1:
        return (
          <View style={styles.sound_message}>
            <TouchableOpacity >
              <FontAwesomeIcon icon={faPlayCircle} color='#009AFA' size={25} />
            </TouchableOpacity>
            {/* <FontAwesomeIcon icon={faGripLines} color='#009AFA' size={25}/> */}
            <Image source={Images.Timeline} style={styles.timeline} />
            <Text style={styles.text_time_line}>1:20</Text>
          </View>
        )

      case 2:
        return (
          <Image source={Images.sticker} style={styles.sticker} />
        )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressBack} onPress={() => { navigation.navigate('Messages') }}>
          <FontAwesomeIcon icon={faChevronLeft} style={{ marginLeft: 10 }} color='#F5F8FF' size={20} />
          <Text style={styles.txtInHeader}>Tên người dùng</Text>
        </Pressable>

        <Pressable>
          <FontAwesomeIcon
            style={{ marginLeft: 170 }}
            color="#F1FFFF"
            size={22}
            icon={faPhone}
          />
        </Pressable>

        <Pressable>
          <FontAwesomeIcon
            style={{ marginLeft: 20 }}
            color="#F1FFFF"
            size={22}
            icon={faVideo}
          />
        </Pressable>

        <Pressable>
          <FontAwesomeIcon
            style={{ marginLeft: 20 }}
            color="#F1FFFF"
            size={22}
            icon={faBars}
          />
        </Pressable>
      </View>

      {/* <View style={styles.content_container}> */}
      <FlatList
      inverted
        data={data.reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.item_container}>
            {renderMessage(item)}
          </View>
        )}
      />
      {/* </View> */}
      <View style={styles.bottom_container}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faSmile} size={25} color="#009AFA" />
        </TouchableOpacity>
        <View style={styles.text_input_container}>
          <View style={styles.text_input_left}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faFaceSmile} size={25} color="#009AFA" style={{ marginTop: 5 }} />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={setValue}
              placeholder='Start Typing...'
            />
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPlusCircle} size={25} color="#009AFA" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom_right_container}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faMicrophone} size={25} color="#009AFA" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.like}>
            <FontAwesomeIcon icon={faThumbsUp} size={25} color="#009AFA" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChatDetails;
