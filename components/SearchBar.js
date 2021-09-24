import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign'


const SearchBar = () => {
	return (
		<View style ={{marginTop:15,flexDirection:'row' }}>
			<GooglePlacesAutocomplete placeholder="search"
			  // minLength={2}
				// autoFocus={false}
				// returnKeyType={'default'}
				// fetchDetails={true}
				styles={{
				textInputContainer:{
         marginRight:10,
				 backgroundColor: '#eee',
				 flexDirection:'row',
				 borderRadius:20,
				 alignItems:'center',
				 marginRight:10
				 },
				textInput:{
					backgroundColor: '#eee',
					color: '#5d5d5d',
					fontSize: 16,
					borderRadius:20,
					marginTop:7,
				},
					predefinedPlacesDescription: {
						color: '#1faadb',
					},

				}}
				renderLeftButton={()=>	<View style={{marginLeft:10}}>
						<Ionicons name='location-sharp' size={24} />
					</View>
					}
				renderRightButton={()=>
					<View style={{
						flexDirection:'row',
						marginRight:10,
						backgroundColor:'white',
						borderRadius:30,
            alignItems:'center',
						padding:9,
						}}>
						<AntDesign name='clockcircle' size={11} style={{marginRight:6}} />
						<Text>Search</Text>
					</View>
					}
			/>

		</View>
	)
}

export default SearchBar
