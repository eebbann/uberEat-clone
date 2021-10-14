import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { FlatList } from 'react-native-web';



export const localRestaurants =[
	{
name:'Maldive Restaurant',
image_url:'https://lp-cms-production.imgix.net/image_browser/Ithaa-Maldives.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
categories:['bar', 'fast-food'],
price:'$$',
review:'1233',
rating:'4.5'

},
{
	name:'lobba Restaurant',
	image_url:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
	categories:['bar', 'fast-food'],
	price:'$$',
	review:'1233',
	rating:'6.5'
	
	},
	{
		name:'iona Restaurant',
		image_url:'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
		categories:['bar', 'fast-food'],
		price:'$$',
		review:'1233',
		rating:'2.5'
		
		},
]

const RestauranItem = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.9}
		style={{marginTop:5}}>
		 
			{props.restaurantData.map((restaurant, index)=>(
			<View key={index} style={{ marginTop:10, padding:10, backgroundColor:'#ffff'}}>
			<RestaurantImage image_url={restaurant.image_url}/>
			<RestaurantItem name={restaurant.name} rating={restaurant.rating}/>

			</View>))
		}
		 
			</TouchableOpacity>
	)
}


//component restaurant

const RestaurantImage = (props)=> (
		<>
		 <Image style={{width:'100%', height:200, resizeMode:'cover'}}
		  source={{uri:props.image_url}}	
		  />
		 <TouchableOpacity style={{position:'absolute', right:20, top:30}}>
	 	   <AntDesign name='hearto' size={25} color='#fff' />
		 </TouchableOpacity>
		 </>
)


const RestaurantItem = (props)=>{
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				paddingVertical: 5,
			}}>
			<View>
				<Text style={{ fontWeight: "900", fontSize: 15 }}>
				{ props.name}
				</Text>
				<Text style={{ fontSize: 13, color: "gray" }}>35-45 • min</Text>
			</View>
			<View
				style={{
					alignItems: "center",
					backgroundColor: "#eee",
					height: 30,
					width: 30,
					borderRadius: 15,
					marginTop: 5,
				}}>
				<Text style={{ padding: 5 }}>{ props.rating}</Text>
			</View>
		</View>
	);
}

export default RestauranItem
