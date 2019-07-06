import React from 'react';
import { createStackNavigator, createAppContainer , createBottomTabNavigator ,createDrawerNavigator } from "react-navigation";
import Login from '../component/Login';
import Registration from '../component/Registration';
import ReadingNow from '../screens/TabNavigator/ReadingNow';
import Library from '../screens/TabNavigator/Library';
import Store from '../screens/TabNavigator/Store';
import Search from '../screens/TabNavigator/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/DrawarNavigator/Home';
import BookDetails from '../screens/TabNavigator/ReadingNowStack/BookDetails';
import BookDetail from '../screens/TabNavigator/ReadingNowStack/BookDetail'

// const tabBarIcon = ({navigation})=>{
//   const { routeName } = navigation.state;
//   console.log('routename'.routeName)
//   let IconComponent = Ionicons;
//   let iconName;
//   if (routeName === 'ReadingNow') {
//     iconName = `md-book`
//     // iconName = `md-book${focused ? '' : '-outline'}`;
//     // Sometimes we want to add badges to some icons. 
//     // You can check the implementation below.
//     // IconComponent = HomeIconWithBadge; 
//   } else if (routeName === 'Library') {
//     iconName = `ios-options`;
//   } else if( routeName == 'Search'){
//     iconName = `md-search`
//   }else if( routeName == 'Store'){
//     iconName = `md-appstore`
//   }
//   // You can return any component that you like here!
//   return <IconComponent name={iconName} size={25} color={tintColor} />;
// }

const ReadingStackNav = createStackNavigator({
  ReadingNow:{ screen:ReadingNow ,navigationOptions:{header:null}},
  BookDetails: { screen: BookDetails },
  BookDetail:{ screen:BookDetail },
  
},{
  initialRouteKey:"ReadingNow"
})


const TabNavigator = createBottomTabNavigator({
  ReadingNow:
  { 
    screen: ReadingStackNav,
    navigationOptions:{ header:null}
  },
  Library:{ 
    screen: Library 
  },
  Store:{
     screen: Store 
  },
  Search:{ 
    screen: Search 
  }
}, {
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName 
      }
  },  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      console.log('routename'.routeName)
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'ReadingNow') {
        iconName = `md-book`
        // iconName = `md-book${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        // IconComponent = HomeIconWithBadge; 
      } else if (routeName === 'Library') {
        iconName = `ios-options`;
      } else if( routeName == 'Search'){
        iconName = `md-search`
      }else if( routeName == 'Store'){
        iconName = `md-appstore`
      }
      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  },
});
//note: set this code inside bototomNavigator to dynamically changet header title
// navigationOptions: ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];
//   return {
//     headerTitle: routeName
     
//     }
// }



const DashboardStackNavigator = createStackNavigator({
  DahsboarStackNavigator:TabNavigator,
},{
  defaultNavigationOptions: ( {navigation} )=>{
    return {
      headerLeft:<Ionicons name="md-reorder" style={{paddingLeft:10}} size={30} onPress={()=>navigation.openDrawer()} />
    }
  }
});
const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: DashboardStackNavigator  ,navigationOptions:{
    drawerLabel: 'Dashboard',
    drawerIcon:({tintColor})=><Ionicons name="md-body"  />
  }},
});

const AppNavigator = createStackNavigator({
    Login: { screen: Login ,   navigationOptions: {
      header: null //this will hide the header
    },},
    Dashboard:{ screen : AppDrawerNavigator ,navigationOptions:{
      header:null
    }}
  },{
    initialRouteName: 'Login'
  });
  
  export default AppNavigator;