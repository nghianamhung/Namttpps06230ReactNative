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
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  ScrollView,
  Alert,
  ToastAndroid
} from 'react-native';

import flatListData from '../FlatlistData/flatListData';
import { firebaseApp } from '../Config/firebase';
export default class Home extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../image/Razerlogo1.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  }
  constructor(props) {
    super(props)
    FirebaseDB = firebaseApp.database();
    bill = FirebaseDB.ref('Bill')
    const { navigate } = this.props.navigation;
    item = [];
    this.state = {
      email: '',
      password: '',

    }
  }
  componentWillMount() {
    FirebaseDB.ref('Product').on('value', (spap) => {
      item = [];
      spap.forEach((data) => {
        item.push({
          key: data.key,
          data: data.val(),
        });
        this.setState({
          item: item,
          loading: false,
        });
        // ToastAndroid.show('Loading...', ToastAndroid.SHORT);
      });
    });
  }
  Add = () => {
    alert('Adding...');
    this.props.navigation.navigate('FormAdd')
  }
  Update = () => {
    alert('Adding...');
    this.props.navigation.navigate('FormUpdate')
  }
  Delele = () => {
    alert('Key');
  }


  Show = () => {
    alert('ok')
    // console.log(this.item)
  }
  render() {

    return (
      <View style={{ backgroundColor: '#222222', flex: 1, }} >
        <View style={styles.header}>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Tìm kiếm ... "
            placeholderTextColor="#ffffff"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })} />
          <Image
            source={require('../image/icon-search.png')}
            style={{ position: "absolute", left: 310, top: 22, }}
          />
        </View >

        <ScrollView >
          <Text>
            <Image
              source={require('../image/Razer_logo_banner.png')}
            />
          </Text>
          <TouchableOpacity style={styles.AddinputButton}
            onPress={this.Add}>
            <Text style={styles.AddsubmitButtonText}> Thêm Sản phẩm </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, margin: 10,color:'white', alignItems:'center' }}>
            Sản Phẩm


          </Text>

          <View style={{ flex: 1, marginBottom: 100 }}>
            <FlatList
              data={item}
              renderItem={({ item, index }) => {

                console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                return (
                  <FlatListItem item={item} index={index} navigation={this.props.navigation}>
                  </FlatListItem>);
              }}
            >

            </FlatList>
          </View>

        </ScrollView>

      </View>

    );
  }
}

class FlatListItem extends Component {
  render() {

    return (
      <View style={{

        flexDirection: 'column',

      }}>
        <View style={{

          flexDirection: 'row',
          // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
          backgroundColor: '#222222'
        }}>
          <Image
            source={{ uri: this.props.item.data.ImageURL }}
            style={{ width: 100, height: 100, margin: 5, }}
          >
          </Image>
          <View style={{


            height: 100
          }}>
            <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>{this.props.item.data.Name}</Text>
            <Text style={styles.flatListItem}>{this.props.item.data.Description}</Text>
            <Text style={{ color: 'red', fontSize: 16, marginTop: 10, }}>{this.props.item.data.Price}</Text>

            <TouchableOpacity style={styles.inputButton}
              onPress={() => {
                bill.push({
                  Name: this.props.item.data.Name,
                  Price: this.props.item.data.Price,
                  Description: this.props.item.data.Description,
                  ImageURL: this.props.item.data.ImageURL,
                }, () => alert('Thêm ' + this.props.item.data.Name ))
              }}>
              <Text style={styles.submitButtonText}> Thêm  </Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.inputButtonDelete}
              onPress={() => {
                this.props.navigation.navigate('FormUpdate',
                  {
                    key: this.props.item.key,
                    name: this.props.item.data.Name,
                    des: this.props.item.data.Description,
                    image: this.props.item.data.ImageURL,
                    price: this.props.item.data.Price
                  })
              }}>
              <Text style={styles.submitButtonText}> Sửa  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inputButtonUpdate}
              onPress={() => {
                alert('Xóa sản phẩm ' );
                FirebaseDB.ref('Product').child(this.props.item.key).remove();
              }}>
              <Text style={styles.submitButtonText}>Xóa</Text>
            </TouchableOpacity>


          </View>
        </View>
        <View style={{
          height: 1,
          backgroundColor: '#222222'
        }}>
          <View style={{ borderWidth: 0.3, }} />
        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#222222',
  },
  container: {
    marginTop: 100,

  },
  text: {
    fontSize: 20,

  },
  input: {
    margin: 15,
    height: 40,
    backgroundColor: '#000000',
    color: 'white',

  },
  AddinputButton: {
    backgroundColor: '#7ac142',
    padding: 10,
    margin: 20,
    height: 50,
    borderColor: '#ffffff30',
    borderWidth: 1,
    alignItems: 'center',


  },
  inputButton: {
    marginTop: 10,
    height: 23,
    width: 90,
    backgroundColor: '#000000',


  },
  inputButtonShare: {
    position: 'relative',
    bottom: -1,
    left: 95,
    bottom: 23,
    height: 23,
    width: 60,
    backgroundColor: '#000000',

  },

  inputButtonDelete: {
    position: 'relative',
    top: -46,
    left: 160,
    bottom: 23,
    height: 23,
    width: 40,
    backgroundColor: '#000000',

  },

  inputButtonUpdate: {
    position: 'relative',
    top: -69,
    left: 205,
    bottom: 23,
    height: 23,
    width: 30,
    backgroundColor: '#000000',

  },
  AddsubmitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: -1,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: -1,
  },
  icon: {
    width: 15,
    height: 15,
  },
});
