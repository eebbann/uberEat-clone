import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native'
import { FlatList } from 'react-native';


const items =[
{
	image: require('../assets/images/shoppingBag.png') ,
	text: 'Pick-up',
},
{
	image:require('../assets/images/drinks.png') ,
	text: 'Drinks',
},
{
	image:require('../assets/images/pastries.png') ,
	text: 'Pastries',
},
{
	image:require('../assets/images/fastfood.png') ,
	text: 'Fast Food',
},
{
	image:require('../assets/images/deserts.png') ,
	text: 'Deserts',
},
];


const Categories = () => {
	return (
		<View  style={{
			paddingVertical:10,
			paddingLeft:20,
			marginTop:5 , backgroundColor:'#fff'}} >
			<FlatList
			keyExtractor={(item, index) => index.toString()}
			 data={items}
			 horizontal
			 showsHorizontalScrollIndicator={false}
			 renderItem={({item})=>
		<View style={{marginRight:30, alignItems:'center'}}>
			<Image
			  source={item.image}
			  style={{
			  	width:60,
			  	height:50,
          resizeMode:"contain",
			}}
	  	/>
			<Text style={{ fontSize:13, fontWeight:'900'}}>
				  {item.text}
			</Text>
		</View>
		}/>
		</View>
	)
}

export default Categories
