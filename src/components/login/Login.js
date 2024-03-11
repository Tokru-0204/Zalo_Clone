import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'; // Thay đổi icon cho email và password
import {isValidEmail} from '../../utilies/Validations';

const Login = ({navigation}) => {
//   const {state, depatch} = useContext(Contex);
//   const {user} = state;
  // console.log("context", Contex);
  // const user = auth().currentUser;
  const [getPassWordVisible, setPassWordVisible] = useState(false);
  //states for validatingpp
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  //states to store email/password

  const [email, setEmail] = useState('hao1@gmail.com');
  const [password, setPassword] = useState('11111111');

  //false: chua bamlogin
  //true: khong cho ng dung bam nut  login
  const [status, setStatus] = useState(false);

  const isValidationOK = () => {
    // email.length > 0 &&
    //   password.length > 0 &&
    //   isValidEmail(email) == true &&
    //   isValidPassword(password) == true;
  };

  // console.log("userLogin: ", user);
//   const handleLogin = () => {
//     if (status) {
//       Alert.alert('Đang xử lý login...');
//     }

//     setStatus(true);
//     //send email, pass to server
//     const loginFunc = (mail, pass) => {
//       signInWithEmailAndPassword(authetication, mail, pass)
//         .then(userCredential => {
//           // console.log(userCredential.user.uid);
//           const getUser = async (db, id) => {
//             //get info user by id
//             const docRef = doc(db, 'users', id);
//             const docSnap = await getDoc(docRef);
//             console.log(docSnap.data());
//             if (docSnap.exists()) {
//               // return docSnap.data();
//               //console.log("Document data:", docSnap.data());
//               //set user
//               depatch(SetUser(docSnap.data()));
//               setStatus(false);
//             } else {
//               // doc.data() will be undefined in this case
//               console.log('No such document!');
//               setStatus(false);
//             }
//           };

//           getUser(db, userCredential.user.uid);

//           //redict homepage

//           navigation.navigate('HomeTabs');
//           setStatus(false);
//         })
//         .catch(error => {
//           alert('Email hoặc mật khẩu không chính xác!');
//         });
//     };
//     console.log(email);
//     console.log(password);
//     loginFunc(email, password);
//   };

  return (
    <View style={styles.container}>
      <View style={styles.topTag}>
        <TouchableOpacity
          style={{alignItems: 'center', marginLeft: 5}}
          onPress={() => {
            navigation.goBack();
          }}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.textTopTag}>Đăng nhập</Text>
      </View>

      <View style={styles.textRemind}>
        <Text style={{fontSize: 15}}>
          Vui lòng nhập email và mật khẩu để đăng nhập
        </Text>
      </View>

      {/* input login*/}
      <View style={styles.input}>
        <View style={styles.viewAcc}>
          <TextInput
            style={styles.inputAcc}
            value={email}
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Email not in correct format',
              );
              setEmail(text);
            }}
            placeholder="example@gmail.com"></TextInput>
        </View>
        {/* password */}
        <View style={styles.viewPassword}>
          <TextInput
            style={styles.inputPassword}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            placeholder="Enter your password"
            secureTextEntry={getPassWordVisible ? false : true}></TextInput>
          <TouchableOpacity
            onPress={() => {
              setPassWordVisible(!getPassWordVisible);
            }}>
            {getPassWordVisible ? (
              <FontAwesomeIcon
                style={styles.imageEye}
                icon={faEye}
                size={24}
                color="gray"
              />
            ) : (
              <FontAwesomeIcon
                style={styles.imageEye}
                icon={faEyeSlash}
                size={24}
                color="gray"
              />
            )}
          </TouchableOpacity>
        </View>

        {/* recover password */}
        <View style={styles.recoverPassword}>
          <TouchableOpacity
            onPress={() => {
              alert('Emai= ${email}');
            }}>
            <Text style={{fontSize: 15, color: 'blue', marginTop: 15}}>
              Lấy lại mật khẩu
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Ask */}
      <View style={styles.ask}>
        <TouchableOpacity>
          <Text style={{fontSize: 15, color: 'gray'}}>Câu hỏi thường gặp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login}
          disabled={isValidationOK() == false}
          onPress={() => console.log('login')}>
          <FontAwesomeIcon icon={faArrowRight} size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
  //phan moi
  topTag: {
    display: 'flex',
    width: '100%',
    height: 45,
    backgroundColor: '#009AFA',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textTopTag: {
    alignItems: 'center',
    marginRight: '40%',
    fontSize: 18,
    color: 'white',
  },

  textRemind: {
    width: '100%',
    height: 50,
    backgroundColor: '#b8b1b1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  viewPassword: {
    marginTop: 20,
    marginBottom: 10,
    width: '95%',
    height: 40,
    flexDirection: 'row',
  },

  viewAcc: {
    marginTop: 10,
    width: '95%',
    height: 40,
  },

  inputPassword: {
    width: '100%',
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    fontSize: 16,
    marginTop: 14,
  },

  inputAcc: {
    width: '100%',
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    fontSize: 16,
    marginTop: 14,
  },

  imageEye: {
    padding: 5,
    height: '100%',
    width: 40,
    position: 'absolute',
    right: 0,
    marginTop: 15,
  },

  recoverPassword: {
    marginTop: 20,
    marginBottom: 10,
    width: '95%',
    height: 40,
    flexDirection: 'row',
  },

  ask: {
    marginLeft: '5%',
    width: '95%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  login: {
    marginBottom: 20,
    marginRight: '5%',
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#2360c2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
