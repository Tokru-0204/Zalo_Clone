import { FlatList, Image, Pressable, SafeAreaView, TextInput, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faGear,
  faMagnifyingGlass,
  faPenToSquare,
  faPlus,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import Images from "../../themes/Images";
import Avatar from "../avatar/Avatar";
import Colors from "../../themes/Colors";


const data = [
  {
    id: 0,
    name: "Alex",
    statusOn: 1,
    avatar: Images.avatar1,
    moment: 1,
  },

  {
    id: 1,
    name: "Jeff",
    statusOn: 1,
    avatar: Images.avatar2,
    moment: 0,
  },

  {
    id: 2,
    name: "Wilma",
    statusOn: 0,
    avatar: Images.avatar3,
    moment: 1,
  },

  {
    id: 3,
    name: "Lind",
    statusOn: 1,
    avatar: Images.avatar1,
    moment: 1,
  },

  {
    id: 4,
    name: "Alex",
    statusOn: 0,
    avatar: Images.avatar2,
    moment: 0,
  },

  {
    id: 5,
    name: "Jeff",
    statusOn: 1,
    avatar: Images.avatar3,
    moment: 1,
  },

];

const dataList = [
  {
    id: 0,
    name: "Alex",
    statusOn: 1,
    avatar: Images.avatar1,
    moment: 1,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 2
  },
  {
    id: 1,
    name: "Jeff",
    statusOn: 1,
    avatar: Images.avatar2,
    moment: 0,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 0
  },
  {
    id: 2,
    name: "Wilma",
    statusOn: 0,
    avatar: Images.avatar3,
    moment: 1,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 1
  },
  {
    id: 3,
    name: "Lind",
    statusOn: 1,
    avatar: Images.avatar1,
    moment: 1,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 1
  },
  {
    id: 4,
    name: "Alex",
    statusOn: 0,
    avatar: Images.avatar2,
    moment: 0,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 0
  },
  {
    id: 5,
    name: "Jeff",
    statusOn: 1,
    avatar: Images.avatar3,
    moment: 1,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 1
  },

  {
    id: 6,
    name: "Wilma",
    statusOn: 0,
    avatar: Images.avatar3,
    moment: 1,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 1
  },
  {
    id: 7,
    name: "X",
    statusOn: 0,
    avatar: Images.avatar3,
    moment: 1,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 1
  },
  {
    id: 8,
    name: "Y",
    statusOn: 0,
    avatar: Images.avatar3,
    moment: 1,
    lastMessage: "You sent a sticker",
    time: "5:30 PM",
    status: 1
  },



]

export const Messages = ({ navigation }) => {
  const [value, setValue] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon
          style={{ marginLeft: 15 }}
          color="#F1FFFF"
          size={27}
          icon={faMagnifyingGlass}
        />
        <TextInput
          style={styles.txtInHeader}
          placeholder="Tìm kiếm"
          onChangeText={setValue}
        ></TextInput>

        <Pressable>
          <FontAwesomeIcon
            style={{ marginLeft: 18 }}
            color="#F1FFFF"
            size={22}
            icon={faPlus}
          />
        </Pressable>

        <Pressable>
          <FontAwesomeIcon
            style={{ marginLeft: 20 }}
            color="#F1FFFF"
            size={22}
            icon={faQrcode}
          />
        </Pressable>
      </View>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontal_container}>
        <View style={styles.my_story_container}>
          <View style={styles.my_story} >
            <TouchableOpacity>
              <FontAwesomeIcon color="white" size={22} icon={faPlus} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text_horizontal}>Your Story</Text>
        </View>
        {data.map((item, index) => {
          return (
            <Avatar data={item} key={index} />
          )
        })}
      </ScrollView> */}
      {/* <View style={styles.line} /> */}
      {/* <View style={styles.list_container}> */}
        <FlatList
          data={dataList}
          keyExtractor={(item) => item.id}
          initialScrollIndex={0}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ChatDetails')}>
                <View style={[styles.left_item,
                {
                  borderWidth: item.moment === 1 ? 1 : 0
                }
                ]}>
                  <Image style={[styles.avatar_left,
                  {
                    height: item.moment === 1 ? 60 : 70, width: item.moment === 1 ? 60 : 70
                  }
                  ]} source={item.avatar} />
                  {item.status === 1 ? <View style={styles.dot_online} /> : <></>}
                </View>
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={[styles.lastMessage, { color: item.status === 1 ? Colors.black_unread : Colors.gray }]}>{item.lastMessage}</Text>
                </View>
                <View style={styles.right_item}>
                  <Text style={[styles.item_time, {
                    color: item.status === 1 ? Colors.black_unread : Colors.gray
                  }]}>{item.time}</Text>
                  {item.status === 1 ? <View style={styles.dot_unread} /> : 
                    item.status === 2 ? <View style={styles.dot_chatting_container}>
                      <View style={styles.dot_chatting} />
                      <View style={styles.dot_chatting} />
                    </View> : <></>
                  }
                </View>
              </TouchableOpacity>
              
            )
          }}
        />
        
      {/* </View> */}
    </SafeAreaView>
  );
};
