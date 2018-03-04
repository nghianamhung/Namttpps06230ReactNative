/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';
import { firebaseApp } from '../Config/firebase';
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import UpImage from './UpImage';

const storage = firebaseApp.storage()

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const uploadImage = (uri, mime = 'jpg') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const sessionId = new Date().getTime()
    let uploadBlob = null
    const imageRef = storage.ref('images').child(`${sessionId}.jpg`)

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
    })
  })
}



export default class FormAdd extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      des: '',
      image: 'https://png.icons8.com/ios/2x/xlarge-icons-filled.png',
      price: '',

    }
    FirebaseDB = firebaseApp.database();
    product = FirebaseDB.ref('Product')


  }
  _pickImage() {
    this.setState({ uploadURL: '' })

    ImagePicker.showImagePicker({}, response  => {
      uploadImage(response.uri)
        .then(url => this.setState({ imageURL: url }))
        .catch(error => console.log(error))
    })
  }
  alertItemName = (item) => {
    alert(item)
  }



  CheckSubmit = () => {
    const { name } = this.state;
    const { des } = this.state;
    const { price } = this.state;
    const { imageURL } = this.state;
    if (name == '' || price == '') {

      alert('Nhập tên và giá ');
    } else {
      product.push({
        Name: this.state.name,
        Price: this.state.price,
        Description: this.state.des,
        ImageURL: this.state.imageURL,
      }, () => alert("Đã thêm sản phẩm"))


      this.props.navigation.navigate('TabManager')
    }
  }


  render() {
    return (
      <View style={styles.background}>
        <KeyboardAvoidingView behavior="padding" style={{
          width: '100%'
          , justifyContent: 'center',
        }}>
          <View style={styles.container}>

            <View style={styles.image}>
              <Image
                // source={require('../image/image_icon.png')}
                source={{ uri: this.state.imageURL }}
                style={{ width: 100, height: 100, margin: 5, }}
              />

            </View>
            <View style={{ marginTop: 0, }}>
              <TouchableOpacity style={styles.submitButtonAddImage}
                // onPress={() =>  this.login(this.state.email, this.state.password)
                onPress={ () => this._pickImage() }>
                <Text style={styles.submitButtonText}> Tải ảnh  </Text>
              </TouchableOpacity>
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Tên"
                placeholderTextColor="#ffffff"
                autoCapitalize="none"
                onChangeText={name => this.setState({ name })}
              />
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Giá"
                placeholderTextColor="#ffffff"
                autoCapitalize="none"
                onChangeText={price => this.setState({ price })}
              />
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Ghi chú"
                placeholderTextColor="#ffffff"
                autoCapitalize="none"
                onChangeText={des => this.setState({ des })}
              />

              <TouchableOpacity style={styles.submitButton}
                // onPress={() =>  this.login(this.state.email, this.state.password)
                onPress={this.CheckSubmit}>
                <Text style={styles.submitButtonText}> Thêm  </Text>
              </TouchableOpacity>


            </View>

          </View >
        </KeyboardAvoidingView>
      </View >

    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#222222',
  },
  container: {
    marginTop: 100,

  },
  footer: {
    marginTop: 20,
    height: 80,
    backgroundColor: '#222222',
    borderColor: '#ffffff',
    borderTopWidth: 0.3,
  },
  input: {
    margin: 15,
    height: 40,
    backgroundColor: '#000000',
    color: 'white',

  },
  submitButtonAddImage: {
    backgroundColor: '#7ac142',
    alignSelf: 'center',
    padding: 10,
    margin: 15,
    height: 40,
    width:150,
    borderColor: '#ffffff30',
    borderWidth: 1,
    alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#7ac142',
    padding: 10,
    margin: 15,
    height: 40,
    borderColor: '#ffffff30',
    borderWidth: 1,
    alignItems: 'center',
  },

  checkImageButton: {
    height: 23,
    backgroundColor: '#f1c65c',
    alignSelf: 'center',
  },


  submitButtonText: {
    color: 'white',

  },

  textForgotPass: {
    color: 'white',
    fontSize: 10,

    alignSelf: 'center',
  },
  textOr: {
    color: 'white',
    fontSize: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  textLoginFB: {
    marginTop: 20,
    color: 'white',
    fontSize: 13,
    marginLeft: 30,
    fontWeight: 'bold',

  },
  textSignUp: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
    alignSelf: 'center',
    fontStyle: 'normal',
    flexDirection: 'column',


  },
  image: {
    marginTop: -80,
    alignItems: 'center',
  },
});
